'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

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

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-background/80 to-background/60 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-primary text-sm font-semibold">What Our Clients Say</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From corporations to educational institutions, our clients consistently praise our commitment to excellence
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* Main testimonial - Large */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array(testimonials[activeIndex].rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl text-gray-800 font-light leading-relaxed mb-8 italic">
                  "{testimonials[activeIndex].content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-2xl">
                    {testimonials[activeIndex].image}
                  </div>
                  <div>
                    <p className="font-bold text-secondary text-lg">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[activeIndex].role},{' '}
                      <span className="text-primary font-semibold">
                        {testimonials[activeIndex].company}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial thumbnails */}
            <div className="hidden lg:flex flex-col gap-3">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                    idx === activeIndex
                      ? 'bg-primary/10 border-primary shadow-lg'
                      : 'bg-white border-transparent hover:border-gray-200'
                  }`}
                >
                  <p className="font-semibold text-secondary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-600 truncate">
                    {testimonial.company}
                  </p>
                  <div className="flex gap-0.5 mt-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 fill-primary text-primary"
                        />
                      ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-12">
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-secondary text-white hover:bg-secondary/90 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 hover:scale-110 transition-all duration-300 shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <p className="text-secondary font-semibold">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(testimonials.length).padStart(2, '0')}
            </p>
          </div>
        </div>

        {/* Stats under testimonials */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { value: '5.0', label: 'Average Rating', suffix: '★' },
            { value: '500+', label: 'Active Clients', suffix: '' },
            { value: '98%', label: 'Satisfaction Rate', suffix: '' },
            { value: '10+', label: 'Years Experience', suffix: '' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
                {stat.suffix}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
