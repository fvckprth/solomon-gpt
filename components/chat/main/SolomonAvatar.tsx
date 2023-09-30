import React from "react";

type Props = {};

const SolomonLogo = (props: Props) => {
    return (
        <div
            className="relative p-4 rounded-none h-12 w-12 text-white flex items-center justify-center"
        >
            <svg 
                width="207" 
                height="207" 
                viewBox="0 0 207 207" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_86_161)">
                    <circle 
                        cx="84" 
                        cy="84" 
                        r="60" 
                        fill="#FF2264"
                    />
                </g>
                <g filter="url(#filter1_b_86_161)">
                    <circle 
                        cx="84" 
                        cy="84" 
                        r="45" 
                        fill="#1E1E1E"/>
                </g>

                <defs>
                    <filter id="filter0_f_86_161" x="-38.5" y="-38.5" width="245" height="245" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feGaussianBlur stdDeviation="31.25" result="effect1_foregroundBlur_86_161"/>
                    </filter>
                    <filter id="filter1_b_86_161" x="19" y="19" width="130" height="130" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_86_161"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_86_161" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default SolomonLogo;