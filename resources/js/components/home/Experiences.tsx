import { Link } from '@inertiajs/react';
import {
    Bird,
    Trees,
    PawPrint,
    Camera,
    FlameKindling,
    Ship,
} from 'lucide-react';

export default function Experiences() {
    const experiences = [
        {
            icon: <PawPrint className="h-12 w-12" />,
            title: 'Jungle Safari',
            description:
                'Explore the rich wildlife of Chitwan National Park, home to rhinos, tigers, and elephants.',
            image: './images/activities/chitwan-jungle-safari-3.webp',
            slug: 'jungle-safari',
        },
        {
            icon: <Ship className="h-12 w-12" />,
            title: 'Canoeing on Rapti River',
            description:
                'Enjoy a serene canoe ride where you may spot crocodiles, gharials, and birdlife.',
            image: './images/activities/canoe-ride-in-rapti-river-chitwan-national-park.jpg',
            slug: 'rapti-canoeing',
        },
        {
            icon: <Bird className="h-12 w-12" />,
            title: 'Bird Watching',
            description:
                'Discover over 500 species of birds with guided tours by local naturalists.',
            image: './images/activities/bird-watching-chitwan-national-park.jpg',
            slug: 'bird-watching',
        },
        {
            icon: <FlameKindling className="h-12 w-12" />,
            title: 'Tharu Cultural Program',
            description:
                'Experience the vibrant Tharu stick dance, music, and traditional cultural performances.',
            image: './images/activities/Tharu-dance1673240331.jpg',
            slug: 'tharu-culture',
        },
        {
            icon: <Trees className="h-12 w-12" />,
            title: 'Nature Walks',
            description:
                'Guided nature treks through the lush forests surrounding the national park.',
            image: './images/activities/jungle-walk-007c2de2.jpeg',
            slug: 'nature-walks',
        },
        {
            icon: <Camera className="h-12 w-12" />,
            title: 'Wildlife Photography',
            description:
                'Capture stunning shots of wildlife, forests, and the vibrant life in Chitwan.',
            image: './images/activities/chitwan-national-park-jungle-safari-2.webp',
            slug: 'wildlife-photography',
        },
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        console.log(element);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="experiences" className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="font-serif mb-4 text-4xl font-light text-foreground md:text-5xl">
                        Enriching Experiences
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-muted-foreground font-light">
                        Discover the rare beauty and vibrant culture of the Narayani riverside habitat through our curated activities.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="group relative transform overflow-hidden rounded-sm shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-border"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={experience.image}
                                    alt={experience.title}
                                    className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-110 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
                            </div>

                            <div className="relative flex h-80 flex-col justify-end p-8">
                                <div className="mb-4 transform text-secondary transition-transform group-hover:scale-110">
                                    {experience.icon}
                                </div>
                                <h3 className="font-serif mb-3 text-2xl font-medium text-white">
                                    {experience.title}
                                </h3>
                                <p className="mb-4 font-light leading-relaxed text-white/90">
                                    {experience.description}
                                </p>
                                <Link
                                    href={`/experiences/${experience.slug ?? '#'}`}
                                    className="self-start rounded-sm border border-secondary/50 bg-secondary/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-secondary/30"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 rounded-sm bg-primary p-12 text-center text-white border border-secondary/20">
                    <h3 className="font-serif mb-4 text-3xl font-light">
                        Plan Your Narayani Vista Journey
                    </h3>
                    <p className="mx-auto mb-8 max-w-2xl text-xl text-white/80 font-light">
                        Let us craft an unforgettable itinerary that connects you with the wild heart of Nepal.
                    </p>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="rounded-sm bg-secondary px-8 py-3 text-lg font-medium text-primary transition-colors hover:bg-secondary/90">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
}
