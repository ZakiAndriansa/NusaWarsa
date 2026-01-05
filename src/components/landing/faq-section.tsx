'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import AnimatedWrapper from '../ui/animated-wrapper';

const faqs = [
  {
    question: 'Apa itu Nusa Warsa?',
    answer: 'Nusa Warsa adalah platform digital interaktif yang membantu Anda menjelajahi dan memahami kekayaan sejarah dan budaya Indonesia. Kami menyediakan timeline sejarah, peta interaktif, galeri tradisi, serta AI Assistant untuk membuat pembelajaran budaya lebih personal dan menyenangkan.'
  },
  {
    question: 'Apakah semua fitur di website ini gratis?',
    answer: 'Ya! Semua fitur di Nusa Warsa 100% gratis untuk digunakan. Kami percaya bahwa pengetahuan tentang sejarah dan budaya Indonesia harus dapat diakses oleh semua orang tanpa biaya apapun.'
  },
  {
    question: 'Bagaimana cara menggunakan peta interaktif?',
    answer: 'Klik pada wilayah di peta Indonesia untuk melihat informasi detail tentang daerah tersebut, termasuk tradisi khas, sejarah, dan budaya lokal. Anda juga dapat mengikuti kuis interaktif untuk menguji pengetahuan Anda tentang wilayah tersebut.'
  },
  {
    question: 'Apa fungsi AI Assistant di website ini?',
    answer: 'AI Assistant dapat membantu Anda dengan pertanyaan tentang sejarah Indonesia, tradisi budaya, dan informasi umum seputar website. Cukup klik ikon chat di pojok kanan bawah untuk memulai percakapan dengan AI kami.'
  },
  {
    question: 'Berapa banyak tradisi dan periode sejarah yang tersedia?',
    answer: 'Saat ini kami memiliki lebih dari 39 tradisi dari berbagai daerah di Indonesia dan 18 periode penting dalam sejarah Indonesia, dari era Kerajaan Kutai (abad ke-4) hingga era modern. Konten akan terus kami tambahkan secara berkala.'
  },
  {
    question: 'Apakah informasi sejarah yang diberikan akurat?',
    answer: 'Kami melakukan riset mendalam dari berbagai sumber terpercaya untuk memastikan akurasi informasi sejarah. Namun, untuk keperluan akademis atau penelitian, kami sarankan untuk melakukan verifikasi tambahan dengan sumber primer.'
  },
  {
    question: 'Apakah website ini dapat diakses di mobile?',
    answer: 'Ya! Nusa Warsa dirancang dengan responsive design yang dapat diakses dengan lancar di smartphone, tablet, maupun desktop. Semua fitur dapat digunakan dengan optimal di berbagai ukuran layar.'
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedWrapper animationId="faq-header">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-block p-3 sm:p-4 rounded-full bg-primary/10 mb-3 sm:mb-4">
              <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-bold mb-3 sm:mb-4 px-2">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Temukan jawaban untuk pertanyaan umum tentang Nusa Warsa
            </p>
          </div>
        </AnimatedWrapper>

        {/* FAQ Accordion */}
        <AnimatedWrapper animationId="faq-accordion" delay={200}>
          <Card className="max-w-4xl mx-auto border-2">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed text-xs sm:text-sm lg:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </AnimatedWrapper>

      </div>
    </section>
  );
}
