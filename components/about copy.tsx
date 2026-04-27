import { CheckCircle2, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <FadeIn direction="right" delay={0.2} className="relative h-[550px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
            <Image
              src="/images/about-fleet.jpg"
              alt="ALAA Transport modern passenger fleet"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Elegant overlay */}
            <div className="absolute inset-0 border-8 border-white/20 rounded-3xl z-10 pointer-events-none"></div>
          </FadeIn>

          {/* Right Content */}
          <FadeInStagger delay={0.1} className="space-y-8">
            <FadeInItem>
              <h3 className="text-[#B51E2B] font-bold uppercase tracking-[0.2em] text-xs mb-4">
                About Alaa Transport
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a192f] leading-tight mb-6 font-heading">
                Setting the Standard in Passenger Transportation
              </h2>
              <div className="w-16 h-1 bg-[#B51E2B] rounded-full mb-8"></div>
              
              <div className="space-y-5 text-lg text-gray-600 font-sans leading-relaxed">
                <p>
                  ALAA Transport is your trusted partner for reliable transportation across Fujairah and the UAE. We specialize in providing safe, comfortable, and punctual transit solutions for corporate staff, schools, and large-scale industrial projects.
                </p>
                <p>
                  Our commitment goes beyond just moving people. We maintain a modern, rigorously inspected fleet and employ highly trained professional drivers to ensure that every journey with us is smooth, secure, and completely stress-free.
                </p>
              </div>
            </FadeInItem>

            {/* Elegant Features List */}
            <FadeInItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-4 border-t border-gray-100">
                {[
                  'Professional, trained drivers',
                  'Modern, maintained fleet',
                  'On-time reliability',
                  'Competitive pricing',
                  '24/7 customer support',
                  'Strict safety protocols'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#B51E2B] flex-shrink-0" />
                    <span className="text-[15px] font-bold text-[#0a192f]">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeInItem>

            {/* Contact CTA */}
            <FadeInItem>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 mt-4 bg-[#B51E2B] text-white rounded-xl font-bold hover:bg-[#0a192f] transition-all duration-300 shadow-lg shadow-[#B51E2B]/20 group"
              >
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
