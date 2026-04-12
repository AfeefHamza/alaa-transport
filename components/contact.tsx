'use client';

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Get in Touch</h2>
          <p className="text-lg text-foreground/70">
            Ready to book your transport? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-black">Phone</h3>
            <p className="text-gray-600">Call us anytime for immediate assistance</p>
            <div className="space-y-2 pt-2">
              <a
                href="tel:+971559414300"
                className="text-black hover:text-primary transition-colors block font-medium"
              >
                +971 55 941 4300
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-secondary">Email</h3>
            <p className="text-foreground/70">Send us an email and we&apos;ll respond quickly</p>
            <div className="space-y-2 pt-2">
              <a
                href="mailto:info@alaa-transport.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                info@alaa-transport.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-black">Email</h3>
            <p className="text-gray-600">Send us an email and we&apos;ll respond quickly</p>
            <div className="space-y-2 pt-2">
              <a
                href="mailto:info@alaa-transport.com"
                className="text-black hover:text-primary transition-colors block font-medium"
              >
                info@alaa-transport.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 space-y-4 shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-secondary">Location</h3>
            <p className="text-foreground/70">Visit our office in Fujairah, UAE</p>
            <div className="space-y-2 pt-2">
              <p className="text-foreground/70">
                Fujairah, United Arab Emirates
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-border shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-foreground/40"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-foreground/40"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-foreground/40"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder-foreground/40"
                  required
                ></textarea>
              </div>

              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Quick Contact & Map */}
          <div className="space-y-6">
            {/* Quick CTA */}
            <div className="bg-white rounded-xl p-8 border border-border space-y-6 shadow-md">
              <h3 className="text-xl font-bold text-secondary">Quick Contact</h3>
              <a
                href="tel:+971559414300"
                className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>

              <a
                href="https://wa.me/971559414300"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:shadow-lg transition-all font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* Hours */}
            <div className="bg-muted rounded-xl p-8 border border-border shadow-md">
              <h3 className="text-lg font-bold text-secondary mb-4">Operating Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Monday - Friday</span>
                  <span className="font-medium text-foreground">6:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Saturday</span>
                  <span className="font-medium text-foreground">7:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/70">Sunday</span>
                  <span className="font-medium text-foreground">7:00 AM - 9:00 PM</span>
                </div>
                <p className="text-xs text-foreground/60 pt-4">
                  Available 24/7 for emergency bookings and services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
