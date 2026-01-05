'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Target,
  Eye,
  Heart,
  Sparkles
} from 'lucide-react';
import AnimatedWrapper from '../ui/animated-wrapper';

const values = [
  {
    icon: Eye,
    title: 'Visi Kami',
    description: 'Menjadi salah satu platform terdepan untuk edukasi budaya Indonesia yang mudah diakses bagi generasi muda'
  },
  {
    icon: Target,
    title: 'Misi Kami',
    description: 'Menyajikan informasi terkait kekayaan budaya Indonesia kepada generasi muda melalui teknologi interaktif dan AI'
  },
  {
    icon: Heart,
    title: 'Nilai Kami',
    description: 'Menjaga keberagaman budaya, memperkuat identitas budaya, dan membangun jembatan antara tradisi dengan modernitas'
  }
];

export default function AboutSection() {
  return (
    <section id="tentang" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedWrapper animationId="about-header">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <div className="inline-block p-3 sm:p-4 rounded-full bg-primary/10 mb-3 sm:mb-4">
              <Sparkles className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold mb-4 px-2">
              Tentang Kami
            </h2>
          </div>
        </AnimatedWrapper>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimatedWrapper key={index} animationId={`about-value-${index}`} delay={100 + index * 150}>
                <Card className="h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="p-5 sm:p-6 lg:p-8">
                    <div className="inline-block p-2.5 sm:p-3 rounded-full bg-primary/10 mb-3 sm:mb-4">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
