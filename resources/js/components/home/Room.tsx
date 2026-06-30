import { Room } from '@/types';
import { Bed, Maximize, Users, Wifi } from 'lucide-react';

export default function Rooms({ rooms }: { rooms: Room[] }) {
    if (rooms.length === 0) {
        rooms = [
            {
                name: 'Garden View Villa',
                image_url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
                image_url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
                price: '5000',
                area: '500 sq ft',
                guests: 2,
                furniture: '1 King Bed',
                description:
                    'Enjoy spectacular, direct views of the Narayani River. Relax in style and comfort, lulled by the sounds of nature.',
                amenities: [
                    'River View',
                    'Balcony',
                    'Free Wi-Fi',
                    'Mini Bar',
                ],
            },
            {
                name: 'Narayani Deluxe Front Room',
                image_url: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
                image_url: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
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
    return (
        <section
            id="rooms"
            className="bg-background py-32 border-b border-border/50"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-24 text-center">
                    <h2 className="font-serif mb-6 text-4xl font-light text-foreground md:text-5xl">
                        Refined Sanctuaries
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-light">
                        Discover our collection of thoughtfully appointed riverside retreats, 
                        where every detail is curated for your ultimate comfort and serenity.
                    </p>
                </div>

                <div className="grid gap-12 md:grid-cols-2">
                    {rooms.map((room, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-sm border border-border bg-card transition-all duration-500 hover:shadow-2xl"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/60 to-transparent"></div>
                                <img
                                    src={room.image_url}
                                    alt={room.name}
                                    className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-6 left-8 z-20">
                                    <h3 className="font-serif text-3xl font-light text-white mb-1">
                                        {room.name}
                                    </h3>
                                    <p className="text-xl font-semibold text-secondary">
                                        NPR {room.price} <span className="text-[10px] uppercase tracking-widest text-white/70 ml-2 font-normal">per night</span>
                                    </p>
                                </div>
                            </div>

                            <div className="p-10">
                                <p className="mb-8 leading-relaxed text-muted-foreground font-light italic">
                                    "{room.description}"
                                </p>

                                <div className="mb-10 grid grid-cols-2 gap-y-6 gap-x-4 border-y border-border py-8">
                                    <div className="flex items-center space-x-3 text-foreground/80">
                                        <Maximize
                                            size={16}
                                            className="text-secondary"
                                        />
                                        <span className="text-xs font-light tracking-wide uppercase">
                                            {room.area}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-foreground/80">
                                        <Users
                                            size={16}
                                            className="text-secondary"
                                        />
                                        <span className="text-xs font-light tracking-wide uppercase">
                                            {room.guests} Guests
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-foreground/80">
                                        <Bed
                                            size={16}
                                            className="text-secondary"
                                        />
                                        <span className="text-xs font-light tracking-wide uppercase">
                                            {room.furniture}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-foreground/80">
                                        <Wifi
                                            size={16}
                                            className="text-secondary"
                                        />
                                        <span className="text-xs font-light tracking-wide uppercase">
                                            Complimentary WiFi
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <h4 className="font-serif mb-4 text-lg font-semibold text-foreground border-b border-border pb-2">
                                        Room Amenities
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {room.amenities.map((amenity, idx) => (
                                            <span
                                                key={idx}
                                                className="rounded-sm border border-secondary/40 bg-secondary/15 px-4 py-1.5 text-xs uppercase tracking-widest font-bold text-foreground dark:text-white"
                                            >
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full rounded-sm bg-primary py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-primary/90 shadow-lg">
                                    Inquire Availability
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
