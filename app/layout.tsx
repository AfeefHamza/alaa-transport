import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollReset } from '@/components/ui/scroll-reset'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://alaa-transport.com'),
  title: {
    default: 'ALAA Transport | #1 Passenger Transport Service in Fujairah & UAE',
    template: '%s | ALAA Transport',
  },
  description: 'ALAA Transport provides premium passenger transport services across the UAE. Specializing in staff transportation, airport transfers, luxury fleet rentals, and custom tour packages in Fujairah.',
  keywords: ['passenger transport Fujairah', 'staff transportation UAE', 'airport transfer service', 'bus rental UAE', 'luxury coach hire', 'ALAA Transport'],
  authors: [{ name: 'ALAA Transport' }],
  creator: 'ALAA Transport',
  openGraph: {
    title: 'ALAA Transport - Professional Passenger Transport Solutions',
    description: 'The trusted choice for reliable, safe, and elite transportation services in Fujairah and across the UAE.',
    url: 'https://alaa-transport.com',
    siteName: 'ALAA Transport',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ALAA Transport Premium Fleet',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALAA Transport | Premium Journey in UAE',
    description: 'Safe, reliable, and professional passenger transport services.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://alaa-transport.com',
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
  maximumScale: 1,
  userScalable: false,
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
