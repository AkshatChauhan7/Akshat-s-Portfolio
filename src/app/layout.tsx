import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://akshatchauhan.dev'),
  title: 'Akshat Chauhan | Portfolio',
  description: 'Computer Science student passionate about building efficient solutions, web development, competitive programming, and automation.',
  keywords: ['Software Developer', 'Computer Science', 'Full Stack', 'Competitive Programming', 'Automation', 'Portfolio'],
  authors: [{ name: 'Akshat Chauhan' }],
  creator: 'Akshat Chauhan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akshatchauhan.dev',
    title: 'Akshat Chauhan | Portfolio',
    description: 'Computer Science student passionate about building efficient solutions and automating the world, one line of code at a time.',
    siteName: 'Akshat Chauhan Portfolio',
    images: ['/images/pfp.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akshat Chauhan | Portfolio',
    description: 'Computer Science student passionate about building efficient solutions and automating the world, one line of code at a time.',
    images: ['/images/pfp.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}