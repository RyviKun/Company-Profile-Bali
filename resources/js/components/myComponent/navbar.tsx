import { useState, type ReactNode } from 'react';

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
      <nav
        id="navbar"
        className="bg-primary/70 backdrop-blur-sm shadow-md sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Brand */}
            <a href="/" className="flex flex-row items-center gap-1 md:gap-3">
              <img
                src="/images/logo/logo.png"
                className="h-16 w-auto max-w-[140px] object-contain"
                alt="Logo"
              />
              <div className="text-xs md:text-base font-semibold text-white/70 leading-tight text-center md:text-left">
                <span className="block md:inline">PT. Media</span>
                <span className="block md:inline">Expo Indonesia</span>
              </div>
            </a>

            {/* Hamburger Icon */}
            <button
              className="md:hidden text-background hover:text-blue-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-6">
              {navigation.map((element, index) => (
                <li key={index}>
                  <a
                    href={element.href}
                    className="text-background hover:text-blue-600 transition-colors"
                  >
                    {element.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
  <div className="absolute top-full left-0 w-full bg-primary/90 backdrop-blur-sm shadow-md md:hidden z-40">
    <ul className="flex flex-col space-y-4 p-4">
      {navigation.map((element, index) => (
        <li key={index}>
          <a
            href={element.href}
            className="block text-background hover:text-blue-600 transition-colors"
          >
            {element.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}

        </div>
      </nav>

      {/* Page Content */}
      <main>{children}</main>
    </>
  );
}