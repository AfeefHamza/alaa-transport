export function Mission() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our Mission</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              To provide safe, reliable, and affordable passenger transportation services that exceed customer expectations while maintaining the highest standards of safety, professionalism, and service excellence.
            </p>
            <div className="pt-4 pl-4 border-l-4 border-primary">
              <p className="text-foreground/60 italic">
                We are committed to delivering exceptional service on every journey.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Our Vision</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              To be the first choice for safe and reliable passenger transport, setting industry standards through exceptional service, professional drivers, and modern fleet management.
            </p>
            <div className="pt-4 pl-4 border-l-4 border-primary">
              <p className="text-foreground/60 italic">
                Every journey matters. We ensure safety, comfort, and reliability on every trip.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 pt-12 border-t border-border">
          {[
            { title: 'Safety', icon: '🛡️' },
            { title: 'Reliability', icon: '⏰' },
            { title: 'Comfort', icon: '☁️' },
            { title: 'Professionalism', icon: '🎯' },
          ].map((value, idx) => (
            <div key={idx} className="text-center space-y-2">
              <div className="text-4xl">{value.icon}</div>
              <h3 className="font-bold text-lg text-secondary">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
