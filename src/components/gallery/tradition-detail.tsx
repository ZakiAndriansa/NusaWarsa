import type { Tradition } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

interface TraditionDetailProps {
  tradition: Tradition;
}

const TraditionDetail = ({ tradition }: TraditionDetailProps) => {
  // Let's assume a tradition might have multiple images in the future.
  // For now, we'll use its main image and a few defaults for the carousel.
  const images = [
    PlaceHolderImages.find(img => img.id === tradition.imageId),
    PlaceHolderImages.find(img => img.id === 'default-tradition-1'),
    PlaceHolderImages.find(img => img.id === 'default-tradition-2'),
  ].filter(Boolean);

  return (
    <div className="grid md:grid-cols-2 gap-8 p-2">
      <div className="w-full">
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => image && (
              <CarouselItem key={index}>
                <div className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={image.imageUrl}
                    alt={`${tradition.name} image ${index + 1}`}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2 mb-2">
            <Badge>{tradition.category}</Badge>
            <Badge variant="secondary">{tradition.region}</Badge>
        </div>
        <h2 className="text-3xl font-bold font-headline text-foreground mb-4">{tradition.name}</h2>
        
        <Separator className="my-4" />

        <div className="space-y-6 text-foreground/90 text-base leading-relaxed">
            <div>
                <h3 className="font-semibold text-lg font-headline mb-2">Deskripsi</h3>
                <p>{tradition.fullDescription}</p>
            </div>
            <div>
                <h3 className="font-semibold text-lg font-headline mb-2">Sejarah Singkat</h3>
                <p>{tradition.history}</p>
            </div>
            <div>
                <h3 className="font-semibold text-lg font-headline mb-2">Makna Filosofis</h3>
                <p>{tradition.meaning}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TraditionDetail;
