import AppLayout from '@/components/layout/appLayout';
import Carousel from '@/components/myComponent/Carousel';
import Overview from '@/components/sections/overview';
import Seo from '@/components/Seo';
const rows = [
    {
        number: '01.',
        title: 'Exceptional Event Strategy',
        body: "With 10+ years in the industry, we've executed over 500 events across Indonesia—from high-stakes corporate launches to intimate brand activations. Our strategic approach ensures that every event is a step toward your growth.",
        imageFirst: true,
    },
    {
        number: '02.',
        title: 'B2B Networking Hub',
        body: "Indonesia's dynamic business landscape requires deep local knowledge. We bridge the gap between global standards and local expertise, providing a platform where businesses connect and thrive.",
        imageFirst: false,
    },
];

const stats = [
    { value: '500+', label: 'EVENTS ORGANIZED' },
    { value: '10+', label: 'YEARS EXPERIENCE' },
    { value: '150+', label: 'B2B PARTNERS' },
    { value: '98%', label: 'CLIENT SATISFACTION' },
];

function PromoImage() {
    return (
        <div className="relative flex h-full min-h-[300px] w-full flex-col overflow-hidden bg-gradient-to-br from-[#0c0c0c] via-[#161310] to-[#0c0c0c] p-6">
            {/* decorative gold accents */}
            <div className="pointer-events-none absolute top-0 -left-6 h-full w-24 rounded-full border-l-2 border-amber-400/40" />
            <div className="pointer-events-none absolute top-6 right-6 h-16 w-16 rounded-full border border-amber-300/30" />

            <h3 className="relative z-10 mb-2 font-serif text-2xl leading-tight font-bold text-amber-200 sm:text-3xl">
                10 World-Famous Event
                <br />
                Planning Companies
            </h3>
            <span className="relative z-10 mb-5 inline-flex w-fit items-center rounded-full border border-amber-300/50 px-4 py-1.5 text-xs font-medium tracking-wide text-amber-100">
                TO INSPIRE YOUR NEXT EVENT
            </span>

            <div className="relative z-10 mt-auto overflow-hidden rounded-xl border-2 border-amber-300/60">
                <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80"
                    alt="Business professionals networking near a window"
                    className="h-40 w-full object-cover sm:h-48"
                />
            </div>
        </div>
    );
}

export default function AboutUs() {
    const navigationProps = [
        { title: 'Home', href: '/' },
        { title: 'Events', href: '/event' },
    ];

    return (
        <>
            <Seo
                title="About Us | MediaExpo Indonesia"
                description="Learn about MediaExpo Indonesia’s experience and expertise in organizing impactful events across industries."
                image="/images/aboutus-banner.jpg" // ensure absolute URL
                url={route('aboutus')}
                type="website"
            />
            <AppLayout navigation={navigationProps}>
                {/* Page Title */}
                {/* Overview Section */}
                <section id="overview" className="bg-primary pt-10 md:py-16 md:pt-0">
                    <Overview />
                </section>

                {/* Experience Section */}
                <section className="bg-white py-20 font-sans">
                    <div className="mx-auto max-w-[1310px] px-6">
                        {/* Header */}
                        <div className="mb-16 text-center">
                            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-slate-400">PROVEN TRACK RECORD</p>
                            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900">Our Experience</h2>
                            <div className="mx-auto h-1 w-12 rounded-full bg-slate-900" />
                        </div>

                        {/* Rows */}
                        <div className="mb-20 flex flex-col gap-10">
                            {rows.map((row) => (
                                <div key={row.number} className="flex flex-col overflow-hidden rounded-2xl bg-slate-50 sm:flex-row">
                                    {row.imageFirst ? (
                                        <>
                                            <div className="w-full sm:w-1/2">
                                                <PromoImage />
                                            </div>
                                            <div className="flex w-full flex-col justify-center px-8 py-10 sm:w-1/2 sm:px-14">
                                                <span className="mb-2 text-4xl font-bold text-slate-200">{row.number}</span>
                                                <h3 className="mb-4 text-2xl font-bold text-slate-900">{row.title}</h3>
                                                <p className="leading-relaxed text-slate-500">{row.body}</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex w-full flex-col justify-center px-8 py-10 sm:w-1/2 sm:px-14">
                                                <span className="mb-2 text-4xl font-bold text-slate-200">{row.number}</span>
                                                <h3 className="mb-4 text-2xl font-bold text-slate-900">{row.title}</h3>
                                                <p className="leading-relaxed text-slate-500">{row.body}</p>
                                            </div>
                                            <div className="w-full sm:w-1/2">
                                                <PromoImage />
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Stats bar */}
                        <div className="rounded-2xl bg-primary px-6 py-10 sm:px-12">
                            <div className="grid grid-cols-2 gap-y-8 text-center sm:grid-cols-4 sm:divide-x sm:divide-white/10">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="px-4">
                                        <p className="mb-2 text-3xl font-extrabold text-white sm:text-4xl">{stat.value}</p>
                                        <p className="text-xs font-semibold tracking-wider text-slate-400">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-16 font-sans">
                    <Carousel className="mx-auto max-w-[1310px] bg-white" />
                </section>
            </AppLayout>
        </>
    );
}
