import { usePage } from '@inertiajs/react';
import {
    Facebook,
    Instagram,
    Mail,
    MapPin,
    Phone,
    Twitter,
} from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { settings } = usePage().props as any;

    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="mb-8 grid gap-8 md:grid-cols-2">
                    {/* Brand & Social Links */}
                    <div>
                        <h3 className="mb-4 text-2xl font-bold text-amber-300">
                            Serene Haven Resort
                        </h3>
                        <p className="mb-6 text-gray-400">
                            Your premier destination for luxury, relaxation, and
                            unforgettable experiences.
                        </p>

                        <div className="flex space-x-6">
                            {/* Facebook – only show if link exists */}
                            {settings?.facebook_link && (
                                <a
                                    href={settings.facebook_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition hover:text-amber-300"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={20} />
                                </a>
                            )}

                            {/* Instagram – only show if link exists */}
                            {settings?.instagram && (
                                <a
                                    href={settings.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition hover:text-amber-300"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={20} />
                                </a>
                            )}

                            {/* Twitter / X – only show if link exists */}
                            {settings?.twitter && (
                                <a
                                    href={settings.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 transition hover:text-amber-300"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links + Contact Info */}
                    <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                        {/* Quick Links */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold">
                                Quick Links
                            </h4>
                            <ul className="space-y-2 text-gray-400">
                                {[
                                    'About Us',
                                    'Accommodations',
                                    'Experiences',
                                    'Dining',
                                    'Gallery',
                                ].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                                            className="transition hover:text-amber-300"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Location */}
                        <div>
                            <h4 className="mb-4 text-lg font-semibold">
                                Visit Us
                            </h4>
                            <ul className="space-y-3 text-gray-400">
                                <li className="flex items-center gap-3">
                                    <MapPin
                                        size={18}
                                        className="text-amber-300"
                                    />
                                    <span>{settings.address}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone
                                        size={18}
                                        className="text-amber-300"
                                    />
                                    <a
                                        href={`tel:${settings.phone}`}
                                        className="transition hover:text-amber-300"
                                    >
                                        {settings.phone}
                                    </a>
                                </li>

                                <li className="flex items-center gap-3">
                                    <Mail
                                        size={18}
                                        className="text-amber-300"
                                    />
                                    <a
                                        href={`mailto:${settings.email}`}
                                        className="transition hover:text-amber-300"
                                    >
                                        {settings.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
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
