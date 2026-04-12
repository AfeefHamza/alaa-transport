import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-secondary via-blue-900 to-secondary text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">ALAA Transport</h3>
            <p className="text-secondary-foreground/70">
              Your trusted partner for safe, reliable, and professional passenger transportation across UAE.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#fleet" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Staff Transport
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Airport Transfers
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Event Transport
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
                  Fleet Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+971559414300"
                  className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  +971 55 941 4300
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@alaa-transport.com"
                  className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
                >
                  info@alaa-transport.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/70">
                  Fujairah, United Arab Emirates
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/70">
            &copy; {currentYear} ALAA Transport. All rights reserved. &quot;We Get You There!&quot;
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
