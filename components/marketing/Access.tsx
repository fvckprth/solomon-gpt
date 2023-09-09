import Link from 'next/link';
import { Button } from '../ui/button';

const Access = () => {
    return (
        <div className='mb-6 flex flex-row w-full space-x-3'>
            <Button variant='secondary' size='lg' className='md:text-base w-full backdrop-blur-sm md:backdrop-blur-md'>Request Access</Button>
            <Link href="/sign-in" className='md:text-base w-full' passHref>
                <Button variant='default' size='lg' className='w-full'>Log-in</Button>
            </Link>
        </div>
    ); 
}

export default Access;
