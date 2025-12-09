import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#8B4513] to-background" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] opacity-30" />

      <div className="container text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl font-headline">
            Jejak Waktu Nusantara
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/80 max-w-2xl mx-auto">
            Sebuah platform web interaktif untuk eksplorasi sejarah dan budaya Indonesia yang immersive.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/#timeline">Mulai Penjelajahan</Link>
            </Button>
            <Button asChild variant="link" size="lg">
              <Link href="/gallery">Lihat Galeri <span aria-hidden="true">→</span></Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="animate-scroll-indicator text-foreground/60">
          <ArrowDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
