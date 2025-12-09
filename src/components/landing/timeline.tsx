'use client';

import { timelineData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import AnimatedWrapper from '../ui/animated-wrapper';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

          <div className="space-y-12">
            {timelineData.map((event, index) => {
              const isRight = index % 2 !== 0;
              const image = PlaceHolderImages.find(
                img => img.id === event.imageId
              );

              return (
                <div
                  key={event.id}
                  className={cn('relative md:grid md:grid-cols-2 md:gap-x-8 items-center')}
                >
                  {/* Dot on the timeline */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 z-10 h-4 w-4 rounded-full bg-primary -translate-x-1/2" />
                  
                  {/* Card */}
                  <AnimatedWrapper
                    className={cn(
                      'pl-14 md:pl-0',
                      isRight ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'
                    )}
                  >
                    <Link href={`/timeline/${event.slug}`}>
                      <Card
                        className={`group shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-2 border-transparent hover:border-primary/30 ${event.colorClass}`}
                      >
                        <CardHeader>
                          <div
                            className={cn(
                              'flex items-center gap-4',
                              isRight ? '' : 'md:text-right md:flex-row-reverse'
                            )}
                          >
                            <Badge variant="outline" className="text-lg">
                              {event.year}
                            </Badge>
                            <CardTitle
                              className={`font-headline text-2xl`}
                            >
                              {event.title}
                            </CardTitle>
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
                          <p className={cn("text-muted-foreground text-base", isRight ? 'text-left' : 'md:text-right')}>
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedWrapper>
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
