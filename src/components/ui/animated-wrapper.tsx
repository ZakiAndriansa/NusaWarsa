"use client";

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /**
   * Unique ID untuk track animasi (opsional)
   * Jika diberikan, animasi hanya akan berjalan sekali per session
   */
  animationId?: string;
  /**
   * Paksa animasi untuk selalu berjalan (default: false)
   */
  forceAnimate?: boolean;
}

const AnimatedWrapper = ({
  children,
  className,
  delay = 0,
  animationId,
  forceAnimate = false
}: AnimatedWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  // Check jika animasi sudah pernah dijalankan
  useEffect(() => {
    if (animationId && !forceAnimate) {
      const hasAnimated = sessionStorage.getItem(`animated-${animationId}`);
      if (hasAnimated === 'true') {
        // Jika sudah pernah animasi, langsung tampilkan tanpa animasi
        setShouldAnimate(false);
        setIsVisible(true);
        return;
      }
    }
  }, [animationId, forceAnimate]);

  useEffect(() => {
    // Jika tidak perlu animasi, skip observer
    if (!shouldAnimate) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);

          // Simpan ke sessionStorage bahwa animasi sudah dijalankan
          if (animationId) {
            sessionStorage.setItem(`animated-${animationId}`, 'true');
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [animationId, shouldAnimate]);

  return (
    <div
      ref={ref}
      className={cn(
        shouldAnimate && 'transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : shouldAnimate ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0',
        className
      )}
      style={shouldAnimate ? { transitionDelay: `${delay}ms` } : undefined}
      suppressHydrationWarning
    >
      {children}
    </div>
  );
};

export default AnimatedWrapper;
