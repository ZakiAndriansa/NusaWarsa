import { Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-6 sm:py-8 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-base sm:text-lg font-bold font-headline">
              Nusantara Chronicles
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Exploring the heart of Indonesian heritage.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link 
              href="#" 
              aria-label="Twitter"
              className="hover:scale-110 transition-transform"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link 
              href="https://github.com/firebase/firebase-studio" 
              aria-label="GitHub"
              className="hover:scale-110 transition-transform"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link 
              href="#" 
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Copyright */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-4 sm:py-6 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nusantara Chronicles. A Firebase Studio Project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;