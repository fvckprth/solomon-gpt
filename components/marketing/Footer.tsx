'use client'

import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Footer = () => {
    const { data, error } = useSWR("/api/view", fetcher);
  
    useEffect(() => {
      // Send a POST request to increment the page view count
      fetch('/api/view', { method: 'POST' });
    }, []);
  if (error) return <div>Failed to load</div>

  return (
    <div className='flex flex-col justify-start text-xs md:text-sm'>
      <div className="flex space-x-6">
        <div>
          <span className="text-custom-white">12</span>
          <span className="text-custom-white text-opacity-50"> ACCOUNTS</span>
        </div>
        <div>
          <span className="text-custom-white">
            {data && typeof data.count === 'number' ? data.count : 'N/A'}
          </span>          
          <span className="text-custom-white text-opacity-50"> VIEWS</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;