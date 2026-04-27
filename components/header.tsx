'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './logo';
import { WhatsAppIcon } from './whatsapp-icon';
import { motion } from 'framer-motion';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#careers', label: 'Careers' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dynamic Floating Pill Nav */}
          <div className="flex justify-between items-center transition-all duration-700 rounded-full px-6 border h-16 bg-white/90 backdrop-blur-xl border-white/40 shadow-xl shadow-primary/5">
            
            {/* Logo */}
            <div className="flex items-center transition-all duration-700 origin-left pl-2 scale-100">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-all duration-500 font-bold font-sans tracking-wide uppercase text-sm relative group text-secondary"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/971522194186"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-gray-50 rounded-full hover:bg-[#25D366]/10 transition-colors"
                aria-label="Contact us on WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="tel:+971559414300"
                className="px-6 py-3 bg-secondary text-white rounded-full font-bold font-sans text-sm hover:bg-black transition-all hover:shadow-lg flex items-center gap-2 group"
                aria-label="Call ALAA Transport"
              >
                <Phone className="w-4 h-4 group-hover:animate-bounce" />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-3 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-secondary" />
              ) : (
                <Menu className="w-6 h-6 text-secondary" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-xl md:hidden"
            >
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-secondary hover:bg-gray-50 hover:text-primary rounded-xl transition-colors font-bold uppercase tracking-wider"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <a
                    href="tel:+971522194186"
                    className="flex justify-center items-center gap-3 px-4 py-3 bg-secondary text-white rounded-xl font-bold"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/971559414300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-3 px-4 py-3 bg-[#25D366] text-white rounded-xl font-bold"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
}
