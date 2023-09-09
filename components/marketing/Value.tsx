import React, { useState } from 'react';
import clsx from 'clsx';

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

const Value = () => {

    const [activeContent, setActiveContent] = useState(contentData[0]);

    interface ContentItem {
        preview: string;
        label: string;
        paragraph: string;
    }

    const handleClick = (contentItem: ContentItem) => {
        setActiveContent(contentItem);
    }

    const boxClasses = 'border border-custom-white mr-1 md:mr-2 cursor-pointer w-2 h-2 md:w-4 md:h-4';
    const activeBoxClasses = 'bg-custom-white';
    
    return (
        <div className='mb-4 md:col-start-1 md:col-span-2 md:row-span-3 p-4 md:p-0 md:pb-20 md:px-8 md:m-0 md:pt-8 flex flex-col justify-end items-start bg-stone-900 bg-opacity-25 border border-custom-white border-opacity-25 md:border-y-0 md:border-l-0 backdrop-blur-sm md:backdrop-blur-md'>
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
                <div className='text-[8px] md:text-xs text-custom-white px-2 py-1 border border-custom-white opacity-50 inline-block'>{activeContent.label}</div>
            </div>
        </div>
    ); 
}

export default Value;