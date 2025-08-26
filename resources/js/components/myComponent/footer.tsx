

export default function footer(){
    const offices = [
    {
      title: "Head Office",
      address:
        "Jl. Scientia Garden T/07, Scientia Boulevard. Gading Serpong, Kab. Tangerang – Banten 15810",
      phone: "+62 21 5421 0098",
      fax: "+62 21 5421 0099",
      email: "sales@nabelsakha.com",
    },
    {
      title: "Bekasi Office",
      address:
        "BizPark 3 Bekasi, Jl. Sultan Agung No.80 No. C37, Kali Baru, Medan Satria, Bekasi, West Java 17132",
      phone: "+62 21 2945 0537",
      fax: "+62 21 2945 0538",
      email: "sales@nabelsakha.com",
    },
    {
      title: "Balikpapan Office",
      address:
        "Karang Joang, Balikpapan Utara, Kota Balikpapan, Kalimantan Timur, Indonesia",
      phone: "+62 811 1916 8755 (Bimo Fajar)",
      email: "sales@nabelsakha.com",
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
              <p className="text-sm mb-2">{office.address}</p>
              <p className="text-sm">
                <span className="font-medium">Phone:</span> {office.phone}
              </p>
              {office.fax && (
                <p className="text-sm">
                  <span className="font-medium">Fax:</span> {office.fax}
                </p>
              )}
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
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          Copyright © {new Date().getFullYear()} <span className="font-semibold text-white">Nabel Sakha Group</span>
        </div>
      </div>
    </footer>
  );
}