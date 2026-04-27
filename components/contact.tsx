'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';
import { WhatsAppIcon } from './whatsapp-icon';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID || "xjkgnbqe");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        // Optional: you can reset the form state if you want them to be able to submit again without reloading
      }, 3000);
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2  rounded-bl-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3  rounded-tr-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
          <div className="group inline-block">
            <h2 className="text-heading-xl text-secondary mb-4 animated-underline">Get in Touch</h2>
          </div>
          <p className="text-body-lg text-foreground/70 mt-6 font-sans">
            Ready to book your premium transport? Reach out today and let us handle your journey with excellence.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-stretch lg:max-w-6xl mx-auto">
          
          {/* Left Column: Contact Information */}
          <FadeInStagger delay={0.1} className="lg:col-span-4 h-full">
            <FadeInItem className="h-full">
              <div className="bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-xl shadow-primary/5 h-full flex flex-col">
                <div>
                  <h3 className="text-2xl font-bold mb-6 font-heading text-secondary">Contact Info</h3>
                  <div className="space-y-6">
                  {/* Sleek Contact Item */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 group-hover:bg-primary/10 rounded-xl flex items-center justify-center transition-colors shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm text-gray-500 font-sans mb-1">Call Us Anytime</p>
                      <a href="tel:+971522194186" className="text-lg font-bold text-secondary hover:text-primary transition-colors block">
                        +971 52 219 4186
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 group-hover:bg-primary/10 rounded-xl flex items-center justify-center transition-colors shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm text-gray-500 font-sans mb-1">Send an Email</p>
                      <a href="mailto:alaa.passtransport@gmail.com" className="text-[15px] sm:text-lg font-bold text-secondary hover:text-primary transition-colors block break-all sm:break-normal">
                        alaa.passtransport@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gray-50 group-hover:bg-primary/10 rounded-xl flex items-center justify-center transition-colors shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-sm text-gray-500 font-sans mb-1">Our Location</p>
                      <p className="text-lg font-bold text-secondary">
                        Fujairah, UAE
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6">
                  <hr className="mb-6 border-gray-100" />
                  <h4 className="text-lg font-bold mb-4 font-heading flex justify-center items-center">Quick Support</h4>
                  <a
                    href="https://wa.me/971522194186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366] text-white rounded-xl hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 transition-all font-bold font-sans"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </FadeInItem>
            

          </FadeInStagger>

          {/* Right Column: Form */}
          <FadeIn delay={0.3} direction="left" className="lg:col-span-6 h-full">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-2xl shadow-black/5 h-full">
              <h3 className="text-2xl font-bold mb-6 font-heading text-secondary">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-sm font-bold text-secondary font-sans uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-sans text-secondary placeholder-gray-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-secondary font-sans uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-sans text-secondary placeholder-gray-400"
                      required
                    />
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-bold text-secondary font-sans uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 50 123 4567"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-sans text-secondary placeholder-gray-400"
                    required
                  />
                  <ValidationError 
                    prefix="Phone" 
                    field="phone"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-secondary font-sans uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your transport requirements..."
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-sans text-secondary placeholder-gray-400 resize-none"
                    required
                  ></textarea>
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {state.succeeded && (
                  <FadeIn direction="up">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 font-sans font-bold flex items-center gap-3 mt-4">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Your message has been sent. We’ll contact you soon.
                    </div>
                  </FadeIn>
                )}

                <button
                  type="submit"
                  disabled={state.submitting || state.succeeded}
                  className="w-full px-8 py-4 bg-secondary text-white rounded-xl hover:bg-black hover:shadow-2xl hover:-translate-y-1 transition-all font-extrabold font-sans text-lg mt-4 flex items-center justify-center gap-3 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                  {!state.submitting && <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
