import { Users, Plane, MapPin, Globe, Truck } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Staff Transport',
    description: 'Reliable daily transportation for your employees with professional drivers and modern vehicles.',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Seamless airport pickup and drop-off services with on-time reliability and professional service.',
  },
  {
    icon: MapPin,
    title: 'City Tours',
    description: 'Comfortable sightseeing tours with experienced guides and flexible scheduling for groups.',
  },
  {
    icon: Globe,
    title: 'Tour Packages',
    description: 'Customized tour packages to popular destinations with dedicated professional drivers.',
  },
  {
    icon: Truck,
    title: 'Fleet Management',
    description: 'Complete fleet management solutions for corporate transportation needs and logistics.',
  },
  {
    icon: Users,
    title: 'Event Transport',
    description: 'Professional transportation services for events, conferences, and group gatherings.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive transportation solutions tailored to meet your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="p-8 border border-gray-200 rounded-xl hover:shadow-lg hover:border-primary transition-all duration-300 bg-white shadow-md"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-primary"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
