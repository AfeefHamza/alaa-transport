import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
// import { Fleet } from '@/components/fleet';
import { Mission } from '@/components/mission';
import { Testimonials } from '@/components/testimonials';
import { Clients } from '@/components/clients';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      {/* <Fleet /> */}
      <Mission />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />

      {/* Advanced JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://alaa-transport.com/#organization',
              name: 'ALAA Transport',
              description: 'Reliable passenger transport, airport transfers, staff transportation and heavy equipment rental services in Fujairah, UAE.',
              url: 'https://alaa-transport.com',
              telephone: '+971559414300',
              email: 'info@alaa-transport.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Al Hail',
                addressLocality: 'Fujairah',
                addressRegion: 'Fujairah',
                addressCountry: 'AE'
              },
              image: '/og-image.jpg',
              priceRange: '$$',
              areaServed: ['Fujairah', 'Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Umm Al Quwain'],
              sameAs: [
                'https://www.facebook.com/alaatransport',
                'https://www.linkedin.com/company/alaatransport'
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'TransportationService',
              name: 'Passenger & Industrial Transport Services',
              provider: {
                '@type': 'LocalBusiness',
                '@id': 'https://alaa-transport.com/#organization'
              },
              areaServed: 'United Arab Emirates',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'ALAA Transport Services Catalog',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Passenger Transport Services',
                      description: 'Specialized bus transportation for corporate staff, schools, and labor transport across the UAE.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bus & Van Rental Services',
                      description: 'Comprehensive rental fleet including fully air-conditioned 12, 18, 30, and 60-seater buses and vans.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'City Tours',
                      description: 'Expertly guided sightseeing tours across Fujairah and the UAE landmarks.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'School Transport Services',
                      description: 'Secure and dependable school transportation services with trained drivers.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Utility & Material Transport',
                      description: 'Efficient transport services for water supply, construction materials, and debris removal.'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Heavy Equipment Rental',
                      description: 'Comprehensive heavy machinery rental including excavators, mobile cranes, and dumper trucks.'
                    }
                  }
                ]
              }
            }
          ]),
        }}
      />
    </main>
  );
}
