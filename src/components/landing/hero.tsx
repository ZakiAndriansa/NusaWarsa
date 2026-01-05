'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

const backgroundImages = [
  '/pictures/landing-page/background-1.webp',
  '/pictures/landing-page/background-2.webp',
  '/pictures/landing-page/background-3.webp',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate background every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentImageIndex) return;
    setIsTransitioning(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <section id="home" className="relative flex min-h-screen h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Images - Server-side rendered with CSS */}
      {backgroundImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 -z-10 transition-opacity duration-700 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Gradient overlay - smooth blend to next section */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Indicator Dots */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'w-8 bg-primary'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to background ${index + 1}`}
          />
        ))}
      </div>

      <div className="container text-center relative z-10 px-4 sm:px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl font-headline px-2">
            Nusantara dari Masa ke Masa
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 drop-shadow-lg max-w-2xl mx-auto px-4">
            Sebuah platform web interaktif untuk eksplorasi sejarah dan budaya Indonesia yang mendalam.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6 px-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl w-full sm:w-auto">
              <Link href="/#timeline" scroll={true}>Mulai Penjelajahan</Link>
            </Button>
            <Button asChild variant="link" size="lg" className="text-white hover:text-white/80 drop-shadow-lg w-full sm:w-auto">
              <Link href="/#galeri" scroll={true}>Lihat Galeri <span aria-hidden="true">→</span></Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-scroll-indicator text-white/80">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 drop-shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
