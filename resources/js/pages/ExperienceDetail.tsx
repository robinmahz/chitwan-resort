'use client';
import FrontendLayout from '@/layouts/app/FrontendLayout';
import { Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Bike,
    Bird,
    Camera,
    Clock,
    Compass,
    DollarSign,
    FlameKindling,
    PawPrint,
    Trees,
    Users,
    Volleyball,
    Waves,
} from 'lucide-react';

const experiencesData = [
    {
        icon: <PawPrint className="h-12 w-12" />,
        title: 'Jungle Safari',
        slug: 'jungle-safari',
        description:
            'Explore the rich wildlife of Chitwan National Park, home to rhinos, tigers, and elephants.',
        image: '/images/activities/chitwan-jungle-safari-3.webp',
        fullDescription:
            'Embark on an exhilarating journey through the dense jungles of Chitwan National Park. Accompanied by experienced naturalists, you will venture deep into the sanctuary to spot the rare one-horned rhinoceros, wild elephants, various species of deer, and if you are lucky, the majestic Bengal Tiger.',
        highlights: [
            'Guided Jeep safari deep into the national park',
            'Spotting the endangered One-horned Rhinoceros',
            'Chance encounters with the royal Bengal Tiger',
            'Learn about the rich jungle ecosystem',
            'Professional wildlife naturalist guide included',
            'Spectacular views of jungle landscapes',
        ],
        duration: '4-5 hours',
        groupSize: '4-8 people',
        price: 'NPR 3,500 / person',
        includes: [
            'National Park entry permit',
            'Authorized naturalist guide',
            'Jeep rental and driver',
            'Packed snacks and bottled water',
            'Safety briefing and first-aid kit',
        ],
    },
    {
        icon: <Waves className="h-12 w-12" />,
        title: 'Canoeing on Rapti River',
        slug: 'rapti-canoeing',
        description:
            'Serene river exploration in traditional hand-carved canoes.',
        image: '/images/activities/canoe-ride-in-rapti-river-chitwan-national-park.jpg',
        fullDescription:
            'Glide silently along the Rapti/Narayani River as the sun begins its ascent. Our traditional canoe rides offer a unique perspective of the riverside habitat. Spot the rare Gharial and Marsh Mugger crocodiles basking on the banks, and observe a multitude of migratory and vibrant local birds in their natural sanctuary.',
        highlights: [
            'Traditional hand-carved dugout canoes',
            'Expert local boatmen and naturalists',
            'Close-range wildlife viewing',
            'Serene morning and sunset sessions',
            'Panoramic riverside views',
            'Birdwatching opportunities',
        ],
        duration: '1.5 - 2 hours',
        groupSize: '2-6 people',
        price: 'NPR 1,500 / person',
        includes: [
            'Traditional canoe and boatman',
            'Expert naturalist guide',
            'Life jackets and safety gear',
            'Refreshments on board',
            'Conservation fees',
        ],
    },
    {
        icon: <Bird className="h-12 w-12" />,
        title: 'Bird Watching',
        slug: 'bird-watching',
        description:
            'Discover over 500 species of birds with guided tours by local naturalists.',
        image: '/images/activities/bird-watching-chitwan-national-park.jpg',
        fullDescription:
            'Chitwan is a paradise for bird lovers, hosting over 500 species of resident and migratory birds. Join our expert birding guides through grassland, riverine forests, and lakes to spot exotic species like the Bengal Florican, Giant Hornbill, and various colorful kingfishers and flycatchers.',
        highlights: [
            'Guided bird-watching treks in diverse habitats',
            'Spotting rare and migratory bird species',
            'Learn to identify birds by their calls',
            'Use of professional binoculars & field guides',
            'Stunning morning light perfect for photography',
            'Quiet paths away from main tourist routes',
        ],
        duration: '3 hours',
        groupSize: '1-6 people',
        price: 'NPR 2,000 / person',
        includes: [
            'Expert ornithology guide',
            'Binoculars (on loan)',
            'Field identification checklist',
            'Light breakfast and tea/coffee',
            'Jungle entry permit',
        ],
    },
    {
        icon: <FlameKindling className="h-12 w-12" />,
        title: 'Tharu Cultural Program',
        slug: 'tharu-culture',
        description:
            'Experience the vibrant Tharu stick dance, music, and traditional cultural performances.',
        image: '/images/activities/Tharu-dance1673240331.jpg',
        fullDescription:
            'Immerse yourself in the rich traditions of the indigenous Tharu community. The evening showcases traditional music, authentic costumes, and the famous stick dance (Dangi) which represents their historical ways of keeping wild animals away from crops.',
        highlights: [
            'Energetic and synchronized stick dances',
            'Traditional songs and fire-dance routines',
            'Insight into Tharu history and lifestyle',
            'Interactive sessions where you can join the dance',
            'Great family-friendly evening entertainment',
            'Photo opportunities with performers in traditional dress',
        ],
        duration: '1.5 hours',
        groupSize: 'Open to all',
        price: 'Included in packages / NPR 500 ticket',
        includes: [
            'Entry ticket to the cultural center',
            'Reserved premium seating',
            'Welcome local drink',
            'Local guide commentary',
        ],
    },
    {
        icon: <Trees className="h-12 w-12" />,
        title: 'Nature Walks',
        slug: 'nature-walks',
        description:
            'Guided nature treks through the lush forests surrounding the national park.',
        image: '/images/activities/jungle-walk-007c2de2.jpeg',
        fullDescription:
            'Experience the jungle on foot for an intimate connection with nature. Walking with our armed, highly trained naturalists, you will learn to read animal tracks, understand medicinal plants, and quietly observe the wildlife without the noise of engines.',
        highlights: [
            'Footpaths and walking trails through deep jungle',
            'Animal track tracking (pugmarks) and identification',
            'Educational session on local flora and fauna',
            'High chance of spotting birds and smaller mammals',
            'Thrilling and authentic wilderness adventure',
            'Two experienced naturalists accompanying every group',
        ],
        duration: '3-4 hours',
        groupSize: '2-4 people',
        price: 'NPR 2,500 / person',
        includes: [
            'Two certified wildlife rangers/naturalists',
            'Safety gear and walking sticks',
            'Jungle entry permits',
            'Light snacks and refreshments',
        ],
    },
    {
        icon: <Camera className="h-12 w-12" />,
        title: 'Wildlife Photography',
        slug: 'wildlife-photography',
        description:
            'Capture stunning shots of wildlife, forests, and the vibrant life in Chitwan.',
        image: '/images/activities/chitwan-national-park-jungle-safari-2.webp',
        fullDescription:
            'Tailored specifically for photographers, this specialized tour focuses on golden hour lighting, slow-paced tracking, and waiting at waterholes to capture award-winning shots of wildlife, landscape views, and the unique avifauna of Chitwan.',
        highlights: [
            'Slow-paced tour optimized for photography',
            'Extended stops at key wildlife viewpoints',
            'Guides experienced in positioning for the best angle',
            'Morning and late afternoon golden hour focus',
            'Covers grasslands, wetlands, and forests',
            'Small group size to avoid crowding shots',
        ],
        duration: '5-6 hours',
        groupSize: '1-3 people',
        price: 'NPR 5,000 / person',
        includes: [
            'Custom photographer-oriented private jeep',
            'Elite naturalist guide with photography experience',
            'Lens support beanbags and mounts',
            'Packed lunch and hot beverages',
            'All permits and conservation fees',
        ],
    },
    {
        icon: <Bike className="h-12 w-12" />,
        title: 'Cycling & Village Tour',
        slug: 'cycling',
        description:
            'Pedal through scenic local villages, mustard fields, and beautiful riverside paths.',
        image: '/images/activities/cycling.png',
        fullDescription:
            'Hop on a mountain bike and explore the beautiful countryside. Ride through traditional mud-walled Tharu villages, vibrant mustard fields, and along the peaceful banks of the Narayani River to experience authentic local Nepalese rural life.',
        highlights: [
            'Guided cycling tour through peaceful flat terrain',
            'Interact with welcoming local Tharu villagers',
            'Beautiful views of mustard fields and riversides',
            'Visit a traditional Tharu museum',
            'Eco-friendly and active exploration',
            'Perfect sunset spots along the river route',
        ],
        duration: '2-3 hours',
        groupSize: '2-10 people',
        price: 'NPR 1,200 / person',
        includes: [
            'Premium multi-gear mountain bike',
            'Helmet and safety gear',
            'Local cycling guide',
            'Entry fees to Tharu traditional house/museum',
            'Fresh coconut water or juice break',
        ],
    },
    {
        icon: <Compass className="h-12 w-12" />,
        title: 'Religious & Pilgrimage Tour',
        slug: 'religious-tour',
        description:
            'Embark on a spiritual journey to Lumbini, Shashwat Dham, Maula Kalika, and more.',
        image: '/images/activities/religious-tour.png',
        fullDescription:
            'Discover the rich spiritual heritage of the region. This tour takes you to significant holy sites nearby including the peaceful gardens of Shashwat Dham, the hilltop Maula Kalika temple, or the sacred birthplace of Lord Buddha in Lumbini.',
        highlights: [
            'Visit the stunning architectural marvel of Shashwat Dham',
            'Cable car ride or hike up to Maula Kalika Temple',
            'Deep dive into Buddhist and Hindu traditions',
            'Comfortable private vehicle transport',
            'Expert heritage guide narrating spiritual stories',
            'Peaceful meditation sessions at the shrines',
        ],
        duration: 'Full Day (6-8 hours)',
        groupSize: '2-6 people',
        price: 'NPR 6,000 / vehicle + guide',
        includes: [
            'Private air-conditioned SUV/Van',
            'Dedicated spiritual & heritage guide',
            'All temple and monument entry tickets',
            'Lunch at a local authentic restaurant',
            'Mineral water throughout the day',
        ],
    },
    {
        icon: <Volleyball className="h-12 w-12" />,
        title: 'Beach Volleyball',
        slug: 'beach-volleyball',
        description:
            'Enjoy a thrilling game of beach volleyball on the pristine sandy banks of Narayani River.',
        image: '/images/activities/beach-volleyball.png',
        fullDescription:
            'Unwind and have fun with friends, family, or other guests. We set up a professional volleyball court on the sandy shores of the Narayani River, offering a fantastic sporting experience with the backdrop of the water and jungle.',
        highlights: [
            'Riverside beach volleyball setup',
            'Perfect group or family activity',
            'Play against the backdrop of the national park',
            'Chilled beverages and music by the court',
            'Beautiful sunset game sessions',
            'Open for all skill levels',
        ],
        duration: 'Flexible / Afternoon',
        groupSize: '4-12 people',
        price: 'Complimentary for guests',
        includes: [
            'Volleyball, net, and court setup',
            'Chilled drinks and refreshments',
            'Towel service',
            'Scorekeeper and coordinator assistance',
        ],
    },
];

