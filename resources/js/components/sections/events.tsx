


export default function EventsSection() {
    const events = [
  {
    date: "10 - 12 September",
    time: "7:00 pm - 10:00 pm",
    title: "B2B Exhibitions & Conventions",
    img: "/images/event/1.jpg",
  },
  {
    date: "12 - 14 September",
    time: "7:00 pm",
    title: "Product Launches",
    img: "/images/event/2.png",
  },
  {
    date: "12 - 14 Oktober",
    time: "7:00 pm - 10:00 pm",
    title: "Private & Social Events",
    img: "/images/event/3.jpg",
  },
  {
    date: "12 - 14 Oktober",
    time: "10:00 pm - 2:00 am",
    title: "PACIFIC COATINGS SHOW",
    img: "/images/event/4.jpg",
  }
];
  return (
    <section className="p-6 max-w-5xl w-full">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <img src={event.img} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
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
