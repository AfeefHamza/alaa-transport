'use client';

import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [
    { src: '/images/hero-dramatic-bus.jpg', title: 'Premium Travel Experience' },
    { src: '/images/bus-interior-luxury.jpg', title: 'Luxury & Comfort' },
    { src: '/images/happy-passengers.jpg', title: 'Customer Satisfaction' },
    { src: '/images/fleet-lineup-dramatic.jpg', title: 'Modern Fleet' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background images carousel */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === activeImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Dramatic overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Animated badge */}
            <div className="inline-block">
              <div className="px-4 py-2 bg-primary/20 backdrop-blur-md border border-primary/40 rounded-full animate-pulse">
                <p className="text-primary text-sm font-semibold">Trusted Transport Partner</p>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-display-lg md:text-display-xl text-secondary leading-tight">
                Journey in <span className="text-primary font-heading">Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-secondary/60 font-light leading-relaxed max-w-xl">
                Experience premium passenger transport with style, safety, and unmatched comfort across Fujairah and UAE.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['Safety First', '24/7 Support', 'Premium Fleet'].map((feature) => (
                <div
                  key={feature}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 cursor-default"
                >
                  <span className="text-white text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="tel:+971559414300"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/971559414300"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/20">
              {[
                { value: '15k+', label: 'Happy Passengers' },
                { value: '100+', label: 'Modern Vehicles' },
                { value: '24/7', label: 'Always Available' },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-2 hover:scale-110 transition-transform duration-300">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                  <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image carousel indicator and extras */}
          <div className="hidden lg:flex flex-col items-end justify-between h-full z-10">
            {/* Image counter */}
            <div className="flex flex-col items-end space-y-6">
              <div className="text-right">
                <p className="text-6xl font-bold text-white/20 leading-none">
                  {String(activeImageIndex + 1).padStart(2, '0')}
                </p>
              </div>
              
              {/* Image title */}
              <div className="text-right space-y-2">
                <h3 className="text-2xl font-bold text-white">{images[activeImageIndex].title}</h3>
                <p className="text-gray-300 text-sm">Swapping every 5 seconds</p>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeImageIndex
                      ? 'bg-primary w-8'
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/60 text-sm font-medium">Scroll to explore</p>
          <svg
            className="w-5 h-5 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
