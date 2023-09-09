'use client'

import { Suspense } from 'react';
import MuxPlayer from '@mux/mux-player-react';

const BackgroundVideo = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <MuxPlayer
                    streamType="on-demand"
                    playbackId="syVZUPM8hwRPv008dJvaOg02Dxg00Z02oT4i4lbOb4usV5c"
                    metadata-video-title="Mushroom Trip"
                    playsInline
                    autoPlay="any"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    loop
                    muted
                    onError={(e) => console.error('Mux Player error', e)}
                />
             </Suspense>
            <div className="absolute top-0 left-0 z-[-1] w-full h-screen bg-[#FF2264] bg-opacity-25"></div>
        </div>
    );
}

export default BackgroundVideo;