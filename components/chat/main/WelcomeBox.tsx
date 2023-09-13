import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const WelcomeBox = () => {
    return (
        <div className="md:mx-auto md:max-w-2xl border border-[#1E1E1E] border-opacity-25 bg-transparent pb-4 px-4 md:pb-6 md:px-6">
            <Avatar className="p-0 -ml-8 md:-ml-12 -mb-3 md:-mb-4 -mt-2 md:-mt-4 h-48 w-48 md:h-48 md:48">
                <AvatarImage src="/images/solo.svg" />
                <AvatarFallback>SL</AvatarFallback>
            </Avatar>
            <h1 className="mb-2 text-base md:text-2xl text-[#1E1E1E] text-opacity-50 1eading-tight">
                Hello, this is Solomon
            </h1>
            <p className="text-xs md:text-base text-[#1E1E1E] text-opacity-50 leading-tight">
                I&apos;m an AI-Powered assistant crafted with the{' '}
                <Link href="https://vercel.com/docs/concepts/functions/introduction" className="text-[#FF2264] underline underline-offset-4 decoration-1">
                    Vercel AI SDK
                </Link>
                , and fine-tuned <br />
                and trained on East Park Holdings&apos; diverse assets, progress, and initiatives.{' '}
            </p>
        </div>
    );
}
export default WelcomeBox;