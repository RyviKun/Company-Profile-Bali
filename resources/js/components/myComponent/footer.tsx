import Icon from '@/assets/icon';

export default function footer() {
    const offices = [
        {
            title: 'Connect with us',
            phone: '+62 852 9798 8227',
            email: 'Meimkt.id@gmail.com',
            Facebook: '',
        },
    ];

    return (
        <footer className="bg-gray-900 py-12 text-white">
            <div className="mx-auto max-w-6xl px-6">
                {/* Grid layout */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {offices.map((office, index) => (
                        <div key={index}>
                            <h3 className="mb-3 text-lg font-bold">{office.title}</h3>
                            <p className="flex gap-2 text-sm">
                                <Icon name="phone" />

                                {office.phone}
                            </p>
                            <p className="flex gap-2 text-sm">
                                <Icon name="mail" />
                                <a href={`mailto:${office.email}`} className="text-blue-400 hover:underline">
                                    {office.email}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
                    Copyright © {new Date().getFullYear()} <span className="font-semibold text-white">PT.Media Expo Indonesia</span>
                </div>
            </div>
        </footer>
    );
}
