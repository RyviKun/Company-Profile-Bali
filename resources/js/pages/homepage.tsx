import AppLayout from '@/components/layout/appLayout';
import Contact from '@/components/sections/contact';
import Seo from '@/components/Seo';
import { formatEventDateRange } from '@/helpers/date';
import { Event, PaginatedData } from '@/types';
import { Link } from '@inertiajs/react';
import { Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
interface Props {
    events: PaginatedData<Event>;
}
export default function Home({ events }: Props) {
    const slides = [
        {
            image: '/images/caraousel/1.JPG',
            title: 'About Us',
            text: 'Welcome to our company profile. We strive to build excellence and deliver value.',
        },
        {
            image: '/images/caraousel/2.JPG',
            title: 'Our Vision',
            text: 'We aim to shape the future with innovative solutions.',
        },
        {
            image: '/images/caraousel/3.JPG',
            title: 'Our Team',
            text: 'A dedicated team working together to achieve success.',
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    const navigationProps = [
        { title: 'About Us', href: '/aboutus' },
        { title: 'Events', href: '/event' },
    ];

    const highlightImages = [
        {
            src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80',
            alt: 'Aerial view of exhibition booths on the show floor',
        },
        {
            src: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&q=80',
            alt: 'Attendees networking and talking at the conference',
        },
        {
            src: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=500&q=80',
            alt: 'Wide view of a busy exhibition hall with booths',
        },
    ];

    return (
        <>
            <Seo
                title="HomePage | MediaExpo Indonesia"
                description="MediaExpo Indonesia is a professional event organizer delivering impactful exhibitions, brand activations, and corporate events across Indonesia."
                image="/images/caraousel/3.JPG" // ensure absolute URL
                url={route('home')}
                type="website"
            />
            <AppLayout navigation={navigationProps}>
                <section className="relative h-48 w-full overflow-hidden md:h-96">
                    {/* Slides */}
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                index === current ? 'z-10 opacity-100' : 'z-0 opacity-0'
                            }`}
                        >
                            <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                                <div className="flex h-full w-full items-center justify-center bg-black/40">
                                    <div className="px-4 text-center text-white">
                                        <h1 className="text-4xl font-bold">{slide.title}</h1>
                                        <p className="mx-auto mt-2 max-w-xl text-lg">{slide.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Controls */}
                    <button onClick={prevSlide} className="absolute top-1/2 left-4 z-30 -translate-y-1/2 rounded bg-black/40 px-2 py-1 text-white">
                        ‹
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-4 z-30 -translate-y-1/2 rounded bg-black/40 px-2 py-1 text-white">
                        ›
                    </button>
                </section>

                <div className="font-sans">
                    {/* Event Highlights - light section */}
                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-6xl text-center">
                            <p className="mb-3 text-xs font-bold tracking-[0.15em] text-blue-500">MEDIA SHOWCASE</p>
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-slate-900">Event Highlights</h2>
                            <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-blue-200" />

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                                {highlightImages.map((img, i) => (
                                    <div key={i} className="overflow-hidden rounded-2xl">
                                        <img src={img.src} alt={img.alt} className="h-44 w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Ongoing Events - dark section */}
                    <section className="bg-primary py-16">
                        <div className="mx-auto flex max-w-6xl flex-col text-center">
                            <p className="mb-3 text-xs font-bold tracking-[0.15em] text-slate-400">WHAT WE OFFER</p>
                            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">Ongoing Events</h2>
                            <div className="mx-auto mb-12 h-1 w-12 rounded-full bg-white" />

                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                                {events.data.map((event: Event) => (
                                    <Link
                                        key={event.title}
                                        href={route('event.show', { slug: event.slug })}
                                        className="flex h-32 overflow-hidden rounded-2xl bg-primary-foreground"
                                    >
                                        <div className="h-full w-32 flex-shrink-0 sm:w-36">
                                            <img src={event.gallery?.[0].src} alt={event.gallery?.[0].alt} className="h-full w-full object-cover" />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-center px-5 py-5 text-left">
                                            <h3 className="mb-2 text-base leading-snug font-bold text-white">{event.title}</h3>
                                            {event.start_date && event.end_date && (
                                                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {formatEventDateRange(event.start_date, event.end_date)}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <Link href={route('event')} className="mt-8 text-sm font-bold tracking-[0.15em] text-slate-400">
                                More events
                            </Link>
                        </div>
                    </section>
                </div>

                {/* Contact Section */}
                <section id="contact" className="bg-background py-16 text-center">
                    <Contact />
                </section>
            </AppLayout>
        </>
    );
}
