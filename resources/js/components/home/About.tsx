import { Award, Heart, Leaf, Sparkles } from 'lucide-react';

export default function About() {
    const features = [
        {
            icon: <Leaf className="h-8 w-8" />,
            title: 'Eco-Friendly',
            description:
                'Sustainable practices that honor and preserve our natural surroundings',
        },
        {
            icon: <Heart className="h-8 w-8" />,
            title: 'Wellness Focus',
            description:
                'Holistic experiences designed to rejuvenate body, mind, and spirit',
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: 'Award Winning',
            description:
                'Recognized globally for exceptional service and unique experiences',
        },
        {
            icon: <Sparkles className="h-8 w-8" />,
            title: 'Luxury Redefined',
            description:
                'Curated amenities that blend elegance with authentic comfort',
        },
    ];

    return (
        <section id="about" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                            Where Luxury Meets
                            <span className="mt-2 block text-amber-800">
                                Tranquility
                            </span>
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Nestled in a pristine paradise, Chitwan Resort
                            offers an unparalleled escape from the ordinary. Our
                            resort seamlessly blends contemporary luxury with
                            natural beauty, creating an sanctuary where every
                            moment becomes a cherished memory.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            From our meticulously designed accommodations to our
                            world-class amenities, every detail has been
                            thoughtfully crafted to exceed your expectations and
                            provide an unforgettable experience.
                        </p>
                        <button className="mt-4 rounded-md bg-amber-800 px-8 py-3 text-white transition-all hover:bg-amber-900">
                            Our Story
                        </button>
                    </div>

                    <div className="relative h-96 min-h-[400px] md:h-full">
                        <div className="absolute inset-0 rotate-3 transform rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100"></div>
                        <div className="absolute inset-0 rounded-2xl bg-[url('https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center shadow-xl"></div>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group transform rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="mb-4 text-amber-800 transition-transform group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="leading-relaxed text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
