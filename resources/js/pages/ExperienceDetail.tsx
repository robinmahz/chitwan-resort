'use client';
import FrontendLayout from '@/layouts/app/FrontendLayout';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Bike,
    Clock,
    DollarSign,
    Mountain,
    Palette,
    Sunrise,
    Users,
    Utensils,
    Waves,
} from 'lucide-react';

const experiencesData = [
    {
        icon: <Waves className="h-12 w-12" />,
        title: 'Water Activities',
        slug: 'water-activities',
        description:
            'Kayaking, snorkeling, and paddleboarding in crystal-clear waters',
        image: 'https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=800',
        fullDescription:
            "Dive into an aquatic adventure like no other. Our water activities are designed for all skill levels, from beginners to experienced enthusiasts. Explore stunning coral reefs, paddle through serene coves, and discover hidden marine life. Professional guides ensure safety while allowing you to experience the ocean's magic.",
        highlights: [
            'Professional PADI-certified instructors',
            'Small group sizes for personalized attention',
            'High-quality equipment provided',
            'Morning and sunset sessions available',
            'Marine life photography opportunities',
            'Hot shower and refreshments included',
        ],
        duration: '3-4 hours',
        groupSize: '4-12 people',
        price: '$89 per person',
        includes: [
            'All necessary equipment',
            'Professional guide',
            'Safety briefing',
            'Light snacks and beverages',
            'Professional photos',
        ],
    },
    {
        icon: <Mountain className="h-12 w-12" />,
        title: 'Nature Trails',
        slug: 'nature-trails',
        description:
            'Guided hikes through pristine landscapes and hidden waterfalls',
        image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
        fullDescription:
            'Embark on guided hikes through breathtaking natural landscapes. Our expert naturalists lead you through ancient forests, past cascading waterfalls, and to panoramic viewpoints. Experience the raw beauty of nature while learning about local flora, fauna, and ecology.',
        highlights: [
            'Expert naturalist guides',
            'Multiple difficulty levels available',
            'Hidden waterfall discoveries',
            'Wildlife spotting opportunities',
            'Picnic lunch included',
            'Photography stops at scenic points',
        ],
        duration: '5-6 hours',
        groupSize: '6-15 people',
        price: '$75 per person',
        includes: [
            'Expert guide',
            'Trail snacks',
            'Lunch',
            'Hydration stations',
            'Field guide',
            'Transportation from hotel',
        ],
    },
    {
        icon: <Utensils className="h-12 w-12" />,
        title: 'Culinary Classes',
        slug: 'culinary-classes',
        description: 'Learn local cuisine from our award-winning chefs',
        image: 'https://images.pexels.com/photos/2696064/pexels-photo-2696064.jpeg?auto=compress&cs=tinysrgb&w=800',
        fullDescription:
            "Master the art of local cuisine with hands-on cooking classes led by award-winning chefs. From traditional recipes passed down through generations to modern interpretations, you'll learn techniques, taste authentic flavors, and take home recipes to impress your friends and family.",
        highlights: [
            'Award-winning chef instructors',
            'Market visit to select fresh ingredients',
            'Hands-on cooking experience',
            'Wine pairing recommendations',
            'Recipe book to take home',
            'Dinner and wine included',
        ],
        duration: '4 hours',
        groupSize: '4-10 people',
        price: '$120 per person',
        includes: [
            'All ingredients',
            'Chef instruction',
            'Cooking equipment',
            '3-course meal',
            'Wine pairings',
            'Recipe booklet',
        ],
    },
    {
        icon: <Sunrise className="h-12 w-12" />,
        title: 'Sunrise Yoga',
        slug: 'sunrise-yoga',
        description:
            'Begin your day with mindful practice overlooking the ocean',
        image: 'https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&w=800',
        fullDescription:
            'Start your day with a rejuvenating yoga session as the sun rises over the ocean. Our certified instructors guide you through flowing sequences designed to energize and center your mind. Experience the tranquility of nature while improving flexibility, strength, and inner peace.',
        highlights: [
            'Certified yoga instructors',
            'Ocean view session',
            'All levels welcome',
            'Meditation and breathwork',
            'Healthy breakfast included',
            'Flexible scheduling options',
        ],
        duration: '1.5 hours',
        groupSize: '8-20 people',
        price: '$45 per person',
        includes: [
            'Yoga mat',
            'Instruction',
            'Healthy breakfast',
            'Herbal tea',
            'Mindfulness guide',
        ],
    },
    {
        icon: <Bike className="h-12 w-12" />,
        title: 'Cycling Tours',
        slug: 'cycling-tours',
        description: 'Explore scenic routes and charming villages nearby',
        image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=800',
        fullDescription:
            'Pedal through scenic countryside and charming villages on expertly planned cycling routes. Our guides know the best paths, secret shortcuts, and local spots where you can experience authentic village life. Perfect for both casual riders and cycling enthusiasts.',
        highlights: [
            'Scenic route planning',
            'Local guide with insider knowledge',
            'Village stops and local interactions',
            'Support vehicle with refreshments',
            'Bike maintenance provided',
            'Photo opportunities at landmarks',
        ],
        duration: '3-4 hours',
        groupSize: '6-12 people',
        price: '$65 per person',
        includes: [
            'Bike rental',
            'Helmet and safety gear',
            'Guide service',
            'Snacks and beverages',
            'Support vehicle',
            'Route map',
        ],
    },
    {
        icon: <Palette className="h-12 w-12" />,
        title: 'Art Workshops',
        slug: 'art-workshops',
        description:
            'Creative sessions inspired by local culture and surroundings',
        image: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800',
        fullDescription:
            "Unleash your creativity in our immersive art workshops inspired by local culture and stunning landscapes. Whether you're a beginner or experienced artist, our instructors provide personalized guidance as you create your own masterpiece using traditional techniques.",
        highlights: [
            'Professional artist instructors',
            'Multiple art mediums available',
            'Local cultural inspiration',
            'Beginner-friendly approach',
            'Take-home finished artwork',
            'Gallery-quality materials provided',
        ],
        duration: '3 hours',
        groupSize: '4-12 people',
        price: '$85 per person',
        includes: [
            'All art materials',
            'Instruction',
            'Canvas or paper',
            'Refreshments',
            'Take-home artwork',
            'Artist certificate',
        ],
    },
];

