'use client';

import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-50  border-gray-100 text-secondary overflow-hidden pt-8 pb-4 mt-8">
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
              ALAA Transport is your trusted partner for reliable passenger transportation across Fujairah,Sharjah and Abu Dhabi.
            </p>
            <div className="flex gap-3 pt-1">
              <a href="https://www.facebook.com/share/1BcRxWHo5i/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center hover:bg-primary transition-colors hover:text-white group">
                <Facebook className="w-3.5 h-3.5 text-secondary group-hover:text-white" />
              </a>
              <a href="https://www.instagram.com/alaatransport.ae?igsh=MXZtcnptaDVjN2tiOQ==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center hover:bg-primary transition-colors hover:text-white group">
                <Instagram className="w-3.5 h-3.5 text-secondary group-hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/company/alaagroup/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary/5 flex items-center justify-center hover:bg-primary transition-colors hover:text-white group">
                <Linkedin className="w-3.5 h-3.5 text-secondary group-hover:text-white" />
              </a>
            </div>
          </FadeInItem>

          {/* Quick Links */}
          <FadeInItem className="flex flex-col items-center">
            <h4 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4 text-center">Quick Links</h4>
            <nav aria-label="Footer Navigation" className="w-full">
              <ul className="space-y-2 font-sans text-[13px] font-medium text-center">
                {['About', 'Services', 'Careers', 'Contact'].map((item, idx) => (
                  <li key={idx}>
                    <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeInItem>

          {/* Services Column */}
          <FadeInItem className="flex flex-col items-center">
            <h4 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4 text-center">Our Services</h4>
            <ul className="space-y-2 font-sans text-[13px] font-medium text-center">
              <li><span className="text-gray-500 italic">Passenger Transport</span></li>
              <li><span className="text-gray-500 italic">Bus/Van Rental</span></li>
              <li><span className="text-gray-500 italic">School Transport</span></li>
              <li><span className="text-gray-500 italic">Utility & Material Transport</span></li>
              <li><span className="text-gray-500 italic">Heavy Equipment Rental</span></li>
              <li><span className="text-gray-500 italic">Heavy Duty Garage</span></li>

            </ul>
          </FadeInItem>

          {/* Contact Details */}
          <FadeInItem className="flex flex-col items-center">
            <h4 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4 text-center">Contact Info</h4>
            <ul className="space-y-3 font-sans text-[13px] text-center w-full">
              <li className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+971522194186" className="text-secondary  hover:text-primary transition-colors">
                  +971 52 219 4186
                </a>
              </li>
              <li className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:alaa.passtransport@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                  alaa.passtransport@gmail.com
                </a>
              </li>
              <li className="flex items-start justify-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-600 text-[13px] leading-tight max-w-[180px] text-center">
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
