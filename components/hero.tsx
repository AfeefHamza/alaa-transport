'use client';

import { Phone, MessageCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [
    { src: '/images/hero-dramatic-bus.jpg', title: 'Premium Travel Experience' },
    { src: '/images/happy-passengers.jpg', title: 'Luxury & Comfort' },
    { src: '/images/bus-interior-luxury.jpg', title: 'Modern Fleet' },
    { src: '/images/fleet-lineup-dramatic.jpg', title: 'Fleet Lineup' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  
  function setActiveIndex(idx: number): void {
    setActiveImageIndex(idx);
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background images carousel */}
      <div className="absolute inset-0 w-full h-full lg:w-[65%] lg:left-auto lg:right-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === activeImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover"
              priority={idx === 0 || idx === 3}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Very subtle gradient to ensure image pops against the geometric overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Geometric Aesthetic Overlay (Inspired by Reference Image 1) */}
      <div className="hidden lg:block absolute inset-0 z-10 pointer-events-none">
        {/* White triangle pushing in from the left */}
        <div className="absolute top-0 left-0 h-full w-[45%] bg-white pb-[100%] origin-top-left skew-x-[20deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}></div>
        {/* Red geometric accent */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 bg-[#B51E2B] clip-triangle-right opacity-90 hidden xl:block" style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}></div>
      </div>

      {/* Mobile Dark Gradient Overlay */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-10"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <FadeInStagger delay={0.1} className="space-y-6 lg:pr-12">

            {/* Main Headline */}
            <FadeInItem className="space-y-2">
              <div className="text-secondary lg:text-black lg:hidden mb-4 rounded-xl p-4 bg-white/10 backdrop-blur-md border border-white/20 inline-block">
                <h2 className="text-xl font-bold text-white tracking-widest uppercase">ALAA Transport</h2>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white lg:text-secondary leading-tight font-heading">
                Journey In <br />
                <span className="text-[#B51E2B] tracking-tighter">Excellence</span>
              </h1>
              <p className="text-lg text-white/90 lg:text-gray-600 font-sans leading-relaxed max-w-md mt-6">
                We Get You There! Reliable, safe, and professional passenger transport across the United Arab Emirates.
              </p>
            </FadeInItem>

            {/* CTA Buttons */}
            <FadeInItem>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="tel:+971559414300"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#B51E2B] text-white rounded-md font-bold font-sans hover:bg-black transition-all duration-300 shadow-xl shadow-[#B51E2B]/20"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </FadeInItem>
          </FadeInStagger>

          {/* Empty right column so it doesn't overlap the geometric bus image on desktop */}
          <div className="hidden lg:block relative h-full">
            {/* Carousel Navigation matching the professional clean look */}
            <div className="absolute bottom-0 right-0 flex bg-white p-2 gap-2 rounded-tl-xl shadow-lg">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === activeImageIndex
                    ? 'bg-[#B51E2B] w-8'
                    : 'bg-gray-300 w-2 hover:bg-gray-400'
                    }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
