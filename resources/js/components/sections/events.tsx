export default function EventsSection() {
  const events = [
    {
      date: "20 - 22 August 2026",
      time: "7:00 pm - 10:00 pm",
      title: "B2B Exhibitions & Conventions",
      img: "/images/event/1.jpg",
    },
    {
      date: "20 - 22 August 2026",
      time: "7:00 pm",
      title: "Product Launches",
      img: "/images/event/2.png",
    },
    {
      date: "20 - 22 August 2026",
      time: "7:00 pm - 10:00 pm",
      title: "Private & Social Events",
      img: "/images/event/3.jpg",
    },
    {
      date: "20 - 22 August 2026",
      time: "10:00 pm - 2:00 am",
      title: "PACIFIC COATINGS SHOW",
      img: "/images/event/4.jpg",
    },
  ];

  return (
    <section className="p-6 max-w-5xl w-full">
      <h2 className="text-2xl font-bold mb-6">Our benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={event.img}
              alt={event.title}
              className="w-full h-48 object-cover"
            />

            {/* Overlay for mobile */}
            <div className="absolute h-20 inset-x-0 bg-white/80 p-2 flex flex-col justify-center md:hidden bottom-0">
              <div className="text-sm text-gray-700">{event.date}</div>
              <div className="text-sm text-gray-700">{event.time}</div>
              <h3 className="mt-2 font-semibold text-lg text-gray-900">
                {event.title}
              </h3>
            </div>

            {/* Standard layout for desktop */}
            <div className="p-4 hidden md:block bg-white">
              <div className="text-sm text-gray-500">{event.date}</div>
              <div className="text-sm text-gray-500">{event.time}</div>
              <h3 className="mt-2 font-semibold text-lg">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}