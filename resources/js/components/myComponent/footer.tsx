

export default function footer(){
    const offices = [
    {
      title: "Connect with us",
      phone: "+62 852 9798 8227",
      email: "Meimkt.id@gmail.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-3">{office.title}</h3>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> {office.phone}
              </p>
              <p className="text-sm">
                <span className="font-medium">Email:</span>{" "}
                <a
                  href={`mailto:${office.email}`}
                  className="text-blue-400 hover:underline"
                >
                  {office.email}
                </a>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-700 pt-6  text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} <span className="font-semibold text-white">PT.Media Expo Indonesia</span>
        </div>
      </div>
    </footer>
  );
}