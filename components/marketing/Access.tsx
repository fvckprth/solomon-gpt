import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Access = () => {
    return (
        <div className='p-0 md:p-8 flex flex-row w-full space-x-3'>
            <Button variant='secondary' size='lg' className='md:text-base w-full backdrop-blur-sm md:backdrop-blur-md'>Request Access</Button>
            <Link href="/sign-in" className='md:text-base w-full text-[#1E1E1E]' passHref>
                <Button variant='default' size='lg' className='w-full text-[#1E1E1E]'>Log-in</Button>
            </Link>
        </div>
    ); 
}

export default Access;
