'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { timelineData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedWrapper from '../ui/animated-wrapper';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

type TimelineMode = 'vertical' | 'grid' | 'horizontal';

// Get timeline image path
const getTimelineImage = (slug: string): string | null => {
  const fileName = imageMapping[slug];
  if (fileName) {
    return `/pictures/timeline/${fileName}`;
  }
  return null;
};

const Timeline = () => {
  const [mode, setMode] = useState<TimelineMode>('grid');
  const [isClient, setIsClient] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const slideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Load saved mode from sessionStorage on mount
  useEffect(() => {
    setIsClient(true);
    const savedMode = sessionStorage.getItem('timelineMode') as TimelineMode;
    if (savedMode && ['vertical', 'grid', 'horizontal'].includes(savedMode)) {
      setMode(savedMode);
    }
  }, []);

  // Save mode to sessionStorage whenever it changes
  useEffect(() => {
    if (isClient) {
      sessionStorage.setItem('timelineMode', mode);
    }
  }, [mode, isClient]);

  // Function to get scroll distance based on screen size
  const getScrollDistance = () => {
    if (typeof window === 'undefined') return 0;

    const width = window.innerWidth;
    // Mobile: < 640px, Tablet: 640px - 1024px, Desktop: >= 1024px
    if (width < 640) {
      // Mobile: 1 card at a time (280px card + 24px gap)
      return 280 + 24; // 304px
    } else if (width < 1024) {
      // Tablet: 2 cards at a time (350px card + 48px gap)
      return (350 + 48) * 2; // 796px
    } else {
      // Desktop: 3 cards at a time
      return (350 + 48) * 3; // 1194px
    }
  };

  // Update scroll button states
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );

    // TIDAK save scroll position saat user scroll manual
    // Hanya save saat klik timeline card
  };

  // Initialize scroll state and restore scroll position when switching to horizontal mode
  useEffect(() => {
    if (mode === 'horizontal' && isClient) {
      // Wait longer to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Restore scroll position from sessionStorage
        const savedPosition = sessionStorage.getItem('timelineScrollPosition');
        if (savedPosition) {
          const position = parseInt(savedPosition, 10);
          // Use instant scroll without animation for restore
          container.scrollLeft = position;

          // Hapus session setelah di-restore, jadi hanya 1x restore
          sessionStorage.removeItem('timelineScrollPosition');
        }

        // Update button states
        handleScroll();
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [mode, isClient]);

  // Function to start auto-scroll
  const startAutoScroll = useCallback(() => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }

    slideIntervalRef.current = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const scrollDistance = getScrollDistance();
      const maxScroll = container.scrollWidth - container.clientWidth;
      const currentScroll = container.scrollLeft;

      if (currentScroll + scrollDistance >= maxScroll) {
        // Reset ke awal dengan smooth animation
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll based on screen size (1 card for mobile, 2 for tablet, 3 for desktop)
        container.scrollBy({ left: scrollDistance, behavior: 'smooth' });
      }
    }, 4000); // Slide setiap 4 detik
  }, []);

  // Function to pause auto-scroll
  const pauseAutoScroll = useCallback(() => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
      slideIntervalRef.current = null;
    }
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    // Resume setelah 2.5 detik
    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 2500);
  }, [startAutoScroll]);

  // Auto-scroll horizontal timeline - 3 cards at a time
  useEffect(() => {
    if (mode !== 'horizontal' || !isClient) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    // Only start auto-scroll if there's no saved position (user belum pernah scroll manual/klik detail)
    const savedPosition = sessionStorage.getItem('timelineScrollPosition');

    let autoScrollTimer: NodeJS.Timeout;

    if (!savedPosition) {
      // No saved position, start auto-scroll immediately after small delay
      autoScrollTimer = setTimeout(() => {
        startAutoScroll();
      }, 500);
    } else {
      // Jika ada saved position, delay auto-scroll 4 detik untuk memberi waktu user lihat posisi
      autoScrollTimer = setTimeout(() => {
        startAutoScroll();
      }, 4000);
    }

    return () => {
      clearTimeout(autoScrollTimer);
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [mode, isClient, startAutoScroll]);

  // Scroll functions - responsive based on screen size
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = getScrollDistance();
      scrollContainerRef.current.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
      pauseAutoScroll(); // Pause auto-scroll dan resume setelah 2.5 detik
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollDistance = getScrollDistance();
      scrollContainerRef.current.scrollBy({ left: scrollDistance, behavior: 'smooth' });
      pauseAutoScroll(); // Pause auto-scroll dan resume setelah 2.5 detik
    }
  };

  return (
    <section id="timeline" className="py-12 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header with Mode Switcher */}
        <div className={cn("text-center", mode === 'horizontal' ? 'mb-6 sm:mb-8' : 'mb-10 sm:mb-16')}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-headline tracking-tight text-foreground px-2">
            Linimasa Sejarah
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-4">
            Perjalanan sejarah Indonesia dari era kerajaan hingga modern.
          </p>

          {/* Mode Switcher - Text Only */}
          <div className="mt-6 sm:mt-8 inline-flex items-center gap-1 sm:gap-2 p-1 sm:p-1.5 bg-card rounded-lg sm:rounded-xl border-2 border-border shadow-sm">
            <button
              onClick={() => setMode('vertical')}
              className={cn(
                'px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg transition-all duration-300',
                mode === 'vertical'
                  ? 'bg-primary text-primary-foreground shadow-md scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
              title="Tampilan Vertikal"
            >
              Vertikal
            </button>
            <button
              onClick={() => setMode('grid')}
              className={cn(
                'px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg transition-all duration-300',
                mode === 'grid'
                  ? 'bg-primary text-primary-foreground shadow-md scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
              title="Tampilan Grid"
            >
              Grid
            </button>
            <button
              onClick={() => setMode('horizontal')}
              className={cn(
                'px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg transition-all duration-300',
                mode === 'horizontal'
                  ? 'bg-primary text-primary-foreground shadow-md scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              )}
              title="Tampilan Horizontal"
            >
              Horizontal
            </button>
          </div>
        </div>

        {/* Vertical Timeline (Original) */}
        {mode === 'vertical' && (
          <div className="relative">
            {/* Central line */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

            <div className="space-y-8 sm:space-y-12">
              {timelineData.map((event, index) => {
                const isRight = index % 2 !== 0;
                const timelineImage = getTimelineImage(event.slug);

                return (
                  <div
                    key={event.id}
                    className={cn('relative md:grid md:grid-cols-2 md:gap-x-8 items-center')}
                  >
                    {/* Dot on the timeline */}
                    <div className="absolute left-4 sm:left-6 md:left-1/2 top-1/2 -translate-y-1/2 z-10 h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-primary -translate-x-1/2 ring-2 sm:ring-4 ring-background" />

                    {/* Card */}
                    <AnimatedWrapper
                      animationId={`timeline-vertical-card-${index}`}
                      className={cn(
                        'pl-10 sm:pl-14 md:pl-0',
                        isRight ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'
                      )}
                    >
                      <Link href={`/timeline/${event.slug}`}>
                        <Card
                          className={`group shadow-lg hover:shadow-primary/20 transition-shadow duration-300 border-2 border-border hover:border-primary/30 ${event.colorClass}`}
                        >
                        <CardHeader className="p-4 sm:p-6">
                          <div
                            className={cn(
                              'flex flex-col gap-1',
                              isRight ? '' : 'md:items-end'
                            )}
                          >
                            <CardTitle
                              className={cn(
                                'font-headline text-lg sm:text-xl lg:text-2xl',
                                isRight ? 'text-left' : 'md:text-right'
                              )}
                            >
                              {event.title}
                            </CardTitle>
                            <p
                              className={cn(
                                'text-xs sm:text-sm italic text-muted-foreground',
                                isRight ? 'text-left' : 'md:text-right'
                              )}
                            >
                              {event.year}
                            </p>
                          </div>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 pt-0">
                          {timelineImage && (
                            <div className="overflow-hidden rounded-md aspect-video relative">
                              <Image
                                src={timelineImage}
                                alt={event.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          )}
                          <p className={cn("text-muted-foreground text-sm sm:text-base", isRight ? 'text-left' : 'md:text-right')}>
                            {event.description}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedWrapper>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Grid Timeline - Berurutan ke kanan */}
        {mode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {timelineData.map((event, index) => {
              const timelineImage = getTimelineImage(event.slug);

              return (
                <AnimatedWrapper key={event.id} animationId={`timeline-grid-card-${index}`} delay={index * 50}>
                  <Link href={`/timeline/${event.slug}`}>
                    <Card className={`group shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-border hover:border-primary/50 h-full flex flex-col ${event.colorClass}`}>
                      {timelineImage && (
                        <div className="overflow-hidden relative aspect-[4/3]">
                          <Image
                            src={timelineImage}
                            alt={event.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {/* Year Badge */}
                          <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border shadow-lg">
                            <p className="text-sm italic text-foreground">
                              {event.year}
                            </p>
                          </div>
                        </div>
                      )}
                      <CardContent className="p-4 sm:p-5 flex-1 flex flex-col">
                        <h3 className="font-headline text-base sm:text-lg font-semibold mb-2 text-foreground">
                          {event.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 flex-1">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </AnimatedWrapper>
              );
            })}
          </div>
        )}

        {/* Horizontal Timeline */}
        {mode === 'horizontal' && (
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={cn(
                'absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-background/80 backdrop-blur-sm border-2 border-border shadow-lg transition-all duration-300',
                canScrollLeft
                  ? 'opacity-100 hover:bg-primary hover:text-primary-foreground hover:border-primary'
                  : 'opacity-0 pointer-events-none'
              )}
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={cn(
                'absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 sm:p-2 rounded-full bg-background/80 backdrop-blur-sm border-2 border-border shadow-lg transition-all duration-300',
                canScrollRight
                  ? 'opacity-100 hover:bg-primary hover:text-primary-foreground hover:border-primary'
                  : 'opacity-0 pointer-events-none'
              )}
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Horizontal scrollable container - Responsive */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScroll}
              className="overflow-x-auto pb-6 sm:pb-8 scrollbar-hide mx-auto"
              style={{ maxWidth: 'min(100%, calc(3 * 350px + 2 * 48px + 64px))' }}
            >
              <div className="relative min-w-max px-4 sm:px-8">
                {/* Horizontal line */}
                <div className="absolute top-8 sm:top-12 left-0 right-0 h-0.5 bg-border" />

                {/* Timeline items */}
                <div className="flex gap-6 sm:gap-12 items-start" style={{ width: 'fit-content' }}>
                  {timelineData.map((event, index) => {
                    const timelineImage = getTimelineImage(event.slug);

                    return (
                      <div key={event.id} className="relative flex flex-col items-center">
                        {/* Dot */}
                        <div className="h-8 sm:h-12 flex items-end">
                          <div className="h-4 w-4 sm:h-6 sm:w-6 rounded-full bg-primary ring-2 sm:ring-4 ring-background border-2 border-background shadow-lg" />
                        </div>

                        {/* Card */}
                        <AnimatedWrapper animationId={`timeline-horizontal-card-${index}`} className="mt-3 sm:mt-4">
                          <Link
                            href={`/timeline/${event.slug}`}
                            onClick={() => {
                              // Save current scroll position before navigation
                              if (scrollContainerRef.current) {
                                sessionStorage.setItem('timelineScrollPosition', scrollContainerRef.current.scrollLeft.toString());
                              }
                            }}
                          >
                          <Card className={`group w-[280px] sm:w-[350px] shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-border hover:border-primary/50 ${event.colorClass}`}>
                            {timelineImage && (
                              <div className="overflow-hidden relative aspect-video">
                                <Image
                                  src={timelineImage}
                                  alt={event.title}
                                  fill
                                  sizes="350px"
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              </div>
                            )}
                            <CardHeader className="pb-2 sm:pb-3 p-4">
                              <div className="flex items-center justify-between gap-2">
                                <div className="bg-primary/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md">
                                  <p className="text-xs font-bold text-primary">
                                    {event.year}
                                  </p>
                                </div>
                              </div>
                              <CardTitle className="font-headline text-base mt-2">
                                {event.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0 p-4">
                              <p className="text-xs text-muted-foreground line-clamp-3">
                                {event.description}
                              </p>
                            </CardContent>
                          </Card>
                        </Link>
                      </AnimatedWrapper>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
