'use client';

import { useEffect, useState } from 'react';

interface PageEntranceAnimationProps {
  children: React.ReactNode;
}

export default function PageEntranceAnimation({ children }: PageEntranceAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Cek apakah animasi sudah pernah ditampilkan dalam session ini
    const hasSeenAnimation = sessionStorage.getItem('home-entrance-animation-seen');

    if (hasSeenAnimation) {
      // Jika sudah pernah dilihat, langsung tampilkan tanpa animasi
      setShouldAnimate(false);
      setIsVisible(true);
    } else {
      // Jika belum pernah, tampilkan dengan animasi
      setShouldAnimate(true);
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Tandai bahwa animasi sudah ditampilkan
        sessionStorage.setItem('home-entrance-animation-seen', 'true');
      }, 50);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div
      className={`${
        shouldAnimate
          ? `transition-all duration-1000 ease-out ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`
          : 'opacity-100 translate-y-0'
      }`}
    >
      {children}
    </div>
  );
}
