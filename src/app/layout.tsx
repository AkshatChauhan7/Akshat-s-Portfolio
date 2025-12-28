import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Portfolio | AI Engineer & Developer',
  description: 'Professional portfolio showcasing AI/ML engineering expertise and innovative projects',
  keywords: ['AI Engineer', 'Machine Learning', 'Software Developer', 'Portfolio'],
  authors: [{ name: 'Portfolio Owner' }],
  creator: 'Portfolio Owner',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Portfolio | AI Engineer & Developer',
    description: 'Professional portfolio showcasing AI/ML engineering expertise and innovative projects',
    siteName: 'Professional Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-black via-primary-900/20 to-black">
          {children}
        </div>
      </body>
    </html>
  )
}