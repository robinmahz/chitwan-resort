import { Room } from '@/types';
import { Bed, Maximize, Users, Wifi } from 'lucide-react';

export default function Rooms({ rooms }: { rooms: Room[] }) {
    if (rooms.length === 0) {
        rooms = [
            {
                name: 'Deluxe Garden View',
                image_url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
                price: 250,
                area: '450 sq ft',
                guests: 2,
                furniture: '1 King',
                description:
                    'Elegant room with garden views, perfect for couples seeking tranquility.',
                amenities: [
                    'Private Balcony',
                    'Rain Shower',
                    'Mini Bar',
                    'Smart TV',
                ],
            },
            {
                name: 'Ocean Breeze Suite',
                image_url: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
                price: 450,
                area: '750 sq ft',
                guests: 3,
                furniture: '1 King + Sofa',
                description:
                    'Spacious suite with panoramic ocean views and separate living area.',
                amenities: [
                    'Ocean View',
                    'Jacuzzi Tub',
                    'Living Room',
                    'Premium Bar',
                ],
            },
            {
                name: 'Family Villa',
                image_url: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
                price: 650,
                area: '1200 sq ft',
                guests: 6,
                furniture: '2 King + 2 Twin',
                description:
                    'Luxurious villa with multiple bedrooms, ideal for families.',
                amenities: ['Private Pool', 'Kitchen', '2 Bathrooms', 'Terrace'],
            },
            {
                name: 'Presidential Suite',
                image_url: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
                price: 950,
                area: '1800 sq ft',
                guests: 4,
                furniture: '2 King',
                description:
                    'Ultimate luxury with exclusive amenities and personalized service.',
                amenities: [
                    'Butler Service',
                    'Private Infinity Pool',
                    'Wine Cellar',
                    'Home Theater',
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
                                    <p className="text-xl font-light text-secondary">
                                        ${room.price} <span className="text-[10px] uppercase tracking-widest text-white/70 ml-2">per night</span>
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
                                    <h4 className="font-serif mb-4 text-lg font-medium text-foreground">
                                        Room Amenities
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {room.amenities.map((amenity, idx) => (
                                            <span
                                                key={idx}
                                                className="rounded-sm border border-secondary/20 bg-secondary/5 px-3 py-1 text-[10px] uppercase tracking-widest font-bold text-secondary"
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
