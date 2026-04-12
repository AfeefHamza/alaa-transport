import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Fleet } from '@/components/fleet';
import { Mission } from '@/components/mission';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Mission />
      <Testimonials />
      <Contact />
      <Footer />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'ALAA Transport',
            description: 'Reliable passenger transport, airport transfers, staff transportation and fleet services in Fujairah, UAE.',
            url: 'https://alaa-transport.com',
            telephone: '+971559414300',
            email: 'alaa.passtransport@gmail.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Al Hail',
              addressLocality: 'Fujairah',
              addressCountry: 'AE',
              postalCode: '',
            },
            image: '/og-image.jpg',
            priceRange: '$$',
            areaServed: [
              {
                '@type': 'City',
                name: 'Fujairah',
              },
              {
                '@type': 'Country',
                name: 'United Arab Emirates',
              },
            ],
            sameAs: [
              'https://www.facebook.com',
              'https://www.linkedin.com',
              'https://www.twitter.com',
            ],
          }),
        }}
      />
    </main>
  );
}
