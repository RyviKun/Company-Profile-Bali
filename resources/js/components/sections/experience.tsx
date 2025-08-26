
export default function Experience() {

    const experiences = [
  {
    title: "24/7 Support",
    description: "Always by your side, our 24/7 customer support ensures your business never misses a beat.",
    image: "/images/support.jpg",
  },
  {
    title: "Used Oil Analysis",
    description: "Optimize & prevent failures with Used Oil Analysis—insights that keep your machines running smoothly.",
    image: "/images/oil-analysis.jpg",
  },
  {
    title: "Technical Visit",
    description: "Expert support, right at your site! Our Technical Visit ensures optimal performance & tailored solutions for your operations.",
    image: "/images/technical-visit.jpg",
  },
  {
    title: "Onsite Seminar",
    description: "Upgrade your team’s expertise with our Onsite Seminar—practical insights delivered right at your facility.",
    image: "/images/onsite-seminar.jpg",
  },
];

  return (
      <div className="max-w-7xl mx-auto  items-center px-6 md:px-12 gap-10">
        <h2 className="text-3xl font-bold text-center mb-12">Our Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex bg-white shadow-md rounded-lg overflow-hidden">
              {/* Image */}
              <div className="w-1/3">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Text */}
              <div className="w-2/3 p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}