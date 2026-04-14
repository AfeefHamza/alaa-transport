'use client';

import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50 border-t border-gray-100 text-secondary overflow-hidden pt-8 pb-4 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeInStagger delay={0.1} className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-center md:text-left">
          
          {/* Brand Info - Integrated Logo */}
          <FadeInItem className="space-y-4 flex flex-col items-center md:items-start col-span-1 md:col-span-1 border-b md:border-b-0 pb-6 md:pb-0">
            <div className="w-32 h-12 relative mb-2">
              <img 
                src="/images/logos/ALAA Logo Reworked NO BG.png" 
                alt="ALAA Transport" 
                className="w-full h-full object-contain object-left"
              />
            </div>
            <p className="text-gray-500 font-sans text-[13px] leading-relaxed max-w-xs">
              ALAA Transport is your trusted partner for reliable passenger transportation across the UAE.
            </p>
            <div className="flex gap-3 pt-1">
              <a href="#" className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center hover:bg-primary transition-colors hover:text-white group">
                <Facebook className="w-3.5 h-3.5 text-secondary group-hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center hover:bg-primary transition-colors hover:text-white group">
                <Linkedin className="w-3.5 h-3.5 text-secondary group-hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center hover:bg-primary transition-colors hover:text-white group">
                <Twitter className="w-3.5 h-3.5 text-secondary group-hover:text-white" />
              </a>
            </div>
          </FadeInItem>

          {/* Quick Links */}
          <FadeInItem className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Quick Links</h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2 font-sans text-[13px] font-medium">
                {['About', 'Services', 'Fleet', 'Contact'].map((item, idx) => (
                  <li key={idx}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeInItem>

          {/* Services Column - Added to fill width and reduce height by spreading out */}
          <FadeInItem className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Our Services</h4>
            <ul className="space-y-2 font-sans text-[13px] font-medium">
              <li><span className="text-gray-500 italic">Staff Transport</span></li>
              <li><span className="text-gray-500 italic">Bus Rental</span></li>
              <li><span className="text-gray-500 italic">Luxury Travel</span></li>
            </ul>
          </FadeInItem>

          {/* Contact Details */}
          <FadeInItem className="flex flex-col items-center md:items-start">
            <h4 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">Contact Info</h4>
            <ul className="space-y-3 font-sans text-[13px]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+971559414300" className="text-secondary font-bold hover:text-primary transition-colors">
                  +971 55 941 4300
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@alaa-transport.com" className="text-gray-600 hover:text-primary transition-colors">
                  info@alaa-transport.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-600 text-[13px] leading-tight max-w-[180px]">
                  Fujairah, UAE
                </span>
              </li>
            </ul>
          </FadeInItem>
        </FadeInStagger>

        {/* Bottom Bar - Extremely Tight */}
        <FadeIn delay={0.4} className="flex flex-col md:flex-row justify-between items-center gap-2 pt-4 border-t border-gray-200">
          <p className="text-[11px] font-sans text-gray-400">
            &copy; {currentYear} ALAA Transport. All reserved.
          </p>
          <p className="text-[11px] font-sans text-gray-400 tracking-wider uppercase">
            Designed for Excellence
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
