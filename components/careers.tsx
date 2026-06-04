import { FadeIn } from './ui/fade-in';
import { Linkedin, Mail } from 'lucide-react';

export function Careers() {
  return (
    <section id="careers" className="relative py-24 md:py-32 bg-[#F4F5F7] overflow-hidden">
      {/* Subtle Background Gradient simulating depth */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-200/70 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          {/* Headline */}
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="relative inline-block mb-2">
              {/* Slanted red accent mimicking the reference */}
              <div className="absolute inset-0 bg-[#B51E2B] transform -skew-x-[18deg] scale-x-110 scale-y-125 z-0"></div>
              <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading px-6 py-1 tracking-wider uppercase">
                Life
              </h2>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a192f] font-heading tracking-wide mt-2 uppercase">
              At A<span className="text-[#B51E2B] scale-110 mx-0.5">L</span>aa Transport
            </h2>
          </div>

          {/* Body Content */}
          <div className="space-y-6 text-base md:text-[1.1rem] text-gray-600 font-sans leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            <p>
              Life at ALAA Transport is built on teamwork, respect, and a strong commitment to delivering safe and reliable transport services across the UAE. We value dedicated and passionate individuals who are ready to grow with us in a professional and supportive environment where every role matters and contributes to our success.
            </p>
            <p>
              If you are interested in joining our team, we welcome you to get in touch with us via email at{' '}
              <a
                href="mailto:Hr@alaatransport.com"
                className="text-[#B51E2B] font-semibold hover:text-[#0a192f] transition-colors"
              >
                Hr@alaatransport.com
              </a>
              {' '}or through the contact link below. We also encourage you to follow and check our LinkedIn page regularly for the latest job openings and career updates at ALAA Transport.
            </p>
          </div>

          {/* Contact Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:Hr@alaatransport.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a192f] font-bold rounded-md shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-sans border border-gray-100 group"
            >
              <Mail className="w-5 h-5 text-[#B51E2B]" />
              Contact Us
            </a>
            <a
              href="https://www.linkedin.com/company/alaagroup/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0a192f] text-white font-bold rounded-md shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-sans group"
            >
              <Linkedin className="w-5 h-5 text-white" />
              LinkedIn
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
