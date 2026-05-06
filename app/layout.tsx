import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollReset } from '@/components/ui/scroll-reset'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://alaatransport.com'),
  title: {
    default: 'ALAA Transport | Reliable Passenger Transport Service in Fujairah',
    template: '%s | ALAA Transport',
  },
  description: 'ALAA Transport is your premier partner for passenger and industrial transportation in Fujairah. We offer specialized school transport, corporate staff commute, heavy equipment rental, and luxury city tours in Fujairah and across the Emirates.',
  keywords: [
    'passenger transport Fujairah', 
    'staff transportation Fujairah', 
    'school bus service Fujairah', 
    'heavy equipment rental Fujairah', 
    'utility material transport',
    'bus rental Fujairah', 
    'luxury coach hire Fujairah', 
    'airport transfer service', 
    'construction equipment rental Fujairah',
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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://alaatransport.com',
  },
  icons: {
    icon: [
      {
        url: '/images/logos/ALAA Logo Reworked NO BG.png',
      },
    ],
    apple: '/images/logos/ALAA Logo Reworked NO BG.png',
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
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ScrollReset />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
