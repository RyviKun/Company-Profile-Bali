export function formatEventDateRange(startDate: string | null, endDate: string | null): string {
    if (!startDate) return 'TBD';

    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : null;

    if (!end) {
        return start.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    const startMonth = start.toLocaleString('en-US', { month: 'short' });
    const startDay = start.getDate();
    const endDay = end.getDate();
    const year = start.getFullYear();

    // Same month
    if (start.getMonth() === end.getMonth()) {
        return `${startMonth} ${startDay}-${endDay}, ${year}`;
    }

    // Different months
    const endMonth = end.toLocaleString('en-US', { month: 'short' });
    return `${startMonth} ${startDay} - ${endMonth} ${endDay}, ${year}`;
}
