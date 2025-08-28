import AppLayout from "@/components/layout/appLayout"
import Contact from "@/components/sections/contact"
import Events from "@/components/sections/events"
import {useState, useEffect} from "react"

export default function Home(){
    const slides = [
    {
      image: "/images/caraousel/1.JPG",
      title: "About Us",
      text: "Welcome to our company profile. We strive to build excellence and deliver value.",
    },
    {
      image: "/images/caraousel/2.JPG",
      title: "Our Vision",
      text: "We aim to shape the future with innovative solutions.",
    },
    {
      image: "/images/caraousel/3.JPG",
      title: "Our Team",
      text: "A dedicated team working together to achieve success.",
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
        { title: "About Us", href: "/aboutus",  },
        { title: "Media", href: "#media" },
        { title: "Events", href: "#events" },
        { title: "Contacts", href: "#contact" },
    ]
    return (
        <AppLayout navigation={navigationProps}>
            <section className="relative md:h-96 w-full h-48 overflow-hidden">
                {/* Slides */}
                {slides.map((slide, index) => (
                    <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    >
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="bg-black/40 w-full h-full flex items-center justify-center">
                        <div className="text-center text-white px-4">
                            <h1 className="text-4xl font-bold">{slide.title}</h1>
                            <p className="mt-2 max-w-xl mx-auto text-lg">{slide.text}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                ))}

                {/* Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white px-2 py-1 rounded"
                >
                    ‹
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 text-white px-2 py-1 rounded"
                >
                    ›
                </button>
            </section>

        

        {/* Media Section */}
        <section id="media" className="py-16 w-full text-center bg-background flex-col flex">
            <h2 className="text-2xl font-semibold mb-4">Media</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 md:px-0">
                <div className="bg-gray-200 rounded-xl h-40 flex items-center justify-center overflow-hidden">
                   <img src="/images/media/1.JPG"/>
                </div>
                <div className="bg-gray-200 rounded-xl h-40 flex items-center justify-center overflow-hidden">
                    <img src="/images/media/2.JPG"/>
                </div>
                <div className="bg-gray-200 rounded-xl h-40 flex items-center justify-center overflow-hidden">
                   <img src="/images/media/3.JPG"/>
                </div>
            </div>
        </section>

                {/* Events Section */}
        <section id="events" className="py-16  w-full bg-background justify-center flex">
            <Events/>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-background text-center">
           <Contact/>
        </section>

        </AppLayout>
    )
}