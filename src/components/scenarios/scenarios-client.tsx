'use client';

import { useState, useMemo } from 'react';
import { culturalScenarios } from '@/lib/scenarios-data';
import type { CulturalScenario } from '@/lib/types-user';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Users,
  Heart,
  Calendar,
  ChevronRight,
  Search,
  Filter,
  Zap,
  GraduationCap,
  Star
} from 'lucide-react';
import AnimatedWrapper from '../ui/animated-wrapper';
import Link from 'next/link';
import ChatCulturalEmergency from './chat-cultural-emergency';

type CategoryFilter = CulturalScenario['category'] | 'all';
type DifficultyFilter = CulturalScenario['difficulty'] | 'all';

export default function ScenariosClient() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('all');

  const filteredScenarios = useMemo(() => {
    return culturalScenarios.filter(scenario => {
      const matchesSearch =
        scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scenario.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scenario.region.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = categoryFilter === 'all' || scenario.category === categoryFilter;
      const matchesDifficulty = difficultyFilter === 'all' || scenario.difficulty === difficultyFilter;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchTerm, categoryFilter, difficultyFilter]);

  const getCategoryIcon = (category: CulturalScenario['category']) => {
    const icons = {
      wedding: Users,
      funeral: Heart,
      religious: Star,
      festival: Calendar,
      daily_life: GraduationCap
    };
    return icons[category] || Users;
  };

  const getCategoryLabel = (category: CulturalScenario['category']) => {
    const labels = {
      wedding: 'Pernikahan',
      funeral: 'Pemakaman',
      religious: 'Keagamaan',
      festival: 'Festival',
      daily_life: 'Kehidupan Sehari-hari'
    };
    return labels[category] || category;
  };

  const getDifficultyLabel = (difficulty: CulturalScenario['difficulty']) => {
    const labels = {
      beginner: 'Pemula',
      intermediate: 'Menengah',
      advanced: 'Mahir'
    };
    return labels[difficulty];
  };

  const getDifficultyColor = (difficulty: CulturalScenario['difficulty']) => {
    const colors = {
      beginner: 'bg-green-500',
      intermediate: 'bg-yellow-500',
      advanced: 'bg-red-500'
    };
    return colors[difficulty];
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
      {/* Header */}
      <AnimatedWrapper animationId="scenarios-header">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold mb-3 sm:mb-4">
            Budaya Bertemu AI
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Panduan praktis langkah-demi-langkah untuk menghadapi berbagai situasi budaya Indonesia.
            Belajar etika, tata cara, dan ucapan yang tepat.
          </p>
        </div>
      </AnimatedWrapper>

      {/* Search & Filter */}
      <div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
        <AnimatedWrapper delay={200} animationId="scenarios-search">
          <div className="flex gap-2 sm:gap-3">
            {/* Filter Dropdown */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 sm:h-11 w-10 sm:w-11 shrink-0">
                  <Filter className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="w-[calc(100vw-2rem)] sm:w-[480px] p-3 sm:p-4 overflow-visible"
              >
                {/* Arrow Pointer */}
                <div className="absolute -top-2 left-4 w-4 h-4 bg-background border-l border-t border-border rotate-45" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
                  {/* Category Filter */}
                  <div>
                    <DropdownMenuLabel className="text-xs text-muted-foreground px-0 mb-2">
                      Kategori
                    </DropdownMenuLabel>
                    <DropdownMenuRadioGroup value={categoryFilter} onValueChange={(value) => setCategoryFilter(value as CategoryFilter)}>
                      <DropdownMenuRadioItem
                        value="all"
                        onSelect={(e) => e.preventDefault()}
                        className={categoryFilter === 'all' ? 'bg-primary/10' : ''}
                      >
                        Semua Kategori
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value="wedding"
                        onSelect={(e) => e.preventDefault()}
                        className={categoryFilter === 'wedding' ? 'bg-primary/10' : ''}
                      >
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3" />
                          <span>Pernikahan</span>
                        </div>
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value="funeral"
                        onSelect={(e) => e.preventDefault()}
                        className={categoryFilter === 'funeral' ? 'bg-primary/10' : ''}
                      >
                        <div className="flex items-center gap-2">
                          <Heart className="h-3 w-3" />
                          <span>Pemakaman</span>
                        </div>
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value="religious"
                        onSelect={(e) => e.preventDefault()}
                        className={categoryFilter === 'religious' ? 'bg-primary/10' : ''}
                      >
                        <div className="flex items-center gap-2">
                          <Star className="h-3 w-3" />
                          <span>Keagamaan</span>
                        </div>
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </div>

                  {/* Vertical Separator - Hidden on mobile */}
                  <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

                  {/* Horizontal Separator - Mobile only */}
                  <div className="sm:hidden w-full h-px bg-border" />

                  {/* Difficulty Filter */}
                  <div>
                    <DropdownMenuLabel className="text-xs text-muted-foreground px-0 mb-2">
                      Tingkat Kesulitan
                    </DropdownMenuLabel>
                    <DropdownMenuRadioGroup value={difficultyFilter} onValueChange={(value) => setDifficultyFilter(value as DifficultyFilter)}>
                      <DropdownMenuRadioItem
                        value="all"
                        onSelect={(e) => e.preventDefault()}
                        className={difficultyFilter === 'all' ? 'bg-primary/10' : ''}
                      >
                        Semua Tingkat
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value="beginner"
                        onSelect={(e) => e.preventDefault()}
                        className={difficultyFilter === 'beginner' ? 'bg-primary/10' : ''}
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span>Pemula</span>
                        </div>
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value="intermediate"
                        onSelect={(e) => e.preventDefault()}
                        className={difficultyFilter === 'intermediate' ? 'bg-primary/10' : ''}
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-yellow-500" />
                          <span>Menengah</span>
                        </div>
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem
                        value="advanced"
                        onSelect={(e) => e.preventDefault()}
                        className={difficultyFilter === 'advanced' ? 'bg-primary/10' : ''}
                      >
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-red-500" />
                          <span>Mahir</span>
                        </div>
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Input */}
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Cari panduan situasi budaya..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 sm:pl-10 h-10 sm:h-11 text-sm sm:text-base"
              />
              <Search className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </AnimatedWrapper>
      </div>

      {/* Results Count */}
      <div className="max-w-6xl mx-auto mb-4 sm:mb-5 md:mb-6">
        <p className="text-xs sm:text-sm text-muted-foreground">
          Menampilkan <span className="font-semibold text-foreground">{filteredScenarios.length}</span> panduan
        </p>
      </div>

      {/* Scenarios Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredScenarios.map((scenario, index) => {
            const Icon = getCategoryIcon(scenario.category);

            return (
              <div key={scenario.id}>
                <AnimatedWrapper delay={index * 100} animationId={`scenario-card-${scenario.id}`}>
                  <Card className="h-full flex flex-col hover:shadow-xl transition-shadow border-2 hover:border-primary/50">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="flex gap-1">
                      <Badge variant="outline" className="text-[10px] sm:text-xs">
                        {getCategoryLabel(scenario.category)}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl mb-1.5 sm:mb-2">{scenario.title}</CardTitle>
                  <CardDescription className="line-clamp-2 text-xs sm:text-sm">
                    {scenario.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between p-4 sm:p-6 pt-0">
                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span>{scenario.region}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${getDifficultyColor(scenario.difficulty)}`} />
                      <span className="text-xs sm:text-sm font-medium">
                        {getDifficultyLabel(scenario.difficulty)}
                      </span>
                    </div>
                    <div className="pt-2 border-t">
                      <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2">Yang akan Anda pelajari:</p>
                      <ul className="space-y-1">
                        {scenario.learningObjectives.slice(0, 2).map((obj, i) => (
                          <li key={i} className="text-[10px] sm:text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href={`/scenarios/${scenario.id}`} className="w-full">
                    <Button className="w-full gap-2 text-sm sm:text-base h-9 sm:h-10">
                      Pelajari Panduan
                      <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
                </AnimatedWrapper>
              </div>
            );
          })}
        </div>
      </div>

      {/* Empty State */}
      {filteredScenarios.length === 0 && (
        <div className="text-center py-12 sm:py-16">
          <div className="inline-block p-3 sm:p-4 rounded-full bg-muted mb-3 sm:mb-4">
            <Search className="h-6 w-6 sm:h-8 sm:w-8 text-muted-foreground" />
          </div>
          <h3 className="font-semibold mb-2 text-base sm:text-lg">Tidak Ada Panduan Ditemukan</h3>
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 px-4">
            Coba kata kunci atau filter lain
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setCategoryFilter('all');
              setDifficultyFilter('all');
            }}
            className="text-sm sm:text-base"
          >
            Reset Filter
          </Button>
        </div>
      )}

      {/* Cultural Emergency Assistant */}
      <div className="max-w-4xl mx-auto mt-12 sm:mt-14 md:mt-16">
        <AnimatedWrapper delay={400} animationId="scenarios-chat-assistant">
          <ChatCulturalEmergency />
        </AnimatedWrapper>
      </div>

    </div>
  );
}
