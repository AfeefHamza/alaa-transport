import Image from 'next/image';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function Clients() {
  // Your provided logo files in public/images/logos
  const partnerLogos = [
    { name: 'Adnoc Group', src: '/images/logos/Adnoc-Group-LOGO_0.jpg' },
    { name: 'IKEA', src: '/images/logos/Ikea_logo.svg.png' },
    { name: 'Nesto', src: '/images/logos/Nesto_Logo_2019.png' },
    { name: 'Lulu Hypermarket', src: '/images/logos/lulu-hypermarket.jpg' },
    { name: 'Etihad Rail', src: '/images/logos/etihad-rail-logo.png' },
    { name: 'Toshiba', src: '/images/logos/toshiba.png' },
    { name: 'Fujairah Government', src: '/images/logos/government-fujairah.png' },
    { name: 'World Star Holding', src: '/images/logos/world-star.jpeg' },
    { name: 'Fujairah Fine Arts Academy', src: '/images/logos/fujairah-fine-arts-academy.png' },




  ];


  return (
    <section className="py-12 md:py-16 bg-gray-50/50 relative overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">

        {/* Standardized and Stylish Header */}
        <FadeIn className="text-center">
          <div className="group flex justify-center">
            <h2 className="text-heading-xl text-secondary mb-4 animated-underline inline-block">Trusted by Leading Organizations</h2>
          </div>
          <p className="text-body-lg text-foreground/70 max-w-2xl mx-auto mt-4 font-sans">
            We are proud to serve some of the most prestigious organizations and institutions across Fujairah,Sharjah and Abu Dhabi.
          </p>
        </FadeIn>
      </div>

      {/* Stylish Moving Marquee for Logos */}
      <FadeIn delay={0.2} className="relative w-full py-10 bg-white/50 backdrop-blur-sm border-y border-gray-100 flex items-center shadow-inner">
        {/* Gradients for smooth fade in/out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-gray-50/90 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-gray-50/90 to-transparent z-20 pointer-events-none"></div>

        <div className="animate-marquee flex w-max pointer-events-none">
          {[...Array(4)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-8 md:gap-16 pr-8 md:pr-16 items-center">
              {partnerLogos.map((logo, i) => (
                <div
                  key={`${setIdx}-${i}`}
                  className="w-48 md:w-56 h-32 flex-shrink-0 flex items-center justify-center transition-all duration-300"
                >
                  {/* Partner Logo Card */}
                  <div className="w-full h-full bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
                    <div className="relative w-full h-full z-10">
                      <Image
                        src={logo.src}
                        alt={`${logo.name} Partner Logo`}
                        fill
                        className="object-contain filter mix-blend-multiply"
                        sizes="(max-width: 768px) 150px, 200px"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
