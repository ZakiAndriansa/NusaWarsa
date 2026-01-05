'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';
import { Skeleton } from './skeleton';
import { cn } from '@/lib/utils';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  showSkeleton?: boolean;
}

export default function SafeImage({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  priority = false,
  sizes,
  quality = 75,
  showSkeleton = true,
}: SafeImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fallback placeholder image
  const fallbackSrc = '/placeholder-image.jpg';

  if (error) {
    return (
      <div
        className={cn('flex items-center justify-center bg-muted', className)}
        style={fill ? undefined : { width, height }}
      >
        <div className="text-center text-muted-foreground">
          <ImageOff className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p className="text-xs">Gambar tidak tersedia</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {showSkeleton && loading && (
        <Skeleton
          className={cn('absolute inset-0 z-10', fill ? 'w-full h-full' : '')}
          style={fill ? undefined : { width, height }}
        />
      )}
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={cn(className, loading && showSkeleton ? 'opacity-0' : 'opacity-100 transition-opacity duration-300')}
        priority={priority}
        sizes={sizes}
        quality={quality}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
      />
    </div>
  );
}
