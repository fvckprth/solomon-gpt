import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })
const allianceNo2 = localFont({ 
  src: '../public/fonts/AllianceNo.2-Regular.otf',
  weight: '400',
  variable: '--font-allianceNo2',
});

export const metadata: Metadata = {
  title: 'Your Application Title',
  description: 'A brief description of your application',
  themeColor: '#FF2264',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Author Name', url: 'https://authorwebsite.com' }],
  openGraph: {
    title: 'Your Application Title',
    description: 'A brief description of your application',
    url: 'https://yourwebsite.com',
    siteName: 'Your Site Name',
    images: [
      {
        url: 'https://yourwebsite.com/og-image.jpg',
        width: 800,
        height: 600,
        alt: 'Description of the image for visually impaired users',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    siteId: 'Your Twitter ID',
    creator: '@YourTwitterHandle',
    creatorId: 'Your Twitter ID',
    title: 'Your Application Title',
    description: 'A brief description of your application',
    images: ['https://yourwebsite.com/twitter-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${allianceNo2.className}`}>{children}</body>
    </html>
  )
}

