import UserAuthForm from '@/components/auth/UserAuthForm'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const runtime = 'edge'
export const preferredRegion = 'home'

export default async function SignIn() {
    const supabase = createServerComponentClient({ cookies });
    const { data } = await supabase.auth.getSession();
  
    if (data?.session) {
        redirect('/chat');
      }

    return (
        <div>
        <div className='absolute bg-white top-0 left-0 w-full h-screen flex items-center justify-center'>
            <UserAuthForm />
        </div>
        </div>
    )
}