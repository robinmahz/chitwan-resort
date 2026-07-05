<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Dining;
use App\Models\Gallery;
use App\Models\Room;
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
            'rooms' => Room::orderBy('order')->get(),
            'galleries' => Gallery::all(),
            'dinings' => Dining::all(),
        ]);
    }

    public function show($slug)
    {
        return Inertia::render('ExperienceDetail', [
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
