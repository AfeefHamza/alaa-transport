import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function Mission() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Mission */}
          <FadeIn direction="right" className="space-y-6">
            <div className="group inline-block">
              <h2 className="text-heading-xl text-secondary animated-underline mb-4">Our Mission</h2>
            </div>
            <p className="text-body-lg text-foreground/70 leading-relaxed font-sans mt-4">
              To provide safe, reliable, and affordable passenger transportation services that exceed customer expectations while maintaining the highest standards of safety, professionalism, and service excellence.
            </p>
            <div className="pt-6 pl-6 border-l-4 border-primary bg-primary/5 rounded-r-xl p-4">
              <p className="text-secondary font-bold italic font-sans">
                We are committed to delivering exceptional service on every journey.
              </p>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn direction="left" delay={0.2} className="space-y-6">
            <div className="group inline-block">
              <h2 className="text-heading-xl text-secondary animated-underline mb-4">Our Vision</h2>
            </div>
            <p className="text-body-lg text-foreground/70 leading-relaxed font-sans mt-4">
              To be the first choice for safe and reliable passenger transport, setting industry standards through exceptional service, professional drivers, and modern fleet management.
            </p>
            <div className="pt-6 pl-6 border-l-4 border-primary bg-primary/5 rounded-r-xl p-4">
              <p className="text-secondary font-bold italic font-sans">
                Every journey matters. We ensure safety, comfort, and reliability on every trip.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Why Choose Us Header */}
        <FadeIn className="text-center mt-24 mb-12 space-y-6">
          <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <p className="text-primary text-sm font-extrabold uppercase tracking-widest font-sans">Why Choose Us</p>
          </div>
        </FadeIn>

        {/* Values Grid */}
        <FadeInStagger delay={0.4} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'Safety', icon: '🛡️' },
            { title: 'Reliability', icon: '⏰' },
            { title: 'Comfort', icon: '☁️' },
            { title: 'Professionalism', icon: '🎯' },
          ].map((value, idx) => (
            <FadeInItem key={idx} direction="up">
              <div className="text-center space-y-4 p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="text-5xl">{value.icon}</div>
                <h3 className="font-extrabold text-xl text-secondary font-heading">{value.title}</h3>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
