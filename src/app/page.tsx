import { Suspense } from 'react';
import Hero from '@/components/landing/hero';
import Timeline from '@/components/landing/timeline';
import ExploreSection from '@/components/landing/explore-section';
import GallerySection from '@/components/landing/gallery-section';
import ServicesSection from '@/components/landing/services-section';
import AboutSection from '@/components/landing/about-section';
import FAQSection from '@/components/landing/faq-section';
import PageEntranceAnimation from '@/components/ui/page-entrance-animation';
import { CardSectionSkeleton, ContentSectionSkeleton } from '@/components/ui/page-skeleton';

// Loading fallback component with skeleton
const SectionLoader = () => <CardSectionSkeleton />;

// Loading fallback for content sections (About, Services)
const ContentLoader = () => <ContentSectionSkeleton />;

export default function Home() {
  return (
    <PageEntranceAnimation>
      <div className="flex flex-col">
        <Hero />
        <Suspense fallback={<ContentLoader />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Timeline />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ExploreSection />
        </Suspense>
        <Suspense fallback={<ContentLoader />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <GallerySection />
        </Suspense>
        <Suspense fallback={<ContentLoader />}>
          <FAQSection />
        </Suspense>
      </div>
    </PageEntranceAnimation>
  );
}
