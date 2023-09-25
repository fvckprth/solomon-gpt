'use client'

import MuxPlayer from '@mux/mux-player-react';
import { usePathname } from 'next/navigation';

const BackgroundVideo = () => {
    const pathname = usePathname();  
    if (pathname === '/chat') {
      return null;
    }    
    
    return (
        <div className='fixed top-0 left-0 z-[-100] w-full h-full'>
            <MuxPlayer
                playbackId="syVZUPM8hwRPv008dJvaOg02Dxg00Z02oT4i4lbOb4usV5c"
                metadata={{
                    video_title: "Mushroom Trip"
                  }}                    
                playsInline
                autoPlay="any"
                loop
                muted
            />
          <div className="fixed top-0 left-0 z-[-1] w-full h-full bg-[#FF2264]/25"></div>
        </div>
    );
}

export default BackgroundVideo;







