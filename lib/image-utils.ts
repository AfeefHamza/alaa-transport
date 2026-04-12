/**
 * Image optimization utilities for lazy loading and performance
 */

export const imageConfig = {
  hero: {
    src: '/images/hero-bus.jpg',
    alt: 'Professional passenger transport bus in Fujairah',
    width: 1200,
    height: 600,
    priority: true,
  },
  about: {
    src: '/images/about-fleet.jpg',
    alt: 'ALAA Transport fleet of buses',
    width: 800,
    height: 500,
    priority: false,
  },
  services: {
    src: '/images/services-bg.jpg',
    alt: 'Urban transport services',
    width: 1200,
    height: 400,
    priority: false,
  },
  airport: {
    src: '/images/airport-transfer.jpg',
    alt: 'Airport transfer service',
    width: 800,
    height: 500,
    priority: false,
  },
  team: {
    src: '/images/team.jpg',
    alt: 'Professional transport company team',
    width: 800,
    height: 500,
    priority: false,
  },
  city: {
    src: '/images/city-transport.jpg',
    alt: 'Urban city roads with buses',
    width: 1200,
    height: 400,
    priority: false,
  },
  safety: {
    src: '/images/safety-check.jpg',
    alt: 'Professional safety inspection',
    width: 800,
    height: 500,
    priority: false,
  },
};

/**
 * Get responsive image sizes based on device
 */
export const getImageSizes = (maxWidth: number = 1200): string => {
  return `(max-width: 640px) 100vw, (max-width: 1024px) 90vw, ${maxWidth}px`;
};

/**
 * Generate srcSet for responsive images
 */
export const generateSrcSet = (basePath: string): string => {
  return `${basePath}?w=400 400w, ${basePath}?w=800 800w, ${basePath}?w=1200 1200w`;
};
