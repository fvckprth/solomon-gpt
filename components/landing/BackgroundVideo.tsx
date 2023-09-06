'use client'

import MuxPlayer from '@mux/mux-player-react';

const BackgroundVideo = () => {
    return (
        <div className="video-container">
            <MuxPlayer
                streamType="on-demand"
                playbackId="syVZUPM8hwRPv008dJvaOg02Dxg00Z02oT4i4lbOb4usV5c"
                metadata-video-title="Mushroom Trip"
                playsInline
                autoPlay="any"
                style={{ height: '100%', maxWidth: '100%' }}
                loop
                muted
            />
            <div className="absolute top-0 left-0 z-[-1] w-full h-full bg-pink-500 bg-opacity-25"></div>
        </div>
    );
}

export default BackgroundVideo;