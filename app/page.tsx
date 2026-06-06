import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
// import { Fleet } from '@/components/fleet';
import { Mission } from '@/components/mission';
import { Testimonials } from '@/components/testimonials';
import { Clients } from '@/components/clients';
import { Contact } from '@/components/contact';
import { Faqs } from '@/components/faqs';
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
      <Faqs />
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
        "@id": "https://alaatransport.com/#organization",
        name: "ALAA Transport",
        description:
          "Reliable passenger transport, airport transfers, staff transportation and heavy equipment rental services in Fujairah, UAE.",
        url: "https://alaatransport.com",
        telephone: "+971522194186",
        email: "Admin@alaatransport.com",
        image: "https://alaatransport.com/og-image.webp",
        logo: "https://alaatransport.com/images/logos/alaa-logo.webp",
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
          "@id": "https://alaatransport.com/#organization",
        },
        areaServed: "Fujairah, Abu Dhabi, Sharjah",

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
            {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "24/7 Heavy Duty Garage Services",
              "description": "Round-the-clock maintenance, repair, diagnostics, and support services for buses, vans, commercial vehicles, and heavy equipment."
            }
          },
          ],
        },
      },
      {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of passenger transport vehicles are available in your fleet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Alaa Transport Fujairah operates a diverse fleet including 8-seater vans, 15-seater vans, 30-seater coaster buses, 50-seater premium buses, and 60-seater buses for passenger transportation across the UAE."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you mobilize vehicles for a new project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on fleet requirements and project location, vehicles can often be mobilized within a short period with full documentation, permits, and driver allocation."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer transportation services across all Emirates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide transportation services across Fujairah, Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, and Khor Fakkan."
      }
    },
    {
      "@type": "Question",
      "name": "Why should I choose Alaa Transport over other transport companies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clients choose Alaa Transport for its reliable fleet, experienced drivers, strong safety standards, competitive pricing, responsive operations team, and comprehensive transport solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide buses with CISPA passes and Fujairah Port entry permits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide transportation solutions for industrial, marine, and oil and gas projects requiring CISPA-approved access and Fujairah Port entry documentation."
      }
    },
    {
  "@type": "Question",
  "name": "Do you provide bus rental services in Fujairah?",
  "acceptedAnswer": {
    "@type": "Answer",
    "text": "Yes. We provide bus rental services in Fujairah including 12-seater vans, 18-seater vans, 30-seater buses, and 60-seater buses for corporate transport, staff transportation, airport transfers, school transport, and city tours."
  }
  }
  ]
}
    ]),
  }}
/>
    </main>
  );
}
