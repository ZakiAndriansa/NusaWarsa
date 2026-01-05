import { Skeleton } from "./skeleton";

/**
 * Skeleton untuk Hero Section
 */
export function HeroSkeleton() {
  return (
    <div className="relative h-screen">
      <Skeleton className="absolute inset-0" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-4">
          <Skeleton className="h-16 w-3/4" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-5/6" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton untuk Section dengan kartu-kartu (Timeline, Gallery, dll)
 */
export function CardSectionSkeleton() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-48 w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Skeleton untuk halaman Landing Page lengkap
 */
export function LandingPageSkeleton() {
  return (
    <div className="flex flex-col">
      <HeroSkeleton />
      <CardSectionSkeleton />
      <CardSectionSkeleton />
      <CardSectionSkeleton />
    </div>
  );
}

/**
 * Skeleton untuk Detail Page (Explore/Timeline)
 */
export function DetailPageSkeleton() {
  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Skeleton className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Breadcrumb */}
          <div className="flex gap-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-4" />
            <Skeleton className="h-5 w-32" />
          </div>

          {/* Title */}
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-48" />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>

          {/* Chat Section */}
          <div className="mt-12">
            <Skeleton className="h-10 w-64 mb-4" />
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Skeleton untuk Section dengan teks dan gambar
 */
export function ContentSectionSkeleton() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-12 w-40 mt-6" />
          </div>
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}

/**
 * Skeleton untuk Quiz/Scenarios Page
 */
export function QuizSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Quiz Card */}
        <div className="border rounded-lg p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-6 w-full" />
          </div>

          {/* Options */}
          <div className="space-y-3">
            <Skeleton className="h-14 w-full rounded-md" />
            <Skeleton className="h-14 w-full rounded-md" />
            <Skeleton className="h-14 w-full rounded-md" />
            <Skeleton className="h-14 w-full rounded-md" />
          </div>

          {/* Button */}
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    </div>
  );
}
