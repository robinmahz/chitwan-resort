import { Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8 grid gap-8 md:grid-cols-4">
                    <div>
                        <h3 className="mb-4 text-2xl font-bold text-amber-300">
                            Serene Haven Resort
                        </h3>
                        <p className="mb-4 text-gray-400">
                            Your premier destination for luxury, relaxation, and
                            unforgettable experiences.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 transition-colors hover:text-amber-300"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 transition-colors hover:text-amber-300"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 transition-colors hover:text-amber-300"
                            >
                                <Twitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 transition-colors hover:text-amber-300"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#about"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#rooms"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    Accommodations
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#experiences"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    Experiences
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#dining"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    Dining
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#gallery"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    Gallery
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold">Policies</h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    Cancellation Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 transition-colors hover:text-amber-300"
                                >
                                    Gift Cards
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-lg font-semibold">
                            Newsletter
                        </h4>
                        <p className="mb-4 text-gray-400">
                            Subscribe for exclusive offers and updates.
                        </p>
                        <form className="space-y-3">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 rounded-l-md bg-gray-800 px-4 py-2 text-white focus:ring-2 focus:ring-amber-300 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="rounded-r-md bg-amber-800 px-4 py-2 text-white transition-colors hover:bg-amber-900"
                                >
                                    <Mail size={20} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                    <p>
                        &copy; {currentYear} Serene Haven Resort. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
