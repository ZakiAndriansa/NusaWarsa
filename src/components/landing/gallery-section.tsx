import GalleryClient from "@/components/gallery/gallery-client";
import AnimatedWrapper from "@/components/ui/animated-wrapper";

export default function GallerySection() {
    return (
        <section id="galeri" className="container py-20 sm:py-24">
            <AnimatedWrapper>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold font-headline tracking-tight text-foreground sm:text-6xl">
                        Galeri Tradisi Hidup
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                        Selami kekayaan warisan budaya Indonesia. Gunakan filter untuk menemukan tradisi berdasarkan kategori atau wilayah asal.
                    </p>
                </div>
            </AnimatedWrapper>
            <GalleryClient />
        </section>
    );
}
