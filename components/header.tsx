'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Logo } from './logo';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#fleet', label: 'Fleet' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+971559414300"
                className="btn-primary text-sm px-5 py-2 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/971559414300"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm px-5 py-2 flex items-center gap-2 text-primary"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="pb-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <a
                  href="tel:+971559414300"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all font-medium text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
                <a
                  href="https://wa.me/971559414300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-opacity-90 transition-all font-medium text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Sticky CTA Bar */}
      <div className="sticky bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border px-4 py-2 flex gap-2 shadow-lg">
        <a
          href="tel:+971559414300"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-opacity-90 transition-all font-medium text-sm"
        >
          <Phone className="w-4 h-4" />
          Call
        </a>
        <a
          href="https://wa.me/971559414300"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-opacity-90 transition-all font-medium text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </>
  );
}
