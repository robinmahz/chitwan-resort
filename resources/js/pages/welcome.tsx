import About from '@/components/home/About';
import Contact from '@/components/home/Contact';
import Dining from '@/components/home/Dining';
import Experiences from '@/components/home/Experiences';
import Gallery from '@/components/home/Gallery';
import Hero from '@/components/home/Hero';
import Rooms from '@/components/home/Room';
import Testimonials from '@/components/home/Testimonial';
import FrontendLayout from '@/layouts/app/FrontendLayout';
import { WelcomePageProps } from '@/types';
import { Head } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Welcome() {
    const { testimonials, name, rooms, galleries, dinings } = usePage<WelcomePageProps>().props;
    return (
        <>
            <Head title={name} />
            <div className="min-h-screen bg-background text-foreground">
                <Hero />
                <About />
                <Rooms rooms={rooms} />
                <Experiences />
                <Dining dinings={dinings} />
                <Gallery galleries={galleries} />
                <Testimonials testimonials={testimonials} />
                <Contact />
            </div>
        </>
    );
}
Welcome.layout = (page: React.ReactNode) => (
    <FrontendLayout>{page}</FrontendLayout>
);
