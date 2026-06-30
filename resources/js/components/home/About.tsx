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
        <section id="about" className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl font-light text-foreground md:text-5xl">
                            Where Luxury Meets the
                            <span className="mt-2 block" style={{ color: '#C9973A' }}>
                                Riverside Serenity
                            </span>
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground font-light">
                            Narayani Vista Riverside Resort offers an immersive escape into the heart of nature. 
                            Situated on the banks of the Narayani River, our retreat is a gateway to the wild wonders of Chitwan 
                            and the tranquil beauty of the riverside habitat.
                        </p>
                        <p className="text-lg leading-relaxed text-muted-foreground font-light">
                            From the gentle sway of palms to the panoramic views of the river, every detail of Narayani Vista 
                            is designed to provide a "quiet luxury" experience that celebrates our unique environment.
                        </p>
                        <button className="mt-4 rounded-sm bg-primary px-8 py-3 text-white transition-all hover:bg-primary/90 border border-secondary/20">
                            Our Story
                        </button>
                    </div>

                    <div className="relative h-96 min-h-[400px] md:h-full">
                        <div className="absolute inset-0 rotate-3 transform rounded-sm bg-secondary/10"></div>
                        <div className="absolute inset-0 rounded-sm overflow-hidden shadow-xl border border-secondary/20">
                            <img
                                src="./images/resort/resort-front.webp"
                                alt="Tharu cultural welcome"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/2179487/pexels-photo-2179487.jpeg?auto=compress&cs=tinysrgb&w=800';
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group transform rounded-sm border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-secondary/30"
                        >
                            <div className="mb-4 text-secondary transition-transform group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="font-serif mb-2 text-xl font-medium text-foreground">
                                {feature.title}
                            </h3>
                            <p className="leading-relaxed text-muted-foreground font-light">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
