import { regionsData, traditionsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ExploreDetailClient from './explore-detail-client';

// Force dynamic rendering to avoid useActionState build errors
export const dynamic = 'force-dynamic';

interface ExploreDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const regionParams = regionsData.map(region => ({
    slug: region.id,
  }));
  const traditionParams = traditionsData.map(tradition => ({
    slug: tradition.id,
  }));
  return [...regionParams, ...traditionParams];
}

export function generateMetadata({ params }: ExploreDetailPageProps) {
    // Try to find tradition first
    const tradition = traditionsData.find(t => t.id === params.slug);
    if (tradition) {
        return {
            title: `${tradition.name} | Nusa Warsa`,
            description: tradition.shortDescription,
        };
    }

    // Otherwise try region
    const region = regionsData.find(r => r.id === params.slug);
    if (region) {
        return {
            title: `Jelajahi ${region.name} | Nusa Warsa`,
            description: region.description,
        };
    }

    return {
        title: 'Tidak Ditemukan',
    };
}


export default function ExploreDetailPage({ params }: ExploreDetailPageProps) {
  // Try to find tradition first
  const tradition = traditionsData.find(t => t.id === params.slug);

  if (tradition) {
    const mainImage = PlaceHolderImages.find(img => img.id === tradition.imageId);
    return <ExploreDetailClient type="tradition" data={tradition} mainImageUrl={mainImage?.imageUrl} />;
  }

  // Otherwise try region
  const region = regionsData.find(r => r.id === params.slug);

  if (!region) {
    notFound();
  }

  const mainImage = PlaceHolderImages.find(img => img.id === region.imageId);
  return <ExploreDetailClient type="region" data={region} mainImageUrl={mainImage?.imageUrl} />;
}
