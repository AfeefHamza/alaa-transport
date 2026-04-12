const vehicles = [
  { name: 'Coaster Buses', capacity: '30-50 passengers' },
  { name: 'Luxury Coaches', capacity: '45-55 passengers' },
  { name: 'Minibuses', capacity: '15-20 passengers' },
  { name: 'Sedans', capacity: '4-5 passengers' },
  { name: 'SUVs', capacity: '6-8 passengers' },
  { name: 'Vans', capacity: '8-15 passengers' },
  { name: 'Executive Coaches', capacity: '35-45 passengers' },
  { name: 'School Buses', capacity: '40-60 passengers' },
];

export function Fleet() {
  return (
    <section id="fleet" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Fleet</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Diverse range of well-maintained vehicles for every transport need
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, idx) => (
            <div
              key={idx}
              className="relative group rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:border-primary transition-all shadow-md hover:shadow-lg"
            >
              {/* Vehicle Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-primary/0 group-hover:from-white/10 group-hover:to-primary/5 transition-all"></div>
                <div className="relative text-center">
                  <div className="text-6xl mb-2">🚌</div>
                  <p className="text-sm font-semibold text-foreground/60">{vehicle.name}</p>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="p-4 space-y-2 border-t border-border">
                <p className="text-sm font-medium text-foreground">Capacity:</p>
                <p className="text-sm text-foreground/70">{vehicle.capacity}</p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Fleet Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-border">
          {[
            {
              title: 'Well-Maintained',
              description: 'All vehicles undergo regular maintenance and safety checks',
            },
            {
              title: 'Modern Equipment',
              description: 'GPS tracking, air conditioning, and entertainment systems',
            },
            {
              title: 'Professional Drivers',
              description: 'Trained and licensed drivers with years of experience',
            },
          ].map((feature, idx) => (
            <div key={idx} className="text-center">
              <h3 className="font-bold text-lg text-secondary mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
