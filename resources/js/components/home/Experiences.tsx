import { Link } from '@inertiajs/react';
import {
    Bike,
    Mountain,
    Palette,
    Sunrise,
    Utensils,
    Waves,
} from 'lucide-react';

export default function Experiences() {
    const experiences = [
        {
            icon: <Waves className="h-12 w-12" />,
            title: 'Water Activities',
            description:
                'Kayaking, snorkeling, and paddleboarding in crystal-clear waters',
            image: 'https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=800',
            slug: 'water-activities',
        },
        {
            icon: <Mountain className="h-12 w-12" />,
            title: 'Nature Trails',
            description:
                'Guided hikes through pristine landscapes and hidden waterfalls',
            image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            icon: <Utensils className="h-12 w-12" />,
            title: 'Culinary Classes',
            description: 'Learn local cuisine from our award-winning chefs',
            image: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            icon: <Sunrise className="h-12 w-12" />,
            title: 'Sunrise Yoga',
            description:
                'Begin your day with mindful practice overlooking the ocean',
            image: 'https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            icon: <Bike className="h-12 w-12" />,
            title: 'Cycling Tours',
            description: 'Explore scenic routes and charming villages nearby',
            image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
        {
            icon: <Palette className="h-12 w-12" />,
            title: 'Art Workshops',
            description:
                'Creative sessions inspired by local culture and surroundings',
            image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
        },
    ];

    return (
        <section id="experiences" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        Unforgettable Experiences
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        Immerse yourself in curated activities designed to
                        create lasting memories and connect you with nature,
                        culture, and wellness.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="group relative transform overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={experience.image}
                                    alt={experience.title}
                                    className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                            </div>

                            <div className="relative flex h-80 flex-col justify-end p-8">
                                <div className="mb-4 transform text-amber-300 transition-transform group-hover:scale-110">
                                    {experience.icon}
                                </div>
                                <h3 className="mb-3 text-2xl font-bold text-white">
                                    {experience.title}
                                </h3>
                                <p className="mb-4 leading-relaxed text-white/90">
                                    {experience.description}
                                </p>
                                <Link
                                    href={`/experiences/${experience.slug} ??'#'`}
                                    className="self-start rounded-md border border-white/50 bg-white/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-2xl bg-gradient-to-br from-amber-800 to-orange-900 p-12 text-center text-white">
                    <h3 className="mb-4 text-3xl font-bold">
                        Create Your Perfect Itinerary
                    </h3>
                    <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
                        Our concierge team is ready to help you craft a
                        personalized experience tailored to your interests and
                        desires.
                    </p>
                    <button className="rounded-md bg-white px-8 py-3 text-lg font-medium text-amber-800 transition-colors hover:bg-gray-100">
                        Contact Concierge
                    </button>
                </div>
            </div>
        </section>
    );
}
