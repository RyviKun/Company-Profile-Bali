import { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        businessName: '',
        fullName: '',
        number: '',
        email: '',
        subject: '',
        userMessage: '',
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [confirmation, setConfirmation] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) newErrors[key] = 'This field is required';
        });
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await fetch('/api/mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            setConfirmation(result.status || 'Message sent!');
            setFormData({
                businessName: '',
                fullName: '',
                number: '',
                email: '',
                subject: '',
                userMessage: '',
            });
        } catch (err) {
            console.error(err);
            setConfirmation('Failed to send message');
        }
    };

    return (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 bg-slate-100 px-4 py-6 md:grid-cols-2 md:gap-12 md:px-6 md:py-12">
            {/* Contact Form */}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-900 md:mb-2">Business Name</label>
                        <input
                            name="businessName"
                            type="text"
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500"
                            placeholder="John"
                        />
                        {errors.businessName && <p className="mt-1 text-sm text-red-500">{errors.businessName}</p>}
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-900 md:mb-2">Full Name</label>
                        <input
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500"
                            placeholder="Doe"
                        />
                        {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-900 md:mb-2">WhatsApp number</label>
                        <input
                            name="number"
                            type="text"
                            value={formData.number}
                            onChange={handleChange}
                            className="w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500"
                            placeholder="123-45-678"
                        />
                        {errors.number && <p className="mt-1 text-sm text-red-500">{errors.number}</p>}
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-900 md:mb-2">Email address</label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500"
                            placeholder="john.doe@company.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-900 md:mb-2">Subject</label>
                    <input
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter subject"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-900 md:mb-2">Message</label>
                    <textarea
                        name="userMessage"
                        rows={4}
                        value={formData.userMessage}
                        onChange={handleChange}
                        className="w-full rounded-md bg-gray-800 px-3 py-2 text-white focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your message..."
                    />
                    {errors.userMessage && <p className="mt-1 text-sm text-red-500">{errors.userMessage}</p>}
                </div>

                <button type="submit" className="w-full rounded-md bg-blue-600 py-2 font-semibold text-white transition hover:bg-blue-700 md:py-3">
                    Send Message
                </button>

                {confirmation && <div className="mt-4 rounded-md bg-green-100 p-3 text-sm font-medium text-green-800">{confirmation}</div>}
            </form>

            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-3 md:space-y-6">
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">Sales Enquiries</h3>
                <p className="text-sm text-gray-600 md:text-base">
                    Interested in any of our products? <br />
                    Talk to our experts today
                </p>

                <div className="space-y-2 md:space-y-4">
                    <p className="flex items-center justify-center gap-3 text-sm text-gray-800 md:text-base">📞 +62 852 9798 8227</p>
                    <p className="flex items-center justify-center gap-3 text-sm text-gray-800 md:text-base">
                        ✉️{' '}
                        <a href="mailto:Meimkt.id@gmail.com" className="hover:underline">
                            Meimkt.id@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
