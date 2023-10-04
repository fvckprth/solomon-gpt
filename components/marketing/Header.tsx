import Image from "next/image";
import SolomonLogo from '@/public/images/solomon-logo.png'
import ArrowIcon from '@/public/images/icon.svg'

const Header = () => {
    return (
        <div className="h-auto md:h-full flex flex-row justify-between md:flex-col bg-stone-900 bg-opacity-25 border border-custom-white border-opacity-25 md:border-t-0 md:border-l-0 backdrop-blur-sm md:backdrop-blur-md">
                <div className="flex flex-col p-3 md:p-5">
                    <div className="text-custom-white text-2xl md:text-4xl leading-none tracking-tight mb-2">
                        Solomon
                    </div>
                    <div className='flex flex-row items-end space-x-1'>
                        <div className="opacity-50">
                        <Image 
                            src={ArrowIcon} 
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
                <div className='md:self-start h-20 w-20 md:h-auto md:w-auto'>
                    <Image 
                        src={SolomonLogo}
                        alt="Solomon Logo" 
                        quality={100}
                        width={2100}
                        height={2100}
                        sizes="(max-width: 640px) 100vw, (min-width: 768px) 96w"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </div>
            </div>
    ); 
}

export default Header;
