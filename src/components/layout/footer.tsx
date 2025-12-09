import { Github, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold font-headline">Nusantara Chronicles</h3>
          <p className="text-sm text-muted-foreground">Exploring the heart of Indonesian heritage.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="https://github.com/firebase/firebase-studio" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
          </Link>
        </div>
      </div>
      <Separator />
      <div className="container py-4 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Nusantara Chronicles. A Firebase Studio Project.</p>
      </div>
    </footer>
  );
};

export default Footer;
