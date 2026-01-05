import { timelineData } from '@/lib/data';
import { notFound } from 'next/navigation';
import TimelineDetailClient from './timeline-detail-client';

// Force dynamic rendering to avoid useActionState build errors
export const dynamic = 'force-dynamic';

interface TimelineDetailPageProps {
  params: {
    slug: string;
  };
}

// Mapping slug to actual filename in public/pictures/timeline
const imageMapping: Record<string, string> = {
  'kutai-kingdom': 'kutai.webp',
  'sriwijaya-empire': 'sriwijaya.webp',
  'borobudur-construction': 'borobudur.webp',
  'majapahit-empire': 'majapahit.webp',
  'islam-arrival': 'masuknya-islam.webp',
  'maluku-spice-islands': 'ternate-tidore.webp',
  'aceh-sultanate': 'kesultanan-aceh.webp',
  'voc-batavia': 'voc-batavia.webp',
  'colonial-resistance': 'perlawanan-pattimura.webp',
  'national-awakening': 'budiutomo.webp',
  'japanese-occupation': 'penjajahan-jepang.webp',
  'proclamation': 'proklamasi.webp',
  'independence-struggle': 'revolusi-kemerdekaan.webp',
  'nation-building': 'demokrasi-liberal.webp',
  'new-order-development': 'orde-baru.webp',
  'reformation-era': 'reformasi.webp',
  'digital-indonesia': 'indonesia_digital.webp',
  'ikn-nusantara': 'ikn.webp',
};

// Get timeline image path
const getTimelineImage = (slug: string): string | null => {
  const fileName = imageMapping[slug];

  // Only return image if the slug is in our mapping
  if (fileName) {
    return `/pictures/timeline/${fileName}`;
  }

  return null;
};

export function generateStaticParams() {
  return timelineData.map(event => ({
    slug: event.slug,
  }));
}

export function generateMetadata({ params }: TimelineDetailPageProps) {
    const event = timelineData.find(e => e.slug === params.slug);
    if (!event) {
        return {
            title: 'Peristiwa Tidak Ditemukan',
        };
    }
    return {
        title: `${event.title} | Nusa Warsa`,
        description: event.description,
    };
}


export default function TimelineDetailPage({ params }: TimelineDetailPageProps) {
  const event = timelineData.find(e => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  const timelineImage = getTimelineImage(params.slug);

  return <TimelineDetailClient event={event} timelineImageUrl={timelineImage || undefined} />;
}
