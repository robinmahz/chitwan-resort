<?php

namespace Database\Seeders;

use App\Models\SiteSetting;
use App\Models\Room;
use App\Models\Dining;
use App\Models\Testimonial;
use App\Models\Gallery;
use Illuminate\Database\Seeder;

class UpdateWebsiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Site Settings
        $siteSettings = [
            'address' => 'Madhyabindu Municipality – Ward No. 3 Ratanpur, Nawalparasi (East) Gandaki Province, Nepal',
            'phone' => '976500033',
            'phone2' => '9766623978',
            'email' => 'narayanivista@gmail.com',
            'email2' => 'info.narayanivista@gmail.com',
            'reception_hour' => '24/7 Front Desk Service',
            'reception_hour_text' => 'Check-in: 2:00 PM | Check-out: 12:00 PM',
            'facebook_link' => "https://facebook.com",
            'instagram' => "https://instagram.com",
            'twitter' => "https://twitter.com"
        ];

        foreach ($siteSettings as $key => $value) {
            SiteSetting::updateOrCreate(['key' => $key], ['value' => $value]);
        }

        // 2. Rooms
        Room::truncate();
        $rooms = [
            [
                'name' => 'Garden View Villa',
                'description' => 'A beautiful villa offering peaceful garden views with comfortable bedding configurations. 4000 NPR for 2 single beds, 4500 NPR for 1 queen and 1 single bed.',
                'image' => 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'area' => '450 sq ft',
                'guests' => 3,
                'price' => '4000 - 4500',
                'furniture' => '2 Single / 1 Queen + 1 Single',
                'amenities' => ['Garden View', 'Air Conditioning', 'Rain Shower', 'Mini Bar', 'Free Wi-Fi'],
            ],
            [
                'name' => 'Narayani River Front Room',
                'description' => 'Enjoy spectacular, direct views of the Narayani River from your room. Relax in style and comfort.',
                'image' => 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'area' => '500 sq ft',
                'guests' => 2,
                'price' => '5000',
                'furniture' => '1 King Bed',
                'amenities' => ['River View', 'Balcony', 'Free Wi-Fi', 'Mini Bar', 'Air Conditioning'],
            ],
            [
                'name' => 'Narayani Deluxe Front Room',
                'description' => 'Luxurious Deluxe room located at the riverfront, offering premium amenities and comfortable furnishings.',
                'image' => 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'area' => '600 sq ft',
                'guests' => 2,
                'price' => '6000',
                'furniture' => '1 King Bed',
                'amenities' => ['River View', 'Private Terrace', 'Premium Amenities', 'Mini Bar', 'Free Wi-Fi'],
            ],
            [
                'name' => 'Narayani Super Deluxe Room',
                'description' => 'The pinnacle of luxury at Narayani Vista, featuring expansive space, exceptional design, and prime riverfront views.',
                'image' => 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1200',
                'area' => '750 sq ft',
                'guests' => 3,
                'price' => '7500',
                'furniture' => '1 King Bed + 1 Single Bed',
                'amenities' => ['Panoramic River View', 'Large Balcony', 'Premium Bathrobe & Slippers', 'Espresso Machine', 'Mini Bar'],
            ]
        ];

        foreach ($rooms as $roomData) {
            Room::create($roomData);
        }

        // 3. Dining Venues
        Dining::truncate();
        $dinings = [
            [
                'name' => 'The Terrace Restaurant',
                'category' => 'International Fine Dining',
                'description' => 'Exquisite dishes crafted from locally sourced ingredients with breathtaking sunset views.',
                'hours' => 'Breakfast: 7AM-11AM | Dinner: 6PM-11PM',
                'image' => 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
            ],
            [
                'name' => 'Vista Bar',
                'category' => 'Wine & Tapas',
                'description' => 'Curated selection of premium wines paired with artisanal small plates in an intimate setting overlooking the river.',
                'hours' => 'Daily: 4PM-Midnight',
                'image' => 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200',
            ],
            [
                'name' => 'Garden Café',
                'category' => 'Light Fare & Coffee',
                'description' => 'Fresh pastries, specialty coffees, and healthy snacks in a lush garden atmosphere.',
                'hours' => 'Daily: 6AM-6PM',
                'image' => 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1200',
            ],
            [
                'name' => 'Poolside Grill',
                'category' => 'Casual Dining',
                'description' => 'Grilled specialties and refreshing cocktails served in a relaxed poolside setting.',
                'hours' => 'Daily: 11AM-8PM',
                'image' => 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200',
            ]
        ];

        foreach ($dinings as $diningData) {
            Dining::create($diningData);
        }

        // 4. Testimonials (Authentic Guest Narratives)
        Testimonial::truncate();
        $testimonials = [
            [
                'name' => 'Deepak Sharma',
                'position' => 'Wildlife Enthusiast',
                'description' => 'We had an incredible stay! The guided Jeep Safari organized by Narayani Vista was top-notch. We spotted a one-horned rhino and exotic birds. Returning to the luxurious comfort of the resort next to the river was the perfect end to our days.',
                'image' => 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating' => 5,
            ],
            [
                'name' => 'Elena Rostova',
                'position' => 'Nature Photographer',
                'description' => 'Narayani Vista offers the absolute best views of the sunset over the Narayani River. The quiet luxury vibe, combined with the peaceful atmosphere of Nawalparasi, is perfect for anyone looking to reconnect with nature.',
                'image' => 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating' => 5,
            ],
            [
                'name' => 'Aarav Mehta',
                'position' => 'Family Traveler',
                'description' => 'Our family package (3 days, 2 nights) was flawless. From the traditional Tharu cultural dance to the canoeing adventure, everything was perfectly coordinated. The staff went above and beyond to make us feel welcome.',
                'image' => 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating' => 5,
            ],
            [
                'name' => 'Sarah Jenkins',
                'position' => 'Solo Nomad',
                'description' => 'A hidden gem in Nawalparasi! The Vista Bar has an amazing selection, and the staff are incredibly hospitable. The Riverside Serenity here is truly magical.',
                'image' => 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
                'rating' => 5,
            ]
        ];

        foreach ($testimonials as $testimonialData) {
            Testimonial::create($testimonialData);
        }

        // 5. Gallery
        Gallery::truncate();
        $galleries = [
            [
                'name' => 'Resort View',
                'image' => ['https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1200'],
                'order' => 1,
            ],
            [
                'name' => 'Jungle Safari',
                'image' => ['https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=1200'],
                'order' => 2,
            ],
            [
                'name' => 'Narayani River Sunset',
                'image' => ['https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1200'],
                'order' => 3,
            ]
        ];

        foreach ($galleries as $galleryData) {
            Gallery::create($galleryData);
        }
    }
}
