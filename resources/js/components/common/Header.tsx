import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeaderProps {
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export default function Header({
    activeSection,
    setActiveSection,
}: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false);

        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'rooms', label: 'Rooms' },
        { id: 'experiences', label: 'Experiences' },
        { id: 'dining', label: 'Dining' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white shadow-md'
                    : 'bg-white/95 backdrop-blur-sm'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex-shrink-0 cursor-pointer"
                        onClick={() => scrollToSection('home')}
                    >
                        <h1 className="text-2xl font-bold text-amber-800">
                            Chitwan Resort
                        </h1>
                    </div>

                    <nav className="hidden space-x-8 md:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-colors ${
                                    activeSection === item.id
                                        ? 'border-b-2 border-amber-800 text-amber-800'
                                        : 'text-gray-700 hover:text-amber-800'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden items-center space-x-4 md:flex">
                        <a
                            href="tel:+1234567890"
                            className="flex items-center space-x-2 text-amber-800 transition-colors hover:text-amber-900"
                        >
                            <Phone size={18} />
                            <span className="text-sm font-medium">
                                +1 (234) 567-890
                            </span>
                        </a>
                        <button className="rounded-md bg-amber-800 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-900">
                            Book Now
                        </button>
                    </div>

                    <button
                        className="text-gray-700 md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="border-t bg-white md:hidden">
                    <nav className="space-y-3 px-4 py-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full rounded-md px-4 py-2 text-left transition-colors ${
                                    activeSection === item.id
                                        ? 'bg-amber-100 font-medium text-amber-800'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button className="w-full rounded-md bg-amber-800 px-6 py-3 font-medium text-white transition-colors hover:bg-amber-900">
                            Book Now
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
}
