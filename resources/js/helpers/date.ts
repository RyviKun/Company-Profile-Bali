export function formatEventDateRange(startDate: string | null, endDate: string | null): string {
    if (!startDate) return 'TBD';

    // Normalize string format so JS reliably parses as UTC
    const parseUTC = (dateStr: string) => {
        const isoStr = dateStr.includes('T') ? dateStr : dateStr.replace(' ', 'T');
        const utcStr = isoStr.endsWith('Z') || isoStr.includes('+') ? isoStr : `${isoStr}Z`;
        return new Date(utcStr);
    };

    const start = parseUTC(startDate);
    const end = endDate ? parseUTC(endDate) : null;

    if (isNaN(start.getTime())) return 'TBD';

    if (!end || isNaN(end.getTime())) {
        return start.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            timeZone: 'UTC',
        });
    }

    // Force formatting to use UTC instead of local machine timezone
    const startMonth = start.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
    const startDay = start.getUTCDate();
    const endDay = end.getUTCDate();
    const year = start.getUTCFullYear();

    // Same month
    if (start.getUTCMonth() === end.getUTCMonth()) {
        return `${startMonth} ${startDay}-${endDay}, ${year}`;
    }

    // Different months
    const endMonth = end.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
}

export const formatPrice = (price: number) =>
    new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);

export const formatDate = (date: string) =>
    new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date(date));

export const isDatePassed = (date: string) => {
    return new Date() > new Date(date);
};
