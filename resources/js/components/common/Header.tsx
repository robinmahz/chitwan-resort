import { usePage } from '@inertiajs/react';
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

    const { settings } = usePage().props as any;

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'bg-background/95 shadow-sm backdrop-blur-md border-b border-border/50 py-2'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    <div
                        className="flex-shrink-0 cursor-pointer"
                        onClick={() => scrollToSection('home')}
                    >
                        <h1 className={`font-serif text-3xl font-light tracking-wide transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                            Narayani <span className="text-secondary">Vista</span>
                        </h1>
                    </div>

                    <nav className="hidden space-x-8 md:flex">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'text-secondary'
                                        : isScrolled ? 'text-foreground/70 hover:text-secondary' : 'text-white/80 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden items-center space-x-6 md:flex">
                        <a
                            href={`tel:${settings.phone}`}
                            className={`flex items-center space-x-2 transition-colors duration-300 ${isScrolled ? 'text-primary hover:text-secondary' : 'text-white/90 hover:text-white'}`}
                        >
                            <Phone size={16} />
                            <span className="text-xs font-medium tracking-wider">
                                {settings.phone}
                            </span>
                        </a>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`rounded-sm px-6 py-2.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                                isScrolled 
                                    ? 'bg-primary text-white hover:bg-primary/90' 
                                    : 'bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20'
                            }`}
                        >
                            Book Now
                        </button>
                    </div>

                    <button
                        className={`${isScrolled ? 'text-foreground' : 'text-white'} md:hidden`}
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
                <div className="absolute top-full left-0 w-full bg-background border-t border-border shadow-xl md:hidden animate-in slide-in-from-top duration-300">
                    <nav className="space-y-1 px-4 py-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`block w-full rounded-sm px-4 py-3 text-left text-xs uppercase tracking-widest transition-colors ${
                                    activeSection === item.id
                                        ? 'bg-secondary/10 font-bold text-secondary'
                                        : 'text-foreground/70 hover:bg-muted'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <div className="pt-4">
                            <button className="w-full rounded-sm bg-primary px-6 py-4 text-xs uppercase tracking-widest font-bold text-white transition-colors hover:bg-primary/90">
                                Book Now
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
