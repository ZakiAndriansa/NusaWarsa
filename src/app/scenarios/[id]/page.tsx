import { Metadata } from 'next';
import { culturalScenarios } from '@/lib/scenarios-data';
import { notFound } from 'next/navigation';
import ScenarioPlayer from '@/components/scenarios/scenario-player';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const scenario = culturalScenarios.find(s => s.id === params.id);

  if (!scenario) {
    return {
      title: 'Panduan Tidak Ditemukan | Nusantara'
    };
  }

  return {
    title: `${scenario.title} | Nusantara`,
    description: scenario.description,
  };
}

export default function ScenarioDetailPage({ params }: Props) {
  const scenario = culturalScenarios.find(s => s.id === params.id);

  if (!scenario) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <ScenarioPlayer scenario={scenario} />
    </main>
  );
}

export async function generateStaticParams() {
  return culturalScenarios.map((scenario) => ({
    id: scenario.id,
  }));
}
