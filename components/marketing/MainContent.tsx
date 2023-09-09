'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Button } from '../ui/button';
import Link from 'next/link';

const contentData = [
    {
        preview: 'ANALYZE',
        label: 'CHAT WITH INTERNAL DOCS',
        paragraph: 
            'Providing real-time insights and updates\n on East Park\'s assets, ensuring our investors,\n advisors, and friends, are always in the loop.'
    },
    {
        preview: 'UNDERSTAND',
        label: 'WHY EAST PARK?',
        paragraph: 'Grasp the essence of our products and services. SolomonGPT sheds light on the market insights\n and the unique value we bring to the table.'
    },
    {
        preview: 'KNOW',
        label: 'PROJECT FEEDBACK AND ANALYTICS',
        paragraph: 'Engage with SolomonGPT to understand the\n core principles driving East Park. Discover the\n reasons behind our every move and decision.'
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

    const boxClasses = 'border border-white mr-1 md:mr-2 cursor-pointer w-2 h-2 md:w-4 md:h-4';
    const activeBoxClasses = 'bg-white';

    return (
    <div className='flex flex-col h-screen m-4 md:m-0 md:grid md:grid-cols-6 md:grid-rows-auto md:grid-rows-[1fr,1fr,1fr,1fr,1fr,auto] md:gap-0 md:h-screen'> 
            <div className="flex flex-row justify-between md:flex-col md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-4 p-3 md:p-8 mb-8 md:m-0 bg-stone-900 bg-opacity-25 border border-gray-200 border-opacity-25 md:border-t-0 md:border-l-0 backdrop-blur-sm md:backdrop-blur-md">
                <div className="flex flex-col">
                    <div className="text-gray-200 text-2xl md:text-4xl leading-none tracking-tight mb-2">
                        Solomon
                    </div>
                    <div className='flex flex-row items-end opacity-50 space-x-1'>
                        <div>
                            <Image 
                                src="/images/icon.svg" 
                                alt="arrow icon" 
                                className="fill-inherit" 
                                quality={100} 
                                width={12}
                                height={12} 
                                layout="responsive"
                                sizes="(max-width: 640px) 32px, 32px"
                            />
                        </div>
                        <div className="text-gray-200 text-[8px] md:text-xs leading-tight tracking-tight">
                            A GPT DESIGNED FOR <br/>
                            THE EAST PARK TEAM
                        </div>
                    </div>
                </div>
                <div className='self-end'>
                    <Image 
                        src="/images/solomon-logo.png" 
                        alt="Solomon Logo" 
                        quality={100} 
                        width={56} 
                        height={56} 
                        layout="responsive"
                        sizes="(max-width: 640px) 56px, 448px"
                        />
                </div>
            </div>
            <div className="mb-16 md:mb-4 md:col-start-3 md:col-span-3 md:row-start-3 md:row-span-3 md:justify-end md:ml-20 text-gray-200 text-5xl md:text-8xl md:self-end">
                SolomonGPT, <br/>
                Your Partner <br/>
                in Exploration
            </div>
            <div className='mb-4 md:col-start-1 md:col-span-2 md:row-span-3 p-4 md:p-0 md:pb-20 md:px-8 md:m-0 md:pt-8 flex flex-col justify-end items-start bg-stone-900 bg-opacity-25 border border-gray-200 border-opacity-25 md:border-y-0 md:border-l-0 backdrop-blur-sm md:backdrop-blur-md'>
                <div className='flex flex-row items-center text-custom-white'>
                    {contentData.map(item => (
                        <div
                            key={item.preview}
                            className={clsx(boxClasses, { [activeBoxClasses]: activeContent.label === item.label })}
                            onClick={() => handleClick(item)}
                        />
                    ))}
                    <div className='ml-1 text-[8px] md:text-xs text-custom-white'>{activeContent.preview}</div>
                </div>
                <div className='mt-2 inline-block space-y-2 md:space-y-4'>
                    <div className='text-xs md:text-base text-custom-white inline-block'>
                        {activeContent.paragraph.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                <br/>
                            </span>
                        ))}
                    </div>
                    <div className='text-[8px] md:text-xs text-custom-white px-2 py-1 border border-white opacity-25 inline-block'>{activeContent.label}</div>
                </div>
            </div>
            <div className='mb-6 md:p-8 md:col-start-5 md:col-span-2 md:row-start-1 md:m-0 flex flex-row space-x-3'>
                <Button variant='secondary' size='lg' className='md:text-base w-full backdrop-blur-md'>Request Access</Button>
                <Link href="/sign-in" passHref>
                    <Button variant='default' size='lg' className='md:text-base w-full'>Log-in</Button>
                </Link>
            </div>
            <div className='flex flex-col md:flex-row md:col-start-3 md:col-span-4 md:row-start-6 md:mb-20 md:ml-20 justify-start text-custom-white text-xs md:text-sm opacity-50 space-y-1 md:space-y-0 md:self-end'>
                <div className='flex space-x-6'>
                    <div>
                        12 ACCOUNTS
                    </div>
                    <div>
                        9,123 VIEWS
                    </div>
                </div>
                <div className='md:ml-12'>
                    ©2023 EAST PARK HOLDINGS GROUP
                </div>
            </div>
        </div>
    );
}

export default MainContent;
