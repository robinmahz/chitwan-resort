import { Dining as DiningType } from '@/types';
import { Coffee, IceCream, UtensilsCrossed, Wine } from 'lucide-react';

export default function Dining({ dinings }: { dinings: DiningType[] }) {

    let venues = dinings.map((dining) => ({
        image: dining.image_url,
        name: dining.name,
        description: dining.description,
        hours: dining.hours,
        cuisine: dining.category,
    }));

    if (dinings.length === 0) {

        venues = [
            {
                name: 'The Terrace Restaurant',
                cuisine: 'International Fine Dining',
                description:
                    'Exquisite dishes crafted from locally sourced ingredients with breathtaking sunset views.',
                hours: 'Breakfast: 7AM-11AM | Dinner: 6PM-11PM',
                image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
            },
            {
                name: 'Vista Bar',
                cuisine: 'Wine & Tapas',
                description:
                    'Curated selection of premium wines paired with artisanal small plates in an intimate riverfront setting.',
                hours: 'Daily: 4PM-Midnight',
                image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200',
            },
            {
                name: 'Garden Café',
                cuisine: 'Light Fare & Coffee',
                description:
                    'Fresh pastries, specialty coffees, and healthy snacks in a lush garden atmosphere.',
                hours: 'Daily: 6AM-6PM',
                image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1200',
            },
            {
                name: 'Poolside Grill',
                cuisine: 'Casual Dining',
                description:
                    'Grilled specialties and refreshing cocktails served in a relaxed poolside setting.',
                hours: 'Daily: 11AM-8PM',
                image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200',
            },
        ];
    }

    return (
        <section
            id="dining"
            className="bg-background py-32 border-b border-border/50"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-24 text-center">
                    <h2 className="font-serif mb-6 text-4xl font-light text-foreground md:text-5xl">
                        Epicurean Gatherings
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light">
                        Indulge in a symphony of flavors inspired by the wild riverside 
                        harvests and international culinary finesse.
                    </p>
                </div>

                <div className="mb-24 grid gap-12 md:grid-cols-2">
                    {venues.map((venue, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:shadow-2xl"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={venue.image}
                                    alt={venue.name}
                                    className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/90 font-bold bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-sm">
                                        {venue.cuisine}
                                    </span>
                                </div>
                            </div>

                            <div className="p-10">
                                <h3 className="font-serif mb-4 text-2xl font-medium text-foreground">
                                    {venue.name}
                                </h3>
                                <p className="mb-8 leading-relaxed text-muted-foreground font-light italic">
                                    "{venue.description}"
                                </p>
                                <div className="flex items-center justify-between border-t border-border pt-6">
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                                        Operating Hours
                                    </span>
                                    <span className="text-xs text-foreground font-light">
                                        {venue.hours}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid gap-12 md:grid-cols-3">
                    <div className="rounded-sm border border-border bg-muted/20 p-10 text-center transition-all duration-300 hover:bg-muted/40 group">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-secondary/30 group-hover:bg-secondary/10 transition-colors">
                            <UtensilsCrossed size={24} className="text-secondary" />
                        </div>
                        <h4 className="font-serif mb-3 text-xl font-medium text-foreground">
                            Artisanal Craftsmanship
                        </h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                            A culinary team dedicated to preserving traditional flavors while 
                            embracing modern gastrosophical trends.
                        </p>
                    </div>

                    <div className="rounded-sm border border-border bg-muted/20 p-10 text-center transition-all duration-300 hover:bg-muted/40 group">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-secondary/30 group-hover:bg-secondary/10 transition-colors">
                            <Coffee size={24} className="text-secondary" />
                        </div>
                        <h4 className="font-serif mb-3 text-xl font-medium text-foreground">
                            River-to-Table
                        </h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                            A commitment to hyper-local sourcing, bringing the freshest 
                            produce directly from the Narayani basin.
                        </p>
                    </div>

                    <div className="rounded-sm border border-border bg-muted/20 p-10 text-center transition-all duration-300 hover:bg-muted/40 group">
                        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-secondary/30 group-hover:bg-secondary/10 transition-colors">
                            <Wine size={24} className="text-secondary" />
                        </div>
                        <h4 className="font-serif mb-3 text-xl font-medium text-foreground">
                            Curated Selection
                        </h4>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                            An exquisite collection of international vintages and local spiritual 
                            infusions curated for the refined palate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
