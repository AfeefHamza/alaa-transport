export function Clients() {
  const clientLogos = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Trusted by Leading Companies</h2>
          <p className="text-lg text-foreground/70">
            Serving top companies, institutions, and schools across Fujairah and UAE
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
          {clientLogos.map((idx) => (
            <div
              key={idx}
              className="h-24 md:h-28 bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-lg flex items-center justify-center hover:border-primary transition-all shadow-md hover:shadow-xl"
            >
              <div className="text-center space-y-1">
                <div className="text-3xl font-bold text-primary">C{idx}</div>
                <p className="text-xs text-foreground/50">Client</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="bg-muted rounded-xl p-8 md:p-12 text-center space-y-4 shadow-lg">
            <p className="text-lg text-foreground/70 italic max-w-2xl mx-auto leading-relaxed">
              &quot;ALAA Transport has been an excellent partner for our company&apos;s staff transportation needs. Their professionalism, punctuality, and attention to safety make them stand out.&quot;
            </p>
            <p className="text-secondary font-semibold">— Company Representative</p>
          </div>
        </div>
      </div>
    </section>
  );
}
