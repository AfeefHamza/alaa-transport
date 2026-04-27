import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <FadeIn direction="right" delay={0.2} className="relative h-[500px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 order-2 md:order-1 shadow-2xl group">
            <Image
              src="/images/about-fleet.jpg"
              alt="ALAA Transport modern passenger fleet for staff and school transportation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </FadeIn>

          {/* Right Content */}
          <FadeInStagger delay={0.1} className="space-y-8 order-1 md:order-2">
            <FadeInItem>
              <div className="group inline-block">
                <h2 className="text-heading-xl text-secondary mb-6 animated-underline">About ALAA Transport</h2>
              </div>
              <p className="text-body-lg text-foreground/70 mb-4">
                Alaa Bus Passenger Transport is a trusted provider of passenger transportation services catering to companies, schools, and institutions.
              </p>
              <p className="text-body-lg text-foreground/70">
                We focus on safety, punctuality, and comfort to ensure seamless journeys for every passenger. Our professional team and well-maintained fleet set us apart in the transport industry.
              </p>
            </FadeInItem>

            {/* Features List */}
            <FadeInItem>
              <div className="space-y-4 pt-4">
                {[
                  'Professional and trained drivers',
                  'Modern, well-maintained fleet',
                  'On-time reliability guaranteed',
                  'Competitive and transparent pricing',
                  '24/7 customer support',
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-bold text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </FadeInItem>

            {/* Contact CTA */}
            <FadeInItem>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-8 py-3 mt-6 bg-[#B51E2B] text-white rounded-md font-bold font-sans hover:bg-black transition-all duration-300 shadow-xl shadow-[#B51E2B]/20   w-max"
              >
                Learn More
                <div className="w-0 group-hover:w-4 transition-all" />
              </a>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
