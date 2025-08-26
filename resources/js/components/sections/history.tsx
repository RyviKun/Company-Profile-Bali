


export default function History() {

    const timelineData = [
  {
    year: "2017",
    title: "Founded",
    description: "Company was established with the goal of providing high quality services.",
    icon: "✈️", // can swap with lucide-react icons
  },
  {
    year: "2019",
    title: "Expansion",
    description: "Expanded operations and served clients across multiple industries.",
    icon: "💡",
  },
  {
    year: "2021",
    title: "Milestone",
    description: "Reached significant growth and launched new business units.",
    icon: "⏳",
  },
  {
    year: "2023",
    title: "Today",
    description: "Continuing to innovate and serve clients worldwide.",
    icon: "🎯",
  },
];

  return (
      <div className="max-w-7xl mx-auto  items-center px-6 md:px-12 gap-10">
        <h1 className="text-3xl font-bold text-center mb-12">Our History</h1>
        
        <div className="relative border-l-2 border-gray-300 ml-4">
          {timelineData.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              {/* Circle with icon */}
              <span className="absolute -left-5 flex items-center justify-center w-10 h-10 bg-white border-2 border-blue-500 rounded-full">
                <span className="text-lg">{item.icon}</span>
              </span>

              {/* Content */}
              <div className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{item.year} - {item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}