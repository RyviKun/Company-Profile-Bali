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
        imgSrc: '/images/experience/1.JPG',
        alt: 'Strategize your event',
    },
    {
        number: '02.',
        title: 'B2B Networking Hub',
        body: "Indonesia's dynamic business landscape requires deep local knowledge. We bridge the gap between global standards and local expertise, providing a platform where businesses connect and thrive.",
        imageFirst: false,
        imgSrc: '/images/experience/2.JPG',
        alt: 'Networking Hub',
    },
];

const stats = [
    { value: '500+', label: 'EVENTS ORGANIZED' },
    { value: '10+', label: 'YEARS EXPERIENCE' },
    { value: '150+', label: 'B2B PARTNERS' },
    { value: '98%', label: 'CLIENT SATISFACTION' },
];

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
                                                <img src={row.imgSrc} alt={row.alt} className="h-full w-full object-cover" />
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
                                                <img src={row.imgSrc} alt={row.alt} className="h-full w-full object-cover" />
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
