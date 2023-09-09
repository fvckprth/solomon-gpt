import Image from "next/image";

const Header = () => {
    return (
        <div className="flex flex-row justify-between md:flex-col md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-4 p-3 md:p-8 mb-8 md:m-0 bg-stone-900 bg-opacity-25 border border-custom-white border-opacity-25 md:border-t-0 md:border-l-0 backdrop-blur-sm md:backdrop-blur-md">
                <div className="flex flex-col">
                    <div className="text-custom-white text-2xl md:text-4xl leading-none tracking-tight mb-2">
                        Solomon
                    </div>
                    <div className='flex flex-row items-end space-x-1'>
                        <div className="opacity-50">
                            <Image 
                                src="/images/icon.svg" 
                                alt="arrow icon" 
                                className="fill-inherit" 
                                quality={100} 
                                width={12}
                                height={12} 
                                sizes="(max-width: 640px) 32px, 32px"
                            />
                        </div>
                        <div className="text-custom-white text-opacity-50 text-[8px] md:text-xs leading-tight tracking-tight">
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
                        sizes="(max-width: 640px) 56px, 448px"
                        />
                </div>
            </div>
    ); 
}

export default Header;
