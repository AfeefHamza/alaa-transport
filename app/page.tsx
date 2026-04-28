import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
// import { Fleet } from '@/components/fleet';
import { Mission } from '@/components/mission';
import { Testimonials } from '@/components/testimonials';
import { Clients } from '@/components/clients';
import { Contact } from '@/components/contact';
import { Careers } from '@/components/careers';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Testimonials />
      <About />
      <Mission />
      <Careers />
      <Contact />
      <Footer />

      {/* Advanced JSON-LD Schema */}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://alaa-transport.com/#organization",
        name: "ALAA Transport",
        description:
          "Reliable passenger transport, airport transfers, staff transportation and heavy equipment rental services in Fujairah, UAE.",
        url: "https://alaa-transport.com",
        telephone: "+971522194186",
        email: "alaa.passtransport@gmail.com",
        image: "https://alaa-transport.com/og-image.jpg",
        priceRange: "$$",

        address: {
          "@type": "PostalAddress",
          streetAddress: "Al Hayle Industrial Area",
          addressLocality: "Fujairah",
          addressRegion: "Fujairah",
          addressCountry: "AE",
        },

        geo: {
          "@type": "GeoCoordinates",
          latitude: 25.1288,
          longitude: 56.3265,
        },

        areaServed: ["Fujairah", "Abu Dhabi", "Sharjah"],

        openingHours: "Mo-Su 00:00-23:59",

        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971522194186",
          contactType: "customer service",
          areaServed: "AE",
          availableLanguage: ["English"],
        },

        sameAs: [
          "https://www.facebook.com/share/1BcRxWHo5i/",
          "https://www.instagram.com/alaatransport.ae",
          "https://www.linkedin.com/company/alaagroup/",
        ],
      },

      {
        "@context": "https://schema.org",
        "@type": "TransportationService",
        name: "Passenger & Industrial Transport Services",
        provider: {
          "@type": "LocalBusiness",
          "@id": "https://alaa-transport.com/#organization",
        },
        areaServed: "United Arab Emirates",

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "ALAA Transport Services Catalog",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Passenger Transport Services",
                description:
                  "Bus transportation for corporate staff, schools, airport transfers, and labor transport across the UAE.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Bus & Van Rental Services",
                description:
                  "Air-conditioned 12, 18, 39, and 60-seater buses and vans for corporate and group travel.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "School Transport Services",
                description:
                  "Safe and reliable school pickup, drop, and fleet management services with trained drivers.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Utility & Material Transport",
                description:
                  "Water supply, construction material transport, and debris removal services across Fujairah.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Heavy Equipment Rental",
                description:
                  "Excavators, mobile cranes, dumper trucks, trailers, and wheel loaders for industrial projects.",
              },
            },
          ],
        },
      },
    ]),
  }}
/>
    </main>
  );
}
