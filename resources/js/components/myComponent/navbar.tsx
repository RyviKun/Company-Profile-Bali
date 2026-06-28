import { useState, type ReactNode } from 'react';
import Breadcrumbs from './breadcrumbs';

interface NavbarProps {
    navigation: {
        title: string;
        href: string;
    }[];
    children?: ReactNode;
}

export default function Navbar({ navigation, children }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav id="navbar" className="sticky top-0 z-50 bg-primary/70 shadow-md backdrop-blur-sm">
                <div className="mx-auto max-w-6xl px-4">
                    <div className="flex h-16 items-center justify-between">
                        {/* Logo / Brand */}
                        <a href="/" className="flex flex-row items-center gap-1 md:gap-3">
                            <img src="/images/logo/logo.png" className="h-16 w-auto max-w-[140px] object-contain" alt="Logo" />
                            <div className="text-center text-xs leading-tight font-semibold text-white/70 md:text-left md:text-base">
                                <span className="block md:inline">PT. Media</span>
                                <span className="block md:inline">Expo Indonesia</span>
                            </div>
                        </a>

                        {/* Hamburger Icon */}
                        <button
                            className="text-background hover:text-blue-600 focus:outline-none md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle navigation"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>

                        {/* Desktop Navigation */}
                        <ul className="hidden space-x-6 md:flex">
                            {navigation.map((element, index) => (
                                <li key={index}>
                                    <a href={element.href} className="text-background transition-colors hover:text-blue-600">
                                        {element.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="absolute top-full left-0 z-40 w-full bg-primary/90 shadow-md backdrop-blur-sm md:hidden">
                            <ul className="flex flex-col space-y-4 p-4">
                                {navigation.map((element, index) => (
                                    <li key={index}>
                                        <a href={element.href} className="block text-background transition-colors hover:text-blue-600">
                                            {element.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
            <Breadcrumbs />
            {/* Page Content */}
            <main>{children}</main>
        </>
    );
}
