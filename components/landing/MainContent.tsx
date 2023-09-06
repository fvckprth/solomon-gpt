'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '../ui/button';

const contentData = [
    {
        preview: 'ANALYZE',
        label: 'CHAT WITH INTERNAL DOCS',
        paragraph: 
            'Providing real-time insights and updates on East Park\'s assets, ensuring our investors, advisors, and friends, are always in the loop.'
    },
    {
        preview: 'UPDATES',
        label: 'TECH UPDATES AND PROCESSES',
        paragraph: 'Showcasing our latest advancements in technology and processes, guaranteeing that our stakeholders remain informed and engaged.'
    },
    {
        preview: 'KNOW',
        label: 'PROJECT FEEDBACK AND ANALYTICS',
        paragraph: 'Delivering constant feedback and analytics from our projects, allowing our team to adapt and evolve for future success.'
    }
];

const MainContent = () => {
    const [activeContent, setActiveContent] = useState(contentData[0]);

    interface ContentItem {
        preview: string;
        label: string;
        paragraph: string;
    }

    const handleClick = (contentItem: ContentItem) => {
        setActiveContent(contentItem);
    }

    const boxClasses = 'border border-white p-2 mr-2 cursor-pointer';
    const activeBoxClasses = 'bg-white';

    return (
        <div className='flex flex-col'>
            <div className="flex justify-between p-3 m-4 bg-stone-900 bg-opacity-25 border border-gray-200 border-opacity-25 backdrop-blur-md">
                <div className="flex flex-col">
                    <div className="text-gray-200 text-2xl leading-none tracking-tight mb-2">
                        Solomon
                    </div>
                    <div className='flex flex-row items-end opacity-50 space-x-1'>
                        <div>
                            <Image src="/images/icon.svg" alt="arrow icon" className="fill-inherit" quality={100} width={12} height={12} />
                        </div>
                        <div className="text-gray-200 text-[8px] leading-none tracking-tight">
                            A GPT DESIGNED FOR <br/>
                            THE EAST PARK TEAM
                        </div>
                    </div>
                </div>
                <div>
                    <Image src="/images/solomon-logo.svg" alt="Solomon Logo" quality={100} width={48} height={48} />
                </div>
            </div>
            <div className="m-4 text-gray-200 text-5xl">
                SolomonGPT, <br/>
                Your Partner <br/>
                in Exploration
            </div>
            <div className='p-4 m-4 flex flex-col space-y-4 bg-stone-900 bg-opacity-25 border border-gray-200 border-opacity-25 backdrop-blur-md'>
                <div className='flex flex-row text-custom-white'>
                    {contentData.map(item => (
                        <div
                            key={item.preview}
                            className={clsx(boxClasses, { [activeBoxClasses]: activeContent.label === item.label })}
                            onClick={() => handleClick(item)}
                        />
                    ))}
                    <div className='text-[8px] text-custom-white'>{activeContent.preview}</div>
                </div>
                <div className='flex flex-col space-y-4 inline-block'>
                    <div className='text-xs text-custom-white'>{activeContent.paragraph}</div>
                    <div className='text-[8px] text-custom-white px-2 py-1 border border-white opacity-25 inline-block'>{activeContent.label}</div>
                </div>
            </div>
            <div className='m-4 flex flex-row space-x-3'>
                <Button variant='secondary' size='lg' className='w-full backdrop-blur-md'>Request Access</Button>
                <Button variant='default' size='lg' className='w-full'>Log-in</Button>
            </div>
            <div className='m-4 text-custom-white text-xs opacity-50'>
                <div className='flex flex-row space-x-6'>
                    <div>
                        12 ACCOUNTS
                    </div>
                    <div>
                        9,123 VIEWS
                    </div>
                </div>
                ©2023 EAST PARK HOLDINGS GROUP
            </div>
        </div>
    );
}

export default MainContent;
