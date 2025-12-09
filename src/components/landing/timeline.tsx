'use client';

import { timelineData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedWrapper from '../ui/animated-wrapper';
import { Badge } from '../ui/badge';
import Link from 'next/link';

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
          {/* Central line */}
          <div className="absolute left-6 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2" />
          
          <div className="space-y-12">
            {timelineData.map((event, index) => {
              const isRight = index % 2 !== 0;
              const image = PlaceHolderImages.find(img => img.id === event.imageId);
              
              return (
                <div key={event.id} className="relative md:flex md:items-center">
                  {/* Dot on the timeline */}
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2" />

                  <div className={`w-full md:w-1/2 ${isRight ? 'md:ml-auto md:pl-8' : 'md:pr-8 md:text-right'}`}>
                     <AnimatedWrapper className="pl-12 md:pl-0">
                      <Link href={`/timeline/${event.slug}`}>
                        <Card className={`group shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-2 border-transparent hover:border-primary/30 ${event.colorClass}`}>
                          <CardHeader>
                            <div className={`flex items-center gap-4 ${isRight ? 'md:flex-row-reverse md:justify-end' : 'md:justify-end'}`}>
                               <Badge variant="outline" className="text-lg">{event.year}</Badge>
                               <CardTitle className={`font-headline text-2xl text-left`}>{event.title}</CardTitle>
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
                                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                  data-ai-hint={image.imageHint}
                                />
                              </div>
                            )}
                            <p className="text-muted-foreground text-base text-left">{event.description}</p>
                          </CardContent>
                        </Card>
                      </Link>
                     </AnimatedWrapper>
                  </div>
                   <div className="hidden md:block w-1/2"></div>
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
