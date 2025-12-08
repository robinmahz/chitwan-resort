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
        <section id="gallery" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        Gallery
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        A visual journey through our stunning resort, capturing
                        the beauty and elegance that awaits you.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                            onClick={() => setSelectedImage(image.url)}
                        >
                            <img
                                src={image.url}
                                alt={image.category}
                                className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="absolute bottom-4 left-4 text-white">
                                    <span className="text-lg font-semibold">
                                        {image.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white transition-colors hover:text-amber-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Gallery"
                            className="max-h-full max-w-full rounded-lg object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                )}

                {/* <div className="mt-12 text-center">
                    <button className="rounded-md bg-amber-800 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-900">
                        View Full Gallery
                    </button>
                </div> */}
            </div>
        </section>
    );
}
