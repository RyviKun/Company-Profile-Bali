import AppLayout from '@/components/layout/appLayout';
import Contact from '@/components/sections/contact';
import Seo from '@/components/Seo';
import { formatEventDateRange, isDatePassed } from '@/helpers/date';
import { Event, PaginatedData } from '@/types';
import { Link } from '@inertiajs/react';
import { Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Props {
    events: PaginatedData<Event>;
    featuredEvent?: Event | null;
}

function CompactCountdown({ startDate, endDate }: { startDate: string; endDate?: string | null }) {
    // "2026-12-04 09:00:00" -> ISO format, so Safari parses it too
    const toMs = (d: string) => new Date(d.replace(' ', 'T')).getTime();
    const target = toMs(startDate);

    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const t = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(t);
    }, []);

    const diff = target - now;

    if (diff <= 0) {
        const ended = endDate && now > toMs(endDate);
        return <p className="text-sm font-semibold text-blue-400">{ended ? 'This event has ended' : 'Happening now'}</p>;
    }

    const units = [
        { label: 'Days', value: Math.floor(diff / 86400000) },
        { label: 'Hrs', value: Math.floor((diff / 3600000) % 24) },
        { label: 'Min', value: Math.floor((diff / 60000) % 60) },
        { label: 'Sec', value: Math.floor((diff / 1000) % 60) },
    ];

    return (
        <div className="flex items-center gap-2">
            {units.map((u) => (
                <div key={u.label} className="min-w-[56px] rounded-lg bg-slate-900 px-2 py-1.5 text-center">
                    <p className="text-lg leading-none font-extrabold text-white tabular-nums">{String(u.value).padStart(2, '0')}</p>
                    <p className="mt-1 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">{u.label}</p>
                </div>
            ))}
        </div>
    );
}

export default function Home({ events, featuredEvent }: Props) {
    console.log(featuredEvent);
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

                {featuredEvent && (
                    <section className="bg-primary py-12">
                        <div className="mx-auto max-w-6xl px-4">
                            <div className="flex flex-col overflow-hidden rounded-2xl bg-slate-100 shadow-lg md:flex-row">
                                {/* Image */}
                                <div className="relative h-52 w-full flex-shrink-0 md:h-auto md:w-2/5">
                                    <img
                                        src={featuredEvent.gallery?.[0]?.src}
                                        alt={featuredEvent.gallery?.[0]?.alt ?? featuredEvent.title}
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-slate-950/40" />
                                    <span className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold tracking-wider text-white">
                                        FEATURED EVENT
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col justify-center gap-4 p-6 text-left sm:p-8">
                                    <h2 className="text-2xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                                        {featuredEvent.title}
                                    </h2>

                                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
                                        {featuredEvent.start_date && featuredEvent.end_date && (
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4 text-blue-600" />
                                                {formatEventDateRange(featuredEvent.start_date, featuredEvent.end_date)}
                                            </div>
                                        )}
                                        {featuredEvent.address && (
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-4 w-4 text-blue-600" />
                                                {featuredEvent.address}
                                            </div>
                                        )}
                                    </div>

                                    {featuredEvent.shortDescription && (
                                        <p className="line-clamp-4 text-sm leading-relaxed text-slate-600">{featuredEvent.shortDescription}</p>
                                    )}

                                    {featuredEvent.start_date && (
                                        <CompactCountdown startDate={featuredEvent.start_date} endDate={featuredEvent.end_date} />
                                    )}

                                    <div className="mt-1 flex flex-col gap-3 sm:flex-row">
                                        {featuredEvent.isRegisterable && (
                                            <Link
                                                href={route('registrations.create', { event: featuredEvent.id })}
                                                className={`${
                                                    isDatePassed(featuredEvent.start_date)
                                                        ? 'pointer-events-none bg-gray-500'
                                                        : 'bg-blue-600 hover:bg-blue-700'
                                                } rounded-lg px-6 py-2.5 text-center text-sm font-semibold text-white transition`}
                                            >
                                                {isDatePassed(featuredEvent.start_date) ? 'Registration has been closed' : 'Register Now'}
                                            </Link>
                                        )}
                                        <Link
                                            href={route('event.show', { slug: featuredEvent.slug })}
                                            className="rounded-lg border border-slate-300 px-6 py-2.5 text-center text-sm font-semibold text-slate-800 transition hover:bg-slate-200"
                                        >
                                            View Event Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                <div className="font-sans">
                    {/* Event Highlights - light section */}
                    <section className="bg-slate-100 py-20">
                        <div className="mx-auto max-w-6xl px-4 text-center">
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
                        <div className="mx-auto flex max-w-6xl flex-col px-4 text-center">
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
                <section id="contact" className="bg-slate-100 py-16 text-center">
                    <Contact />
                </section>
            </AppLayout>
        </>
    );
}
