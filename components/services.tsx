import Image from 'next/image';
import { Users, Plane, MapPin, Globe, Truck } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

const services = [
  {
    icon: Users,
    title: 'Staff Transport',
    description: 'Reliable daily transportation for your employees with professional drivers and modern vehicles.',
    image: 'https://images.unsplash.com/photo-1542157585-ef20bfcce579?q=60&w=600&auto=format&fit=crop'
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Seamless airport pickup and drop-off services with on-time reliability and professional service.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=60&w=600&auto=format&fit=crop'
  },
  {
    icon: MapPin,
    title: 'City Tours',
    description: 'Comfortable sightseeing tours with experienced guides and flexible scheduling for groups.',
    image: 'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=60&w=600&auto=format&fit=crop'
  },
  {
    icon: Globe,
    title: 'Tour Packages',
    description: 'Customized tour packages to popular destinations with dedicated professional drivers.',
    image: 'https://images.unsplash.com/photo-1522067784013-1a221f2ac49e?q=60&w=600&auto=format&fit=crop'
  },
  {
    icon: Truck,
    title: 'Fleet Management',
    description: 'Complete fleet management solutions for corporate transportation needs and logistics.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=60&w=600&auto=format&fit=crop'
  },
  {
    icon: Users,
    title: 'Heavy Equipment Rental',
    description: 'Professional transportation services for VIP events, conferences, and group gatherings.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=60&w=600&auto=format&fit=crop'
  },
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-16 bg-[#050510] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header - Styled for dark background */}
        <FadeIn className="text-center mb-16">
          <div className="group inline-block">
            <h2 className="text-heading-xl text-white mb-4 animated-underline before:bg-[#B51E2B]">Our Services</h2>
          </div>
          <p className="text-body-lg text-gray-400 max-w-2xl mx-auto mt-6 font-sans">
            Comprehensive, high-end transportation solutions meticulously tailored to exceed your expectations.
          </p>
        </FadeIn>

        {/* Interactive Image Grid */}
        <FadeInStagger delay={0.2} staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <FadeInItem key={idx}>
                <div className="relative h-96 lg:h-[450px] w-full rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl">

                  {/* Background Image Setup */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Overlays to ensure text pops */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 opacity-90" />

                  {/* Content Container - Slides up on hover */}
                  <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">

                    {/* Icon & Title */}
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-[#B51E2B]/90 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-[#B51E2B]/20 transform group-hover:-translate-y-2 transition-transform duration-500">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-wide">
                        {service.title}
                      </h3>
                    </div>

                    {/* Sliding Description Area */}
                    <div className="overflow-hidden">
                      <div className="h-0 opacity-0 group-hover:h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                        <p className="text-gray-300 font-sans leading-relaxed pt-2">
                          {service.description}
                        </p>
                      </div>

                      {/* Read More Mock Link */}
                      <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <span className="text-[#B51E2B] font-bold text-sm tracking-wider uppercase font-sans">Learn more</span>
                        <span className="text-[#B51E2B] font-bold">→</span>
                      </div>
                    </div>

                  </div>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="text-center mt-20">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#B51E2B] text-white rounded-md font-bold font-sans hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-[#B51E2B]/20 max-w-fit mx-auto"
          >
            Get in Touch
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
