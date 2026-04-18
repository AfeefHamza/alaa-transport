'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  Users, 
  Bus, 
  Map, 
  GraduationCap, 
  HardHat, 
  Truck,
  ChevronRight, 
  ChevronDown,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

const services = [
  {
    icon: Users,
    title: 'Passenger Transport Services',
    description: 'Expert passenger transport solutions for corporate staff and labor commute. Our reliable fleet ensures safe, punctual, and comfortable journeys across the UAE.',
    image: '/images/passenger-transport-services.jpg'
  },
  {
    icon: Bus,
    title: 'Bus & Van Rental Services',
    description: 'Diverse rental fleet including 12, 18, 30, and 60-seater buses and vans. Fully air-conditioned and ideal for group travel, tourism, and corporate events.',
    image: '/images/bus-van-rental-services.jpg'
  },
  {
    icon: Map,
    title: 'City Tours',
    description: 'Immersive sightseeing tours across Fujairah and the Emirates. Discover historical landmarks and modern wonders with our professional guides and flexible schedules.',
    image: '/images/city-tours.jpg'
  },
  {
    icon: GraduationCap,
    title: 'School Transport Services',
    description: 'Secure and dependable school transportation services. We prioritize safety with trained drivers and well-maintained buses for the peace of mind of parents and schools.',
    image: '/images/school-transportation.jpg'
  },
  {
    icon: Truck,
    title: 'Utility & Material Transport',
    description: 'Efficient transport services for water supply, construction materials, and debris removal. Supporting Fujairah\'s industrial and maintenance needs with reliable operations.',
    image: '/images/utility-material-transport.jpg'
  },
  {
    icon: HardHat,
    title: 'Heavy Equipment Rental',
    description: 'Comprehensive heavy machinery rental including excavators, cranes, dumper trucks, and more. Robust equipment for large-scale construction and industrial projects.',
    image: '/images/heavy-equipment-rental.jpg'
  },
];

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-[#050510] text-white">
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
            const isExpanded = expandedIndex === idx;
            
            return (
              <FadeInItem key={idx}>
                <div 
                  className="relative h-[480px] lg:h-[500px] w-full rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl bg-gray-900"
                  onClick={(e) => {
                    if (window.innerWidth < 768) {
                      toggleExpand(idx, e);
                    }
                  }}
                >

                  {/* Background Image Setup */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Overlays to ensure text pops */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 opacity-95 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content Container - Initially at bottom, slides up on hover */}
                  <div className={`absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end transition-all duration-700 ease-[cubic-bezier(0.2,1,0.3,1)] ${
                    isExpanded ? 'translate-y-0 bg-black/70' : 'translate-y-0 md:group-hover:-translate-y-12'
                  }`}>

                    {/* Icon & Title */}
                    <div className="transition-transform duration-500 transform group-hover:-translate-y-2">
                      <div className="w-14 h-14 bg-[#B51E2B] rounded-xl flex items-center justify-center mb-6 shadow-xl shadow-[#B51E2B]/30 transition-all duration-500 group-hover:scale-110">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold font-heading tracking-wide mb-3">
                        {service.title}
                      </h3>
                    </div>

                    {/* Sliding Description Area */}
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded 
                        ? 'max-h-[400px] opacity-100 mb-6' 
                        : 'max-h-0 opacity-0 md:group-hover:max-h-[300px] group-hover:opacity-100'
                    }`}>
                      <p className="text-gray-200 font-sans leading-relaxed pt-2 text-base md:text-lg lg:text-xl font-medium">
                        {service.description}
                      </p>
                    </div>

                    {/* Mobile Read More Toggle */}
                    <div className="md:hidden flex items-center gap-2 mt-2">
                      <button 
                        onClick={(e) => toggleExpand(idx, e)}
                        className="text-white bg-[#B51E2B] font-bold text-sm tracking-widest uppercase font-sans flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg"
                      >
                        {isExpanded ? 'Show Less' : 'Read More'}
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </button>
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
            className="flex items-center justify-center gap-2 px-8 py-4 bg-[#B51E2B] text-white rounded-md font-bold font-sans hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-[#B51E2B]/20 max-w-fit mx-auto group"
          >
            Get in Touch
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
