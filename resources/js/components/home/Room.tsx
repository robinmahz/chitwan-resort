import { Room } from '@/types';
import { ArrowRight, Bed, Maximize, Users, Wifi } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import './room-card.css';

const ROOM_ACCENTS = ['#C9973A', '#001B30', '#5C7A5E', '#A65A3C'];

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

export default function Rooms({ rooms }: { rooms: Room[] }) {
    if (rooms.length === 0) {
        rooms = [
            {
                name: 'Garden View Villa',
                image_url:
                    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
                price: '4000 - 4500',
                area: '450 sq ft',
                guests: 3,
                furniture: '2 Single / 1 Queen + 1 Single',
                description:
                    'A beautiful villa offering peaceful garden views with comfortable bedding configurations. Perfect for couples and small families.',
                amenities: [
                    'Garden View',
                    'Air Conditioning',
                    'Rain Shower',
                    'Mini Bar',
                ],
            },
            {
                name: 'Narayani River Front Room',
                image_url:
                    'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
                price: '5000',
                area: '500 sq ft',
                guests: 2,
                furniture: '1 King Bed',
                description:
                    'Enjoy spectacular, direct views of the Narayani River. Relax in style and comfort, lulled by the sounds of nature.',
                amenities: ['River View', 'Balcony', 'Free Wi-Fi', 'Mini Bar'],
            },
            {
                name: 'Narayani Deluxe Front Room',
                image_url:
                    'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
                price: '6000',
                area: '600 sq ft',
                guests: 2,
                furniture: '1 King Bed',
                description:
                    'Luxurious Deluxe room at the riverfront, offering premium amenities and refined furnishings for a memorable stay.',
                amenities: [
                    'River View',
                    'Private Terrace',
                    'Premium Amenities',
                    'Mini Bar',
                ],
            },
            {
                name: 'Narayani Super Deluxe Room',
                image_url:
                    'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
                price: '7500',
                area: '750 sq ft',
                guests: 3,
                furniture: '1 King + 1 Single',
                description:
                    'The pinnacle of luxury at Narayani Vista, featuring expansive space and prime panoramic riverfront views.',
                amenities: [
                    'Panoramic River View',
                    'Large Balcony',
                    'Espresso Machine',
                    'Mini Bar',
                ],
            },
        ];
    }

    const { ref: gridRef, inView } = useRevealOnView<HTMLDivElement>();

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
            id="rooms"
            className="border-t border-b border-border/50 bg-background py-14 sm:py-16"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-6 font-serif text-4xl font-light text-foreground md:text-5xl">
                        Refined Sanctuaries
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
                        Discover our collection of thoughtfully appointed
                        riverside retreats, where every detail is curated for
                        your ultimate comfort and serenity.
                    </p>
                </div>

                <div
                    ref={gridRef}
                    className="grid gap-8 md:grid-cols-2 lg:gap-10"
                >
                    {rooms.map((room, index) => {
                        const accent =
                            ROOM_ACCENTS[index % ROOM_ACCENTS.length];

                        return (
                            <div
                                key={index}
                                className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${
                                    inView
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-8 opacity-0'
                                }`}
                                style={{
                                    transitionDelay: inView
                                        ? `${index * 100}ms`
                                        : '0ms',
                                }}
                            >
                                <div
                                    className="room-card relative h-full overflow-hidden rounded-sm border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                                    style={
                                        {
                                            '--room-accent': accent,
                                        } as React.CSSProperties
                                    }
                                >
                                    {/* Accent spine, draws in as the card reveals */}
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-y-0 left-0 z-10 w-[3px] origin-top transition-transform duration-700 ease-out motion-reduce:transition-none"
                                        style={{
                                            backgroundColor: accent,
                                            transform: inView
                                                ? 'scaleY(1)'
                                                : 'scaleY(0)',
                                        }}
                                    />

                                    <div className="room-card__media">
                                        <img
                                            src={room.image_url}
                                            alt={room.name}
                                            className="room-card__image"
                                        />
                                        <div
                                            className="room-card__scrim"
                                            aria-hidden="true"
                                        />

                                        {/* Decorative duplicate: the visible, clickable layer for
                                            pointer users on touch (always) and on hover (desktop).
                                            The real, always-accessible content lives in
                                            .room-card__details below. */}
                                        <div
                                            className="room-card__overlay"
                                            aria-hidden="true"
                                        >
                                            <div className="room-card__overlay-top">
                                                <h3 className="room-card__overlay-title font-serif text-xl font-medium">
                                                    {room.name}
                                                </h3>
                                                <div className="shrink-0 text-right">
                                                    <p className="room-card__overlay-price-amount font-serif text-lg font-semibold">
                                                        NPR {room.price}
                                                    </p>
                                                    <p className="room-card__overlay-price-label text-[10px] font-light tracking-widest uppercase">
                                                        per night
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="room-card__overlay-stats flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] tracking-wide uppercase">
                                                <span className="inline-flex items-center gap-1.5">
                                                    <Maximize
                                                        size={12}
                                                        className="room-card__overlay-stat-icon"
                                                    />
                                                    {room.area}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5">
                                                    <Users
                                                        size={12}
                                                        className="room-card__overlay-stat-icon"
                                                    />
                                                    {room.guests} Guests
                                                </span>
                                                <span className="inline-flex items-center gap-1.5">
                                                    <Bed
                                                        size={12}
                                                        className="room-card__overlay-stat-icon"
                                                    />
                                                    {room.furniture}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5">
                                                    <Wifi
                                                        size={12}
                                                        className="room-card__overlay-stat-icon"
                                                    />
                                                    Complimentary WiFi
                                                </span>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5">
                                                {room.amenities.map(
                                                    (amenity, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="room-card__overlay-tag rounded-sm border px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase"
                                                        >
                                                            {amenity}
                                                        </span>
                                                    ),
                                                )}
                                            </div>

                                            <button
                                                type="button"
                                                tabIndex={-1}
                                                onClick={scrollToContact}
                                                className="room-card__cta group/cta flex items-center justify-center gap-2 rounded-sm py-3 text-xs font-bold tracking-[0.2em] text-white uppercase shadow-md transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                                            >
                                                Inquire Availability
                                                <ArrowRight
                                                    size={14}
                                                    className="transition-transform duration-300 group-hover/cta:translate-x-1"
                                                />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="room-card__details flex flex-col gap-5 p-6 sm:p-7">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="font-serif text-2xl font-medium text-foreground">
                                                {room.name}
                                            </h3>
                                            <div className="shrink-0 text-right">
                                                <p className="room-card__price-amount font-serif text-xl font-semibold">
                                                    NPR {room.price}
                                                </p>
                                                <p className="text-[10px] font-light tracking-widest text-muted-foreground uppercase">
                                                    per night
                                                </p>
                                            </div>
                                        </div>

                                        <p
                                            className="text-sm leading-relaxed font-light text-muted-foreground"
                                            dangerouslySetInnerHTML={{
                                                __html: room.description,
                                            }}
                                        />

                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-border py-3 text-xs tracking-wide text-foreground/80 uppercase">
                                            <span className="inline-flex items-center gap-1.5">
                                                <Maximize
                                                    size={13}
                                                    className="room-card__stat-icon"
                                                />
                                                {room.area}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <Users
                                                    size={13}
                                                    className="room-card__stat-icon"
                                                />
                                                {room.guests} Guests
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <Bed
                                                    size={13}
                                                    className="room-card__stat-icon"
                                                />
                                                {room.furniture}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <Wifi
                                                    size={13}
                                                    className="room-card__stat-icon"
                                                />
                                                Complimentary WiFi
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {room.amenities.map(
                                                (amenity, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="rounded-sm border border-border px-3 py-1 text-[11px] font-medium tracking-wide text-foreground/70 uppercase transition-all duration-300 motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0"
                                                        style={{
                                                            opacity: inView
                                                                ? 1
                                                                : 0,
                                                            transform: inView
                                                                ? 'translateY(0)'
                                                                : 'translateY(4px)',
                                                            transitionDelay:
                                                                inView
                                                                    ? `${300 + idx * 60}ms`
                                                                    : '0ms',
                                                        }}
                                                    >
                                                        {amenity}
                                                    </span>
                                                ),
                                            )}
                                        </div>

                                        <button
                                            onClick={scrollToContact}
                                            className="room-card__cta group/cta mt-auto flex items-center justify-center gap-2 rounded-sm py-3.5 text-xs font-bold tracking-[0.2em] text-white uppercase shadow-md transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                                        >
                                            Inquire Availability
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
            </div>
        </section>
    );
}
