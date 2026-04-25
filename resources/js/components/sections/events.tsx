export default function EventsSection() {
    const events = [
        {
            date: '20 - 22 August 2026',
            time: '7:00 pm - 10:00 pm',
            title: 'B2B Exhibitions & Conventions',
            description: 'Business to business exhibition & conventions',
            img: '/images/event/1.jpg',
        },
        {
            date: '20 - 22 August 2026',
            time: '7:00 pm',
            title: 'Indonesia Collector Festival',
            description: '( will be held on 18 - 21 June 2026 )',
            img: '/images/event/2.jpeg',
        },
        {
            date: '20 - 22 August 2026',
            time: '7:00 pm - 10:00 pm',
            title: 'Private & Social Events',
            description: 'Private and social Events',
            img: '/images/event/3.jpg',
        },
        {
            date: '17 - 19 September 2026',
            time: '7:00 pm - 10:00 pm',
            title: 'Clean Tech & Hotel Expo Indonesia',
            description: 'Smart cleaning - Sustainable hospitality and future technology',
            img: '/images/event/4.png',
        },
    ];

    return (
        <section className="w-full max-w-5xl p-6">
            <h2 className="mb-6 text-2xl font-bold">What We Offer</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {events.map((event, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                        {/* Image */}
                        <img src={event.img} alt={event.title} className="h-48 w-full object-cover" />

                        {/* Overlay for mobile */}
                        <div className="absolute inset-x-0 bottom-0 flex h-20 flex-col justify-center bg-white/80 p-2 md:hidden">
                            {/*<div className="text-sm text-gray-700">{event.date}</div>
              <div className="text-sm text-gray-700">{event.time}</div>
              */}
                            <h3 className="mt-1 text-lg font-semibold text-gray-900">{event.title}</h3>
                            <h3 className="mt-2 text-base font-normal">{event.description}</h3>
                        </div>

                        {/* Standard layout for desktop */}
                        <div className="hidden bg-white p-4 md:block">
                            {/* <div className="text-sm text-gray-500">{event.date}</div>
              <div className="text-sm text-gray-500">{event.time}</div> */}
                            <h3 className="mt-2 text-lg font-semibold">{event.title}</h3>
                            <h3 className="mt-2 text-base font-normal">{event.description}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
