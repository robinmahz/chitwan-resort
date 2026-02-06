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
        <footer className="bg-primary text-white border-t border-secondary/20">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-12 grid gap-12 md:grid-cols-2">
                    {/* Brand & Social Links */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-3xl font-light tracking-wide text-secondary">
                            Narayani Vista
                        </h3>
                        <p className="max-w-md text-white/70 font-light leading-relaxed">
                            A serene sanctuary on the riverbanks of Chitwan, where refined luxury 
                            harmonizes with the raw beauty of the wilderness.
                        </p>

                        <div className="flex space-x-6">
                            {/* Facebook – only show if link exists */}
                            {settings?.facebook_link && (
                                <a
                                    href={settings.facebook_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/50 transition duration-300 hover:text-secondary"
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
                                    className="text-white/50 transition duration-300 hover:text-secondary"
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
                                    className="text-white/50 transition duration-300 hover:text-secondary"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={20} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Quick Links + Contact Info */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Quick Links */}
                        <div>
                            <h4 className="font-serif mb-6 text-sm font-medium text-white tracking-widest uppercase opacity-80">
                                Discover
                            </h4>
                            <ul className="space-y-3 text-sm text-white/60 font-light">
                                {[
                                    { label: 'About', id: 'about' },
                                    { label: 'Rooms', id: 'rooms' },
                                    { label: 'Experiences', id: 'experiences' },
                                    { label: 'Dining', id: 'dining' },
                                    { label: 'Gallery', id: 'gallery' },
                                ].map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className="transition duration-300 hover:text-secondary"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact & Location */}
                        <div>
                            <h4 className="font-serif mb-6 text-sm font-medium text-white tracking-widest uppercase opacity-80">
                                Connect
                            </h4>
                            <ul className="space-y-4 text-sm text-white/60 font-light">
                                <li className="flex items-start gap-3">
                                    <MapPin
                                        size={18}
                                        className="text-secondary flex-shrink-0"
                                    />
                                    <span>{settings.address}</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Phone
                                        size={18}
                                        className="text-secondary flex-shrink-0"
                                    />
                                    <a
                                        href={`tel:${settings.phone}`}
                                        className="transition duration-300 hover:text-secondary"
                                    >
                                        {settings.phone}
                                    </a>
                                </li>

                                <li className="flex items-center gap-3">
                                    <Mail
                                        size={18}
                                        className="text-secondary flex-shrink-0"
                                    />
                                    <a
                                        href={`mailto:${settings.email}`}
                                        className="transition duration-300 hover:text-secondary"
                                    >
                                        {settings.email}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 tracking-[0.2em] uppercase">
                    <p>
                        &copy; {currentYear} Narayani Vista Riverside Resort.
                    </p>
                    <p className="mt-2 md:mt-0 font-medium text-white/60">
                        ESTD 2026
                    </p>
                </div>
            </div>
        </footer>
    );
}
