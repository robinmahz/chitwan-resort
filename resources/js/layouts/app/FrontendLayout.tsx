import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';

export default function FrontendLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeSection, setActiveSection] = useState('home');
    return (
        <main>
            <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <article>
                <Toaster position="top-right" />
                {children}
            </article>
            <Footer />
        </main>
    );
}
