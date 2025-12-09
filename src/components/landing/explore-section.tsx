import { regionsData } from '@/lib/data';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SoundscapeSuggester from '@/components/explore/soundscape-suggester';
import AnimatedWrapper from '@/components/ui/animated-wrapper';

export default function ExploreSection() {
  const mapImage = PlaceHolderImages.find(img => img.id === 'map-background');

  return (
    <section id="peta" className="bg-background py-20 sm:py-32">
      <div className="text-center container">
        <AnimatedWrapper>
          <h2 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-6xl">
            Peta Interaktif Nusantara
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Pilih sebuah wilayah untuk memulai penjelajahan budaya, atau dapatkan sugesti musik tradisional menggunakan fitur di bawah ini.
          </p>
        </AnimatedWrapper>
      </div>

      {mapImage && (
        <section className="container mx-auto mt-12 mb-20">
          <AnimatedWrapper delay={200}>
            <div className="relative aspect-[4/3] md:aspect-[2/1] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                fill
                className="object-cover"
                data-ai-hint={mapImage.imageHint}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </AnimatedWrapper>
        </section>
      )}

      <div className="container">
        <h3 className="text-3xl font-bold text-center mb-12 font-headline">Jelajahi Berdasarkan Wilayah</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regionsData.map((region, index) => {
            const regionImage = PlaceHolderImages.find(img => img.id === region.imageId);
            return (
              <AnimatedWrapper key={region.id} delay={index * 100}>
                <Card className="h-full overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
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
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{region.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{region.description}</CardDescription>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>

      <SoundscapeSuggester />
    </section>
  );
}
