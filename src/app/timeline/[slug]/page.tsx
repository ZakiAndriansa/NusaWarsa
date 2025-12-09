import { timelineData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Users, Calendar, Landmark } from 'lucide-react';
import ChatSejarawan from '@/components/timeline/chat-sejarawan';
import AnimatedWrapper from '@/components/ui/animated-wrapper';

interface TimelineDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return timelineData.map(event => ({
    slug: event.slug,
  }));
}

export function generateMetadata({ params }: TimelineDetailPageProps) {
    const event = timelineData.find(e => e.slug === params.slug);
    if (!event) {
        return {
            title: 'Peristiwa Tidak Ditemukan',
        };
    }
    return {
        title: `${event.title} | Nusantara Chronicles`,
        description: event.description,
    };
}


export default function TimelineDetailPage({ params }: TimelineDetailPageProps) {
  const event = timelineData.find(e => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === event.imageId);

  return (
    <div className="bg-background">
      {image && (
        <AnimatedWrapper>
          <div className="relative h-[40vh] w-full">
            <Image
              src={image.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>
        </AnimatedWrapper>
      )}

      <div className="container -mt-24 relative z-10 pb-20">
        <AnimatedWrapper delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="text-sm capitalize">{event.era}</Badge>
              <h1 className="text-4xl sm:text-6xl font-bold font-headline mt-2 text-foreground">
                {event.title}
              </h1>
              <p className="text-2xl text-muted-foreground mt-2">{event.year}</p>
            </div>

            <div className="p-8 rounded-xl bg-card shadow-lg border">
                <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                    {event.fullDescription}
                </p>

                <Separator className="my-8" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-bold font-headline flex items-center gap-2 mb-4"><Users className="text-primary"/> Tokoh Penting</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {event.keyFigures.map(figure => <li key={figure}>{figure}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-xl font-bold font-headline flex items-center gap-2 mb-4"><Landmark className="text-primary"/> Peristiwa Terkait</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            {event.relatedEvents.map(related => <li key={related}>{related}</li>)}
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
