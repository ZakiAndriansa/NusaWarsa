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
          {/* Central line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />
          
          {timelineData.map((event, index) => {
            const isRight = index % 2 !== 0;
            const image = PlaceHolderImages.find(img => img.id === event.imageId);
            
            return (
              <div key={event.year} className="relative mb-12 flex items-center">
                <div className={`w-1/2 ${isRight ? 'pr-8 text-right' : 'pl-8'}`}>
                  {/* Empty div for spacing on one side */}
                </div>

                {/* Dot on the timeline */}
                <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />

                <div className={`w-1/2 ${isRight ? 'pl-8' : 'pr-8'}`}>
                   <AnimatedWrapper>
                    <Card className={`shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-2 border-transparent hover:border-primary/30 ${event.colorClass}`}>
                      <CardHeader>
                        <div className={`flex items-center gap-4 ${isRight ? 'justify-start' : 'justify-end flex-row-reverse'}`}>
                           <Badge variant="outline" className="text-lg">{event.year}</Badge>
                           <CardTitle className={`font-headline text-2xl ${isRight ? 'text-left' : 'text-right'}`}>{event.title}</CardTitle>
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
                        <p className="text-muted-foreground text-base text-left">{event.description}</p>
                      </CardContent>
                    </Card>
                   </AnimatedWrapper>
                </div>
                
                {/* Adjust positioning for alternating sides */}
                {isRight ? (
                    <style jsx>{`
                        .relative:nth-child(${index+1}) > div:first-child { order: 2; }
                        .relative:nth-child(${index+1}) > div:last-child { order: 1; text-align: right; }
                    `}</style>
                ) : (
                     <style jsx>{`
                        .relative:nth-child(${index+1}) > div:last-child { text-align: left; }
                    `}</style>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
