import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: 'Sarah Mitchell',
            role: 'Travel Enthusiast',
            image: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=400',
            text: "Chitwan Resort exceeded all my expectations. The attention to detail, exceptional service, and stunning views made this the most memorable vacation of my life. I'm already planning my return!",
            rating: 5,
        },
        {
            name: 'James Rodriguez',
            role: 'Business Executive',
            image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
            text: 'Perfect blend of relaxation and adventure. The dining was world-class, the rooms were luxurious, and the staff made every moment special. This is now my go-to destination for corporate retreats.',
            rating: 5,
        },
        {
            name: 'Emma Thompson',
            role: 'Wellness Coach',
            image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
            text: 'The wellness programs are phenomenal. From sunrise yoga to the holistic spa treatments, every experience was designed with genuine care. This resort truly understands the art of rejuvenation.',
            rating: 5,
        },
        {
            name: 'David Chen',
            role: 'Photographer',
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
            text: "As a photographer, I've visited many resorts. This one is extraordinary. The landscapes are breathtaking, and the opportunities for capturing authentic moments are endless. Highly recommended!",
            rating: 5,
        },
        {
            name: 'Lisa Anderson',
            role: 'Honeymooner',
            image: 'https://images.pexels.com/photos/1065025/pexels-photo-1065025.jpeg?auto=compress&cs=tinysrgb&w=400',
            text: 'Our honeymoon was absolutely magical. The private beach access, romantic dining, and personalized service made it unforgettable. We felt like royalty from the moment we arrived!',
            rating: 5,
        },
    ];

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
        <section className="bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                        Guest Testimonials
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-white/90">
                        Hear from our guests about their unforgettable
                        experiences at Chitwan Resort.
                    </p>
                </div>

                <div className="relative">
                    <div className="mb-8 grid gap-8 md:grid-cols-3">
                        {visibleTestimonials.map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="transform rounded-2xl border border-white/20 bg-white/10 p-8 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
                            >
                                <div className="mb-6 flex items-center space-x-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-14 w-14 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-lg font-bold">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-white/70">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-4 flex">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className="fill-amber-300 text-amber-300"
                                            />
                                        ),
                                    )}
                                </div>

                                <p className="leading-relaxed text-white/90 italic">
                                    "{testimonial.text}"
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            onClick={goToPrevious}
                            className="rounded-full border border-white/50 bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        index >= currentIndex &&
                                        index < currentIndex + 3
                                            ? 'w-8 bg-white'
                                            : 'w-2 bg-white/40'
                                    }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="rounded-full border border-white/50 bg-white/20 p-2 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
