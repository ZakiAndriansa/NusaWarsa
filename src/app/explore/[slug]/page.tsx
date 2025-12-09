import { regionsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Separator } from '@/components/ui/separator';
import { Landmark, ScrollText, Users, Utensils, Shirt, Drama, HelpCircle } from 'lucide-react';
import AnimatedWrapper from '@/components/ui/animated-wrapper';
import { generateRegionQuiz } from '@/ai/flows/generate-region-quiz';
import QuizClient from '@/components/explore/quiz-client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface RegionDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return regionsData.map(region => ({
    slug: region.id,
  }));
}

export function generateMetadata({ params }: RegionDetailPageProps) {
    const region = regionsData.find(r => r.id === params.slug);
    if (!region) {
        return {
            title: 'Wilayah Tidak Ditemukan',
        };
    }
    return {
        title: `Jelajahi ${region.name} | Nusantara Chronicles`,
        description: region.description,
    };
}


export default async function RegionDetailPage({ params }: RegionDetailPageProps) {
  const region = regionsData.find(r => r.id === params.slug);

  if (!region) {
    notFound();
  }

  const mainImage = PlaceHolderImages.find(img => img.id === region.imageId);
  const cuisineImage = PlaceHolderImages.find(img => img.id === region.details.cuisineImageId);
  const clothingImage = PlaceHolderImages.find(img => img.id === region.details.clothingImageId);
  const traditionImage = PlaceHolderImages.find(img => img.id === region.details.traditionImageId);
  
  const contextForQuiz = `
    Sejarah: ${region.details.history}
    Dongeng: ${region.details.folklore}
    Tokoh: ${region.details.figures.map(f => `${f.name} (${f.description})`).join(', ')}
    Kuliner: ${region.details.cuisine.join(', ')}
    Pakaian Adat: ${region.details.clothing}
    Tradisi: ${region.details.traditions.join(', ')}
  `;

  const quizData = await generateRegionQuiz({ context: contextForQuiz });

  const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <Card className="flex flex-col h-full bg-card/50">
        <CardHeader>
            <CardTitle className="text-xl font-bold font-headline flex items-center gap-3">
                <span className="flex-shrink-0 text-primary">{icon}</span>
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground flex-grow">
            {children}
        </CardContent>
    </Card>
  )

  return (
    <div className="bg-background">
      {mainImage && (
        <AnimatedWrapper>
          <div className="relative h-[50vh] w-full">
            <Image
              src={mainImage.imageUrl}
              alt={region.name}
              fill
              className="object-cover"
              data-ai-hint={mainImage.imageHint}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          </div>
        </AnimatedWrapper>
      )}

      <div className="container -mt-32 relative z-10 pb-20">
        <AnimatedWrapper delay={200}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl sm:text-7xl font-bold font-headline mt-2 text-foreground drop-shadow-lg">
                {region.name}
              </h1>
              <p className="text-lg text-foreground/80 mt-4 max-w-3xl mx-auto">{region.description}</p>
            </div>

            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoCard icon={<Landmark size={24} />} title="Sejarah Singkat">
                        <p>{region.details.history}</p>
                    </InfoCard>
                    <InfoCard icon={<ScrollText size={24} />} title="Dongeng Rakyat">
                        <p>{region.details.folklore}</p>
                    </InfoCard>
                </div>

                <InfoCard icon={<Users size={24} />} title="Tokoh Terkenal">
                    <div className="space-y-6">
                        {region.details.figures.map(figure => {
                            const figureImage = PlaceHolderImages.find(img => img.id === figure.imageId);
                            return (
                                <div key={figure.name} className="flex gap-4 items-start">
                                    {figureImage && (
                                        <Image src={figureImage.imageUrl} alt={figure.name} width={80} height={80} className="rounded-full aspect-square object-cover border-2 border-primary/20" data-ai-hint={figureImage.imageHint} />
                                    )}
                                    <div>
                                        <h4 className="font-bold text-foreground">{figure.name}</h4>
                                        <p className="text-sm">{figure.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </InfoCard>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <InfoCard icon={<Utensils size={24} />} title="Kuliner Khas">
                        {cuisineImage && (
                           <div className="relative aspect-video rounded-md overflow-hidden mb-4">
                                <Image src={cuisineImage.imageUrl} alt="Kuliner Khas" fill className="object-cover" data-ai-hint={cuisineImage.imageHint}/>
                           </div>
                        )}
                        <ul className="list-disc list-inside space-y-1">
                            {region.details.cuisine.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </InfoCard>
                     <InfoCard icon={<Shirt size={24} />} title="Pakaian Adat">
                        {clothingImage && (
                           <div className="relative aspect-video rounded-md overflow-hidden mb-4">
                                <Image src={clothingImage.imageUrl} alt={region.details.clothing} fill className="object-cover" data-ai-hint={clothingImage.imageHint}/>
                           </div>
                        )}
                        <p className="font-semibold text-foreground text-center">{region.details.clothing}</p>
                    </InfoCard>
                     <InfoCard icon={<Drama size={24} />} title="Tradisi Unik">
                        {traditionImage && (
                           <div className="relative aspect-video rounded-md overflow-hidden mb-4">
                                <Image src={traditionImage.imageUrl} alt="Tradisi Unik" fill className="object-cover" data-ai-hint={traditionImage.imageHint}/>
                           </div>
                        )}
                        <ul className="list-disc list-inside space-y-1">
                            {region.details.traditions.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </InfoCard>
                </div>
            </div>

            <Separator className="my-12" />

             <Card className="shadow-2xl border-2 border-primary/10 bg-card">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl flex items-center justify-center gap-3">
                        <HelpCircle className="text-primary"/> Uji Pengetahuan Anda!
                    </CardTitle>
                    <CardDescription className="max-w-2xl mx-auto">
                        Jawab 5 pertanyaan berikut berdasarkan informasi di atas untuk menguji seberapa baik Anda mengenal {region.name}. Setiap jawaban benar bernilai 20 poin.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <QuizClient quizData={quizData.quiz} />
                </CardContent>
            </Card>
            
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
