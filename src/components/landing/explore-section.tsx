'use client';

import { regionsData } from '@/lib/data';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import dynamic from 'next/dynamic';

// Lazy load map to avoid SSR issues with Leaflet
const IndonesiaMap = dynamic(
  () => import('@/components/explore/indonesia-map'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl sm:rounded-2xl bg-muted animate-pulse flex items-center justify-center">
        <p className="text-muted-foreground">Memuat peta...</p>
      </div>
    )
  }
);

export default function ExploreSection() {
  return (
    <section id="peta" className="bg-background py-12 sm:py-16 md:py-20 lg:py-32">
      {/* Hero Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <AnimatedWrapper>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight text-foreground">
              Peta Interaktif Nusantara
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-muted-foreground max-w-3xl mx-auto px-4">
              Klik pada peta untuk menjelajahi setiap wilayah dan uji pengetahuan Anda dengan kuis interaktif!
            </p>
          </AnimatedWrapper>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-8 sm:mt-10 md:mt-12">
        <AnimatedWrapper delay={200}>
          <IndonesiaMap 
            regions={regionsData}
          />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
