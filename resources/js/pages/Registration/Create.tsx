import AppLayout from '@/components/layout/appLayout';
import { formatDate, formatPrice } from '@/helpers/date';
import { Event } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';

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

const isEarlyBirdActive = (date: string) => {
    return new Date() <= new Date(date);
};

export default function Create({ event }: Props) {
    const { flash } = usePage().props;
    const [showModal, setShowModal] = useState(false);
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [registrantName, setRegistrantName] = useState('');

    type CustomFieldAnswers = Record<string, string | number | boolean>;

    type RegistrationForm = {
        title: string;
        name: string;
        email: string;
        company_name: string;
        address: string;
        province: string;
        telephone: string;
        language: string;
        job_position: string;
        isVip: boolean;
        custom_fields: CustomFieldAnswers;
    };

    const { data, setData, post, processing, errors } = useForm<RegistrationForm>({
        title: '',
        name: '',
        email: '',
        company_name: '',
        address: '',
        province: '',
        telephone: '',
        language: '',
        job_position: '',
        isVip: false,
        custom_fields: {},
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(`/event/${event.id}/register`);
    };

    const setCustomField = (key: string, value: string | number | boolean) => setData('custom_fields', { ...data.custom_fields, [key]: value });

    return (
        <>
            <AppLayout
                navigation={[
                    { title: 'Home', href: '/' },
                    { title: 'Events', href: '/event' },
                ]}
            >
                <div className="min-h-screen bg-gray-50 py-12">
                    <div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow md:p-8">
                        <img
                            src={event.gallery?.[0].src}
                            alt={event.gallery?.[0].description}
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

                            {/* Address
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Address</label>
                                <textarea
                                    value={data.address}
                                    onChange={(e) => setData('address', e.target.value)}
                                    rows={3}
                                    className="mt-1 w-full rounded-lg border px-3 py-2"
                                    placeholder="Street, City, Postal Code"
                                />
                            </div> */}

                            {/*Custom fields*/}

                            {event.custom_fields?.map((def) => {
                                const value = String(data.custom_fields[def.field] ?? '');
                                const error = (errors as Record<string, string>)[`custom_fields.${def.field}`];

                                return (
                                    <div key={def.field}>
                                        <label className="block text-sm font-medium text-gray-700">
                                            {def.label ?? def.field}
                                            {def.required && <span className="text-red-500"> *</span>}
                                        </label>

                                        {def.type === 'select' ? (
                                            <select
                                                value={value}
                                                onChange={(e) => setCustomField(def.field, e.target.value)}
                                                required={def.required}
                                                className="mt-1 w-full rounded-lg border px-3 py-2"
                                            >
                                                <option value="">-- Select {def.label ?? def.field} --</option>
                                                {def.options!.map((opt) => (
                                                    <option key={opt} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        ) : def.type === 'radio' ? (
                                            <div className="mt-1 flex flex-col gap-2">
                                                {def.options!.map((opt) => (
                                                    <label
                                                        key={opt}
                                                        className="flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm text-gray-700"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name={`custom_fields_${def.field}`}
                                                            value={opt}
                                                            checked={value === opt}
                                                            onChange={() => setCustomField(def.field, opt)}
                                                            required={def.required}
                                                        />
                                                        {opt}
                                                    </label>
                                                ))}
                                            </div>
                                        ) : (
                                            <input
                                                type={def.type === 'number' ? 'number' : 'text'}
                                                value={value}
                                                onChange={(e) => setCustomField(def.field, e.target.value)}
                                                required={def.required}
                                                className="mt-1 w-full rounded-lg border px-3 py-2"
                                            />
                                        )}

                                        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                                    </div>
                                );
                            })}

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
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Ticket</label>

                                <div className="mt-1 flex gap-4">
                                    <input
                                        type="radio"
                                        name="isVip"
                                        value={0}
                                        checked={data.isVip === false}
                                        onChange={(e) => setData('isVip', false)}
                                    />

                                    <span className="ml-2">
                                        Normal {event.slug === 'indonesia-collectors-festival-december-2026' ? '(entry time 10.00-20.00)' : null}
                                    </span>
                                </div>
                                {/* IsVIP */}
                                {!!event.hasVip && (
                                    <div className="mt-1 flex gap-4">
                                        <input
                                            type="radio"
                                            name="isVip"
                                            value={1}
                                            checked={data.isVip === true}
                                            onChange={(e) => setData('isVip', true)}
                                        />
                                        <span className="ml-2">
                                            VIP {event.slug === 'indonesia-collectors-festival-december-2026' ? '(entry time 10.00-20.00)' : null} -
                                            Get a chance to join our giveaway
                                            {' ('}
                                            <span className="text-gray-500">
                                                {isEarlyBirdActive(event.earlyBirdDate)
                                                    ? `${formatPrice(event.earlyBirdPrice)} until ${formatDate(event.earlyBirdDate)}`
                                                    : formatPrice(event.price)}
                                            </span>
                                            {')'}
                                        </span>
                                    </div>
                                )}
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
            {/* Modal */}
            {showModal && qrCode && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="max-w-md rounded-lg bg-white p-6 shadow-xl">
                        <h2 className="mb-2 text-2xl font-bold text-gray-900">Registration Successful!</h2>
                        <p className="mb-4 text-gray-600">
                            Thank you, <strong>{registrantName}</strong>! You are now registered for <strong>{event.title}</strong>.
                        </p>
                        <div className="flex justify-center">
                            <img src={`data:image/png;base64,${qrCode}`} alt="Your QR Code" className="h-48 w-48" />
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            We've sent the QR code to your email, you can also save this QR code by screenshot – you'll need it at the event entrance.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-4 w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