export default function ExperienceDetail({
    params,
}: {
    params: { slug: string };
}) {
    const experience = experiencesData.find(
        (exp) => exp.slug === 'water-activities',
    );

    if (!experience) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="mb-4 text-4xl font-bold">
                        Experience Not Found
                    </h1>
                    <Link href="/" className="text-amber-600 hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-20 min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden md:h-[500px]">
                <img
                    src={experience.image || '/placeholder.svg'}
                    alt={experience.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>

                <div className="absolute top-4 left-4 md:top-8 md:left-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-gray-900 transition hover:bg-white"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        Back
                    </Link>
                </div>

                <div className="absolute right-0 bottom-0 left-0 p-4 text-white md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="text-amber-300">{experience.icon}</div>
                        <h1 className="text-4xl font-bold md:text-5xl">
                            {experience.title}
                        </h1>
                    </div>
                    <p className="max-w-2xl text-lg text-white/90">
                        {experience.description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Left Column - Description and Highlights */}
                    <div className="lg:col-span-2">
                        <section className="mb-12">
                            <h2 className="mb-4 text-3xl font-bold text-gray-900">
                                About This Experience
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-600">
                                {experience.fullDescription}
                            </p>
                        </section>

                        <section className="mb-12">
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                Highlights
                            </h2>
                            <ul className="grid gap-4 md:grid-cols-2">
                                {experience.highlights.map(
                                    (highlight, index) => (
                                        <li key={index} className="flex gap-3">
                                            <span className="mt-1 flex-shrink-0 text-amber-600">
                                                ✓
                                            </span>
                                            <span className="text-gray-700">
                                                {highlight}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </section>

                        <section>
                            <h2 className="mb-6 text-3xl font-bold text-gray-900">
                                What's Included
                            </h2>
                            <div className="grid gap-4">
                                {experience.includes.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-3 border-l-4 border-amber-500 bg-amber-50 p-4"
                                    >
                                        <span className="text-amber-600">
                                            ✓
                                        </span>
                                        <span className="text-gray-700">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Quick Info Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
                            <h3 className="mb-6 text-2xl font-bold text-gray-900">
                                Quick Info
                            </h3>

                            <div className="mb-6 space-y-4">
                                <div className="flex items-start gap-3">
                                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Duration
                                        </p>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {experience.duration}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Users className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Group Size
                                        </p>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {experience.groupSize}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <DollarSign className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">
                                            Price
                                        </p>
                                        <p className="text-lg font-semibold text-gray-900">
                                            {experience.price}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full rounded-lg bg-amber-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-amber-700">
                                Book Now
                            </button>

                            <button className="mt-3 w-full rounded-lg border-2 border-gray-300 px-6 py-3 text-lg font-semibold text-gray-700 transition hover:border-gray-400">
                                Contact Concierge
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
ExperienceDetail.layout = (page: React.ReactNode) => (
    <FrontendLayout>{page}</FrontendLayout>
);
