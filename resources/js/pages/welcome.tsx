import AppLayout from '@/components/layout/appLayout';
import Contact from '@/components/sections/contact';
import Events from '@/components/sections/events';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function Home() {
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
        { title: 'Media', href: '#media' },
        { title: 'Events', href: '#events' },
        { title: 'Contacts', href: '#contact' },
    ];
    return (
        <>
            <Head>
                <title>HomePage | MediaExpo Indonesia</title>
                <meta
                    name="description"
                    content="MediaExpo Indonesia is a professional event organizer delivering impactful exhibitions, brand activations, and corporate events across Indonesia."
                />
            </Head>
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

                {/* Media Section */}
                <section id="media" className="flex w-full flex-col bg-background py-16 text-center">
                    <h2 className="mb-4 text-2xl font-semibold">Media</h2>
                    <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3 md:px-0">
                        <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gray-200">
                            <img src="/images/media/1.JPG" />
                        </div>
                        <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gray-200">
                            <img src="/images/media/2.JPG" />
                        </div>
                        <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-gray-200">
                            <img src="/images/media/3.JPG" />
                        </div>
                    </div>
                </section>

                {/* Events Section */}
                <section id="events" className="flex w-full justify-center bg-background py-16">
                    <Events />
                </section>

                {/* Contact Section */}
                <section id="contact" className="bg-background py-16 text-center">
                    <Contact />
                </section>
            </AppLayout>
        </>
    );
}
