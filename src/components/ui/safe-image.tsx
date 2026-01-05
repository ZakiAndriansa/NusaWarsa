'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string;
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
}: SafeImageProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fallback placeholder image
  const fallbackSrc = '/placeholder-image.jpg';

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-muted ${className}`}
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
    <div className={`relative ${loading ? 'animate-pulse bg-muted' : ''}`}>
      <Image
        src={error ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className={className}
        priority={priority}
        sizes={sizes}
        onError={() => setError(true)}
        onLoad={() => setLoading(false)}
        loading={priority ? undefined : 'lazy'}
      />
    </div>
  );
}
