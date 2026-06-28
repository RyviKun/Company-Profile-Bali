import { useEffect, useRef } from 'react';

interface Partner {
    name: string;
    logo: string;
}

// Replace these with your real partner logos.
// Drop files into public/logos/ (or import them from src/assets and swap the strings below).
const partners: Partner[] = [
    { name: 'Info Festival Indonesia', logo: '/images/carouselMediaPartner/festival_indonesia.jpeg' },
    { name: 'Gameco News', logo: '/images/carouselMediaPartner/gameco_news.jpeg' },
    { name: 'Ivent Media', logo: '/images/carouselMediaPartner/ivent_media.jpeg' },
    { name: 'Vibes Media ID', logo: '/images/carouselMediaPartner/vibes_media_id' },
    { name: 'ZRY Gallery', logo: '/images/carouselMediaPartner/ZRY_gallery' },
    { name: 'GAC Media', logo: '/images/carouselMediaPartner/GAC_media' },
];

export default function SupportedBy({ className = '' }: { className: String }) {
    const trackRef = useRef<HTMLDivElement>(null);

    // simple auto-scroll loop
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let frame: number;
        let pos = 0;
        const speed = 0.5; // px per frame

        const step = () => {
            pos += speed;
            if (pos >= track.scrollWidth / 2) pos = 0;
            track.style.transform = `translateX(-${pos}px)`;
            frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);

        return () => cancelAnimationFrame(frame);
    }, []);

    // duplicate the list so the loop is seamless
    const loopItems = [...partners, ...partners];

    return (
        <section className={`relative overflow-hidden ${className}`}>
            <div className="mb-16 text-center">
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-slate-400">Our support</p>
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Media Partners</h2>
                <div className="mx-auto h-1 w-12 rounded-full bg-secondary" />
            </div>
            {/* fade edges */}
            <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

                <div className="overflow-hidden">
                    <div ref={trackRef} className="flex w-max items-center gap-16 px-10">
                        {loopItems.map((partner, i) => (
                            <div key={`${partner.name}-${i}`} className="flex h-24 w-44 flex-shrink-0 items-center justify-center">
                                <img src={partner.logo} alt={partner.name} className="max-h-20 max-w-full object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
