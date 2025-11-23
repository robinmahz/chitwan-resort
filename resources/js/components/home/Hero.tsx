import { ChevronDown } from 'lucide-react';
import Carousel from './Carousel';

export default function Hero() {
    const heroImages = [
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1920',
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1920',
    ];

    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen">
            <div className="absolute inset-0">
                <Carousel images={heroImages} autoPlay interval={6000} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>

            <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
                <div className="animate-fadeIn mx-auto max-w-4xl space-y-6">
                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
                        Discover Your
                        <span className="mt-2 block text-amber-300">
                            Chitwan Resort
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/90 md:text-2xl">
                        Experience unparalleled luxury amidst nature's embrace.
                        Your perfect escape awaits.
                    </p>
                    <div className="flex flex-col justify-center gap-4 pt-8 sm:flex-row">
                        <button className="transform rounded-md bg-amber-800 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:bg-amber-900">
                            Book Your Stay
                        </button>
                        <button
                            onClick={scrollToAbout}
                            className="transform rounded-md border-2 border-white/50 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
                        >
                            Explore More
                        </button>
                    </div>
                </div>

                <button
                    onClick={scrollToAbout}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer text-white"
                >
                    <ChevronDown size={40} />
                </button>
            </div>
        </section>
    );
}
