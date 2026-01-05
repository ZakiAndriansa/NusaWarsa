import { Metadata } from 'next';
import CulturalQuizClient from '@/components/quiz/cultural-quiz-client';

export const metadata: Metadata = {
  title: 'Temukan Tradisi yang Cocok | Nusantara',
  description: 'Ikuti quiz interaktif untuk menemukan tradisi budaya Indonesia yang paling sesuai dengan kepribadian dan minat Anda',
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pb-8">
      <CulturalQuizClient />
    </main>
  );
}
