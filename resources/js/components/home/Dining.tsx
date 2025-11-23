import { Coffee, IceCream, UtensilsCrossed, Wine } from 'lucide-react';

export default function Dining() {
    const venues = [
        {
            icon: <UtensilsCrossed className="h-10 w-10" />,
            name: 'The Terrace Restaurant',
            cuisine: 'International Fine Dining',
            description:
                'Exquisite dishes crafted from locally sourced ingredients with breathtaking sunset views.',
            hours: 'Breakfast: 7AM-11AM | Dinner: 6PM-11PM',
            image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
        },
        {
            icon: <Wine className="h-10 w-10" />,
            name: 'Coastal Wine Bar',
            cuisine: 'Wine & Tapas',
            description:
                'Curated selection of premium wines paired with artisanal small plates in an intimate setting.',
            hours: 'Daily: 4PM-Midnight',
            image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200',
        },
        {
            icon: <Coffee className="h-10 w-10" />,
            name: 'Garden Café',
            cuisine: 'Light Fare & Coffee',
            description:
                'Fresh pastries, specialty coffees, and healthy snacks in a lush garden atmosphere.',
            hours: 'Daily: 6AM-6PM',
            image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1200',
        },
        {
            icon: <IceCream className="h-10 w-10" />,
            name: 'Poolside Grill',
            cuisine: 'Casual Dining',
            description:
                'Grilled specialties and refreshing cocktails served in a relaxed poolside setting.',
            hours: 'Daily: 11AM-8PM',
            image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200',
        },
    ];

    return (
        <section
            id="dining"
            className="bg-gradient-to-br from-gray-50 to-amber-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        Culinary Excellence
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        Savor exceptional cuisine at our diverse dining venues,
                        where every meal is a celebration of flavor, freshness,
                        and creativity.
                    </p>
                </div>

                <div className="mb-16 grid gap-8 md:grid-cols-2">
                    {venues.map((venue, index) => (
                        <div
                            key={index}
                            className="transform overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={venue.image}
                                    alt={venue.name}
                                    className="h-full w-full transform object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 rounded-full bg-amber-800 p-3 text-white">
                                    {venue.icon}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                    {venue.name}
                                </h3>
                                <p className="mb-4 font-semibold text-amber-800">
                                    {venue.cuisine}
                                </p>
                                <p className="mb-4 leading-relaxed text-gray-600">
                                    {venue.description}
                                </p>
                                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                    <span className="text-sm text-gray-500">
                                        {venue.hours}
                                    </span>
                                    <button className="text-sm font-medium text-amber-800 hover:text-amber-900">
                                        View Menu →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    <div className="rounded-xl bg-white p-8 text-center shadow-md">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                            <span className="text-3xl font-bold text-amber-800">
                                5★
                            </span>
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-gray-900">
                            Award-Winning Chefs
                        </h4>
                        <p className="text-gray-600">
                            Michelin-trained culinary artists creating
                            unforgettable dining experiences
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-8 text-center shadow-md">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                            <span className="text-3xl font-bold text-amber-800">
                                100%
                            </span>
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-gray-900">
                            Fresh & Local
                        </h4>
                        <p className="text-gray-600">
                            Ingredients sourced daily from local farms and
                            sustainable suppliers
                        </p>
                    </div>

                    <div className="rounded-xl bg-white p-8 text-center shadow-md">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                            <span className="text-3xl font-bold text-amber-800">
                                24/7
                            </span>
                        </div>
                        <h4 className="mb-2 text-xl font-bold text-gray-900">
                            Room Service
                        </h4>
                        <p className="text-gray-600">
                            Gourmet meals delivered to your room at any hour of
                            the day
                        </p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-block rounded-2xl bg-white p-8 shadow-lg">
                        <h3 className="mb-3 text-2xl font-bold text-gray-900">
                            Special Dietary Needs?
                        </h3>
                        <p className="mb-6 max-w-xl text-gray-600">
                            Our chefs are happy to accommodate vegetarian,
                            vegan, gluten-free, and other dietary preferences.
                            Please inform us in advance.
                        </p>
                        <button className="rounded-md bg-amber-800 px-8 py-3 font-medium text-white transition-colors hover:bg-amber-900">
                            Speak to Our Chef
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
