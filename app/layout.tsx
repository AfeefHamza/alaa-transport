import type { Metadata } from 'next'
import { Inter, Montserrat, Arizonia } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollReset } from '@/components/ui/scroll-reset'
import { ConnectUs } from '@/components/connect-us'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
});

const arizonia = Arizonia({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-arizonia',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alaatransport.com'),
  title: {
    default: 'ALAA Transport | Reliable Passenger Transport Service in Fujairah',
    template: '%s | ALAA Transport',
  },
  description:'ALAA Transport provides passenger transport, staff transportation, school bus services, airport transfers, bus rental, heavy equipment rental, fleet management, utility transport, and 24/7 garage services across Fujairah, Abu Dhabi, Sharjah, and the UAE.',
  keywords: [
  'passenger transport Fujairah',
  'staff transportation Fujairah',
  'corporate transport Fujairah',
  'employee transportation UAE',
  'school transport Fujairah',
  'school bus service UAE',
  'airport transfer Fujairah',
  'airport transportation UAE',
  'bus rental Fujairah',
  'van rental Fujairah',
  '60 seater bus rental',
  '30 seater bus rental',
  '18 seater van rental',
  '12 seater van rental',
  'luxury bus rental UAE',
  'city tour bus Fujairah',
  'labour transport UAE',
  'heavy equipment rental Fujairah',
  'excavator rental Fujairah',
  'mobile crane rental UAE',
  'dumper truck rental Fujairah',
  'wheel loader rental UAE',
  'water transport service UAE',
  'debris transport Fujairah',
  'material transport UAE',
  'fleet management services',
  '24 hour heavy duty garage',
  'transport company Fujairah',
  'transport services UAE',
],
  authors: [{ name: 'ALAA Transport' }],
  creator: 'ALAA Transport',
  openGraph: {
    title: 'ALAA Transport - Professional Transportation & Heavy Equipment Solutions',
    description: 'Trusted, safe, and elite transportation services. From school buses to heavy machinery rental, we serve Fujairah,Sharjah and Abu Dhabi with excellence.',
    url: 'https://alaatransport.com',
    siteName: 'ALAA Transport',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ALAA Transport Premium Fleet and Equipment',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALAA Transport | Premiere Transport & Equipment Services in UAE',
    description: 'Leading provider of passenger transport and industrial equipment rental services in the UAE.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://alaatransport.com',
  },
  verification: {
    google: '7ftdBUtqSAFn4CzSN17z3WIAAq2EC9pW1se021SB5OM',
  },
  icons: {
    icon: [
      {
        url: '/images/logos/alaa-logo.webp',
      },
    ],
    apple: '/images/logos/alaa-logo.webp',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${arizonia.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ScrollReset />
        {children}
        <ConnectUs />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
