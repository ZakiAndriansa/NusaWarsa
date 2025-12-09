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

  const image = PlaceHolderImages.find(img => img.id === region.imageId);
  
  const contextForQuiz = `
    Sejarah: ${region.details.history}
    Dongeng: ${region.details.folklore}
    Tokoh: ${region.details.figures.join(', ')}
    Kuliner: ${region.details.cuisine.join(', ')}
    Pakaian Adat: ${region.details.clothing}
    Tradisi: ${region.details.traditions.join(', ')}
  `;

  const quizData = await generateRegionQuiz({ context: contextForQuiz });

  const InfoCard = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: string | string[] }) => (
    <div className="flex items-start gap-4">
        <div className="text-primary mt-1">{icon}</div>
        <div>
            <h3 className="font-bold font-headline text-xl text-foreground/90">{title}</h3>
            {Array.isArray(content) ? (
                 <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    {content.map((item, index) => <li key={index}>{item}</li>)}
                 </ul>
            ) : (
                <p className="mt-1 text-muted-foreground">{content}</p>
            )}
        </div>
    </div>
  )

  return (
    <div className="bg-background">
      {image && (
        <AnimatedWrapper>
          <div className="relative h-[50vh] w-full">
            <Image
              src={image.imageUrl}
              alt={region.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
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

            <Card className="p-6 sm:p-10 rounded-2xl bg-card shadow-xl border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <InfoCard icon={<Landmark size={24} />} title="Sejarah Singkat" content={region.details.history} />
                    <InfoCard icon={<ScrollText size={24} />} title="Dongeng Rakyat" content={region.details.folklore} />
                    <InfoCard icon={<Users size={24} />} title="Tokoh Terkenal" content={region.details.figures} />
                    <InfoCard icon={<Utensils size={24} />} title="Kuliner Khas" content={region.details.cuisine} />
                    <InfoCard icon={<Shirt size={24} />} title="Pakaian Adat" content={region.details.clothing} />
                    <InfoCard icon={<Drama size={24} />} title="Tradisi Unik" content={region.details.traditions} />
                </div>
            </Card>

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
