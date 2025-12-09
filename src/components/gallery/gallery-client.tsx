'use client';

import { useState, useMemo } from 'react';
import { traditionsData } from '@/lib/data';
import type { Tradition, TraditionCategory } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import TraditionDetail from './tradition-detail';
import AnimatedWrapper from '../ui/animated-wrapper';
import { Search } from 'lucide-react';

const categories: TraditionCategory[] = ['Tarian', 'Kerajinan', 'Upacara', 'Kuliner', 'Musik'];

const TraditionCard = ({ tradition, onSelect }: { tradition: Tradition, onSelect: () => void }) => {
  const image = PlaceHolderImages.find(img => img.id === tradition.imageId) || PlaceHolderImages.find(img => img.id.startsWith('default-tradition'));

  return (
    <DialogTrigger asChild>
      <div onClick={onSelect} className="cursor-pointer">
        <Card className="group overflow-hidden relative block break-inside-avoid shadow-lg hover:shadow-primary/20 transition-all duration-300">
          {image && (
            <Image
              src={image.imageUrl}
              alt={tradition.name}
              width={400}
              height={400} // Removed Math.random() and set a fixed height
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <CardContent className="absolute bottom-0 left-0 p-4 w-full">
            <Badge variant="secondary" className="mb-2">{tradition.category}</Badge>
            <h3 className="font-bold text-lg text-white font-headline">{tradition.name}</h3>
            <p className="text-sm text-white/80">{tradition.region}</p>
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

  const filteredTraditions = useMemo(() => {
    return traditionsData.filter(tradition => {
      const matchesCategory = selectedCategory === 'Semua' || tradition.category === selectedCategory;
      const matchesSearch = tradition.name.toLowerCase().includes(searchTerm.toLowerCase()) || tradition.region.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <Dialog onOpenChange={(isOpen) => !isOpen && setSelectedTradition(null)}>
      <div>
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
            <div className="relative w-full md:w-1/3">
                <Input 
                    type="text"
                    placeholder="Cari tradisi atau wilayah..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <Button
              variant={selectedCategory === 'Semua' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('Semua')}
            >
              Semua
            </Button>
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div
            className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
        >
          {filteredTraditions.map((tradition, index) => (
            <AnimatedWrapper key={tradition.id} delay={index * 50}>
                <TraditionCard tradition={tradition} onSelect={() => setSelectedTradition(tradition)} />
            </AnimatedWrapper>
          ))}
        </div>

        {filteredTraditions.length === 0 && (
            <div className="text-center py-20">
                <p className="text-muted-foreground">Tidak ada tradisi yang ditemukan. Coba kata kunci atau filter lain.</p>
            </div>
        )}

      </div>
      {selectedTradition && (
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <TraditionDetail tradition={selectedTradition} />
        </DialogContent>
      )}
    </Dialog>
  );
}
