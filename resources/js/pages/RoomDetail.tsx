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
        <div className="min-h-screen bg-white pt-20">
            <Head title={room.name} />

            <button
                onClick={() => router.get('/')}
                className="fixed top-24 left-6 z-40 rounded-full border-2 border-amber-800 bg-white px-6 py-2 text-amber-800 shadow-lg transition-all hover:shadow-xl"
            >
                ← Back
            </button>

            <div className="h-96 max-h-screen md:h-screen">
                <Carousel images={images} />
            </div>

            <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
                    <div>
                        <h1 className="mb-2 text-4xl font-bold text-gray-900 md:text-5xl">
                            {room.name}
                        </h1>
                        <p className="text-2xl font-semibold text-amber-800">
                            ${room.price} per night
                        </p>
                    </div>
                </div>

                <div className="mb-12 grid gap-8 rounded-xl bg-amber-50 p-6 md:grid-cols-3">
                    <div className="text-center">
                        <p className="mb-1 text-sm text-gray-600">Room Size</p>
                        <p className="text-2xl font-bold text-gray-900">
                            {room.size}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="mb-1 text-sm text-gray-600">Max Guests</p>
                        <p className="text-2xl font-bold text-gray-900">
                            {room.guests}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="mb-1 text-sm text-gray-600">
                            Availability
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                            {room.availability}
                        </p>
                    </div>
                </div>

                <p className="mb-12 text-lg leading-relaxed text-gray-700">
                    {room.description}
                </p>

                <div className="mb-12 space-y-6">
                    <div className="overflow-hidden rounded-xl border border-gray-200">
                        <button
                            onClick={() =>
                                setExpandedSection(
                                    expandedSection === 'amenities'
                                        ? null
                                        : 'amenities',
                                )
                            }
                            className="flex w-full items-center justify-between bg-amber-50 p-6 transition-colors hover:bg-amber-100"
                        >
                            <h3 className="text-xl font-bold text-gray-900">
                                Room Amenities
                            </h3>
                            <ChevronDown
                                size={24}
                                className={`text-amber-800 transition-transform ${expandedSection === 'amenities' ? 'rotate-180 transform' : ''}`}
                            />
                        </button>
                        {expandedSection === 'amenities' && (
                            <div className="grid gap-4 bg-white p-6 sm:grid-cols-2">
                                {room.amenities.map((amenity, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center space-x-3"
                                    >
                                        <Check
                                            size={20}
                                            className="text-green-600"
                                        />
                                        <span className="text-gray-700">
                                            {amenity}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <button className="rounded-lg bg-amber-800 py-4 text-lg font-semibold text-white transition-colors hover:bg-amber-900">
                        Book Now
                    </button>
                    <button className="rounded-lg border-2 border-amber-800 py-4 text-lg font-semibold text-amber-800 transition-colors hover:bg-amber-50">
                        Request Information
                    </button>
                </div>
            </div>
        </div>
    );
}
