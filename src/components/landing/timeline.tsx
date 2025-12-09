'use client';

import { timelineData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedWrapper from '../ui/animated-wrapper';
import { Badge } from '../ui/badge';

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-5xl">
            Linimasa Sejarah
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Perjalanan sejarah Indonesia dari era kerajaan hingga modern.
          </p>
        </div>
        <div className="relative">
          {/* Central line for desktop */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border hidden md:block" />
          {/* Central line for mobile */}
          <div className="absolute left-6 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:hidden" />
          
          <div className="space-y-12">
            {timelineData.map((event, index) => {
              const isRight = index % 2 !== 0;
              const image = PlaceHolderImages.find(img => img.id === event.imageId);
              
              return (
                <div key={event.year} className="relative">
                  {/* Dot on the timeline */}
                  <div className="absolute left-6 top-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary md:left-1/2" />

                  <div className={`pl-12 md:pl-0 md:w-1/2 ${isRight ? 'md:ml-auto md:pl-8' : 'md:pr-8'}`}>
                     <AnimatedWrapper>
                      <Card className={`shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-2 border-transparent hover:border-primary/30 ${event.colorClass}`}>
                        <CardHeader>
                          <div className={`flex items-center gap-4 ${isRight ? 'md:flex-row-reverse' : ''}`}>
                             <Badge variant="outline" className="text-lg">{event.year}</Badge>
                             <CardTitle className={`font-headline text-2xl`}>{event.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-4">
                          {image && (
                            <div className="overflow-hidden rounded-md">
                              <Image
                                src={image.imageUrl}
                                alt={event.title}
                                width={600}
                                height={400}
                                className="w-full object-cover transition-transform duration-300 hover:scale-105"
                                data-ai-hint={image.imageHint}
                              />
                            </div>
                          )}
                          <p className="text-muted-foreground text-base">{event.description}</p>
                        </CardContent>
                      </Card>
                     </AnimatedWrapper>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
