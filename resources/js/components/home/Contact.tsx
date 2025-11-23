import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you shortly.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            checkIn: '',
            checkOut: '',
            guests: '2',
            message: '',
        });
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section
            id="contact"
            className="bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 py-24"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
                        Get In Touch
                    </h2>
                    <p className="mx-auto max-w-3xl text-xl text-gray-600">
                        Have questions or ready to book your stay? Our team is
                        here to help make your experience perfect.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="rounded-2xl bg-white p-8 shadow-lg">
                            <h3 className="mb-6 text-2xl font-bold text-gray-900">
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="rounded-lg bg-amber-100 p-3">
                                        <MapPin className="h-6 w-6 text-amber-800" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">
                                            Address
                                        </h4>
                                        <p className="text-gray-600">
                                            123 Paradise Avenue, Coastal Bay, CA
                                            90210
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="rounded-lg bg-amber-100 p-3">
                                        <Phone className="h-6 w-6 text-amber-800" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">
                                            Phone
                                        </h4>
                                        <p className="text-gray-600">
                                            +1 (234) 567-890
                                        </p>
                                        <p className="text-gray-600">
                                            +1 (234) 567-891
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="rounded-lg bg-amber-100 p-3">
                                        <Mail className="h-6 w-6 text-amber-800" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">
                                            Email
                                        </h4>
                                        <p className="text-gray-600">
                                            reservations@chitwanresort.com
                                        </p>
                                        <p className="text-gray-600">
                                            concierge@chitwanresort.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="rounded-lg bg-amber-100 p-3">
                                        <Clock className="h-6 w-6 text-amber-800" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-semibold text-gray-900">
                                            Reception Hours
                                        </h4>
                                        <p className="text-gray-600">
                                            24/7 Front Desk Service
                                        </p>
                                        <p className="text-gray-600">
                                            Check-in: 3:00 PM | Check-out: 11:00
                                            AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white p-8 shadow-lg">
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                Quick Facts
                            </h3>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-center space-x-2">
                                    <span className="h-2 w-2 rounded-full bg-amber-800"></span>
                                    <span>Free parking on-site</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="h-2 w-2 rounded-full bg-amber-800"></span>
                                    <span>
                                        Airport shuttle service available
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="h-2 w-2 rounded-full bg-amber-800"></span>
                                    <span>Pet-friendly accommodations</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="h-2 w-2 rounded-full bg-amber-800"></span>
                                    <span>Multilingual staff</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg">
                        <h3 className="mb-6 text-2xl font-bold text-gray-900">
                            Send Us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-800"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-800"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-800"
                                        placeholder="+1 234 567 890"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="checkIn"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Check-in Date
                                    </label>
                                    <input
                                        type="date"
                                        id="checkIn"
                                        name="checkIn"
                                        value={formData.checkIn}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-800"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="checkOut"
                                        className="mb-2 block text-sm font-medium text-gray-700"
                                    >
                                        Check-out Date
                                    </label>
                                    <input
                                        type="date"
                                        id="checkOut"
                                        name="checkOut"
                                        value={formData.checkOut}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-800"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="guests"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Number of Guests
                                </label>
                                <select
                                    id="guests"
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-800"
                                >
                                    <option value="1">1 Guest</option>
                                    <option value="2">2 Guests</option>
                                    <option value="3">3 Guests</option>
                                    <option value="4">4 Guests</option>
                                    <option value="5">5+ Guests</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-gray-700"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-amber-800"
                                    placeholder="Tell us about your preferences or any special requests..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="flex w-full items-center justify-center space-x-2 rounded-md bg-amber-800 py-4 font-medium text-white transition-colors hover:bg-amber-900"
                            >
                                <span>Send Message</span>
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
