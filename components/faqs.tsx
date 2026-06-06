'use client';

import { useState } from 'react';
import { FadeIn } from './ui/fade-in';

const faqs = [
  {
    question: 'What types of passenger transport vehicles are available in your fleet?',
    answer:
      'Alaa Transport Fujairah operates a diverse fleet to meet different passenger transportation requirements across the UAE. Our fleet includes 8-seater vans, 15-seater vans, 30-seater coaster buses, 50-seater premium buses, and 60-seater buses, making us capable of serving everything from small group transfers to large-scale staff transportation projects.',
  },
  {
    question: 'How quickly can you mobilize vehicles for a new project?',
    answer:
      'Depending on the fleet requirement and project location, we can often mobilize vehicles within a short period. Our operations team works closely with clients to ensure timely deployment, documentation, permits, and driver allocation.',
  },
  {
    question: 'Do you offer transportation services across all Emirates?',
    answer:
      'Yes. We operate throughout the UAE, including Fujairah, Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Umm Al Quwain, and Khor Fakkan. Inter-emirate transportation services can also be arranged based on operational requirements. But we are based in Fujairah, Sharjah and Abu Dhabi.',
  },
  {
    question: 'Why should I choose Alaa Transport over other transport companies?',
    answer:
      'Clients choose us because of our reliable fleet, experienced drivers, responsive operations team, competitive pricing, strong safety focus, and ability to provide both passenger transportation and heavy equipment logistics under one service provider. We understand the operational demands of UAE businesses and projects.',
  },
  {
    question: 'How are you able to offer affordable transportation services without compromising quality?',
    answer:
      'Our extensive fleet, efficient route planning, and long-term partnerships across the UAE allow us to operate at scale and reduce costs. This enables us to offer competitive rates while maintaining high standards of safety, reliability, and service quality.',
  },
  {
    question: 'Do you provide buses with CISPA passes and Fujairah Port entry permits for oil & gas projects?',
    answer:
      'Yes. We provide buses and transportation solutions for oil & gas, industrial, and marine-sector projects that require CISPA-approved access. We can also coordinate the necessary vehicle and driver documentation required for entry permits at Fujairah Port and other restricted project locations, subject to client and authority requirements.',
  },
];

export function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-linear-to-br from-[#f8fbff] via-white to-[#eff7ff] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/80 mb-3">Frequently Asked Questions</p>
          <h2 className="text-heading-xl font-bold text-secondary leading-tight">
            Answers that help you choose Alaa Transport with confidence.
          </h2>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`relative overflow-hidden rounded-[1.75rem] border bg-white shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-all duration-300 ${
                  isOpen ? 'border-primary/20 bg-linear-to-r from-white via-slate-50 to-white shadow-[0_30px_70px_rgba(59,130,246,0.16)]' : 'border-slate-200'
                }`}
              >
                {isOpen && <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-primary/70" />}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className={`group flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-300 ${
                    isOpen ? 'bg-slate-50' : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="min-w-0">
                    <h3 className={`text-lg font-semibold leading-snug ${isOpen ? 'text-secondary' : 'text-slate-900'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition duration-300 ${
                      isOpen
                        ? 'rotate-180 border-primary/20 bg-primary/10 text-primary shadow-sm'
                        : 'border-slate-200 bg-slate-50 text-slate-600 group-hover:border-primary/20 group-hover:bg-primary/10 group-hover:text-primary'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 transition-transform duration-300">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-200 px-6 pb-6 pt-0' : 'max-h-0 px-6 pb-0'}`}>
                  <p className="text-body-md text-slate-600 leading-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
