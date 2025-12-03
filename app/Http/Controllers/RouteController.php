<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Testimonial;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class RouteController extends Controller
{
    public function home()
    {
        return Inertia::render('welcome', [
            'canRegister' => Features::enabled(Features::registration()),
            'testimonials' => Testimonial::all(),
        ]);
    }

    public function show($slug)
    {
        // Fake data
        $experiences = [
            '1' => [
                'id' => '1',
                'title' => 'Tropical Water Adventure',
                'category' => 'Water Activities',
                'images' => [
                    'https://images.pexels.com/photos/2049411/pexels-photo-2049411.jpeg?auto=compress&cs=tinysrgb&w=800',
                    'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800',
                ],
                'description' => 'Fun water activities for all ages.',
                'fullDescription' => 'Enjoy kayaking, snorkeling, and paddleboarding in crystal-clear tropical waters. Perfect for beginners and experienced adventurers alike.',
                'duration' => '3 hours',
                'groupSize' => '2-10 people',
                'difficulty' => 'Easy',
                'price' => 120,
                'highlights' => [
                    'Kayaking through calm waters',
                    'Snorkeling with colorful fish',
                    'Paddleboarding at sunset',
                ],
                'inclusions' => ['Equipment rental', 'Instructor guidance', 'Safety gear'],
                'whatToBring' => ['Swimsuit', 'Sunscreen', 'Towel', 'Water bottle'],
                'bestTime' => 'Morning to afternoon',
                'age' => '8+ years',
            ],
            '2' => [
                'id' => '2',
                'title' => 'Mountain Hiking Expedition',
                'category' => 'Adventure',
                'images' => [
                    'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800',
                ],
                'description' => 'Challenging mountain hike for adventure lovers.',
                'fullDescription' => 'Join us for a thrilling hike through scenic mountain trails. Experience nature up close and enjoy panoramic views from the top.',
                'duration' => '6 hours',
                'groupSize' => '3-15 people',
                'difficulty' => 'Medium',
                'price' => 80,
                'highlights' => ['Scenic viewpoints', 'Wildlife spotting', 'Guided hike'],
                'inclusions' => ['Guide', 'Snacks', 'First aid kit'],
                'whatToBring' => ['Hiking boots', 'Water', 'Camera', 'Hat'],
                'bestTime' => 'Early morning',
                'age' => '12+ years',
            ],
        ];

        // Find experience by slug
        // $experience = collect($experiences)->firstWhere('id', $slug) ?? null;
        $experience = collect($experiences)->first() ?? null;

        return Inertia::render('ExperienceDetail', [
            'experienceId' => $experience['id'] ?? null,
            'experiences' => $experiences,
            'slug' => $slug,
        ]);
    }

    public function room()
    {
        $room = [
            'name' => 'Deluxe Ocean View Room',
            'description' => 'A spacious room with a stunning ocean view.',
            'images' =>
                'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
            'amenities' => [
                'Free Wi-Fi',
                'King-size bed',
                'Private balcony',
                'Mini bar',
                'Air conditioning',
            ],
            'price' => 250,
            'availability' => 'Available',
            'size' => '500 sq ft',
            'guests' => 2,
            'beds' => '1 King',
        ];
        return Inertia::render('RoomDetail', [
            'room' => $room,
        ]);
    }

    public function saveContact(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email',
                'phone' => 'nullable|string',
                'check_in' => 'required|date|after:now',
                'check_out' => 'required|date|after:check_in',
                'guest_number' => 'required|integer|min:1',
                'message' => 'nullable|string',
            ]);

            $contact = Contact::create($validated);
            return redirect()->back()->with('success', 'Your message has been sent!');
        } catch (Exception $e) {
            return redirect()->back()->with('error', 'Something went wrong!');
        }
    }
}
