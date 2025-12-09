'use client';

import { regionsData } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SoundscapeSuggester from '@/components/explore/soundscape-suggester';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import dynamic from 'next/dynamic';
import Link from 'next/link';

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-8 sm:mt-10 md:mt-12 mb-12 sm:mb-16 md:mb-20">
        <AnimatedWrapper delay={200}>
          <IndonesiaMap 
            regions={regionsData}
          />
        </AnimatedWrapper>
      </div>

      {/* Regions Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AnimatedWrapper>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 font-headline">
            Jelajahi Berdasarkan Wilayah
          </h3>
        </AnimatedWrapper>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {regionsData.map((region, index) => {
            const regionImage = PlaceHolderImages.find(img => img.id === region.imageId);
            
            return (
              <AnimatedWrapper key={region.id} delay={index * 100}>
                <Link href={`/explore/${region.id}`} className="block h-full">
                  <Card 
                    className="h-full overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
                  >
                    {regionImage && (
                      <div className="overflow-hidden aspect-video">
                        <Image
                          src={regionImage.imageUrl}
                          alt={region.name}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={regionImage.imageHint}
                        />
                      </div>
                    )}
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="font-headline text-xl sm:text-2xl">
                        {region.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <CardDescription className="text-sm sm:text-base">
                        {region.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>

      {/* Soundscape Suggester */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12 sm:mt-16 md:mt-20">
        <SoundscapeSuggester />
      </div>
    </section>
  );
}
