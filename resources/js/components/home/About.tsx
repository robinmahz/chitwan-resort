import { Compass, Leaf, Map, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const FEATURE_ACCENTS = ['#C9973A', '#001B30', '#5C7A5E', '#A65A3C'];

function useRevealOnView<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setInView(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return { ref, inView };
}

export default function About() {
    const features = [
        {
            icon: <Leaf className="h-8 w-8" />,
            title: 'Eco-Friendly',
            description:
                'Sustainable practices that honor and preserve our natural surroundings',
        },
        {
            icon: <Compass className="h-8 w-8" />,
            title: 'Nature Experiences',
            description:
                'Immersive guided safaris and scenic river excursions through the heart of Chitwan National Park',
        },
        {
            icon: <Map className="h-8 w-8" />,
            title: 'Local Heritage',
            description:
                'Celebrating Tharu culture and authentic regional traditions in everything we do',
        },
        {
            icon: <Sparkles className="h-8 w-8" />,
            title: 'Luxury Redefined',
            description:
                'Curated amenities that blend elegance with authentic comfort',
        },
    ];

    const imageRef = useRef<HTMLDivElement>(null);
    const [revealed, setRevealed] = useState(false);
    const { ref: featuresRef, inView: featuresInView } =
        useRevealOnView<HTMLDivElement>();

    useEffect(() => {
        const node = imageRef.current;
        if (!node) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setRevealed(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 },
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="bg-background py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
                            Where Luxury Meets the
                            <span className="mt-2 block text-primary font-medium italic">
                                Riverside Serenity
                            </span>
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground font-light">
                            Narayani Vista Riverside Eco Resort offers an immersive escape into the heart of nature. 
                            Situated on the banks of the Narayani River, our retreat is a gateway to the wild wonders of Chitwan National Park 
                            and the tranquil beauty of the riverside habitat.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground font-light">
                            From the gentle sway of palms to the panoramic views of the river, every detail of Narayani Vista 
                            is designed to provide a "quiet luxury" experience that celebrates our unique environment.
                        </p>
                    </div>

                    <div
                        ref={imageRef}
                        className="relative h-96 min-h-[400px] md:h-full"
                    >
                        <div className="absolute inset-0 rotate-3 transform rounded-sm bg-secondary/10"></div>
                        <div className="absolute inset-0 rounded-sm overflow-hidden shadow-xl border border-secondary/20">
                            <img
                                src="./images/resort/front-entry.png"
                                alt="Tharu cultural welcome"
                                className={`h-full w-full object-cover transition-all duration-[1200ms] ease-out motion-reduce:transition-none motion-reduce:scale-100 motion-reduce:opacity-100 ${
                                    revealed
                                        ? 'scale-100 opacity-100'
                                        : 'scale-[1.35] opacity-80'
                                }`}
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/2179487/pexels-photo-2179487.jpeg?auto=compress&cs=tinysrgb&w=800';
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div
                    ref={featuresRef}
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {features.map((feature, index) => {
                        const accent =
                            FEATURE_ACCENTS[index % FEATURE_ACCENTS.length];

                        return (
                            <div
                                key={index}
                                className={`group transform rounded-sm border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-md motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                                    featuresInView
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-6 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: featuresInView
                                        ? `${index * 100}ms`
                                        : '0ms',
                                }}
                            >
                                <div
                                    className="mb-4 transition-transform group-hover:scale-110"
                                    style={{ color: accent }}
                                >
                                    {feature.icon}
                                </div>
                                <h3 className="mb-2 font-serif text-xl font-medium text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="leading-relaxed font-light text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
