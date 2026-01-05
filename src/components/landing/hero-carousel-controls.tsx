'use client';

import { useState, useEffect } from 'react';

interface HeroCarouselControlsProps {
  totalImages: number;
  onImageChange: (index: number) => void;
}

export function HeroCarouselControls({ totalImages, onImageChange }: HeroCarouselControlsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const nextIndex = (prev + 1) % totalImages;
        onImageChange(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [totalImages, onImageChange]);

  const handleDotClick = (index: number) => {
    if (isTransitioning || index === currentImageIndex) return;
    setIsTransitioning(true);
    setCurrentImageIndex(index);
    onImageChange(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  return (
    <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
      {Array.from({ length: totalImages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleDotClick(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentImageIndex
              ? 'w-8 bg-primary'
              : 'w-2 bg-white/50 hover:bg-white/80'
          }`}
          aria-label={`Go to background ${index + 1}`}
        />
      ))}
    </div>
  );
}
