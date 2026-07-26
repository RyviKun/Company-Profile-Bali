import AppLayout from '@/components/layout/appLayout';
import Seo from '@/components/Seo';
import StructuredData from '@/components/StructuredData';
import { formatEventDateRange } from '@/helpers/date';
import { Event } from '@/types';
import { Link } from '@inertiajs/react';
import { Calendar, MapPin } from 'lucide-react';

interface Props {
    event: Event; // <-- THIS IS THE CORRECT TYPE
}
const navigationProps = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/aboutus' },
    { title: 'Event', href: '/event' },
];
export default function EventShow({ event }: Props) {
    return (
        <>
            <Seo
                title={event.title}
                description={event.shortDescription ? event.shortDescription?.slice(0, 160) : ''}
                image={event.gallery?.[0]?.src} // ensure absolute URL
                url={route('event.show', { slug: event.slug })}
                type="event"
            />
            <StructuredData
                name={event.title}
                description={event.shortDescription?.slice(0, 160) ? event.shortDescription?.slice(0, 160) : ''}
                startDate={event.start_date ? event.start_date : ' '}
                endDate={event.end_date ? event.end_date : ' '}
                location={{
                    name: event.address ? event.address : ' ',
                    address: event.address ? event.address : ' ',
                }}
                image={event.gallery ? event.gallery?.[0]?.src : ''}
            />
            <AppLayout navigation={navigationProps}>
                <div className="min-h-screen bg-white font-sans text-slate-800">
                    {/* Hero banner */}
                    <div className="relative h-[560px] w-full overflow-hidden bg-slate-950 sm:h-[420px]">
                        <img
                            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80"
                            alt="Illuminated architectural ceiling at the venue"
                            className="absolute inset-0 h-full w-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-center px-6 sm:px-10">
                            {/* Title */}
                            <h1 className="mb-7 text-5xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-6xl">{event.title}</h1>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                                        <Calendar className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wider text-slate-400">DATE</p>
                                        <p className="text-sm font-bold text-white">{formatEventDateRange(event.start_date, event.end_date)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                                        <MapPin className="h-5 w-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold tracking-wider text-slate-400">LOCATION</p>
                                        <p className="text-sm font-bold text-white">{event.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-[1240px] px-6 py-12 sm:px-10">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
                            {/* Left column */}
                            <div dangerouslySetInnerHTML={{ __html: event.content ?? '' }} />
                            {/* Right column */}
                            <div className="flex flex-col gap-6">
                                <div className="relative overflow-hidden rounded-2xl bg-slate-200">
                                    {/* Responsive iframe container */}
                                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                        {' '}
                                        {/* 16:9 aspect ratio */}
                                        <iframe
                                            src={`https://maps.google.com/maps?q=${encodeURIComponent(event.address || '')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                            className="absolute inset-0 h-full w-full border-0"
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`Map of ${event.title}`}
                                            allowFullScreen
                                        />
                                    </div>

                                    {/* Optional: Overlay button (like you had before) */}
                                </div>
                                {event.googleMapsLink && (
                                    <a
                                        href={event.googleMapsLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-900 shadow-lg transition hover:bg-slate-50"
                                    >
                                        <MapPin className="h-4 w-4" />
                                        Open in Google Maps
                                    </a>
                                )}

                                {/* Register Now button – visible on desktop */}
                                <Link
                                    href={route('registrations.create', { event: event.id })}
                                    className="w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700 lg:inline-block"
                                >
                                    Register Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
