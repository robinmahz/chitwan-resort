import {
    ArrowRight,
    CheckCircle2,
    ChevronDown,
    Package,
    Users,
    XCircle,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const packages = [
    {
        id: 'pkg-2d1n',
        badge: '2 Days / 1 Night',
        image: '/images/activities/chitwan-jungle-safari-3.webp',
        title: 'Luxury Jungle & Cultural Experience',
        tagline: 'The perfect short escape into the wild',
        accentColor: '#C9973A',
        stampTextColor: '#001B30',
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
        image: '/images/activities/bird-watching-chitwan-national-park.jpg',
        title: 'Premium Jungle, Birdwatching & Cultural Experience',
        tagline: 'An immersive journey through nature and culture',
        accentColor: '#001B30',
        stampTextColor: '#001B30',
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

function useRevealOnView<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        if (
            typeof window !== 'undefined' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ) {
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

export default function Packages() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    const { ref: gridRef, inView } = useRevealOnView<HTMLDivElement>();

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
            className="border-y border-border/50 bg-primary/5 py-20 sm:py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-14 text-center sm:mb-16">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-5 py-2">
                        <Package size={14} className="text-secondary" />
                        <span className="text-[10px] font-bold tracking-widest text-secondary uppercase">
                            Curated Packages
                        </span>
                    </div>
                    <h2 className="mb-5 font-serif text-4xl font-light text-foreground md:text-5xl">
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
                <div
                    ref={gridRef}
                    className="grid items-start gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10"
                >
                    {packages.map((pkg, cardIdx) => {
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
                            '--stamp-bg': 'var(--color-card)',
                            '--stamp-bg-hover': `color-mix(in srgb, var(--color-card) 85%, ${pkg.stampTextColor} 15%)`,
                            '--stamp-border': pkg.stampTextColor + '80',
                        } as React.CSSProperties;

                        return (
                            <div
                                key={pkg.id}
                                className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                                    inView
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: inView
                                        ? `${cardIdx * 120}ms`
                                        : '0ms',
                                }}
                            >
                                <div className="group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                                    {/* Image banner */}
                                    <div className="relative h-44 overflow-hidden sm:h-52">
                                        <img
                                            src={pkg.image}
                                            alt={pkg.title}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        />
                                        {/* Accent-tinted scrim for text legibility, ties photo to package identity */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `linear-gradient(to top, ${pkg.accentColor}E6 0%, ${pkg.accentColor}80 32%, ${pkg.accentColor}00 75%)`,
                                            }}
                                            aria-hidden="true"
                                        />

                                        {/* Duration stamp, pinned top-right over the photo */}
                                        <div
                                            className="absolute top-3 right-3 flex -rotate-6 flex-col items-center gap-1 rounded-md border-2 border-dashed bg-[var(--stamp-bg)] px-2.5 py-1.5 shadow-sm backdrop-blur-md transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-110 group-hover:bg-[var(--stamp-bg-hover)] group-hover:shadow-md sm:top-4 sm:right-4 sm:px-3"
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
                                                    color: pkg.stampTextColor,
                                                }}
                                            >
                                                {dayLabel}
                                            </span>
                                            <span
                                                className="h-px w-5"
                                                style={{
                                                    backgroundColor:
                                                        pkg.stampTextColor +
                                                        '50',
                                                }}
                                            />
                                            <span
                                                className="text-center text-[9px] leading-none font-bold tracking-wide uppercase sm:text-[10px]"
                                                style={{
                                                    color: pkg.stampTextColor,
                                                }}
                                            >
                                                {nightLabel}
                                            </span>
                                        </div>

                                        {/* Title / tagline / guest chip, overlaid at the base of the photo */}
                                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                                            <h3 className="line-clamp-2 font-serif text-xl leading-snug font-medium text-white drop-shadow-sm sm:text-2xl">
                                                {pkg.title}
                                            </h3>
                                            <p className="mt-1 mb-3 line-clamp-1 text-sm leading-snug font-light text-white/85 italic">
                                                {pkg.tagline}
                                            </p>
                                            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 backdrop-blur-sm">
                                                <Users
                                                    size={13}
                                                    className="text-white"
                                                />
                                                <span className="text-xs font-light text-white/90">
                                                    {pkg.groupSize}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
                                        {/* Inclusions (always-visible preview) */}
                                        <div>
                                            <h4 className="mb-3 border-b border-border pb-2 font-serif text-xs font-semibold tracking-widest text-foreground uppercase">
                                                ✓ What's Included
                                            </h4>
                                            <ul className="space-y-2">
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
                                                className="relative -my-1 flex w-full items-center justify-center py-2.5 focus-visible:outline-none"
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
                                                    className="absolute top-1/2 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            pkg.accentColor +
                                                            '70',
                                                    }}
                                                    aria-hidden="true"
                                                />
                                                <span
                                                    className="absolute top-1/2 right-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
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
                                                <div className="flex flex-col gap-6 pt-2">
                                                    {hiddenInclusions.length >
                                                        0 && (
                                                        <ul className="space-y-2">
                                                            {hiddenInclusions.map(
                                                                (
                                                                    item,
                                                                    idx,
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className={`flex items-start gap-3 transition-all duration-300 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 ${
                                                                            isExpanded
                                                                                ? 'translate-x-0 opacity-100'
                                                                                : '-translate-x-2 opacity-0'
                                                                        }`}
                                                                        style={{
                                                                            transitionDelay:
                                                                                isExpanded
                                                                                    ? `${Math.min(idx * 40, 320)}ms`
                                                                                    : '0ms',
                                                                        }}
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
                                                                            {
                                                                                item
                                                                            }
                                                                        </span>
                                                                    </li>
                                                                ),
                                                            )}
                                                        </ul>
                                                    )}

                                                    <div>
                                                        <h4 className="mb-3 border-b border-border pb-2 font-serif text-xs font-semibold tracking-widest text-foreground uppercase">
                                                            ✗ Not Included
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {pkg.exclusions.map(
                                                                (
                                                                    item,
                                                                    idx,
                                                                ) => {
                                                                    const delayIdx =
                                                                        hiddenInclusions.length +
                                                                        idx;
                                                                    return (
                                                                        <li
                                                                            key={
                                                                                idx
                                                                            }
                                                                            className={`flex items-start gap-3 transition-all duration-300 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-x-0 ${
                                                                                isExpanded
                                                                                    ? 'translate-x-0 opacity-100'
                                                                                    : '-translate-x-2 opacity-0'
                                                                            }`}
                                                                            style={{
                                                                                transitionDelay:
                                                                                    isExpanded
                                                                                        ? `${Math.min(delayIdx * 40, 320)}ms`
                                                                                        : '0ms',
                                                                            }}
                                                                        >
                                                                            <XCircle
                                                                                size={
                                                                                    15
                                                                                }
                                                                                className="mt-0.5 flex-shrink-0 text-muted-foreground/60"
                                                                            />
                                                                            <span className="text-sm font-light text-muted-foreground">
                                                                                {
                                                                                    item
                                                                                }
                                                                            </span>
                                                                        </li>
                                                                    );
                                                                },
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
                                            className="group/cta flex w-full items-center justify-center gap-2 rounded-sm py-3.5 text-xs font-bold tracking-[0.2em] text-white uppercase shadow-md transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                                            style={{
                                                backgroundColor:
                                                    pkg.accentColor,
                                            }}
                                        >
                                            Enquire About This Package
                                            <ArrowRight
                                                size={14}
                                                className="transition-transform duration-300 group-hover/cta:translate-x-1"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom note */}
                <div className="mt-10 rounded-sm border border-border bg-card p-6 text-center sm:p-8">
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
