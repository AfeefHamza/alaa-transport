'use client';

import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { motion, animate, useInView, AnimatePresence } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

const getInitials = (name: string) => {
  const parts = name.split(' ').filter(Boolean);
  if (parts.length === 1) {
    return name.slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
};

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          if (ref.current) {
            ref.current.textContent = latest.toFixed(decimals);
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals]);

  return <span ref={ref}>0</span>;
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      company: 'Lulu Mall Fujairah',
      shortCompany: 'Lulu Mall',
      role: 'Facility Manager',
      services: 'Bus Rental & Garage Services',
      logo: '/images/logos/lulu-hypermarket.webp',
      content:
        "Alaa Transport has been our trusted partner in Fujairah for staff transportation and garage services. Their fleet is well-maintained, drivers are professional and courteous, and the team handles last-minute scheduling changes efficiently. Their reliability, responsiveness, and commitment to service quality make them a dependable transport partner for any retail or commercial organization in the UAE.",
      rating: 5,
    },
    {
      company: 'Etihad Railway',
      shortCompany: 'Etihad Railway',
      role: 'Project Manager',
      services: 'Bus Rental & Heavy Equipment Rental',
      logo: '/images/logos/etihad-rail-logo.webp',
      content:
        "Alaa Transport has consistently supported our workforce transportation and equipment logistics requirements in Fujairah. Their team understands project site operations, follows safety standards, and responds quickly to urgent requests. Their professionalism, flexibility, and dependable service have made them feel more like an extension of our own team than an external vendor.",
      rating: 5,
    },
    {
      company: 'NMDC (National Marine Dredging Company)',
      shortCompany: 'NMDC',
      role: 'Procurement Manager',
      services: 'Bus Rental & Utilities Pickups Rental',
      logo: '/images/logos/nmdc-logo.webp',
      content:
        "Alaa Transport has been a reliable and easy-to-work-with partner throughout our projects. Their team is highly responsive, communicates clearly, and understands client requirements well. Their professionalism and commitment to service excellence make them a valuable transportation partner with strong potential for future growth.",
      rating: 5,
    },
    {
      company: 'Fujairah Fine Arts Academy',
      shortCompany: 'Fine Arts Academy',
      role: 'Administration Manager',
      services: 'School Transportation',
      logo: '/images/logos/fujairah-fine-arts-academy.webp',
      content:
        "Safety and reliability are our highest priorities, and Alaa Transport has consistently delivered both. Their buses are punctual, drivers are responsible and friendly, and they ensure children travel comfortably and safely. Their team is also quick to accommodate last-minute changes, making the entire transportation process smooth, dependable, and stress-free.",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-black/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-8 space-y-6">
          <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-primary text-sm font-extrabold uppercase tracking-widest font-sans">What Our Clients Say</p>
          </div>
          <p className="text-body-lg text-foreground/70 max-w-2xl mx-auto font-sans">
            From corporations to educational institutions, our clients consistently praise our commitment to excellence
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          {/* Testimonials Carousel */}
          <FadeIn delay={0.2} className="relative">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-8">
              
              {/* Reviewer Thumbnails - ON LEFT */}
              <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center gap-3 lg:gap-6 lg:w-80 flex-wrap">
                {testimonials.map((testimonial, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="relative group transition-all duration-500 flex items-center lg:gap-3 text-left lg:py-2 lg:pl-2 lg:pr-6 rounded-full"
                  >
                    {/* Ring animation for active avatar */}
                    {idx === activeIndex && (
                      <motion.div
                        layoutId="active-ring"
                        className="absolute inset-0 border-2 border-primary rounded-full hidden lg:block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <div className={`
                      w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs font-black tracking-tighter transition-all duration-500 shrink-0 border-2 overflow-hidden
                      ${idx === activeIndex 
                        ? 'border-primary scale-105 z-10 shadow-lg shadow-primary/20' 
                        : 'border-gray-100 opacity-60 hover:opacity-100 hover:scale-105'
                      }
                      ${testimonial.logo ? 'bg-white p-1' : (idx === activeIndex ? 'bg-primary text-white' : 'bg-white text-gray-400')}
                    `}>
                      {testimonial.logo ? (
                        <img
                          src={testimonial.logo}
                          alt={`${testimonial.shortCompany} Logo`}
                          className="w-full h-full object-contain rounded-full"
                        />
                      ) : (
                        getInitials(testimonial.shortCompany)
                      )}
                    </div>

                    {/* Reviewer Info beside circle (Desktop only) */}
                    <div className={`hidden lg:block transition-all duration-500 ${idx === activeIndex ? 'translate-x-1' : 'opacity-60'}`}>
                      <p className={`font-extrabold text-xs uppercase tracking-wider font-heading leading-tight ${idx === activeIndex ? 'text-secondary' : 'text-gray-500'}`}>
                        {testimonial.shortCompany}
                      </p>
                      <p className="text-[9px] font-bold text-primary uppercase tracking-widest mt-0.5">
                        {testimonial.role}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Main Spotlight Card - ON RIGHT */}
              <div className="w-full lg:flex-1">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-gray-100 relative overflow-hidden group h-[520px] sm:h-[440px] md:h-[450px] lg:h-[480px] xl:h-[440px]">
                  {/* Decorative background circle */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Premium Quote treatment */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 rotate-3 shrink-0">
                      <span className="text-white text-3xl font-serif leading-none mt-3">&ldquo;</span>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 8, scale: 0.995 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.995 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="flex-1 flex items-center py-4"
                      >
                        <p className="text-sm sm:text-base md:text-lg text-secondary font-medium leading-relaxed font-sans italic w-full">
                          {testimonials[activeIndex].content}
                        </p>
                      </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`meta-${activeIndex}`}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.45, delay: 0.05, ease: 'easeInOut' }}
                        className="flex items-center gap-4 pt-6 md:pt-8 border-t border-gray-100 shrink-0"
                      >
                        <div className="flex-1">
                          <p className="font-extrabold text-secondary text-lg md:text-xl font-heading mb-0.5">
                            {testimonials[activeIndex].company}
                          </p>
                          <p className="text-xs md:text-sm text-gray-500 font-sans font-medium">
                            {testimonials[activeIndex].role} <span className="text-primary font-semibold">({testimonials[activeIndex].services})</span>
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
