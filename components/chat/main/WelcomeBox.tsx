import React from 'react'
import Link from "next/link"
import Image from "next/image";

const WelcomeBox = () => {
    return (
    <>
        <div className="w-full md:mx-auto md:max-w-2xl border border-[#1E1E1E] border-opacity-25 pb-4 px-4 md:pb-6 md:px-6">
            <div className="w-120 h-120">
                <Image
                    src="/images/solomonGPT-logo.png"
                    alt="Solomon GPT Logo"
                    quality={100}
                    priority={true}	
                    height={120}
                    width={120}
                />
            </div>
            <h1 className="mb-2 text-base md:text-2xl text-[#1E1E1E] text-opacity-50 1eading-tight">
                Hello, this is Solomon
            </h1>
            <p className="text-xs md:text-base text-[#1E1E1E] text-opacity-50 leading-tight">
                I&apos;m an AI-Powered assistant crafted with the{' '}
                <Link href="https://vercel.com/docs/concepts/functions/introduction" className="text-[#FF2264] underline underline-offset-4 decoration-1">
                    Vercel AI SDK
                </Link>
                , and fine-tuned and trained on East Park Holdings&apos; diverse assets, progress, and initiatives.{' '}
            </p>
        </div>
    </>
    );
}
export default WelcomeBox;