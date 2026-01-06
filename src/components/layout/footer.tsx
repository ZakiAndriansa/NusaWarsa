import { Github, Twitter, Instagram, Mountain } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const sections = [
    {
      title: 'Jelajahi',
      links: [
        { href: '/', label: 'Beranda' },
        { href: '/#timeline', label: 'Timeline Sejarah' },
        { href: '/#peta', label: 'Peta Indonesia' },
        { href: '/#galeri', label: 'Galeri Tradisi' },
      ]
    },
    {
      title: 'Layanan',
      links: [
        { href: '/quiz', label: 'Temukan Tradisi' },
        { href: '/scenarios', label: 'Panduan Budaya' },
      ]
    },
    {
      title: 'Informasi',
      links: [
        { href: '/#tentang', label: 'Tentang Kami' },
        { href: '/#faq', label: 'FAQ' },
        { href: '/#galeri', label: 'AI Assistant' },
      ]
    }
  ];

  return (
    <footer className="w-full bg-card border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-6 sm:py-12 lg:py-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8">
          {/* Brand Info - Full width on mobile */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-2 sm:mb-4">
              <Mountain className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <h3 className="text-base sm:text-lg font-bold font-headline">
                Nusa Warsa
              </h3>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-6 max-w-md">
              Platform digital interaktif untuk menjelajahi kekayaan budaya Indonesia.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:scale-110 transition-transform"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href="https://github.com/ZakiAndriansa"
                aria-label="GitHub"
                className="hover:scale-110 transition-transform"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link
                href="https://www.instagram.com/jakiikii/"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Navigation Links - 2 columns on mobile */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">{section.title}</h4>
              <ul className="space-y-1.5 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Copyright - More compact on mobile */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-3 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-[10px] xs:text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Nusa Warsa. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-6 text-[10px] xs:text-xs sm:text-sm text-muted-foreground">
            <Link href="/#faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <span>•</span>
            <Link href="/#tentang" className="hover:text-primary transition-colors">
              Tentang
            </Link>
            <span>•</span>
            <a href="mailto:contact@nusantarachronicles.id" className="hover:text-primary transition-colors">
              Kontak
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;