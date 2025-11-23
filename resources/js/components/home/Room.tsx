import { Bed, Maximize, Users, Wifi } from 'lucide-react';

export default function Rooms() {
    const rooms = [
        {
            name: 'Deluxe Garden View',
            image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
            price: 250,
            size: '450 sq ft',
            guests: 2,
            beds: '1 King',
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
            image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
            price: 450,
            size: '750 sq ft',
            guests: 3,
            beds: '1 King + Sofa',
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
            image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
            price: 650,
            size: '1200 sq ft',
            guests: 6,
            beds: '2 King + 2 Twin',
            description:
                'Luxurious villa with multiple bedrooms, ideal for families.',
            amenities: ['Private Pool', 'Kitchen', '2 Bathrooms', 'Terrace'],
        },
        {
            name: 'Presidential Suite',
            image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
            price: 950,
            size: '1800 sq ft',
            guests: 4,
            beds: '2 King',
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

    return (
        <section
            id="rooms"
            className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        Luxurious Accommodations
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        Choose from our collection of beautifully appointed
                        rooms and suites, each designed to provide the ultimate
                        in comfort and style.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {rooms.map((room, index) => (
                        <div
                            key={index}
                            className="transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <img
                                    src={room.image}
                                    alt={room.name}
                                    className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <h3 className="text-2xl font-bold text-white">
                                        {room.name}
                                    </h3>
                                    <p className="text-xl font-semibold text-amber-300">
                                        ${room.price} / night
                                    </p>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="mb-6 leading-relaxed text-gray-600">
                                    {room.description}
                                </p>

                                <div className="mb-6 flex flex-wrap gap-4">
                                    <div className="flex items-center space-x-2 text-gray-700">
                                        <Maximize
                                            size={18}
                                            className="text-amber-800"
                                        />
                                        <span className="text-sm">
                                            {room.size}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-700">
                                        <Users
                                            size={18}
                                            className="text-amber-800"
                                        />
                                        <span className="text-sm">
                                            {room.guests} Guests
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-700">
                                        <Bed
                                            size={18}
                                            className="text-amber-800"
                                        />
                                        <span className="text-sm">
                                            {room.beds}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2 text-gray-700">
                                        <Wifi
                                            size={18}
                                            className="text-amber-800"
                                        />
                                        <span className="text-sm">
                                            Free WiFi
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="mb-3 font-semibold text-gray-900">
                                        Amenities
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {room.amenities.map((amenity, idx) => (
                                            <span
                                                key={idx}
                                                className="rounded-full bg-amber-100 px-3 py-1 text-sm text-amber-800"
                                            >
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full rounded-md bg-amber-800 py-3 font-medium text-white transition-colors hover:bg-amber-900">
                                    Book This Room
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
