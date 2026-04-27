import { CheckCircle2, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white overflow-hidden relative">
      {/* Decorative Background for desktop */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F4F5F7] rounded-bl-[100px] -z-10 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image Collage (Desktop) */}
          <FadeIn direction="right" delay={0.2} className="relative h-[650px] w-full hidden md:block">
            {/* Main Image */}
            <div className="absolute top-0 left-0 w-[80%] h-[450px] rounded-[2rem] overflow-hidden shadow-2xl z-10 group">
              <Image
                src="/images/about-fleet.jpg"
                alt="ALAA Transport modern passenger fleet"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Secondary Image Overlapping */}
            <div className="absolute bottom-4 right-0 w-[65%] h-[350px] rounded-[2rem] overflow-hidden shadow-2xl z-20 group border-[12px] border-white">
              <Image
                src="/images/happy-passengers.jpg"
                alt="Happy passengers"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-[45%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-30 bg-[#B51E2B] text-white p-8 rounded-[2rem] shadow-2xl shadow-[#B51E2B]/40 flex flex-col items-center justify-center transform hover:scale-110 transition-transform duration-500 border-4 border-white">
              <span className="text-5xl font-extrabold font-heading">15+</span>
              <span className="text-xs font-bold uppercase tracking-widest mt-2">Years Exp.</span>
            </div>
          </FadeIn>

          {/* Mobile Image Fallback */}
          <FadeIn className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl md:hidden">
            <Image
              src="/images/about-fleet.jpg"
              alt="ALAA Transport"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </FadeIn>

          {/* Right Content */}
          <FadeInStagger delay={0.1} className="space-y-8">
            <FadeInItem>
              <h3 className="text-[#B51E2B] font-bold uppercase tracking-widest text-sm mb-4 font-sans flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#B51E2B]"></span>
                About Alaa Transport
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#0a192f] font-heading leading-[1.15] mb-6 uppercase">
                Driving Excellence in <br/>
                <span className="text-[#B51E2B]">Transportation</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-700 font-sans leading-relaxed mb-4 font-medium">
                Alaa Bus Passenger Transport is a trusted provider of premium transportation services catering to companies, schools, and institutions across the UAE.
              </p>
              <p className="text-base text-gray-500 font-sans leading-relaxed">
                We focus on safety, punctuality, and comfort to ensure seamless journeys for every passenger. Our professional team and state-of-the-art fleet set us apart as the industry leader in reliability and service quality.
              </p>
            </FadeInItem>

            {/* Features Grid */}
            <FadeInItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-100 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#B51E2B]/10 flex items-center justify-center flex-shrink-0 group hover:bg-[#B51E2B] transition-colors duration-300">
                    <ShieldCheck className="w-7 h-7 text-[#B51E2B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-[#0a192f] font-extrabold text-lg mb-1 font-heading uppercase">Safety First</h4>
                    <p className="text-sm text-gray-500 font-medium">Rigorous safety standards and maintained vehicles.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#B51E2B]/10 flex items-center justify-center flex-shrink-0 group hover:bg-[#B51E2B] transition-colors duration-300">
                    <Clock className="w-7 h-7 text-[#B51E2B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-[#0a192f] font-extrabold text-lg mb-1 font-heading uppercase">Punctuality</h4>
                    <p className="text-sm text-gray-500 font-medium">Always on time, reliable schedules you can trust.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#B51E2B]/10 flex items-center justify-center flex-shrink-0 group hover:bg-[#B51E2B] transition-colors duration-300">
                    <Users className="w-7 h-7 text-[#B51E2B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-[#0a192f] font-extrabold text-lg mb-1 font-heading uppercase">Expert Drivers</h4>
                    <p className="text-sm text-gray-500 font-medium">Highly trained, professional, and courteous staff.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#B51E2B]/10 flex items-center justify-center flex-shrink-0 group hover:bg-[#B51E2B] transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-[#B51E2B] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-[#0a192f] font-extrabold text-lg mb-1 font-heading uppercase">24/7 Support</h4>
                    <p className="text-sm text-gray-500 font-medium">Round-the-clock assistance for your needs.</p>
                  </div>
                </div>
              </div>
            </FadeInItem>

            {/* Contact CTA */}
            <FadeInItem>
              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#B51E2B] text-white rounded-xl font-bold font-sans hover:bg-[#0a192f] hover:-translate-y-1 transition-all duration-500 shadow-xl shadow-[#B51E2B]/20 group uppercase tracking-widest text-sm"
                >
                  Discover More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </div>
    </section>
  );
}
