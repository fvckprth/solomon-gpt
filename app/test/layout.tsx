import { ReactNode } from "react";

import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Solomon | Your Partner in Exploration',
  description: 'Dive deep into East Park Holdings\' journey, from our founders\' stories to market insights.',
  themeColor: '#FFFFFF',
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

export const runtime = "edge";

export default function Test({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white h-screen w-screen">
      {children}
    </div>
  );
}