'use client';

import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { motion, animate, useInView } from 'framer-motion';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
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
      name: 'Ahmed Al Mansouri',
      company: 'UAE Logistics Ltd',
      role: 'Operations Director',
      content:
        'ALAA Transport has been instrumental in our daily operations. Their reliability and professional service set them apart from competitors.',
      rating: 5,
      image: '👔',
    },
    {
      name: 'Fatima Al Kaabi',
      company: 'Education Plus Academy',
      role: 'Principal',
      content:
        'The school shuttle service is excellent. Parents trust ALAA completely with their children. Safety is always the priority.',
      rating: 5,
      image: '👩‍🏫',
    },
    {
      name: 'Mohammed Al Hashmi',
      company: 'Fujairah Tech Corp',
      role: 'HR Manager',
      content:
        'Staff transportation has never been easier. Professional drivers, clean vehicles, and always on time. Highly recommended!',
      rating: 5,
      image: '💼',
    },
    {
      name: 'Sarah Johnson',
      company: 'International Hotel Fujairah',
      role: 'Guest Services',
      content:
        'Our guests love the airport transfer service. The comfort and punctuality make lasting impressions. Perfect for our business!',
      rating: 5,
      image: '🏨',
    },
    {
      name: 'Hassan Al Naqbi',
      company: 'Construction & Engineering',
      role: 'Site Manager',
      content:
        'Employee shuttles have improved productivity and morale significantly. ALAA understands our industry needs perfectly.',
      rating: 5,
      image: '🏗️',
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

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
              <div className="flex flex-row lg:flex-col items-center lg:items-start justify-center gap-4 lg:gap-6 lg:w-80">
                {testimonials.map((testimonial, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className="relative group transition-all duration-500 flex items-center gap-3 text-left py-2 pl-2 pr-6 rounded-full"
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
                      w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xs font-black tracking-tighter transition-all duration-500 shrink-0 border-2
                      ${idx === activeIndex 
                        ? 'bg-primary text-white border-primary scale-105 z-10 shadow-lg shadow-primary/20' 
                        : 'bg-white text-gray-400 border-gray-100 opacity-60 hover:opacity-100 hover:scale-105'
                      }
                    `}>
                      {getInitials(testimonial.name)}
                    </div>

                    {/* Reviewer Info beside circle (Desktop only) */}
                    <div className={`hidden lg:block transition-all duration-500 ${idx === activeIndex ? 'translate-x-1' : 'opacity-60'}`}>
                      <p className={`font-extrabold text-xs uppercase tracking-wider font-heading leading-tight ${idx === activeIndex ? 'text-secondary' : 'text-gray-500'}`}>
                        {testimonial.name}
                      </p>
                      <p className="text-[9px] font-bold text-primary uppercase tracking-widest mt-0.5">
                        {testimonial.company}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Main Spotlight Card - ON RIGHT */}
              <div className="w-full lg:flex-1">
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-primary/5 border border-gray-100 relative overflow-hidden group min-h-[400px] flex flex-col justify-center">
                  {/* Decorative background circle */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Premium Quote treatment */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20 rotate-3">
                      <span className="text-white text-3xl font-serif leading-none mt-3">&ldquo;</span>
                    </div>

                    <div className="h-[200px] md:h-[180px] lg:h-[220px] flex items-center mb-10">
                      <p className="text-2xl md:text-3xl lg:text-4xl text-secondary font-medium leading-tight font-sans italic w-full">
                        {testimonials[activeIndex].content}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
                      <div className="flex-1">
                        <p className="font-extrabold text-secondary text-xl font-heading mb-0.5">
                          {testimonials[activeIndex].name}
                        </p>
                        <p className="text-sm text-gray-500 font-sans font-medium">
                          {testimonials[activeIndex].role} at <span className="text-primary">{testimonials[activeIndex].company}</span>
                        </p>
                      </div>
                      
                      <div className="flex gap-0.5">
                        {Array(testimonials[activeIndex].rating).fill(0).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats under testimonials */}
        <FadeInStagger delay={0.4} className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: 5.0, decimals: 1, label: 'Average Rating', suffix: '★' },
            { value: 500, label: 'Active Clients', suffix: '+' },
            { value: 98, label: 'Satisfaction Rate', suffix: '%' },
            { value: 10, label: 'Years Experience', suffix: '+' },
          ].map((stat, idx) => (
            <FadeInItem key={idx}>
              <div
                className="text-center p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-extrabold text-primary mb-3 font-heading">
                  <Counter value={stat.value} decimals={stat.decimals} />
                  {stat.suffix}
                </p>
                <p className="text-secondary font-bold font-sans uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
