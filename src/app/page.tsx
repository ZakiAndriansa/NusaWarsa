import Hero from '@/components/landing/hero';
import Timeline from '@/components/landing/timeline';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Timeline />
    </div>
  );
}
