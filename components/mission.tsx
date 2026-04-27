import { FadeIn, FadeInStagger, FadeInItem } from './ui/fade-in';

export function Mission() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          {/* Mission */}
          <FadeIn direction="right" className="h-full flex flex-col">
            <div className="group inline-block mb-4">
              <h2 className="text-heading-xl text-secondary animated-underline">Our Mission</h2>
            </div>
            <p className="text-body-lg text-foreground/70 leading-relaxed font-sans mb-8">
              To provide safe, reliable, and affordable passenger transportation services that exceed customer expectations while maintaining the highest standards of safety, professionalism, and service excellence.
            </p>
            <div className="mt-auto flex-1 border-l-4 border-primary bg-primary/5 rounded-r-xl p-6 md:p-8 flex items-center">
              <p className="text-secondary font-bold italic font-sans text-lg">
                We are committed to delivering exceptional service on every journey.
              </p>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn direction="left" delay={0.2} className="h-full flex flex-col">
            <div className="group inline-block mb-4">
              <h2 className="text-heading-xl text-secondary animated-underline">Our Vision</h2>
            </div>
            <p className="text-body-lg text-foreground/70 leading-relaxed font-sans mb-8">
              To be the first choice for safe and reliable passenger transport, setting industry standards through exceptional service, professional drivers, and modern fleet management.
            </p>
            <div className="mt-auto flex-1 border-l-4 border-primary bg-primary/5 rounded-r-xl p-6 md:p-8 flex items-center">
              <p className="text-secondary font-bold italic font-sans text-lg">
                Every journey matters. We ensure safety, comfort, and reliability on every trip.
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
