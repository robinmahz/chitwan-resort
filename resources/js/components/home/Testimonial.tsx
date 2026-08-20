import { Testimonial } from '@/types';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials({
    testimonials,
}: {
    testimonials: Testimonial[];
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (testimonials.length === 0) {
        testimonials = [
            {
                name: 'Sarah Mitchell',
                position: 'Travel Enthusiast',
                image_url:
                    'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=400',
                description:
                    "Chitwan Resort exceeded all my expectations. The attention to detail, exceptional service, and stunning views made this the most memorable vacation of my life. I'm already planning my return!",
                rating: 5,
            },
            {
                name: 'James Rodriguez',
                position: 'Business Executive',
                image_url:
                    'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
                description:
                    'Perfect blend of relaxation and adventure. The dining was world-class, the rooms were luxurious, and the staff made every moment special. This is now my go-to destination for corporate retreats.',
                rating: 5,
            },
            {
                name: 'Emma Thompson',
                position: 'Wellness Coach',
                image_url:
                    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
                description:
                    'The wellness programs are phenomenal. From sunrise yoga to the holistic spa treatments, every experience was designed with genuine care. This resort truly understands the art of rejuvenation.',
                rating: 5,
            },
            {
                name: 'David Chen',
                position: 'Photographer',
                image_url:
                    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
                description:
                    "As a photographer, I've visited many resorts. This one is extraordinary. The landscapes are breathtaking, and the opportunities for capturing authentic moments are endless. Highly recommended!",
                rating: 5,
            },
            {
                name: 'Lisa Anderson',
                position: 'Honeymooner',
                image_url:
                    'https://images.pexels.com/photos/1065025/pexels-photo-1065025.jpeg?auto=compress&cs=tinysrgb&w=400',
                description:
                    'Our honeymoon was absolutely magical. The private beach access, romantic dining, and personalized service made it unforgettable. We felt like royalty from the moment we arrived!',
                rating: 5,
            },
        ];
    }

    const goToPrevious = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        );
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const visibleTestimonials = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
    ];

    return (
        <section className="border-y border-border/50 bg-primary/5 py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="mb-6 font-serif text-4xl font-light text-foreground md:text-5xl">
                        Guest Narratives
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
                        Discover the cherished memories and heartfelt stories
                        from our esteemed guests at Narayani Vista.
                    </p>
                </div>

                <div className="relative">
                    <div className="mb-12 grid gap-10 md:grid-cols-3">
                        {visibleTestimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="transform rounded-sm border border-border bg-card p-10 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="mb-8 flex items-center space-x-4">
                                    <div className="relative">
                                        <img
                                            src={testimonial.image_url}
                                            alt={testimonial.name}
                                            className="h-16 w-16 rounded-full border border-secondary/30 object-cover p-0.5"
                                        />
                                        <div className="absolute -right-1 -bottom-1 rounded-full border-2 border-background bg-secondary p-1">
                                            <Star
                                                size={10}
                                                className="fill-primary text-primary"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg font-medium text-foreground">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                                            {testimonial.position}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-6 flex space-x-1">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className="fill-secondary text-secondary"
                                            />
                                        ),
                                    )}
                                </div>

                                <p className="text-lg leading-relaxed font-light text-muted-foreground italic">
                                    "{testimonial.description}"
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mx-auto mt-12 flex max-w-sm items-center justify-between px-4">
                        <button
                            onClick={goToPrevious}
                            className="group rounded-full border border-border bg-background p-3 text-primary transition-all duration-300 hover:bg-muted hover:text-secondary"
                        >
                            <ChevronLeft
                                size={24}
                                className="transition-transform group-hover:-translate-x-0.5"
                            />
                        </button>

                        <div className="flex space-x-3">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${
                                        index >= currentIndex &&
                                        index < currentIndex + 3
                                            ? 'w-6 bg-secondary'
                                            : 'w-1.5 bg-border'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="group rounded-full border border-border bg-background p-3 text-primary transition-all duration-300 hover:bg-muted hover:text-secondary"
                        >
                            <ChevronRight
                                size={24}
                                className="transition-transform group-hover:translate-x-0.5"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
