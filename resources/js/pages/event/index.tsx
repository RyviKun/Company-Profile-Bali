import AppLayout from '@/components/layout/appLayout';
import Seo from '@/components/Seo';
import { formatEventDateRange } from '@/helpers/date';
import { Event, PaginatedData } from '@/types';
import { Link } from '@inertiajs/react';
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const navigationProps = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/aboutus' },
];

interface Props {
    events: PaginatedData<Event>; // <-- THIS IS THE CORRECT TYPE
}

export default function EventList({ events }: Props) {
    return (
        <>
            <Seo
                title="Ongoing Events | MediaExpo Indonesia"
                description="Discover our latest exhibitions, conferences, and corporate events. Join us at MediaExpo Indonesia for impactful networking and business growth."
                image="/images/og-default.jpg"
                url={route('event')}
                type="website"
            />
            <AppLayout navigation={navigationProps}>
                <div className="min-h-screen bg-white font-sans text-slate-800">
                    <div className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10">
                        {/* Header */}
                        <div className="mb-8 flex items-start justify-between">
                            <div>
                                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">Ongoing Events</h2>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    aria-label="Previous"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    aria-label="Next"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:bg-slate-50"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {events.data.map((event: Event) => (
                                <div
                                    key={event.title}
                                    className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm transition hover:shadow-md"
                                >
                                    {/* Image */}
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <img src={event.gallery?.[0].src} alt={event.title} className="h-full w-full object-cover" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-600">
                                            <Calendar className="h-4 w-4" />
                                            {formatEventDateRange(event.start_date, event.end_date)}
                                        </div>
                                        <h3 className="mb-2 text-lg font-bold text-slate-900">{event.title}</h3>
                                        <div className="mb-4 flex items-center gap-1.5 text-sm text-slate-500">
                                            <MapPin className="h-4 w-4 flex-shrink-0" />
                                            {event.address}
                                        </div>

                                        <div className="border-t border-slate-100 pt-4 text-center">
                                            <Link
                                                href={route('event.show', { slug: event.slug })}
                                                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700"
                                            >
                                                View Details
                                                <ArrowRight className="h-4 w-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
}
