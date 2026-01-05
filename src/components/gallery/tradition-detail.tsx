import type { Tradition } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface TraditionDetailProps {
  tradition: Tradition;
}

const TraditionDetail = ({ tradition }: TraditionDetailProps) => {
  // Let's assume a tradition might have multiple images in the future.
  // For now, we'll use its main image only.
  const images = [
    PlaceHolderImages.find(img => img.id === tradition.imageId),
  ].filter(Boolean);

  // Extract first sentence from each section
  const getFirstSentence = (text: string) => {
    const match = text.match(/^[^.!?]+[.!?]/);
    return match ? match[0] : text.substring(0, 100) + '...';
  };

  const shortDescription = getFirstSentence(tradition.fullDescription);
  const shortHistory = getFirstSentence(tradition.history);
  const shortMeaning = getFirstSentence(tradition.meaning);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-2 sm:p-4">
      {/* Image Gallery */}
      <div className="w-full">
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => image && (
              <CarouselItem key={index}>
                <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-square relative rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image.imageUrl}
                    alt={`${tradition.name} image ${index + 1}`}
                    className="w-full h-full object-cover"
                    data-ai-hint={image.imageHint}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/placeholder-image.jpg';
                      target.onerror = null; // Prevent infinite loop
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 h-8 w-8 sm:h-10 sm:w-10" />
          <CarouselNext className="right-2 h-8 w-8 sm:h-10 sm:w-10" />
        </Carousel>
      </div>

      {/* Content Section */}
      <div className="flex flex-col">
        {/* Badges */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <Badge className="text-xs sm:text-sm px-2 py-0.5">{tradition.category}</Badge>
            <Badge variant="secondary" className="text-xs sm:text-sm px-2 py-0.5">{tradition.region}</Badge>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-headline text-foreground mb-2 sm:mb-3 leading-tight">{tradition.name}</h2>

        <Separator className="my-2 sm:my-3" />

        {/* Description Sections */}
        <div className="space-y-2.5 sm:space-y-3 text-foreground/90 flex-1">
            <div>
                <h3 className="font-semibold text-sm sm:text-base font-headline mb-1 text-foreground">Deskripsi</h3>
                <p className="text-xs sm:text-sm leading-relaxed">{shortDescription}</p>
            </div>
            <div>
                <h3 className="font-semibold text-sm sm:text-base font-headline mb-1 text-foreground">Sejarah</h3>
                <p className="text-xs sm:text-sm leading-relaxed">{shortHistory}</p>
            </div>
            <div>
                <h3 className="font-semibold text-sm sm:text-base font-headline mb-1 text-foreground">Makna</h3>
                <p className="text-xs sm:text-sm leading-relaxed">{shortMeaning}</p>
            </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4 sm:mt-5 pt-2">
          <Link href={`/explore/${tradition.id}`}>
            <Button className="w-full sm:w-auto sm:min-w-[160px]" size="sm">
              <ExternalLink className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm">Info Lengkap</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TraditionDetail;
