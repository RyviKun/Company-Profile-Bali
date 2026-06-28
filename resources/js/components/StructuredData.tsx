interface EventSchemaProps {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: { name: string; address: string };
    image: string;
}

export default function EventSchema({ name, description, startDate, endDate, location, image }: EventSchemaProps) {
    const json = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name,
        description,
        startDate,
        endDate,
        location: {
            '@type': 'Place',
            name: location.name,
            address: location.address,
        },
        image,
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
