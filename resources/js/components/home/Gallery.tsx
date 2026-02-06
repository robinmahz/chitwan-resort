import { Gallery as GalleryType } from '@/types';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function Gallery({ galleries }: { galleries: GalleryType[] }) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    let images = galleries.map((gallery) => ({
        url: gallery.image_url,
        category: gallery.name,
    }));

    if (galleries.length === 0) {

        images = [
            {
                url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
                category: 'Resort',
            },
            {
                url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
                category: 'Rooms',
            },
            {
                url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200',
                category: 'Pool',
            },
            {
                url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
                category: 'Dining',
            },
            {
                url: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200',
                category: 'Spa',
            },
            {
                url: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
                category: 'Views',
            },
            {
                url: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
                category: 'Beach',
            },
            {
                url: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200',
                category: 'Activities',
            },
            {
                url: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
                category: 'Suites',
            },
        ];
    }

    return (
        <section id="gallery" className="bg-background py-32 border-b border-border/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-24 text-center">
                    <h2 className="font-serif mb-6 text-4xl font-light text-foreground md:text-5xl">
                        Vistas of Narayani
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light">
                        A visual exploration of our sanctuary, where the river meets the wild, 
                        and luxury finds its home in nature.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-sm border border-border bg-muted"
                            onClick={() => setSelectedImage(image.url)}
                        >
                            <img
                                src={image.url}
                                alt={image.category}
                                className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-8">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold block mb-2">
                                        Collection
                                    </span>
                                    <h4 className="font-serif text-2xl text-white font-light">
                                        {image.category}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-md p-6 sm:p-12 animate-in fade-in duration-300"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 transition-colors hover:text-secondary"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={40} strokeWidth={1} />
                        </button>
                        <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
                            <img
                                src={selectedImage}
                                alt="Gallery View"
                                className="max-h-full max-w-full rounded-sm object-contain shadow-2xl border border-white/10"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
