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
        title: 'Canoeing on Narayani',
        slug: 'rapti-canoeing',
        description:
            'Serene river exploration in traditional hand-carved canoes',
        image: './images/activities/canoe-ride-in-rapti-river-chitwan-national-park.jpg',
        fullDescription:
            "Glide silently along the Narayani River as the sun begins its ascent. Our traditional canoe rides offer a unique perspective of the riverside habitat. Spot the rare Gharial and Marsh Mugger crocodiles basking on the banks, and observe a multitude of migratory and vibrant local birds in their natural sanctuary.",
        highlights: [
            'Traditional hand-carved dugout canoes',
            'Expert local boatmen and naturalists',
            'Close-range wildlife viewing',
            'Serene morning and sunset sessions',
            'Panoramic riverside views',
            'Birdwatching opportunities',
        ],
        duration: '2-3 hours',
        groupSize: '2-6 people',
        price: 'Included in stay',
        includes: [
            'Traditional canoe and boatman',
            'Expert naturalist guide',
            'Life jackets and safety gear',
            'Refreshments on board',
            'Conservation fees',
        ],
    },
    // ... other experiences would be here
];

export default function ExperienceDetail() {
    const experience = experiencesData[0]; // For demo purposes

    if (!experience) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="font-serif mb-4 text-4xl font-light text-foreground">
                        Experience Not Found
                    </h1>
                    <Link href="/" className="text-secondary hover:underline uppercase text-xs tracking-widest font-bold">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-20 min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden md:h-[60vh]">
                <img
                    src={experience.image || '/placeholder.svg'}
                    alt={experience.title}
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent"></div>

                <div className="absolute top-8 left-8">
                    <Link
                        href="/"
                        className="flex items-center gap-2 rounded-sm bg-background/90 px-5 py-2 text-foreground transition hover:bg-background border border-border shadow-sm text-xs uppercase tracking-widest font-bold"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Link>
                </div>

                <div className="absolute right-0 bottom-0 left-0 p-8 text-white md:p-16">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="text-secondary">{experience.icon}</div>
                        <h1 className="font-serif text-5xl font-light md:text-6xl tracking-tight">
                            {experience.title}
                        </h1>
                    </div>
                    <p className="max-w-2xl text-xl text-white/80 font-light italic">
                        {experience.description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-3">
                    {/* Left Column - Description and Highlights */}
                    <div className="lg:col-span-2 space-y-16">
                        <section>
                            <h2 className="font-serif mb-8 text-3xl font-light text-foreground border-b border-border pb-4">
                                The Experience
                            </h2>
                            <p className="text-xl leading-relaxed text-muted-foreground font-light">
                                {experience.fullDescription}
                            </p>
                        </section>

                        <section>
                            <h2 className="font-serif mb-8 text-3xl font-light text-foreground border-b border-border pb-4">
                                Highlights
                            </h2>
                            <ul className="grid gap-6 md:grid-cols-2">
                                {experience.highlights.map(
                                    (highlight, index) => (
                                        <li key={index} className="flex gap-4 items-start">
                                            <span className="mt-1 flex-shrink-0 text-secondary">
                                                <Waves size={16} />
                                            </span>
                                            <span className="text-foreground/80 font-light">
                                                {highlight}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </section>

                        <section>
                            <h2 className="font-serif mb-8 text-3xl font-light text-foreground border-b border-border pb-4">
                                Complementary Provisions
                            </h2>
                            <div className="grid gap-4">
                                {experience.includes.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 items-center rounded-sm border-l-2 border-secondary bg-muted/30 p-5"
                                    >
                                        <span className="text-secondary">
                                            ✓
                                        </span>
                                        <span className="text-foreground/80 font-light text-sm">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Quick Info Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 rounded-sm border border-border bg-card p-10 shadow-sm space-y-10">
                            <h3 className="font-serif text-2xl font-medium text-foreground text-center">
                                Journey Details
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 pb-6 border-b border-border/50">
                                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                                            Duration
                                        </p>
                                        <p className="text-lg font-medium text-foreground lowercase">
                                            {experience.duration}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pb-6 border-b border-border/50">
                                    <Users className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                                            Capacity
                                        </p>
                                        <p className="text-lg font-medium text-foreground">
                                            {experience.groupSize}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <DollarSign className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                                            Investment
                                        </p>
                                        <p className="text-lg font-medium text-foreground">
                                            {experience.price}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <button className="w-full rounded-sm bg-primary py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-primary/90 shadow-lg">
                                    Reserve Experience
                                </button>

                                <button className="w-full rounded-sm border border-secondary py-4 text-xs font-bold uppercase tracking-[0.2em] text-secondary transition-all hover:bg-secondary/5">
                                    Consult Concierge
                                </button>
                            </div>
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
