import { useEffect, useRef } from 'react';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            videoRef.current?.pause();
        }
    }, []);

    return (
        <section id="home" className="relative h-screen">
            <div className="absolute inset-0">
                <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    src="./videos/narayani-vista.mp4"
                    poster="./images/chitwan/Chitwan_swamp.jpg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
            </div>
        </section>
    );
}
