import Hero from '@/components/landing/hero';
import Timeline from '@/components/landing/timeline';
import ExploreSection from '@/components/landing/explore-section';
import GallerySection from '@/components/landing/gallery-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Timeline />
      <ExploreSection />
      <GallerySection />
    </div>
  );
}
