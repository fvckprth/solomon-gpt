'use client'

import Header from '@/components/marketing/Header'
import Hero from '@/components/marketing/Hero'
import Value from '@/components/marketing/Value'
import Access from '@/components/marketing/Access'
import Footer from '@/components/marketing/Footer'

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // When the component is mounted, add a class to the body to disable scrolling
    document.body.classList.add('no-scroll');

    // When the component is unmounted, remove the class from the body to enable scrolling again
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