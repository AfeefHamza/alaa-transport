import { FadeIn } from './ui/fade-in';
import { Mail } from 'lucide-react';

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
              Alaa Transport offers an environment where every employee can thrive and reach their professional potential. Nothing is more important to us than ensuring every employee feels valued and respected in their roles, and able to progress in their career through training, mentorship, and educational opportunities.
            </p>
            <p>
              With a wide range of attractive employee benefits and competitive salaries, we have created a workplace defined by its culture and made by its people. If you have a passion for transportation, logistics, and heavy equipment, and want to work on some of the region's most exciting projects, find your next challenge with us.
            </p>
          </div>

          {/* Contact Button */}
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#0a192f] font-bold rounded-md shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-sans border border-gray-100 group"
          >
            <Mail className="w-5 h-5 text-[#B51E2B]" />
            Contact Us
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
