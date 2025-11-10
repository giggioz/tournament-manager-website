import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://tournament-manager.infinitymundi.it'),
  title: 'Tournament Manager - La piattaforma completa per il tuo centro sportivo',
  description: 'Multiruolo, in cloud, customizzabile.',
  keywords: 'associazione, sportiva, culturale, gestione, piattaforma, cloud, padel, tornei, classifiche, centri sportivi',
  authors: [{ name: 'Luigi Lescarini' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Tournament Manager - La piattaforma completa per il tuo centro sportivo',
    description: 'Multiruolo, in cloud, customizzabile.',
    type: 'website',
    locale: 'it_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tournament Manager - La piattaforma completa per il tuo centro sportivo',
    description: 'Multiruolo, in cloud, customizzabile.',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
