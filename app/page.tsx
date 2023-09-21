'use client'

import Header from '@/components/marketing/Header'
import Hero from '@/components/marketing/Hero'
import Value from '@/components/marketing/Value'
import Access from '@/components/marketing/Access'
import Footer from '@/components/marketing/Footer'

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
  return (
    <div>
      <div className='absolute top-0 left-0 h-full'>
        <div className="flex flex-col justify-between relative h-full p-4 overflow-hidden">
          <div>
            <Header />
            <Hero />
          </div>
          <div>
            <Value />
            <Access />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}