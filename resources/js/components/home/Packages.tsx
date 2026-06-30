import { CheckCircle2, XCircle, Clock, Users, Package } from 'lucide-react';

const packages = [
    {
        id: 'pkg-2d1n',
        badge: '2 Days / 1 Night',
        title: 'Luxury Jungle & Cultural Experience',
        tagline: 'The perfect short escape into the wild',
        accentColor: '#C9973A',
        price: 'Contact for Group Pricing',
        priceNote: 'Mainly for 5 or more guests',
        duration: '2 Days / 1 Night',
        groupSize: '5+ Guests',
        inclusions: [
            'Welcome drinks & refreshments on arrival',
            '1 night accommodation in your selected room',
            'Daily breakfast & dinner (à la carte or buffet)',
            'Guided Jeep Safari in Chitwan National Park',
            'Traditional Tharu Cultural Program (evening)',
            'Guided jungle walk with expert naturalist',
            'Hotel transfers (airport / bus park)',
            'All government taxes & service charges',
        ],
        exclusions: [
            'Lunch & personal beverages',
            'National Park entry fee (payable separately)',
            'Personal travel insurance',
            'Any activities not listed above',
            'Gratuities for staff & guides',
        ],
    },
    {
        id: 'pkg-3d2n',
        badge: '3 Days / 2 Nights',
        title: 'Premium Jungle, Birdwatching & Cultural Experience',
        tagline: 'An immersive journey through nature and culture',
        accentColor: '#001B30',
        price: 'Contact for Group Pricing',
        priceNote: 'Mainly for 5 or more guests',
        duration: '3 Days / 2 Nights',
        groupSize: '5+ Guests',
        inclusions: [
            'Welcome drinks & refreshments on arrival',
            '2 nights accommodation in your selected room',
            'Daily breakfast, lunch & dinner',
            'Guided Jeep Safari (full day) in Chitwan National Park',
            'Guided Bird Watching tour with expert naturalist',
            'Traditional canoe ride on the Narayani River',
            'Traditional Tharu Cultural Program (evening)',
            'Guided nature walk through buffer zone',
            'Elephant bathing experience (subject to availability)',
            'Hotel transfers (airport / bus park)',
            'All government taxes & service charges',
        ],
        exclusions: [
            'Personal beverages & room service',
            'National Park entry fee (payable separately)',
            'Personal travel insurance',
            'Any activities not listed above',
            'Gratuities for staff & guides',
        ],
    },
];

export default function Packages() {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const scrollPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    };

    return (
        <section id="packages" className="bg-primary/5 py-32 border-y border-border/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-24 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-5 py-2 mb-6">
                        <Package size={14} className="text-secondary" />
                        <span className="text-[10px] uppercase tracking-widest font-bold text-secondary">Curated Packages</span>
                    </div>
                    <h2 className="font-serif mb-6 text-4xl font-light text-foreground md:text-5xl">
                        Tailored Wilderness
                        <span className="mt-2 block" style={{ color: '#C9973A' }}>
                            Experiences
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light">
                        Thoughtfully designed packages for groups of 5 or more, crafted to immerse you in the 
                        finest that Narayani Vista and Chitwan have to offer.
                    </p>
                </div>

                {/* Package Cards */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="group flex flex-col rounded-sm border border-border bg-card shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                        >
                            {/* Header */}
                            <div
                                className="px-10 pt-10 pb-8 border-b border-border/50"
                                style={{ background: `linear-gradient(135deg, ${pkg.accentColor}12 0%, transparent 100%)` }}
                            >
                                <div className="inline-block rounded-sm border px-3 py-1 text-[10px] uppercase tracking-widest font-bold mb-4"
                                    style={{ borderColor: pkg.accentColor + '60', color: pkg.accentColor }}>
                                    {pkg.badge}
                                </div>
                                <h3 className="font-serif text-2xl font-medium text-foreground mb-2">
                                    {pkg.title}
                                </h3>
                                <p className="text-muted-foreground font-light italic text-sm">{pkg.tagline}</p>

                                <div className="mt-6 flex items-center gap-6 text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock size={14} style={{ color: pkg.accentColor }} />
                                        <span className="font-light">{pkg.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Users size={14} style={{ color: pkg.accentColor }} />
                                        <span className="font-light">{pkg.groupSize}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="flex flex-col flex-1 p-10 gap-8">
                                {/* Inclusions */}
                                <div>
                                    <h4 className="font-serif text-base font-semibold text-foreground mb-4 uppercase tracking-widest text-xs border-b border-border pb-2">
                                        ✓ What's Included
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {pkg.inclusions.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: pkg.accentColor }} />
                                                <span className="text-sm text-foreground/80 font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Exclusions */}
                                <div>
                                    <h4 className="font-serif text-base font-semibold text-foreground mb-4 uppercase tracking-widest text-xs border-b border-border pb-2">
                                        ✗ Not Included
                                    </h4>
                                    <ul className="space-y-2.5">
                                        {pkg.exclusions.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <XCircle size={15} className="flex-shrink-0 mt-0.5 text-muted-foreground/60" />
                                                <span className="text-sm text-muted-foreground font-light">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Price note */}
                                <div className="mt-auto rounded-sm border border-secondary/20 bg-secondary/5 p-5 text-center">
                                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Pricing</p>
                                    <p className="text-lg font-serif font-medium text-foreground">{pkg.price}</p>
                                    <p className="text-xs text-muted-foreground font-light mt-1 italic">{pkg.priceNote}</p>
                                </div>

                                {/* CTA */}
                                <button
                                    onClick={scrollToContact}
                                    className="w-full rounded-sm py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all shadow-md hover:opacity-90"
                                    style={{ backgroundColor: pkg.accentColor }}
                                >
                                    Enquire About This Package
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="mt-16 rounded-sm border border-border bg-card p-10 text-center">
                    <p className="text-muted-foreground font-light text-base italic max-w-2xl mx-auto">
                        All packages are specially designed for groups of <strong className="text-foreground font-semibold">5 or more guests</strong>. 
                        Custom packages can be arranged for smaller groups or special occasions — please contact our concierge for bespoke arrangements.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="mt-6 rounded-sm border border-primary px-8 py-3 text-xs uppercase tracking-widest font-bold text-primary transition-all hover:bg-primary hover:text-white"
                    >
                        Request Custom Package
                    </button>
                </div>
            </div>
        </section>
    );
}
