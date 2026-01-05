import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
}

/**
 * Skeleton untuk gambar dengan berbagai aspect ratio
 */
export function ImageSkeleton({ className, aspectRatio = "auto" }: ImageSkeletonProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: ""
  };

  return (
    <Skeleton
      className={cn(
        "w-full",
        aspectClasses[aspectRatio],
        className
      )}
    />
  );
}

/**
 * Skeleton untuk gambar hero dengan gradient overlay
 */
export function HeroImageSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Skeleton className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent z-10" />
    </div>
  );
}

/**
 * Skeleton untuk avatar/gambar bulat
 */
export function AvatarSkeleton({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-12 h-12 sm:w-12 sm:h-12",
    md: "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20",
    lg: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
  };

  return (
    <Skeleton
      className={cn(
        "rounded-full flex-shrink-0",
        sizeClasses[size],
        className
      )}
    />
  );
}

/**
 * Skeleton untuk card dengan gambar
 */
export function ImageCardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-3", className)}>
      <ImageSkeleton aspectRatio="video" className="rounded-md" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
    </div>
  );
}