interface ExperienceDetailProps {
    slug: string;
}

export default function ExperienceDetail({ slug }: ExperienceDetailProps) {
    const experience =
        experiencesData.find((exp) => exp.slug === slug) || experiencesData[0];

    if (!experience) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="mb-4 font-serif text-4xl font-light text-foreground">
                        Experience Not Found
                    </h1>
                    <Link
                        href="/"
                        className="text-xs font-bold tracking-widest text-secondary uppercase hover:underline"
                    >
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
                        className="flex items-center gap-2 rounded-sm border border-border bg-background/90 px-5 py-2 text-xs font-bold tracking-widest text-foreground uppercase shadow-sm transition hover:bg-background"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Link>
                </div>

                <div className="absolute right-0 bottom-0 left-0 p-8 text-white md:p-16">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="text-secondary">{experience.icon}</div>
                        <h1 className="font-serif text-5xl font-light tracking-tight md:text-6xl">
                            {experience.title}
                        </h1>
                    </div>
                    <p className="max-w-2xl text-xl font-light text-white/80 italic">
                        {experience.description}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-3">
                    {/* Left Column - Description and Highlights */}
                    <div className="space-y-16 lg:col-span-2">
                        <section>
                            <h2 className="mb-8 border-b border-border pb-4 font-serif text-3xl font-light text-foreground">
                                The Experience
                            </h2>
                            <p className="text-xl leading-relaxed font-light text-muted-foreground">
                                {experience.fullDescription}
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-8 border-b border-border pb-4 font-serif text-3xl font-light text-foreground">
                                Highlights
                            </h2>
                            <ul className="grid gap-6 md:grid-cols-2">
                                {experience.highlights.map(
                                    (highlight, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-4"
                                        >
                                            <span className="mt-1 flex-shrink-0 text-secondary">
                                                <Waves size={16} />
                                            </span>
                                            <span className="font-light text-foreground/80">
                                                {highlight}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </section>

                        <section>
                            <h2 className="mb-8 border-b border-border pb-4 font-serif text-3xl font-light text-foreground">
                                Complementary Provisions
                            </h2>
                            <div className="grid gap-4">
                                {experience.includes.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 rounded-sm border-l-2 border-secondary bg-muted/30 p-5"
                                    >
                                        <span className="text-secondary">
                                            ✓
                                        </span>
                                        <span className="text-sm font-light text-foreground/80">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Quick Info Card */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-10 rounded-sm border border-border bg-card p-10 shadow-sm">
                            <h3 className="text-center font-serif text-2xl font-medium text-foreground">
                                Journey Details
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 border-b border-border/50 pb-6">
                                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                                    <div>
                                        <p className="mb-1 text-[10px] tracking-widest text-muted-foreground uppercase">
                                            Duration
                                        </p>
                                        <p className="text-lg font-medium text-foreground lowercase">
                                            {experience.duration}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 border-b border-border/50 pb-6">
                                    <Users className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                                    <div>
                                        <p className="mb-1 text-[10px] tracking-widest text-muted-foreground uppercase">
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
                                        <p className="mb-1 text-[10px] tracking-widest text-muted-foreground uppercase">
                                            Investment
                                        </p>
                                        <p className="text-lg font-medium text-foreground">
                                            {experience.price}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <Link
                                    href="/#contact"
                                    className="block w-full rounded-sm bg-primary py-4 text-center text-xs font-bold tracking-[0.2em] text-white uppercase shadow-lg transition-all hover:bg-primary/90"
                                >
                                    Reserve Experience
                                </Link>

                                <Link
                                    href="/#contact"
                                    className="block w-full rounded-sm border border-secondary py-4 text-center text-xs font-bold tracking-[0.2em] text-secondary uppercase transition-all hover:bg-secondary/5"
                                >
                                    Consult Concierge
                                </Link>
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
