import GalleryClient from "@/components/gallery/gallery-client";
import AnimatedWrapper from "@/components/ui/animated-wrapper";

export default function GallerySection() {
    return (
        <section id="galeri" className="w-full py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <AnimatedWrapper animationId="gallery-header">
                    <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-headline tracking-tight text-foreground">
                            Galeri Tradisi Hidup
                        </h2>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-muted-foreground max-w-3xl mx-auto px-4">
                            Selami kekayaan warisan budaya Indonesia. Gunakan filter untuk menemukan tradisi berdasarkan kategori atau wilayah asal.
                        </p>
                    </div>
                </AnimatedWrapper>
                <GalleryClient />
            </div>
        </section>
    );
}
