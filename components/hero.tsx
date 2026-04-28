'use client';

import { Phone } from 'lucide-react';
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
  }, [images.length]);
  
  function setActiveIndex(idx: number): void {
    setActiveImageIndex(idx);
  }

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gray-50/30 pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Decorative subtle background blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <FadeInStagger delay={0.1} className="space-y-6 lg:pr-8 order-2 lg:order-1 mt-8 lg:mt-0">
            <FadeInItem className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-extrabold text-secondary leading-tight font-heading">
                Journey In <br />
                <span className="text-[#B51E2B] tracking-tighter">Excellence</span>
              </h1>
              <p className="text-lg text-gray-600 font-sans leading-relaxed max-w-md mt-6">
                We Get You There! Reliable, safe, and professional passenger transport across Fujairah, Sharjah and Abu Dhabi.
              </p>
            </FadeInItem>

            {/* CTA Buttons */}
            <FadeInItem>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="tel:+971522194186"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#B51E2B] text-white rounded-md font-bold font-sans hover:bg-black transition-all duration-300 shadow-xl shadow-[#B51E2B]/20 hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </FadeInItem>
          </FadeInStagger>

          {/* Right Content - Images Carousel inside a sleek floating card */}
          <FadeIn direction="left" delay={0.2} className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(181,30,43,0.3)] transition-all duration-700 hover:-translate-y-2 group order-1 lg:order-2 border-4 border-white">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === activeImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
            
            {/* Dark gradient overlay for dots visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none"></div>

            {/* Carousel Navigation inside the card */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === activeImageIndex
                      ? 'bg-[#B51E2B] w-8'
                      : 'bg-white/60 w-2 hover:bg-white'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
