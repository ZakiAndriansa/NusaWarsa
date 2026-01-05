import { Metadata } from 'next';
import ScenariosClient from '@/components/scenarios/scenarios-client';

export const metadata: Metadata = {
  title: 'Panduan Situasi Budaya | Nusantara',
  description: 'Pelajari etika dan tata cara dalam berbagai situasi budaya Indonesia. Panduan praktis langkah-demi-langkah untuk menghadiri pernikahan, upacara, dan acara adat.',
};

export default function ScenariosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <ScenariosClient />
    </main>
  );
}
