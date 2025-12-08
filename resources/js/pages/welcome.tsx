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
    const { testimonials, name, rooms, galleries } = usePage<WelcomePageProps>().props;
    return (
        <>
            <Head title={name}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="min-h-screen bg-white">
                <Hero />
                <About />
                <Rooms rooms={rooms} />
                <Experiences />
                <Dining />
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
