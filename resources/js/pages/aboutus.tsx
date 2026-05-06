import AppLayout from '@/components/layout/appLayout';
import Experience from '@/components/sections/experience';
import Overview from '@/components/sections/overview';
import { Head } from '@inertiajs/react';

export default function AboutUs() {
    const navigationProps = [
        { title: 'Home', href: '/' },
        { title: 'Experience', href: '#experience' },
        { title: 'Overview', href: '#overview' },
    ];

    return (
        <>
            <Head>
                <title>About Us | MediaExpo Indonesia</title>
                <meta
                    name="description"
                    content="Learn about MediaExpo Indonesia’s experience and expertise in organizing impactful events across industries."
                />
            </Head>
            <AppLayout navigation={navigationProps}>
                {/* Page Title */}
                {/* Overview Section */}
                <section id="overview" className="bg-primary pt-10 md:py-16 md:pt-0">
                    <Overview />
                </section>

                {/* Experience Section */}
                <section id="experience" className="bg-background px-6 py-16 md:px-12">
                    <Experience />
                </section>

                {/* History Section */}
                {/*
                <section id="history" className="bg-background py-16" >
                    <History/>
                </section>*/}
            </AppLayout>
        </>
    );
}
