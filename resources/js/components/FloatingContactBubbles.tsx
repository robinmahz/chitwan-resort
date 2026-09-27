import { usePage } from '@inertiajs/react';
import { Mail, MessageCircle, Phone } from 'lucide-react';

export default function FloatingContactBubbles() {
    const { settings } = usePage().props as any;

    if (!settings) return null;

    return (
        <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
            {/* WhatsApp */}
            {settings.phone && (
                <a
                    href={`https://wa.me/${settings.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                    aria-label="Contact us on WhatsApp"
                >
                    <MessageCircle size={24} />
                </a>
            )}

            {/* Phone */}
            {settings.phone && (
                <a
                    href={`tel:${settings.phone}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                    aria-label="Call us"
                >
                    <Phone size={24} />
                </a>
            )}

            {/* Mail */}
            {settings.email && (
                <a
                    href={`mailto:${settings.email}`}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                    aria-label="Email us"
                >
                    <Mail size={24} />
                </a>
            )}
        </div>
    );
}
