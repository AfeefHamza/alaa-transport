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
  Wrench,
  ChevronDown,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

const services = [
  {
    icon: Users,
    title: 'Passenger Transport Services',
    description: 'Our passenger transport services in Fujairah cover everything from daily bus transportation and corporate travel to airport transfers, luxury city tours, and labour transport. We focus on delivering safe, punctual, and comfortable journeys for every client.',
    image: '/images/passenger-transport-services.jpg'
  },
  {
    icon: Bus,
    title: 'Bus & Van Rental Services',
    description: 'Diverse rental fleet including 12, 18, 30, and 60-seater buses and vans. Fully air-conditioned and ideal for group travel, tourism, and corporate events.',
    image: '/images/bus-van-rental-services.jpg'
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
  {
    icon: Wrench,
    title: '24/7 Heavy Duty Garage',
    description: 'Our 24/7 heavy duty garage services provide reliable maintenance and repair support for buses, vans, and heavy equipment, ensuring smooth and uninterrupted operations.',
    image: '/images/garage.jpg'
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 bg-[#050510]">
      {/* Background Images with Crossfade */}
      {services.map((service, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Light overlay just to gently dim the image without hiding it */}
          <div className="absolute inset-0 bg-black/30 transition-colors duration-1000"></div>
        </div>
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-auto">
        
        {/* Main Glass Content Card */}
        <FadeIn className="bg-[#050510]/20 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 lg:p-14 shadow-2xl">
          <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-6 font-sans">
            Our Services
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 min-h-[160px]">
            {/* Title Area */}
            <div>
              <h3 
                key={`title-${activeIndex}`}
                className="text-4xl md:text-5xl font-extrabold text-white font-heading leading-tight animate-fade-in"
              >
                {services[activeIndex].title}
              </h3>
            </div>

            {/* Description Area */}
            <div className="flex flex-col items-start">
              <p 
                key={`desc-${activeIndex}`}
                className="text-gray-200 text-lg md:text-xl font-sans leading-relaxed animate-fade-in"
              >
                {services[activeIndex].description}
              </p>
              
              <a 
                href="#contact" 
                className="mt-8 flex items-center gap-3 text-white font-bold hover:text-white transition-all group font-sans tracking-wide"
              >
                <span className="flex items-center justify-center w-8 h-8 bg-[#B51E2B] rounded-md group-hover:bg-white transition-colors">
                  <ChevronRight className="w-5 h-5 text-white group-hover:text-[#B51E2B] transition-colors" />
                </span>
                Get in Touch
              </a>
            </div>
          </div>

          {/* Interactive Navigation Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-8">
            {services.map((service, idx) => {
              const isActive = idx === activeIndex;
              const Icon = service.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 px-4 py-4 md:py-5 rounded-2xl font-bold transition-all duration-500 text-left w-full cursor-pointer
                    ${isActive 
                      ? 'bg-white text-black shadow-2xl scale-[1.02]' 
                      : 'bg-white/5 hover:bg-white/10 text-white/80 border border-white/5 hover:border-white/20'
                    }
                  `}
                >
                  <Icon className={`w-6 h-6 flex-shrink-0 transition-colors duration-500 ${isActive ? 'text-[#B51E2B]' : 'text-white/40'}`} />
                  <span className="text-xs md:text-sm leading-tight font-sans">
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
