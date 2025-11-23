import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CarouselProps {
    images: string[];
    autoPlay?: boolean;
    interval?: number;
}

export default function Carousel({
    images,
    autoPlay = true,
    interval = 5000,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative h-full w-full overflow-hidden">
            <div className="relative h-full w-full">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                            index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
            </div>

            <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-4 z-30 -translate-y-1/2 transform rounded-full bg-white/30 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/50"
            >
                <ChevronLeft size={32} className="text-white" />
            </button>

            <button
                onClick={goToNext}
                className="absolute top-1/2 right-4 z-30 -translate-y-1/2 transform rounded-full bg-white/30 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/50"
            >
                <ChevronRight size={32} className="text-white" />
            </button>

            <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 transform space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${
                            index === currentIndex
                                ? 'w-8 bg-white'
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
