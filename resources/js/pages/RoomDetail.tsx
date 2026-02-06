import Carousel from '@/components/home/Carousel';
import { Head, router, usePage } from '@inertiajs/react';
import { Check, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Room {
    name: string;
    price: number;
    size: string;
    guests: number;
    beds: string;
    description: string;
    images: string; // note: single string from controller
    amenities: string[];
    availability: string;
}

interface PageProps {
    room: Room;
    [key: string]: any;
}

export default function RoomDetail() {
    const { props } = usePage<PageProps>();
    const { room } = props;

    const [expandedSection, setExpandedSection] = useState<string | null>(
        'amenities',
    );

    if (!room) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="text-center">
                    <h1 className="mb-4 text-3xl font-bold text-gray-900">
                        Room Not Found
                    </h1>
                    <button
                        onClick={() => router.get('/')}
                        className="rounded-md bg-amber-800 px-6 py-3 text-white hover:bg-amber-900"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    // Convert single image string to array for Carousel
    const images = [room.images];

    return (
        <div className="min-h-screen bg-background pt-20">
            <Head title={room.name} />

            <button
                onClick={() => router.get('/')}
                className="fixed top-24 left-6 z-40 rounded-sm border border-secondary bg-background px-6 py-2 text-primary shadow-sm transition-all hover:bg-muted font-medium text-xs uppercase tracking-widest"
            >
                ← Back
            </button>

            <div className="h-96 max-h-screen md:h-[70vh]">
                <Carousel images={images} />
            </div>

            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-end border-b border-border pb-8">
                    <div>
                        <h1 className="font-serif mb-2 text-4xl font-light text-foreground md:text-5xl">
                            {room.name}
                        </h1>
                        <p className="text-2xl font-light text-secondary">
                            ${room.price} <span className="text-sm uppercase tracking-widest text-muted-foreground ml-2">per night</span>
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <button className="rounded-sm bg-primary px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-primary/90 shadow-md">
                            Reserve Room
                        </button>
                    </div>
                </div>

                <div className="mb-16 grid gap-8 rounded-sm border border-border bg-card p-10 md:grid-cols-3">
                    <div className="text-center md:border-r border-border">
                        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Room Size</p>
                        <p className="text-xl font-medium text-foreground">
                            {room.size}
                        </p>
                    </div>
                    <div className="text-center md:border-r border-border">
                        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Max Guests</p>
                        <p className="text-xl font-medium text-foreground">
                            {room.guests} Guests
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                            Availability
                        </p>
                        <p className="text-xl font-medium text-foreground">
                            {room.availability}
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <p className="mb-16 text-xl leading-relaxed text-muted-foreground font-light italic text-center">
                        "{room.description}"
                    </p>

                    <div className="mb-16 space-y-6">
                        <div className="overflow-hidden rounded-sm border border-border">
                            <button
                                onClick={() =>
                                    setExpandedSection(
                                        expandedSection === 'amenities'
                                            ? null
                                            : 'amenities',
                                    )
                                }
                                className="flex w-full items-center justify-between bg-muted/30 p-6 transition-colors hover:bg-muted/50"
                            >
                                <h3 className="font-serif text-xl font-medium text-foreground">
                                    Room Amenities
                                </h3>
                                <ChevronDown
                                    size={20}
                                    className={`text-secondary transition-transform duration-300 ${expandedSection === 'amenities' ? 'rotate-180 transform' : ''}`}
                                />
                            </button>
                            {expandedSection === 'amenities' && (
                                <div className="grid gap-6 bg-card p-8 sm:grid-cols-2 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {room.amenities.map((amenity, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center space-x-3"
                                        >
                                            <Check
                                                size={16}
                                                className="text-secondary"
                                            />
                                            <span className="text-sm font-light text-foreground/80">
                                                {amenity}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <button className="rounded-sm bg-primary py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-primary/90 shadow-lg">
                            Instant Booking
                        </button>
                        <button className="rounded-sm border border-secondary py-5 text-xs font-bold uppercase tracking-[0.2em] text-secondary transition-all hover:bg-secondary/5">
                            Inquiry Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
