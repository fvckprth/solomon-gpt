import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'
import BackgroundVideo from '@/components/BackgroundVideo'


const allianceNo2 = localFont({ 
  src: '../public/fonts/AllianceNo.2-Regular.otf',
  weight: '400',
  variable: '--font-allianceNo2',
});

export const metadata: Metadata = {
  title: 'Solomon | Your Partner in Exploration',
  description: 'Dive deep into East Park Holdings\' journey, from our founders\' stories to market insights.',
  themeColor: '#FF2264',
  keywords: ['solomonGPT', 'East Park Holdings\' Group', 'AI Chatbot', 'New York'],
  authors: [{ name: 'Parth Patel', url: 'https://parth.ski' }],
  openGraph: {
    title: 'Solomon',
    description: 'Dive deep into East Park Holdings\' journey, from our founders\' stories to market insights.',
    url: 'https://withsolomon.com',
    siteName: 'Solomon',
    images: [
      {
        url: 'https://image.mux.com/syVZUPM8hwRPv008dJvaOg02Dxg00Z02oT4i4lbOb4usV5c/animated.gif?fps=30',
        width: 800,
        height: 600,
        alt: 'Mushroom Trip',
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
    images: ['https://image.mux.com/syVZUPM8hwRPv008dJvaOg02Dxg00Z02oT4i4lbOb4usV5c/animated.gif?fps=15&end=5'],
  },
}

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${allianceNo2.className} h-full leading-none tracking-tight`}>
        {children}
        <BackgroundVideo />
      </body>
    </html>
  );
}