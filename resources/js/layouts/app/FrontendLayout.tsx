import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { useState } from 'react';

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
            <article>{children}</article>
            <Footer />
        </main>
    );
}
