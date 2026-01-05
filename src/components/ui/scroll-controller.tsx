"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Komponen untuk mengontrol smooth scroll behavior
 * - Smooth scroll hanya aktif untuk anchor links (#)
 * - Disable smooth scroll saat navigasi antar halaman
 * - Disable scroll spy saat smooth scrolling untuk mencegah navbar jumping
 * - Re-enable scroll spy 500ms setelah scroll benar-benar selesai
 */
export default function ScrollController() {
  const pathname = usePathname();
  const scrollEndTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isSmoothScrollingRef = useRef(false);

  useEffect(() => {
    // Disable smooth scroll saat berpindah halaman
    const html = document.documentElement;
    html.classList.remove('smooth-scroll');

    // Handler untuk scroll end - re-enable scroll spy setelah scroll selesai
    const handleScrollEnd = () => {
      if (!isSmoothScrollingRef.current) return;

      // Clear timeout sebelumnya jika ada
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
      }

      // Tunggu 500ms setelah scroll benar-benar berhenti
      scrollEndTimeoutRef.current = setTimeout(() => {
        html.classList.remove('smooth-scroll');
        window.dispatchEvent(new CustomEvent('scroll-spy-enable'));
        isSmoothScrollingRef.current = false;
      }, 500);
    };

    // Enable smooth scroll untuk anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        // Extract section ID dari hash (remove the '#')
        const sectionId = anchor.hash.substring(1);

        // Set flag bahwa sedang smooth scrolling
        isSmoothScrollingRef.current = true;

        // Jika anchor link (href="#something")
        html.classList.add('smooth-scroll');

        // Dispatch event untuk set active section langsung dan disable scroll spy
        window.dispatchEvent(new CustomEvent('scroll-spy-set-active', {
          detail: { sectionId }
        }));
        window.dispatchEvent(new CustomEvent('scroll-spy-disable'));
      }
    };

    document.addEventListener('click', handleAnchorClick, true);

    // Listen untuk scroll event untuk mendeteksi kapan scroll berhenti
    // Gunakan scroll event karena scrollend belum fully supported di semua browser
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (!isSmoothScrollingRef.current) return;

      // Clear timeout sebelumnya
      clearTimeout(scrollTimeout);

      // Set timeout baru - jika tidak ada scroll selama 100ms, anggap scroll selesai
      scrollTimeout = setTimeout(handleScrollEnd, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick, true);
      window.removeEventListener('scroll', handleScroll);
      if (scrollEndTimeoutRef.current) {
        clearTimeout(scrollEndTimeoutRef.current);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [pathname]);

  return null;
}
