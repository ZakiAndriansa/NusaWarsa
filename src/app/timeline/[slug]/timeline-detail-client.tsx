'use client';

import { Separator } from '@/components/ui/separator';
import { Sparkles, Ship } from 'lucide-react';
import ChatSejarawan from '@/components/timeline/chat-sejarawan';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import Image from 'next/image';
import { useState } from 'react';
import { HeroImageSkeleton } from '@/components/ui/image-skeleton';
import type { TimelineEvent } from '@/lib/types';

interface TimelineDetailClientProps {
  event: TimelineEvent;
  timelineImageUrl?: string;
}

export default function TimelineDetailClient({ event, timelineImageUrl }: TimelineDetailClientProps) {
  const [heroLoading, setHeroLoading] = useState(true);
  const getEraTitle = (era: string) => {
    switch(era) {
      case 'kerajaan': return 'Babak 1: Era Kejayaan Kerajaan';
      case 'kolonial': return 'Babak 2: Era Perdagangan & Akulturasi';
      case 'kemerdekaan': return 'Babak 3: Era Kolonial & Perjuangan';
      case 'modern': return 'Babak 4: Era Modern & Digital';
      default: return 'Era Tidak Dikenal';
    }
  }

  return (
    <div className="bg-background">
      {timelineImageUrl && (
        <AnimatedWrapper forceAnimate={true}>
          <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
            {heroLoading && (
              <HeroImageSkeleton className="h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full" />
            )}
            <Image
              src={timelineImageUrl}
              alt={event.title}
              fill
              priority
              className={`object-cover transition-opacity duration-300 ${heroLoading ? 'opacity-0' : 'opacity-100'}`}
              sizes="100vw"
              quality={85}
              onLoad={() => setHeroLoading(false)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
          </div>
        </AnimatedWrapper>
      )}

      <div className={`w-full px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 ${timelineImageUrl ? '-mt-16 sm:-mt-20 lg:-mt-24' : 'pt-20 sm:pt-24 md:pt-28 lg:pt-32'}`}>
        <AnimatedWrapper delay={200} forceAnimate={true}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-headline mt-2 text-foreground leading-tight">
                {event.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-2 sm:mt-3 md:mt-4">{getEraTitle(event.era)} &middot; {event.year}</p>
            </div>

            <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl bg-card shadow-lg border">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90 mb-4 sm:mb-6 md:mb-8 italic">
                    "{event.description}"
                </p>

                <Separator className="my-4 sm:my-6" />

                <p className="text-xs sm:text-sm md:text-base leading-relaxed text-foreground/80 mb-4 sm:mb-6 md:mb-8 whitespace-pre-line">
                    {event.fullDescription}
                </p>

                <Separator className="my-4 sm:my-6 md:my-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold font-headline flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                          <Sparkles className="text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                          Peninggalan Utama
                        </h3>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                            {event.keyFigures?.map(figure => <li key={figure}>{figure}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold font-headline flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                          <Ship className="text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                          Highlight Budaya
                        </h3>
                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                            {event.relatedEvents?.map(related => <li key={related}>{related}</li>)}
                        </ul>
                    </div>
                </div>
            </div>

            <ChatSejarawan event={event} />

          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
