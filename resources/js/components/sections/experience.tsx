
export default function Experience() {

    const experiences = [
    {
      title: "Over a Decade of Impactful Events",
      description: "With 10+ years in the industry, we've executed over 500 events across Indonesia—from high-stakes corporate launches to intimate brand activations.",
      image: "/images/experience/1.png",
    },
    {
      title: "Cross-Industry Expertise",
      description: "We've partnered with clients in tech, finance, FMCG, lifestyle, and government sectors—tailoring each experience to audience, brand, and business goals.",
      image: "/images/experience/2.png",
    },
    {
      title: "Creative Strategy Meets Operational Precision",
      description: "We bridge bold creative concepts with airtight logistics—from ideation to post-event analytics, managing every detail for maximum impact.",
      image: "/images/experience/3.png",
    },
    {
      title: "Trusted by Leading Brands",
      description: "Our portfolio includes top-tier companies with a 90% client retention rate and glowing testimonials that speak to our consistent excellence.",
      image: "/images/experience/4.png",
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