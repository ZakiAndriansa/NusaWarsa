'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { HeroCarouselControls } from './hero-carousel-controls';

const backgroundImages = [
  {
    src: '/pictures/landing-page/background-1.webp',
    alt: 'Indonesian cultural heritage scene 1',
  },
  {
    src: '/pictures/landing-page/background-2.webp',
    alt: 'Indonesian cultural heritage scene 2',
  },
  {
    src: '/pictures/landing-page/background-3.webp',
    alt: 'Indonesian cultural heritage scene 3',
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <section id="home" className="relative flex min-h-screen h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Images - Optimized with Next.js Image */}
      {backgroundImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 -z-10 transition-opacity duration-700 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
      ))}

      {/* Gradient overlay - smooth blend to next section */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Indicator Dots */}
      <HeroCarouselControls
        totalImages={backgroundImages.length}
        onImageChange={setCurrentImageIndex}
      />

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
