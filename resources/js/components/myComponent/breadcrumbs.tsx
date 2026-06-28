import { PageProps } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronRight, Home } from 'lucide-react'; // Using lucide-react icons

export default function Breadcrumbs() {
    const { breadcrumbs } = usePage<PageProps>().props;

    if (!breadcrumbs || breadcrumbs.length === 0) {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="mx-auto my-4 max-w-6xl px-4">
            <ol className="flex items-center gap-2 text-sm">
                {breadcrumbs.map((item, index) => {
                    const isLast = index === breadcrumbs.length - 1;

                    return (
                        <li key={index} className="flex items-center gap-2">
                            {/* Home icon for the first item */}
                            {index === 0 && <Home className="h-4 w-4 text-slate-400" />}

                            {isLast || !item.url ? (
                                // Current page (not clickable)
                                <span className="font-medium text-white">{item.label}</span>
                            ) : (
                                // Clickable link
                                <Link href={item.url} className="text-slate-500 transition-colors hover:text-blue-600 hover:underline">
                                    {item.label}
                                </Link>
                            )}

                            {/* Separator (not after the last item) */}
                            {!isLast && <ChevronRight className="h-4 w-4 text-slate-300" />}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
