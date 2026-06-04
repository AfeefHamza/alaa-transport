'use client';

import { Phone } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [
    { src: '/images/alaa-cover-1.webp', title: 'Premium Travel Experience' },
    { src: '/images/alaa-cover-2.webp', title: 'Luxury & Comfort' },
    { src: '/images/alaa-cover-3.webp', title: 'Modern Fleet' },
    { src: '/images/alaa-cover-4.webp', title: 'Fleet Lineup' },
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
    <section className="relative w-screen h-screen overflow-hidden text-white antialiased">

      {/* Cinematic background carousel - full viewport */}
      <div className="absolute inset-0 -z-20">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1200 will-change-transform transform-gpu ${
              idx === activeImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              className="object-cover object-center filter contrast-105 brightness-95"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Cinematic vignettes + color grade */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent mix-blend-normal" />
          <div className="absolute -left-1/4 -top-1/4 w-[60vw] h-[60vh] bg-linear-to-br from-[#3b3b3b]/10 via-transparent to-[#bfa55a]/6 blur-3xl opacity-40 transform rotate-6" />
          <div className="absolute right-0 bottom-0 w-2/3 h-1/2 bg-linear-to-t  to-transparent opacity-80" />
        </div>
      </div>

      {/* Main content container - center-aligned */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="max-w-6xl w-full px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col items-center text-center gap-6 h-full py-24">

            <FadeInStagger delay={0.06} className="w-full">
              <FadeInItem className="space-y-4">
                {/* Small label */}
                <div className="text-sm tracking-widest text-white/80" style={{letterSpacing: '0.2em'}}>
                  RELIABLE • SAFE • PROFESSIONAL
                </div>

                {/* Headline */}
                <h1 className="font-serif font-medium text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]" style={{
                  fontFamily: 'Playfair Display, Cormorant Garamond, Bodoni Moda, Georgia, serif',
                  fontWeight: 500,
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 0.95
                }}>
                  Your Workforce.
                  <br />
                  Our Responsibility.
                </h1>

                {/* Subheading */}
                <p className="mx-auto text-[1.125rem] text-white/90 max-w-[650px]" style={{fontFamily: 'Inter, Manrope, system-ui, Arial, sans-serif', fontWeight: 400}}>
                  15 Years of Trusted Transport Excellence.
                  Reliable, safe, and professional passenger transport across Fujairah, Sharjah and Abu Dhabi.
                </p>
              </FadeInItem>

              {/* Floating stats card */}
              <FadeInItem>
                <div className="mt-8">
                  <div className="mx-auto w-fit bg-black/30 border border-white/8 backdrop-blur-md rounded-xl px-6 py-4 flex items-center gap-8 shadow-md">
                    <div className="text-center text-white">
                      <div className="text-xl font-bold">15+</div>
                      <div className="text-sm text-white/80">Years Experience</div>
                    </div>

                    <div className="h-8 w-px bg-white/8" />

                    <div className="text-center text-white">
                      <div className="text-xl font-bold">250K+</div>
                      <div className="text-sm text-white/80">Trips Completed</div>
                    </div>

                    <div className="h-8 w-px bg-white/8" />

                    <div className="text-center text-white">
                      <div className="text-xl font-bold">4.9</div>
                      <div className="text-sm text-white/80">Customer Rating</div>
                    </div>
                  </div>
                </div>
              </FadeInItem>
            </FadeInStagger>

          </div>
        </div>
      </div>
    </section>
  );
}