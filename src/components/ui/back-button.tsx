'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  href?: string;
  useRouterBack?: boolean;
}

export default function BackButton({ href, useRouterBack = false }: BackButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (useRouterBack) {
      e.preventDefault();
      router.back();
    }
  };

  const content = (
    <div className="group">
      <ArrowLeft className="h-6 w-6 sm:h-7 sm:w-7 text-foreground/70 hover:text-foreground transition-colors cursor-pointer" />
    </div>
  );

  // Navbar height: h-16 (64px) untuk mobile, h-18 (72px) untuk sm+
  // Posisi di bawah navbar dengan sedikit gap
  // Mobile: 64px + 16px gap = 80px = top-20
  // SM+: 72px + 16px gap = 88px = sm:top-[88px]
  // Horizontal: sejajar dengan logo navbar (px-3 + ml-2 container)
  // Mobile: px-3 (12px) + ml-2 (8px) = 20px = left-5
  // SM+: px-4 (16px) + ml-2 (8px) = 24px = sm:left-6
  // LG+: px-8 (32px) = lg:left-8 (center container)
  const wrapperClass = "fixed top-20 sm:top-[88px] left-5 sm:left-6 lg:left-8 xl:left-[calc((100vw-80rem)/2+2rem)] z-50";

  if (useRouterBack || !href) {
    return (
      <button onClick={handleClick} className={wrapperClass} aria-label="Kembali">
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={wrapperClass} aria-label="Kembali">
      {content}
    </Link>
  );
}
