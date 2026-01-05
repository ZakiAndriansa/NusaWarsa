'use client';

import { useState, useMemo } from 'react';
import { traditionsData } from '@/lib/data';
import type { Tradition, TraditionCategory } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import TraditionDetail from './tradition-detail';
import AnimatedWrapper from '../ui/animated-wrapper';
import { Search, Eye, Heart } from 'lucide-react';

const categories: TraditionCategory[] = ['Tarian', 'Kerajinan', 'Upacara', 'Kuliner', 'Musik'];

// Variasi bentuk kotak yang acak - aspect ratio dan border radius
// Mobile: square, Tablet (2 kolom): ukuran wajar, Desktop (3 kolom): ukuran asli yang variatif
const boxShapes = [
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[3/4]', desktopAspect: 'lg:aspect-[3/4]', borderRadius: 'rounded-lg' },      // Portrait standard
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[4/5]', desktopAspect: 'lg:aspect-[4/5]', borderRadius: 'rounded-xl' },      // Portrait tinggi
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[4/3]', desktopAspect: 'lg:aspect-[16/9]', borderRadius: 'rounded-md' },     // Desktop: Landscape wide
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[4/3]', desktopAspect: 'lg:aspect-[4/3]', borderRadius: 'rounded-2xl' },     // Landscape klasik
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-square', desktopAspect: 'lg:aspect-square', borderRadius: 'rounded-lg' },     // Square
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[5/4]', desktopAspect: 'lg:aspect-[5/4]', borderRadius: 'rounded-xl' },      // Hampir square
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[2/3]', desktopAspect: 'lg:aspect-[2/3]', borderRadius: 'rounded-md' },      // Portrait tall
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[3/2]', desktopAspect: 'lg:aspect-[21/9]', borderRadius: 'rounded-2xl' },    // Desktop: Ultra wide
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[3/4]', desktopAspect: 'lg:aspect-[9/16]', borderRadius: 'rounded-lg' },     // Desktop: Portrait sangat tinggi
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-square', desktopAspect: 'lg:aspect-square', borderRadius: 'rounded-xl' },     // Square rounded
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[5/4]', desktopAspect: 'lg:aspect-[5/3]', borderRadius: 'rounded-md' },      // Desktop: Landscape medium
  { mobileAspect: 'aspect-square', tabletAspect: 'sm:aspect-[3/2]', desktopAspect: 'lg:aspect-[3/2]', borderRadius: 'rounded-2xl' },     // Classic photo
];

// Function untuk assign shape secara acak tapi konsisten per item
const getBoxShape = (id: string, index: number) => {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = ((hash << 5) - hash) + id.charCodeAt(i);
  }
  const shapeIndex = (Math.abs(hash) + index * 7) % boxShapes.length;
  return boxShapes[shapeIndex];
};

