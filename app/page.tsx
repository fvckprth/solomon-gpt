'use client'

import Header from '@/components/marketing/Header'
import Hero from '@/components/marketing/Hero'
import Value from '@/components/marketing/Value'
import Access from '@/components/marketing/Access'
import Footer from '@/components/marketing/Footer'

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-between h-screen p-4 overflow-hidden">
        <Header />
        <Hero />
        <Value />
        <Access />
        <Footer />
      </div>
    </div>
  )
}