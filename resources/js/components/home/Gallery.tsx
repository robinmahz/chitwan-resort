import { Gallery as GalleryType } from '@/types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Gallery({ galleries }: { galleries: GalleryType[] }) {
    const [activeCollection, setActiveCollection] = useState<{ name: string; images: string[] } | null>(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    let collections = galleries.map((gallery) => ({
        name: gallery.name,
        thumbnail: gallery.image_url,
        images: gallery.image_urls && gallery.image_urls.length > 0 ? gallery.image_urls : [gallery.image_url],
    }));

    if (galleries.length === 0) {
        collections = [
            {
                name: 'Resort',
                thumbnail: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200',
                images: ['https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200'],
            },
            {
                name: 'Rooms',
                thumbnail: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
                images: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200'],
            },
            {
                name: 'Pool',
                thumbnail: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200',
                images: ['https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200'],
            },
            {
                name: 'Dining',
                thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
                images: ['https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200'],
            },
            {
                name: 'Spa',
                thumbnail: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200',
                images: ['https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1200'],
            },
            {
                name: 'Views',
                thumbnail: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
                images: ['https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200'],
            },
            {
                name: 'Beach',
                thumbnail: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200',
                images: ['https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=1200'],
            },
            {
                name: 'Activities',
                thumbnail: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200',
                images: ['https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=1200'],
            },
            {
                name: 'Suites',
                thumbnail: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
                images: ['https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200'],
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
                    {collections.map((collection, index) => (
                        <div
                            key={index}
                            className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-sm border border-border bg-muted"
                            onClick={() => {
                                setActiveCollection(collection);
                                setCurrentSlideIndex(0);
                            }}
                        >
                            <img
                                src={collection.thumbnail}
                                alt={collection.name}
                                className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-8">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-bold block mb-2">
                                        Collection
                                    </span>
                                    <h4 className="font-serif text-2xl text-white font-light">
                                        {collection.name}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {activeCollection && activeCollection.images.length > 0 && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 backdrop-blur-md p-6 sm:p-12 animate-in fade-in duration-300"
                        onClick={() => setActiveCollection(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 transition-colors hover:text-secondary z-10"
                            onClick={() => setActiveCollection(null)}
                        >
                            <X size={40} strokeWidth={1} />
                        </button>

                        {/* Navigation controls */}
                        {activeCollection.images.length > 1 && (
                            <>
                                <button
                                    className="absolute left-4 sm:left-8 text-white/50 transition-colors hover:text-secondary p-2 bg-black/20 hover:bg-black/40 rounded-full z-10"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentSlideIndex((prev) => 
                                            prev === 0 ? activeCollection.images.length - 1 : prev - 1
                                        );
                                    }}
                                >
                                    <ChevronLeft size={36} strokeWidth={1.5} />
                                </button>
                                <button
                                    className="absolute right-4 sm:right-8 text-white/50 transition-colors hover:text-secondary p-2 bg-black/20 hover:bg-black/40 rounded-full z-10"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setCurrentSlideIndex((prev) => 
                                            prev === activeCollection.images.length - 1 ? 0 : prev + 1
                                        );
                                    }}
                                >
                                    <ChevronRight size={36} strokeWidth={1.5} />
                                </button>
                            </>
                        )}

                        <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
                            <div className="relative max-h-[80vh] flex items-center justify-center">
                                <img
                                    src={activeCollection.images[currentSlideIndex]}
                                    alt={`Gallery View ${currentSlideIndex + 1}`}
                                    className="max-h-[80vh] max-w-full rounded-sm object-contain shadow-2xl border border-white/10"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                            
                            {/* Caption / Image indicator */}
                            <div className="mt-4 text-center text-white/70 font-light">
                                <h4 className="font-serif text-xl text-white">{activeCollection.name}</h4>
                                {activeCollection.images.length > 1 && (
                                    <p className="text-xs uppercase tracking-widest text-secondary mt-1">
                                        {currentSlideIndex + 1} of {activeCollection.images.length}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