const TraditionCard = ({
  tradition,
  onSelect,
  index,
  isLoved,
  onLoveToggle
}: {
  tradition: Tradition;
  onSelect: () => void;
  index: number;
  isLoved: boolean;
  onLoveToggle: (e: React.MouseEvent) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const image = PlaceHolderImages.find(img => img.id === tradition.imageId);
  const shape = getBoxShape(tradition.id, index);

  return (
    <DialogTrigger asChild>
      <div
        onClick={onSelect}
        className="cursor-pointer break-inside-avoid mb-4 sm:mb-5 lg:mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Card className="group overflow-hidden relative shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 transform hover:-translate-y-2 bg-transparent border-none">
          {image && (
            <div className={`relative w-full overflow-hidden ${shape.mobileAspect} ${shape.tabletAspect} ${shape.desktopAspect} ${shape.borderRadius}`}>
              <img
                src={image.imageUrl}
                alt={tradition.name}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isHovered ? 'scale-110 brightness-75' : 'scale-100 brightness-100'
                }`}
                data-ai-hint={image.imageHint}
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-image.jpg';
                  target.onerror = null; // Prevent infinite loop
                }}
              />
              {/* Overlay gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                isHovered 
                  ? 'from-black/90 via-black/50 to-transparent opacity-100' 
                  : 'from-black/70 via-black/30 to-transparent opacity-100'
              }`} />

              {/* Love Button - pojok kanan atas - Always visible on mobile & tablet, hover only on desktop */}
              <div className={`absolute top-3 right-3 transition-all duration-300 z-20 ${
                isHovered ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0 lg:opacity-0 lg:-translate-y-2'
              }`}>
                <button
                  onClick={onLoveToggle}
                  className={`backdrop-blur-md rounded-full p-2 transition-all duration-300 ${
                    isLoved 
                      ? 'bg-red-500/90 hover:bg-red-600 scale-110' 
                      : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  <Heart 
                    className={`h-4 w-4 transition-all duration-300 ${
                      isLoved ? 'fill-white text-white' : 'text-white'
                    }`}
                  />
                </button>
              </div>

              {/* Eye Icon - mata kuning di tengah - Show on all devices when hover/tap */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                <div className="bg-primary rounded-full p-4 shadow-xl">
                  <Eye className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          )}
          
          {/* Content */}
          <CardContent className="absolute bottom-0 left-0 p-4 w-full">
            <Badge 
              variant="secondary" 
              className={`mb-2 text-xs backdrop-blur-sm bg-white/20 border-none transition-transform duration-300 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
            >
              {tradition.category}
            </Badge>
            <h3 className="font-bold text-base sm:text-lg text-white font-headline mb-1 drop-shadow-lg transition-all duration-300">
              {tradition.name}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 flex items-center gap-1 drop-shadow-md">
              <span className="inline-block w-1 h-1 rounded-full bg-primary"></span>
              {tradition.region}
            </p>

            {/* Deskripsi singkat - Always visible on mobile & tablet, hover only on desktop */}
            <div className={`mt-3 transition-all duration-500 ${
              isHovered ? 'max-h-32 opacity-100' : 'max-h-32 opacity-100 lg:max-h-0 lg:opacity-0 overflow-hidden'
            }`}>
              <p className="text-xs text-white/80 line-clamp-3 drop-shadow-md">
                {tradition.shortDescription || tradition.fullDescription}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DialogTrigger>
  );
};

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<TraditionCategory | 'Semua'>('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTradition, setSelectedTradition] = useState<Tradition | null>(null);
  const [lovedTraditions, setLovedTraditions] = useState<Set<string>>(new Set());

  const filteredTraditions = useMemo(() => {
    return traditionsData.filter(tradition => {
      const matchesCategory = selectedCategory === 'Semua' || tradition.category === selectedCategory;
      const matchesSearch = tradition.name.toLowerCase().includes(searchTerm.toLowerCase()) || tradition.region.toLowerCase().includes(searchTerm.toLowerCase());
      const hasImage = PlaceHolderImages.find(img => img.id === tradition.imageId);
      return matchesCategory && matchesSearch && hasImage;
    });
  }, [selectedCategory, searchTerm]);

  const handleLoveToggle = (traditionId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    setLovedTraditions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(traditionId)) {
        newSet.delete(traditionId);
      } else {
        newSet.add(traditionId);
      }
      return newSet;
    });
  };

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedTradition(null)}>
      <div className="w-full">
        {/* Filters Section */}
        <div className="flex flex-col gap-4 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto px-4">
          {/* Search Bar */}
          <div className="relative w-full max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Cari tradisi atau wilayah..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11 sm:h-12 border-2 focus:border-primary transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              variant={selectedCategory === 'Semua' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Semua')}
              size="sm"
              className="text-xs sm:text-sm transition-all hover:scale-105"
            >
              Semua
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                size="sm"
                className="text-xs sm:text-sm transition-all hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results count & Loved count */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Menampilkan <span className="font-semibold text-foreground">{filteredTraditions.length}</span> tradisi
          </p>
          {lovedTraditions.size > 0 && (
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span className="font-semibold text-foreground">{lovedTraditions.size}</span> disukai
            </p>
          )}
        </div>

        {/* Masonry Gallery dengan Kotak Acak */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-5 lg:gap-6">
            {filteredTraditions.map((tradition, index) => (
              <AnimatedWrapper key={tradition.id} animationId={`gallery-card-${tradition.id}`} delay={index * 30}>
                <TraditionCard
                  tradition={tradition}
                  onSelect={() => setSelectedTradition(tradition)}
                  index={index}
                  isLoved={lovedTraditions.has(tradition.id)}
                  onLoveToggle={(e) => handleLoveToggle(tradition.id, e)}
                />
              </AnimatedWrapper>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredTraditions.length === 0 && (
          <div className="text-center py-16 sm:py-20 lg:py-24">
            <div className="inline-block p-4 rounded-full bg-muted mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-sm sm:text-base font-medium">
              Tidak ada tradisi yang ditemukan
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Coba kata kunci atau filter lain
            </p>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedTradition && (
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <VisuallyHidden>
            <DialogTitle>{selectedTradition.name}</DialogTitle>
          </VisuallyHidden>
          <TraditionDetail tradition={selectedTradition} />
        </DialogContent>
      )}
    </Dialog>
  );
}