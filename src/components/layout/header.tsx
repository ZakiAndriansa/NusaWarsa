'use client';

import { Menu, Mountain, X } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/#timeline', label: 'Timeline' },
  { href: '/explore', label: 'Peta' },
  { href: '/gallery', label: 'Galeri' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <>
      {navItems.map((item) => {
        const isHomePage = pathname === '/';
        const targetHref = isHomePage ? item.href : item.href.startsWith('/#') ? `/${item.href}` : item.href;
        
        return (
          <Link
            key={item.label}
            href={targetHref}
            className={cn(
              'text-foreground/80 transition-colors hover:text-foreground',
              className
            )}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-border/40 bg-background/80 backdrop-blur-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="hidden font-bold sm:inline-block font-headline">
            Nusantara Chronicles
          </span>
        </Link>

        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <NavLinks />
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open mobile menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Link href="/" className="flex items-center space-x-2">
                    <Mountain className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline">Nusantara Chronicles</span>
                  </Link>
                </div>
                <nav className="mt-6 flex flex-col space-y-4">
                  <NavLinks className="text-lg" />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
