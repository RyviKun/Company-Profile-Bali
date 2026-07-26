import AppLayout from '@/components/layout/appLayout';
import { Event } from '@/types';
import { useForm } from '@inertiajs/react';

interface Props {
    event: Event;
}

const PROVINCES = [
    'Aceh',
    'Bali',
    'Banten',
    'Bengkulu',
    'DI Yogyakarta',
    'DKI Jakarta',
    'Gorontalo',
    'Jambi',
    'Jawa Barat',
    'Jawa Tengah',
    'Jawa Timur',
    'Kalimantan Barat',
    'Kalimantan Selatan',
    'Kalimantan Tengah',
    'Kalimantan Timur',
    'Kalimantan Utara',
    'Kepulauan Bangka Belitung',
    'Kepulauan Riau',
    'Lampung',
    'Maluku',
    'Maluku Utara',
    'Nusa Tenggara Barat',
    'Nusa Tenggara Timur',
    'Papua',
    'Papua Barat',
    'Riau',
    'Sulawesi Barat',
    'Sulawesi Selatan',
    'Sulawesi Tengah',
    'Sulawesi Tenggara',
    'Sulawesi Utara',
    'Sumatera Barat',
    'Sumatera Selatan',
    'Sumatera Utara',
];

const TITLES = ['Mr.', 'Ms.', 'Mrs.', 'Dr.', 'Prof.'];
const LANGUAGES = ['English', 'Bahasa Indonesia', 'Both'];
const JOB_POSITIONS = ['CEO / Director', 'Manager', 'Supervisor', 'Staff', 'Owner', 'Freelancer', 'Student', 'Other'];

export default function Create({ event }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        name: '',
        email: '',
        company_name: '',
        address: '',
        province: '',
        telephone: '',
        mobile: '',
        language: '',
        job_position: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/event/${event.id}/register`);
    };

    return (
        <AppLayout
            navigation={[
                { title: 'Home', href: '/' },
                { title: 'Events', href: '/event' },
            ]}
        >
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow md:p-8">
                    <img
                        src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1600&q=80"
                        alt="Illuminated architectural ceiling at the venue"
                        className="mb-4 h-40 w-full rounded-2xl object-cover opacity-70"
                    />
                    <h1 className="mb-2 text-2xl font-bold text-gray-900">Register for: {event.title}</h1>
                    <p className="mb-6 text-gray-500">Please fill in all required fields</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Title + Name */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <select
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="mt-1 w-full rounded-lg border px-3 py-2"
                                >
                                    <option value="">Select Title</option>
                                    {TITLES.map((t) => (
                                        <option key={t} value={t}>
                                            {t}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">Name *</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="mt-1 w-full rounded-lg border px-3 py-2"
                                    required
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email *</label>
                            <input
                                type="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="mt-1 w-full rounded-lg border px-3 py-2"
                                required
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                type="text"
                                value={data.company_name}
                                onChange={(e) => setData('company_name', e.target.value)}
                                className="mt-1 w-full rounded-lg border px-3 py-2"
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea
                                value={data.address}
                                onChange={(e) => setData('address', e.target.value)}
                                rows={3}
                                className="mt-1 w-full rounded-lg border px-3 py-2"
                                placeholder="Street, City, Postal Code"
                            />
                        </div>

                        {/* Province */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Province</label>
                            <select
                                value={data.province}
                                onChange={(e) => setData('province', e.target.value)}
                                className="mt-1 w-full rounded-lg border px-3 py-2"
                            >
                                <option value="">-- Select Province --</option>
                                {PROVINCES.map((p) => (
                                    <option key={p} value={p}>
                                        {p}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Telephone + Mobile */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Telephone</label>
                                <div className="mt-1 flex items-center gap-2">
                                    <span className="text-sm text-gray-500">(+62)</span>
                                    <input
                                        type="text"
                                        value={data.telephone}
                                        onChange={(e) => setData('telephone', e.target.value)}
                                        className="flex-1 rounded-lg border px-3 py-2"
                                        placeholder="2123456789"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Mobile *</label>
                                <div className="mt-1 flex items-center gap-2">
                                    <span className="text-sm text-gray-500">(+62)</span>
                                    <input
                                        type="text"
                                        value={data.mobile}
                                        onChange={(e) => setData('mobile', e.target.value)}
                                        className="flex-1 rounded-lg border px-3 py-2"
                                        placeholder="8123456789"
                                        required
                                    />
                                </div>
                                {errors.mobile && <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>}
                            </div>
                        </div>

                        {/* Language */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Language</label>
                            <select
                                value={data.language}
                                onChange={(e) => setData('language', e.target.value)}
                                className="mt-1 w-full rounded-lg border px-3 py-2"
                            >
                                <option value="">-- Select Language --</option>
                                {LANGUAGES.map((l) => (
                                    <option key={l} value={l}>
                                        {l}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Job Position */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Job Position</label>
                            <select
                                value={data.job_position}
                                onChange={(e) => setData('job_position', e.target.value)}
                                className="mt-1 w-full rounded-lg border px-3 py-2"
                            >
                                <option value="">-- Select Job Position --</option>
                                {JOB_POSITIONS.map((j) => (
                                    <option key={j} value={j}>
                                        {j}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                        >
                            {processing ? 'Submitting...' : 'Register Now'}
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
