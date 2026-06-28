import { Head } from '@inertiajs/react';

interface SeoProps {
    title: string;
    description: string;
    image?: string; // absolute URL
    url?: string; // canonical URL
    type?: 'website' | 'article' | 'event';
}

export default function Seo({ title, description, image, url, type = 'website' }: SeoProps) {
    const siteName = 'MediaExpo Indonesia';
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultImage = '/images/caraousel/3.JPG'; // place in public

    return (
        <Head>
            {/* Basic */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || ''} />
            <link rel="canonical" href={url || window.location.href} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || ''} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:url" content={url || window.location.href} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || ''} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Head>
    );
}
