import { useEffect, useState } from 'react';

interface EventCountdownProps {
    /** ISO or Laravel-style date/time string for when the event starts */
    startDate: string;
    /** Optional date/time string for when the event ends */
    endDate?: string | null;
    /** Optional venue/address shown above the countdown */
    location?: string | null;
}

type Status = 'counting' | 'started' | 'ended';

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

const pad = (value: number) => String(value).padStart(2, '0');

/** Accepts ISO strings and Laravel-style "YYYY-MM-DD HH:mm:ss" (Safari-safe). */
function parseDate(value?: string | null): number {
    if (!value) return NaN;
    return new Date(value.trim().replace(' ', 'T')).getTime();
}

function getStatus(start: number, end: number, now: number): Status {
    if (now < start) return 'counting';
    if (now <= end) return 'started';
    return 'ended';
}

function getTimeLeft(target: number, now: number) {
    const total = Math.max(0, target - now);

    return {
        days: Math.floor(total / DAY_MS),
        hours: Math.floor((total / HOUR_MS) % 24),
        minutes: Math.floor((total / (60 * 1000)) % 60),
        seconds: Math.floor((total / 1000) % 60),
    };
}

/**
 * Runs only in the browser. `now` stays null until mounted,
 * so nothing is rendered on the server and no hydration mismatch occurs.
 */
function useNow(): number | null {
    const [now, setNow] = useState<number | null>(null);

    useEffect(() => {
        setNow(Date.now());
        const id = window.setInterval(() => setNow(Date.now()), 1000);
        return () => window.clearInterval(id);
    }, []);

    return now;
}

function TimeBox({ value, label }: { value: string; label: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-full items-center justify-center rounded-lg bg-blue-950 text-3xl font-extrabold text-white tabular-nums shadow-lg">
                {value}
            </div>
            <span className="text-[11px] font-bold tracking-widest text-blue-200">{label}</span>
        </div>
    );
}

export default function EventCountdown({ startDate, endDate, location }: EventCountdownProps) {
    const now = useNow();

    const start = parseDate(startDate);
    // If no end date is given, treat the event as running for 24 hours after it starts
    const end = endDate ? parseDate(endDate) : start + DAY_MS;

    if (now === null) return null;

    if (Number.isNaN(start)) {
        return (
            <section className="w-full rounded-2xl bg-blue-900 px-6 py-8 text-center">
                <p className="text-sm text-blue-100">Event date unavailable</p>
            </section>
        );
    }

    const status = getStatus(start, end, now);
    const units = getTimeLeft(start, now);

    const parts = [
        { value: pad(units.days), label: 'DAYS' },
        { value: pad(units.hours), label: 'HRS' },
        { value: pad(units.minutes), label: 'MIN' },
        { value: pad(units.seconds), label: 'SEC' },
    ];

    return (
        <section className="w-full rounded-2xl bg-blue-900 px-6 py-8 text-center">
            {location && <p className="mx-auto mb-6 max-w-xs text-sm leading-relaxed text-blue-100">{location}</p>}

            {status === 'counting' && (
                <div role="timer" className="grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-x-1">
                    {parts.map((part, index) => (
                        <>
                            <TimeBox key={part.label} value={part.value} label={part.label} />
                            {index < parts.length - 1 && <span className="pt-4 text-2xl font-bold text-blue-300">:</span>}
                        </>
                    ))}
                </div>
            )}

            {status === 'started' && <p className="text-3xl font-extrabold tracking-tight text-white">Event has started</p>}

            {status === 'ended' && <p className="text-2xl font-bold text-blue-100">Event has ended</p>}
        </section>
    );
}
