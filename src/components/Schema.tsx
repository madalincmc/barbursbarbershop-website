export default function Schema() {
    const schemaMarkup = {
        "@context": "https://schema.org",
        "@type": "HairSalon",
        "name": "Barbur's Barber Shop",
        "image": "https://www.barburs.ro/images/shop-exterior.jpg", // To be updated
        "@id": "https://www.barburs.ro",
        "url": "https://www.barburs.ro",
        "telephone": "+40000000000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bulevardul Traian 3",
            "addressLocality": "Baia Mare",
            "addressRegion": "Maramureș",
            "postalCode": "430000",
            "addressCountry": "RO"
        },
        "priceRange": "$$",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.97",
            "reviewCount": "8433"
        },
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://mero.ro/p/barburs-barber-shop",
                "inLanguage": "ro-RO",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform",
                    "http://schema.org/MobileWebPlatform"
                ]
            },
            "result": {
                "@type": "Reservation",
                "name": "Programează-te online via Mero"
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
    );
}
