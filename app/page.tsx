'use client'

import Header from '@/components/marketing/Header'
import Hero from '@/components/marketing/Hero'
import Value from '@/components/marketing/Value'
import Access from '@/components/marketing/Access'
import Footer from '@/components/marketing/Footer'

export default function Home() {
  return (
    <div>
      <div className='absolute top-0 left-0 h-screen'>
        <div className="flex flex-col justify-between relative h-full p-4 overflow-auto">
          <Header />
          <Hero />
          <Value />
          <Access />
          <Footer />
        </div>
      </div>
    </div>
  )
}