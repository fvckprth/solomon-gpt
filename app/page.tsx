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
        <div className="flex flex-col md:grid md:grid-cols-6 grid-rows-6 md:p-0 relative h-full p-4 overflow-hidden">
            <div className='pb-12 md:p-0 md:col-start-1 md:col-span-2 md:row-span-4'>
              <Header />
            </div>
            <div className='grow md:pt-32 md:pl-20 md:col-start-3 md:col-span-full md:row-start-3'>
              <Hero />
            </div>
            <div className='pb-4 md:p-0 flex md:col-start-1 md:col-span-2 md:row-span-2'>
              <Value />
            </div>
            <div className='pb-6 md:p-0 md:col-start-5 md:col-span-full md:row-start-1 md:row-span-full'>
              <Access />
            </div>
            <div className='pb-6 md:p-0 md:pl-20 md:col-start-3 md:col-span-full md:row-start-6 md:row-span-full'>
              <Footer />
            </div>
        </div>
      </div>
    </div>
  )
}