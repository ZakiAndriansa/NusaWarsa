'use client';

import { Menu, Mountain, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { searchItems, groupSearchResults, type SearchResult } from '@/lib/search-utils';
import { regionsData, traditionsData } from '@/lib/data';

const navItems = [
  { href: '/#home', label: 'Beranda', id: 'home' },
  { href: '/#tentang', label: 'Tentang', id: 'tentang' },
  { href: '/#timeline', label: 'Linimasa', id: 'timeline' },
  { href: '/#peta', label: 'Peta', id: 'peta' },
  { href: '/#layanan', label: 'Layanan', id: 'layanan' },
  { href: '/#galeri', label: 'Galeri', id: 'galeri' },
  { href: '/#faq', label: 'FAQ', id: 'faq' },
];

const typeLabels: Record<string, string> = {
  page: 'Halaman',
  section: 'Section',
  tradition: 'Tradisi',
  timeline: 'Timeline Sejarah',
  region: 'Provinsi',
  scenario: 'Panduan Budaya'
};

// Default search suggestions
const defaultSuggestions = [
  { title: 'Pembangunan Candi Borobudur', type: 'timeline', href: '/timeline/pembangunan-candi-borobudur' },
  { title: 'Jawa Barat', type: 'region', href: '/explore/jawa-barat' },
  { title: 'Temukan Tradisi', type: 'page', href: '/quiz' },
  { title: 'Tari Kecak', type: 'tradition', href: '/gallery/tari-kecak' },
  { title: 'FAQ', type: 'section', href: '/#faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [scrollSpyEnabled, setScrollSpyEnabled] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  // Listen untuk scroll spy enable/disable events dan set active section
  useEffect(() => {
    const handleDisable = () => setScrollSpyEnabled(false);
    const handleEnable = () => setScrollSpyEnabled(true);
    const handleSetActive = (event: Event) => {
      const customEvent = event as CustomEvent<{ sectionId: string }>;
      if (customEvent.detail?.sectionId) {
        setActiveSection(customEvent.detail.sectionId);
      }
    };

    window.addEventListener('scroll-spy-disable', handleDisable);
    window.addEventListener('scroll-spy-enable', handleEnable);
    window.addEventListener('scroll-spy-set-active', handleSetActive);

    return () => {
      window.removeEventListener('scroll-spy-disable', handleDisable);
      window.removeEventListener('scroll-spy-enable', handleEnable);
      window.removeEventListener('scroll-spy-set-active', handleSetActive);
    };
  }, []);

  // Scroll spy effect
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      // Skip scroll spy jika sedang smooth scrolling
      if (!scrollSpyEnabled) return;

      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname, scrollSpyEnabled]);

  // Handle scroll and backdrop
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 10);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Keyboard shortcut for search (Cmd+K or Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  // Debounced search effect
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      const results = searchItems(searchQuery, 30);
      setSearchResults(results);
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Reset search when dialog closes
  useEffect(() => {
    if (!searchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [searchOpen]);

  const handleMobileMenuClose = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleSearchSelect = useCallback((href: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
    router.push(href);
  }, [router]);

  const groupedResults = useMemo(() => {
    const grouped = groupSearchResults(searchResults);
    return grouped;
  }, [searchResults]);

  // Helper function to determine active section based on pathname
  const getActiveSectionFromPath = () => {
    if (pathname === '/') return activeSection;
    if (pathname.startsWith('/timeline')) return 'timeline';
    if (pathname.startsWith('/quiz')) return 'layanan';
    if (pathname.startsWith('/scenarios')) return 'layanan';

    // For /explore paths, we need to differentiate between regions and traditions
    if (pathname.startsWith('/explore')) {
      // Extract the slug from pathname
      const slug = pathname.split('/')[2];
      if (slug) {
        // Check if it's a region (regions have dashes like 'jawa-barat')
        // Traditions typically have longer IDs
        const isRegion = regionsData.some(r => r.id === slug);
        const isTradition = traditionsData.some(t => t.id === slug);

        if (isRegion) return 'peta';
        if (isTradition) return 'galeri';
      }
      // Default to peta if can't determine
      return 'peta';
    }

    return '';
  };

  const currentActiveSection = getActiveSectionFromPath();

  const NavLinks = useMemo(() => {
    return ({ className }: { className?: string }) => (
      <>
        {navItems.map((item) => {
          const isActive = currentActiveSection === item.id;

          return (
            <Link
              key={item.label}
              href={item.href}
              scroll={true}
              className={cn(
                'text-foreground/60 transition-colors hover:text-foreground/80',
                isActive && 'text-foreground font-medium',
                className
              )}
              onClick={handleMobileMenuClose}
            >
              {item.label}
            </Link>
          );
        })}
      </>
    );
  }, [handleMobileMenuClose, currentActiveSection]);

  return (
    <>
      {/* NAVBAR COKLAT - VERSI BARU */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'border-b border-amber-900/20 bg-amber-950/95 backdrop-blur-lg shadow-lg'
            : 'bg-gradient-to-b from-amber-900/90 to-amber-950/80 backdrop-blur-sm'
        )}
      >
        <div className="container mx-auto flex h-16 sm:h-18 max-w-7xl items-center px-3 sm:px-4 lg:px-8">
          {/* Logo - Left */}
          <div className="flex-1">
            <Link href="/#home" scroll={true} className="flex items-center flex-shrink-0 w-fit">
              {/* Mobile: favIcon.webp - smaller size */}
              <Image
                src="/pictures/logo/favIcon.webp"
                alt="Nusa Warsa Logo"
                width={117}
                height={59}
                className="block md:hidden h-8 w-auto object-contain"
              />
              {/* Desktop: LogoNusaWartaP.webp */}
              <Image
                src="/pictures/logo/LogoNusaWartaP.webp"
                alt="Nusa Warsa Logo"
                width={200}
                height={200}
                className="hidden md:block h-24 w-24 sm:h-28 sm:w-28 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 md:mr-4 lg:mr-0">
            {navItems.map((item) => {
              const isActive = currentActiveSection === item.id;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  scroll={true}
                  className={cn(
                    'text-amber-200/90 transition-all hover:text-amber-50 relative text-[10px] md:text-xs lg:text-sm whitespace-nowrap px-1',
                    isActive && 'text-amber-50 font-semibold'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Search & Menu Buttons - Right */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-4 flex-1 justify-end">
            {/* Search Button */}
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-1.5 lg:gap-2 text-amber-200 border-amber-700 bg-amber-950/50 hover:bg-amber-900/50 hover:text-amber-100 min-w-[160px] md:min-w-[200px] lg:min-w-[280px] text-xs lg:text-sm"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              <span className="flex-1 text-left truncate">Cari halaman...</span>
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-amber-700 bg-amber-950 px-1.5 font-mono text-[10px] font-medium opacity-100 lg:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden text-amber-200 hover:text-amber-100 hover:bg-amber-900/50"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-amber-200 hover:text-amber-100 hover:bg-amber-900/50"
                  aria-label="Open mobile menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-amber-950 border-amber-900 p-0">
                <div className="flex h-full flex-col">
                  {/* Header dengan logo dan close button yang sejajar */}
                  <div className="flex items-center justify-between border-b border-amber-900 px-6 py-4">
                    <Link
                      href="/#home"
                      scroll={true}
                      onClick={handleMobileMenuClose}
                      className="font-bold text-lg sm:text-xl font-headline text-white"
                    >
                      NusaWarsa
                    </Link>
                  </div>
                  <nav className="mt-6 px-6 pb-6 flex flex-col space-y-4">
                    {navItems.map((item) => {
                      const isActive = currentActiveSection === item.id;

                      return (
                        <Link
                          key={item.label}
                          href={item.href}
                          scroll={true}
                          className={cn(
                            'text-amber-200/90 transition-all hover:text-amber-50 relative text-base sm:text-lg py-2',
                            isActive && 'text-amber-50 font-semibold'
                          )}
                          onClick={handleMobileMenuClose}
                        >
                          {item.label}
                          {isActive && (
                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                          )}
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Command Dialog for Search */}
      <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
        <CommandInput
          placeholder="Ketik untuk mencari halaman, tradisi, timeline, provinsi..."
          onValueChange={setSearchQuery}
        />
        <CommandList defaultValue="first-item">
          {!searchQuery.trim() ? (
            <>
              <CommandGroup heading="Saran Pencarian">
                {defaultSuggestions.map((item, index) => (
                  <CommandItem
                    key={`default-${index}`}
                    value={index === 0 ? 'first-item' : undefined}
                    onSelect={() => handleSearchSelect(item.href)}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground">{typeLabels[item.type]}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          ) : searchResults.length === 0 ? (
            <CommandEmpty>
              <div className="py-6">
                <p className="font-medium mb-1">Tidak ada hasil ditemukan</p>
                <p className="text-xs text-muted-foreground">
                  Coba kata kunci lain atau periksa ejaan
                </p>
              </div>
            </CommandEmpty>
          ) : (
            <>
              {groupedResults.page.length > 0 && (
                <CommandGroup heading={typeLabels.page}>
                  {groupedResults.page.map((item, index) => (
                    <CommandItem
                      key={`page-${index}`}
                      value={index === 0 && Object.values(groupedResults).every(g => g.length === 0 || g === groupedResults.page) ? 'first-item' : undefined}
                      onSelect={() => handleSearchSelect(item.href)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {groupedResults.section.length > 0 && (
                <CommandGroup heading={typeLabels.section}>
                  {groupedResults.section.map((item, index) => (
                    <CommandItem
                      key={`section-${index}`}
                      onSelect={() => handleSearchSelect(item.href)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {groupedResults.scenario.length > 0 && (
                <CommandGroup heading={typeLabels.scenario}>
                  {groupedResults.scenario.map((item, index) => (
                    <CommandItem
                      key={`scenario-${index}`}
                      onSelect={() => handleSearchSelect(item.href)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {groupedResults.tradition.length > 0 && (
                <CommandGroup heading={typeLabels.tradition}>
                  {groupedResults.tradition.slice(0, 8).map((item, index) => (
                    <CommandItem
                      key={`tradition-${index}`}
                      onSelect={() => handleSearchSelect(item.href)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))}
                  {groupedResults.tradition.length > 8 && (
                    <div className="px-2 py-1.5 text-xs text-muted-foreground text-center">
                      +{groupedResults.tradition.length - 8} tradisi lainnya
                    </div>
                  )}
                </CommandGroup>
              )}

              {groupedResults.timeline.length > 0 && (
                <CommandGroup heading={typeLabels.timeline}>
                  {groupedResults.timeline.slice(0, 5).map((item, index) => (
                    <CommandItem
                      key={`timeline-${index}`}
                      onSelect={() => handleSearchSelect(item.href)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))}
                  {groupedResults.timeline.length > 5 && (
                    <div className="px-2 py-1.5 text-xs text-muted-foreground text-center">
                      +{groupedResults.timeline.length - 5} peristiwa lainnya
                    </div>
                  )}
                </CommandGroup>
              )}

              {groupedResults.region.length > 0 && (
                <CommandGroup heading={typeLabels.region}>
                  {groupedResults.region.slice(0, 5).map((item, index) => (
                    <CommandItem
                      key={`region-${index}`}
                      onSelect={() => handleSearchSelect(item.href)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      </div>
                    </CommandItem>
                  ))}
                  {groupedResults.region.length > 5 && (
                    <div className="px-2 py-1.5 text-xs text-muted-foreground text-center">
                      +{groupedResults.region.length - 5} provinsi lainnya
                    </div>
                  )}
                </CommandGroup>
              )}
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}