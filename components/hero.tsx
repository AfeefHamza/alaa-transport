'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FadeInStagger, FadeInItem } from './ui/fade-in';

export function Hero() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [
    {
      src: '/images/alaa-cover-1.webp',
      title: 'Premium Travel Experience',
    },
    {
      src: '/images/alaa-cover-2.webp',
      title: 'Luxury & Comfort',
    },
    {
      src: '/images/alaa-cover-3.webp',
      title: 'Modern Fleet',
    },
    {
      src: '/images/alaa-cover-4.webp',
      title: 'Fleet Lineup',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
      <div
        className="
          relative
          overflow-hidden

          rounded-[28px]
          sm:rounded-[32px]
          lg:rounded-[40px]

          min-h-[calc(100svh-24px)]
          sm:min-h-[calc(100svh-32px)]

          bg-black
          text-white
          antialiased

          border border-white/10
          shadow-[0_25px_80px_rgba(0,0,0,0.35)]
        "
      >
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 transform-gpu ${idx === activeImageIndex
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105'
                }`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="
                  object-cover
                  object-center
                  sm:object-[30%_center]
                  contrast-105
                  brightness-95
                "
              />
            </div>
          ))}

          {/* Overlays */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>

        {/* Subtle frame effect */}
        <div className="absolute inset-0 rounded-[inherit] ring-1 ring-white/10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 flex min-h-[calc(100svh-24px)] items-center justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col items-center justify-center text-center pt-28 pb-16 sm:pt-32 sm:pb-24">
              <FadeInStagger delay={0.06} className="w-full">
                <FadeInItem className="space-y-5">
                  {/* Label */}
                  <div className="text-[10px] sm:text-sm tracking-[0.22em] text-white/85 uppercase">
                    Reliable • Safe • Professional
                  </div>

                  {/* Heading */}
                  <h1
                    className="font-serif text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.7)]"
                    style={{
                      fontFamily:
                        'Playfair Display, Cormorant Garamond, Bodoni Moda, Georgia, serif',
                      fontWeight: 500,
                      fontSize: 'clamp(2.4rem, 8vw, 5.5rem)',
                      lineHeight: 0.95,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    Your Workforce.
                    <span className="hidden sm:inline">
                      <br />
                    </span>{' '}
                    Our Responsibility.
                  </h1>

                  {/* Description */}
                  <p
                    className="
                      mx-auto
                      max-w-[680px]
                      px-2
                      text-sm
                      sm:text-base
                      lg:text-lg
                      leading-relaxed
                      text-white/90
                    "
                    style={{
                      fontFamily:
                        'Inter, Manrope, system-ui, Arial, sans-serif',
                    }}
                  >
                    15 Years of Trusted Transport Excellence. Reliable, safe,
                    and professional passenger transport across Fujairah,
                    Sharjah and Abu Dhabi.
                  </p>
                </FadeInItem>

                {/* Stats Card */}
                <FadeInItem>
                  <div className="mt-8">
                    <div
                      className="
                        mx-auto
                        w-full
                        max-w-[340px]

                        rounded-2xl
                        border border-white/10
                        bg-black/40
                        backdrop-blur-md

                        px-4
                        py-4

                        grid
                        grid-cols-3
                        gap-2

                        sm:flex
                        sm:w-fit
                        sm:max-w-none
                        sm:items-center
                        sm:gap-8
                        sm:px-6
                      "
                    >
                      <div className="text-center">
                        <div className="text-lg sm:text-xl font-bold">
                          15+
                        </div>
                        <div className="text-[10px] sm:text-sm text-white/80">
                          Years Experience
                        </div>
                      </div>

                      <div className="hidden sm:block h-8 w-px bg-white/10" />

                      <div className="text-center">
                        <div className="text-lg sm:text-xl font-bold">
                          250K+
                        </div>
                        <div className="text-[10px] sm:text-sm text-white/80">
                          Trips Completed
                        </div>
                      </div>

                      <div className="hidden sm:block h-8 w-px bg-white/10" />

                      <div className="text-center">
                        <div className="text-lg sm:text-xl font-bold">
                          4.9
                        </div>
                        <div className="text-[10px] sm:text-sm text-white/80">
                          Customer Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInItem>
              </FadeInStagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}