'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  GraduationCap,
  ArrowRight,
  Zap,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import AnimatedWrapper from '../ui/animated-wrapper';

const services = [
  {
    id: 'temukan-tradisi',
    title: 'Temukan Tradisi',
    description: 'Ikuti kuis interaktif untuk menemukan tradisi Indonesia yang cocok dengan kepribadian dan minat Anda',
    icon: Sparkles,
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    href: '/quiz',
    features: [
      'Kuis kepribadian 8 pertanyaan',
      'Rekomendasi tradisi personal',
      'Analisis mendalam',
      '6 tipe kepribadian budaya'
    ],
    badge: 'Populer'
  },
  {
    id: 'panduan-budaya',
    title: 'Panduan Budaya',
    description: 'Pelajari etika dan tata cara langkah-demi-langkah untuk berbagai situasi budaya dengan bantuan AI',
    icon: GraduationCap,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    href: '/scenarios',
    features: [
      '4+ panduan lengkap',
      'Do & Don\'t lists',
      'Frasa penting + pengucapan',
      'AI Emergency Chat'
    ],
    badge: 'AI Powered'
  }
];

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedWrapper animationId="services-header">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-block p-3 sm:p-4 rounded-full bg-primary/10 mb-3 sm:mb-4">
              <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold mb-3 sm:mb-4 px-2">
              Layanan Kami
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Jelajahi fitur-fitur interaktif yang membantu Anda memahami dan terhubung dengan budaya Indonesia
            </p>
          </div>
        </AnimatedWrapper>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedWrapper key={service.id} animationId={`services-card-${index}`} delay={index * 150}>
                <Card className={`h-full flex flex-col border-2 ${service.borderColor} hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group`}>
                  <CardHeader className="p-5 sm:p-6">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className={`p-2.5 sm:p-3 rounded-xl ${service.bgColor}`}>
                        <Icon className={`h-6 w-6 sm:h-8 sm:w-8 ${service.iconColor}`} />
                      </div>
                      <Badge variant="outline" className="font-semibold text-xs sm:text-sm">
                        {service.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col justify-between p-5 sm:p-6 pt-0">
                    {/* Features List */}
                    <div className="mb-5 sm:mb-6">
                      <p className="text-xs sm:text-sm font-semibold mb-2 sm:mb-3 flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                        Fitur Utama:
                      </p>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                            <div className="mt-1 flex-shrink-0">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <Link href={service.href} className="w-full">
                      <Button className="w-full gap-2 group-hover:gap-3 transition-all text-sm sm:text-base">
                        Coba Sekarang
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedWrapper>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedWrapper animationId="services-cta" delay={500}>
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 px-4">
              Semua layanan gratis dan dapat diakses kapan saja
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs sm:text-sm font-medium">100% Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-xs sm:text-sm font-medium">Interaktif</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <span className="text-xs sm:text-sm font-medium">AI Powered</span>
              </div>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
