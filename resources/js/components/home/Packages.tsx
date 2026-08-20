import {
    CheckCircle2,
    ChevronDown,
    Package,
    Users,
    XCircle,
} from 'lucide-react';
import { useState } from 'react';

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
            'Daily breakfast & dinner buffet',
            'Guided Jeep Safari in Chitwan National Park Buffer zone',
            'Traditional Tharu Cultural Program (evening)',
            'Hotel transfers (airport / bus park) with extra charges',
            'Guided jungle walk with expert naturalist',
            'All government taxes & service charges',
            'Guided jungle safari inside the Chitwan national park with additional charges',
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
            'Daily breakfast, lunch & dinner buffet',
            'Guided Jeep Safari (full day) in Chitwan National Park Buffer zone',
            'Guided Bird Watching tour with expert naturalist',
            'Guided jungle safari inside the Chitwan national park with additional charges',
            'Traditional canoe ride on the Narayani River',
            'Traditional Tharu Cultural Program (evening)',
            'Guided nature walk through buffer zone',
            'Elephant bathing experience (subject to availability)',
            'Hotel transfers (airport / bus park) with extra charge',
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

const COLLAPSED_COUNT = 3;

export default function Packages() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const toggle = (id: string) => {
        setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    };

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
        <section
            id="packages"
            className="border-y border-border/50 bg-primary/5 py-32"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-24 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-5 py-2">
                        <Package size={14} className="text-secondary" />
                        <span className="text-[10px] font-bold tracking-widest text-secondary uppercase">
                            Curated Packages
                        </span>
                    </div>
                    <h2 className="mb-6 font-serif text-4xl font-light text-foreground md:text-5xl">
                        Tailored Wilderness
                        <span
                            className="mt-2 block"
                            style={{ color: '#C9973A' }}
                        >
                            Experiences
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
                        Thoughtfully designed packages for groups of 5 or more,
                        crafted to immerse you in the finest that Narayani Vista
                        and Chitwan have to offer.
                    </p>
                </div>

                {/* Package Cards */}
                <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
                    {packages.map((pkg) => {
                        const isExpanded = !!expanded[pkg.id];
                        const visibleInclusions = pkg.inclusions.slice(
                            0,
                            COLLAPSED_COUNT,
                        );
                        const hiddenInclusions =
                            pkg.inclusions.slice(COLLAPSED_COUNT);
                        const hasMore = hiddenInclusions.length > 0;
                        const [dayLabel, nightLabel] =
                            pkg.duration.split(' / ');
                        const stampVars = {
                            '--stamp-bg': pkg.accentColor + '14',
                            '--stamp-bg-hover': pkg.accentColor + '28',
                            '--stamp-border': pkg.accentColor + '80',
                        } as React.CSSProperties;

                        return (
                            <div
                                key={pkg.id}
                                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                            >
                                {/* Header */}
                                <div
                                    className="relative border-b border-border/50 px-6 pt-6 pb-5 sm:px-8 sm:pt-8 sm:pb-6"
                                    style={{
                                        background: `linear-gradient(135deg, ${pkg.accentColor}12 0%, transparent 100%)`,
                                    }}
                                >
                                    {/* Compact duration badge, pinned top-right. Fill/border
                                        tint to each package's accent, settles flat +
                                        brightens on hover. */}
                                    <div
                                        className="absolute top-4 right-4 flex -rotate-6 flex-col items-center gap-1 rounded-md border-2 border-dashed bg-[var(--stamp-bg)] px-2.5 py-1.5 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-110 group-hover:bg-[var(--stamp-bg-hover)] group-hover:shadow-md sm:top-5 sm:right-5 sm:px-3"
                                        style={{
                                            ...stampVars,
                                            borderColor:
                                                'var(--stamp-border)',
                                        }}
                                        aria-hidden="true"
                                    >
                                        <span
                                            className="text-center text-[9px] leading-none font-bold tracking-wide uppercase sm:text-[10px]"
                                            style={{
                                                color: pkg.accentColor,
                                            }}
                                        >
                                            {dayLabel}
                                        </span>
                                        <span
                                            className="h-px w-5"
                                            style={{
                                                backgroundColor:
                                                    pkg.accentColor + '50',
                                            }}
                                        />
                                        <span
                                            className="text-center text-[9px] leading-none font-bold tracking-wide uppercase sm:text-[10px]"
                                            style={{
                                                color: pkg.accentColor,
                                            }}
                                        >
                                            {nightLabel}
                                        </span>
                                    </div>

                                    <div className="pr-20 sm:pr-24">
                                        <h3 className="mb-2 line-clamp-2 min-h-[3.4rem] font-serif text-xl leading-snug font-medium text-foreground sm:min-h-[4.1rem] sm:text-2xl">
                                            {pkg.title}
                                        </h3>
                                        <p className="mb-4 line-clamp-2 min-h-[2.6rem] text-sm leading-snug font-light text-muted-foreground italic">
                                            {pkg.tagline}
                                        </p>
                                        <div
                                            className="inline-flex items-center gap-2 rounded-full border px-3 py-1"
                                            style={{
                                                borderColor:
                                                    pkg.accentColor + '40',
                                            }}
                                        >
                                            <Users
                                                size={13}
                                                style={{
                                                    color: pkg.accentColor,
                                                }}
                                            />
                                            <span className="text-xs font-light text-muted-foreground">
                                                {pkg.groupSize}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
                                    {/* Inclusions (always-visible preview) */}
                                    <div>
                                        <h4 className="mb-4 border-b border-border pb-2 font-serif text-xs font-semibold tracking-widest text-foreground uppercase">
                                            ✓ What's Included
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {visibleInclusions.map(
                                                (item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-3"
                                                    >
                                        <CheckCircle2
                                                            size={15}
                                                            className="mt-0.5 flex-shrink-0"
                                                            style={{
                                                                color: pkg.accentColor,
                                                            }}
                                                        />
                                                        <span className="line-clamp-1 text-sm font-light text-foreground/80">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>

                                    {/* Ticket-stub style expand/collapse trigger */}
                                    {hasMore && (
                                        <button
                                            type="button"
                                            onClick={() => toggle(pkg.id)}
                                            aria-expanded={isExpanded}
                                            className="relative -my-2 flex w-full items-center justify-center py-3 focus-visible:outline-none"
                                        >
                                            <span
                                                className="absolute inset-x-1 top-1/2 -translate-y-1/2 border-t border-dashed transition-colors duration-300"
                                                style={{
                                                    borderColor:
                                                        pkg.accentColor +
                                                        '55',
                                                }}
                                                aria-hidden="true"
                                            />
                                            <span
                                                className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        pkg.accentColor +
                                                        '70',
                                                }}
                                                aria-hidden="true"
                                            />
                                            <span
                                                className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        pkg.accentColor +
                                                        '70',
                                                }}
                                                aria-hidden="true"
                                            />
                                            <span
                                                className="relative z-10 flex items-center gap-2 rounded-full bg-card px-4 py-1 text-[11px] font-bold tracking-widest uppercase transition-all duration-300 group-hover:bg-card focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-card"
                                                style={
                                                    {
                                                        color: pkg.accentColor,
                                                        '--tw-ring-color':
                                                            pkg.accentColor,
                                                    } as React.CSSProperties
                                                }
                                            >
                                                {isExpanded
                                                    ? 'Show Less'
                                                    : 'View Full Itinerary'}
                                                {!isExpanded && (
                                                    <span className="font-normal tracking-normal text-muted-foreground normal-case">
                                                        (+
                                                        {
                                                            hiddenInclusions.length
                                                        }{' '}
                                                        more)
                                                    </span>
                                                )}
                                                <ChevronDown
                                                    size={14}
                                                    className={`transition-transform duration-300 motion-reduce:transition-none ${
                                                        isExpanded
                                                            ? 'rotate-180'
                                                            : ''
                                                    }`}
                                                />
                                            </span>
                                        </button>
                                    )}

                                    {/* Expandable detail: remaining inclusions + exclusions */}
                                    <div
                                        className={`grid transition-[grid-template-rows] duration-500 ease-in-out motion-reduce:transition-none ${
                                            isExpanded
                                                ? 'grid-rows-[1fr]'
                                                : 'grid-rows-[0fr]'
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div
                                                className={`flex flex-col gap-8 pt-2 transition-opacity duration-300 motion-reduce:transition-none ${
                                                    isExpanded
                                                        ? 'opacity-100 delay-150'
                                                        : 'opacity-0'
                                                }`}
                                            >
                                                {hiddenInclusions.length >
                                                    0 && (
                                                    <ul className="space-y-2.5">
                                                        {hiddenInclusions.map(
                                                            (item, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="flex items-start gap-3"
                                                                >
                                                                    <CheckCircle2
                                                                        size={
                                                                            15
                                                                        }
                                                                        className="mt-0.5 flex-shrink-0"
                                                                        style={{
                                                                            color: pkg.accentColor,
                                                                        }}
                                                                    />
                                                                    <span className="text-sm font-light text-foreground/80">
                                                                        {item}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                )}

                                                <div>
                                                    <h4 className="mb-4 border-b border-border pb-2 font-serif text-xs font-semibold tracking-widest text-foreground uppercase">
                                                        ✗ Not Included
                                                    </h4>
                                                    <ul className="space-y-2.5">
                                                        {pkg.exclusions.map(
                                                            (item, idx) => (
                                                                <li
                                                                    key={idx}
                                                                    className="flex items-start gap-3"
                                                                >
                                                                    <XCircle
                                                                        size={
                                                                            15
                                                                        }
                                                                        className="mt-0.5 flex-shrink-0 text-muted-foreground/60"
                                                                    />
                                                                    <span className="text-sm font-light text-muted-foreground">
                                                                        {item}
                                                                    </span>
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price note */}
                                    <p className="mt-auto text-center font-serif text-base font-medium text-foreground">
                                        {pkg.price}
                                    </p>

                                    {/* CTA */}
                                    <button
                                        onClick={scrollToContact}
                                        className="w-full rounded-sm py-4 text-xs font-bold tracking-[0.2em] text-white uppercase shadow-md transition-all hover:opacity-90"
                                        style={{
                                            backgroundColor: pkg.accentColor,
                                        }}
                                    >
                                        Enquire About This Package
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <div className="mt-16 rounded-sm border border-border bg-card p-10 text-center">
                    <p className="mx-auto max-w-2xl text-base font-light text-muted-foreground italic">
                        All packages are specially designed for groups of{' '}
                        <strong className="font-semibold text-foreground">
                            5 or more guests
                        </strong>
                        . Custom packages can be arranged for smaller groups or
                        special occasions — please contact our concierge for
                        bespoke arrangements.
                    </p>
                    <button
                        onClick={scrollToContact}
                        className="mt-6 rounded-sm border border-primary px-8 py-3 text-xs font-bold tracking-widest text-primary uppercase transition-all hover:bg-primary hover:text-white"
                    >
                        Request Custom Package
                    </button>
                </div>
            </div>
        </section>
    );
}
