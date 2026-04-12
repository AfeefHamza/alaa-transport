import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 order-2 md:order-1 shadow-2xl">
            <Image
              src="/images/about-fleet.jpg"
              alt="ALAA Transport fleet of buses"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">About ALAA Transport</h2>
              <p className="text-foreground/70 mb-4">
                Alaa Bus Passenger Transport is a trusted provider of passenger transportation services catering to companies, schools, and institutions.
              </p>
              <p className="text-foreground/70">
                We focus on safety, punctuality, and comfort to ensure seamless journeys for every passenger. Our professional team and well-maintained fleet set us apart in the transport industry.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                'Professional and trained drivers',
                'Modern, well-maintained fleet',
                'On-time reliability guaranteed',
                'Competitive and transparent pricing',
                '24/7 customer support',
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="btn-primary inline-flex"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
