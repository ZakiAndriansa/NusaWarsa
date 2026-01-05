'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Landmark, ScrollText, Users, Utensils, Shirt, Drama, Sparkles, BookOpen, History, MapPin } from 'lucide-react';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import InteractiveZone from '@/components/explore/interactive-zone';
import ChatBudayawan from '@/components/explore/chat-budayawan';
import Image from 'next/image';
import type { Region, Tradition } from '@/lib/types';

interface ExploreDetailClientProps {
  type: 'tradition' | 'region';
  data: Tradition | Region;
  mainImageUrl?: string;
}

export default function ExploreDetailClient({ type, data, mainImageUrl }: ExploreDetailClientProps) {
  if (type === 'tradition') {
    return <TraditionDetailPage tradition={data as Tradition} mainImageUrl={mainImageUrl} />;
  }

  return <RegionDetailContent region={data as Region} mainImageUrl={mainImageUrl} />;
}

// Tradition Detail Component
function TraditionDetailPage({ tradition, mainImageUrl }: { tradition: Tradition; mainImageUrl?: string }) {
  return (
    <div className="bg-background">
      {mainImageUrl && (
        <AnimatedWrapper forceAnimate={true}>
          <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
            <Image
              src={mainImageUrl}
              alt={tradition.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
          </div>
        </AnimatedWrapper>
      )}

      <div className={`w-full px-4 sm:px-6 lg:px-8 relative z-10 pb-12 sm:pb-16 lg:pb-20 ${mainImageUrl ? '-mt-16 sm:-mt-20 lg:-mt-24' : 'pt-24 sm:pt-28 lg:pt-32'}`}>
        <AnimatedWrapper delay={200} forceAnimate={true}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10 px-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Badge className="text-sm">{tradition.category}</Badge>
                <Badge variant="secondary" className="text-sm flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {tradition.region}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-headline mt-2 text-foreground leading-tight">
                {tradition.name}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto italic">
                "{tradition.shortDescription}"
              </p>
            </div>

            <div className="p-6 sm:p-8 lg:p-10 rounded-xl bg-card shadow-lg border">
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-headline flex items-center gap-2 mb-3 sm:mb-4">
                    <BookOpen className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                    Deskripsi Lengkap
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/80 whitespace-pre-line">
                    {tradition.fullDescription}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/80 mt-4">
                    {tradition.shortDescription}
                  </p>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-headline flex items-center gap-2 mb-3 sm:mb-4">
                    <History className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                    Sejarah & Asal Usul
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/80 whitespace-pre-line">
                    {tradition.history}
                  </p>
                  {tradition.category === 'Tarian' && (
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        <strong>Tahukah Anda?</strong> Tarian tradisional Indonesia sering kali memiliki makna spiritual dan digunakan dalam berbagai upacara adat penting.
                      </p>
                    </div>
                  )}
                  {tradition.category === 'Kerajinan' && (
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        <strong>Tahukah Anda?</strong> Kerajinan tradisional Indonesia mencerminkan kearifan lokal dan teknik yang diwariskan turun-temurun selama berabad-abad.
                      </p>
                    </div>
                  )}
                  {tradition.category === 'Upacara' && (
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        <strong>Tahukah Anda?</strong> Upacara adat di Indonesia merupakan bagian penting dari identitas budaya dan memperkuat ikatan sosial masyarakat.
                      </p>
                    </div>
                  )}
                  {tradition.category === 'Kuliner' && (
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        <strong>Tahukah Anda?</strong> Kuliner tradisional Indonesia menggunakan rempah-rempah lokal yang menjadikan cita rasanya unik dan khas.
                      </p>
                    </div>
                  )}
                  {tradition.category === 'Musik' && (
                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        <strong>Tahukah Anda?</strong> Musik tradisional Indonesia memiliki berbagai alat musik unik yang tidak ditemukan di tempat lain di dunia.
                      </p>
                    </div>
                  )}
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-headline flex items-center gap-2 mb-3 sm:mb-4">
                    <Sparkles className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                    Makna & Filosofi
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-foreground/80 whitespace-pre-line mb-4">
                    {tradition.meaning}
                  </p>
                  <div className="mt-4 p-4 sm:p-5 bg-secondary/30 rounded-lg border">
                    <h4 className="font-semibold text-sm sm:text-base mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Asal Daerah
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Tradisi ini berasal dari <strong>{tradition.region}</strong>, salah satu provinsi dengan kekayaan budaya yang luar biasa di Indonesia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ChatBudayawan tradition={tradition} />
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}

// Region Detail Component (original code)
function RegionDetailContent({ region, mainImageUrl }: { region: Region; mainImageUrl?: string }) {

  const cuisineImage = PlaceHolderImages.find(img => img.id === region.details.cuisineImageId);
  const clothingImage = PlaceHolderImages.find(img => img.id === region.details.clothingImageId);
  const traditionImage = PlaceHolderImages.find(img => img.id === region.details.traditionImageId);

  const contextForAI = `
    Nama Wilayah: ${region.name}
    Deskripsi: ${region.description}
    Sejarah: ${region.details.history}
    Dongeng: ${region.details.folklore}
    Tokoh: ${region.details.figures.map(f => `${f.name} (${f.description})`).join(', ')}
    Kuliner: ${region.details.cuisine.join(', ')}
    Pakaian Adat: ${region.details.clothing}
    Tradisi: ${region.details.traditions.join(', ')}
  `;

  const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="flex flex-col h-full bg-card/50">
        <CardHeader className="pb-2 sm:pb-3 md:pb-4 lg:pb-6">
            <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-headline flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <span className="flex-shrink-0 text-primary w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">{icon}</span>
                <span className="leading-tight">{title}</span>
            </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground flex-grow pt-0 text-xs sm:text-sm md:text-base">
            {children}
        </CardContent>
    </Card>
  )

  return (
    <div className="bg-background">
      {mainImageUrl && (
        <AnimatedWrapper forceAnimate={true}>
          <div className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
            <Image
              src={mainImageUrl}
              alt={region.name}
              fill
              priority
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
          </div>
        </AnimatedWrapper>
      )}

      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-32 relative z-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
        <AnimatedWrapper delay={200} forceAnimate={true}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-headline mt-2 text-foreground drop-shadow-lg leading-tight">
                {region.name}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 mt-2 sm:mt-3 md:mt-4 max-w-3xl mx-auto">{region.description}</p>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    <InfoCard icon={<Landmark size={24} />} title="Sejarah Singkat">
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed">{region.details.history}</p>
                    </InfoCard>
                    <InfoCard icon={<ScrollText size={24} />} title="Dongeng Rakyat">
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed">{region.details.folklore}</p>
                    </InfoCard>
                </div>

                <InfoCard icon={<Users size={24} />} title="Tokoh Terkenal">
                    <div className="space-y-3 sm:space-y-4 md:space-y-6">
                        {region.details.figures.map(figure => {
                            const figureImage = PlaceHolderImages.find(img => img.id === figure.imageId);
                            return (
                                <div key={figure.name} className="flex gap-2 sm:gap-3 md:gap-4 items-start">
                                    {figureImage && (
                                        <div className="relative rounded-full aspect-square border-2 border-primary/20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden">
                                            <Image
                                              src={figureImage.imageUrl}
                                              alt={figure.name}
                                              fill
                                              className="object-cover"
                                              data-ai-hint={figureImage.imageHint}
                                              sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 80px"
                                              placeholder="blur"
                                              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-foreground text-xs sm:text-sm md:text-base">{figure.name}</h4>
                                        <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed">{figure.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </InfoCard>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                     <InfoCard icon={<Utensils size={24} />} title="Kuliner Khas">
                        {cuisineImage && (
                           <div className="relative aspect-video rounded-md overflow-hidden mb-2 sm:mb-3 md:mb-4">
                                <Image
                                  src={cuisineImage.imageUrl}
                                  alt="Kuliner Khas"
                                  fill
                                  className="object-cover"
                                  data-ai-hint={cuisineImage.imageHint}
                                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                  placeholder="blur"
                                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                                />
                           </div>
                        )}
                        <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs md:text-sm">
                            {region.details.cuisine.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </InfoCard>
                     <InfoCard icon={<Shirt size={24} />} title="Pakaian Adat">
                        {clothingImage && (
                           <div className="relative aspect-video rounded-md overflow-hidden mb-2 sm:mb-3 md:mb-4">
                                <Image
                                  src={clothingImage.imageUrl}
                                  alt="Pakaian Adat"
                                  fill
                                  className="object-cover"
                                  data-ai-hint={clothingImage.imageHint}
                                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                  placeholder="blur"
                                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                                />
                           </div>
                        )}
                        <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs md:text-sm">
                            {region.details.clothing.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </InfoCard>
                     <InfoCard icon={<Drama size={24} />} title="Tradisi Unik">
                        {traditionImage && (
                           <div className="relative aspect-video rounded-md overflow-hidden mb-2 sm:mb-3 md:mb-4">
                                <Image
                                  src={traditionImage.imageUrl}
                                  alt="Tradisi Unik"
                                  fill
                                  className="object-cover"
                                  data-ai-hint={traditionImage.imageHint}
                                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                  placeholder="blur"
                                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                                />
                           </div>
                        )}
                        <ul className="list-disc list-inside space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs md:text-sm">
                            {region.details.traditions.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </InfoCard>
                </div>
            </div>

            <Separator className="my-6 sm:my-8 md:my-10 lg:my-12" />

             <InteractiveZone
                regionName={region.name}
                context={contextForAI}
                quizData={region.details.quiz}
                suggestionQuestions={region.suggestionQuestions}
             />

          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
