import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { SignInForm } from '@/components/auth/SignInForm';

export default async function SignIn() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data: {session} } = await supabase.auth.getSession();

    if (session) {
        redirect('/chat');
    }

    return (
        <div>
        <div className='absolute top-0 left-0 w-full h-screen flex items-center justify-center'>
            <SignInForm action='sign-in' />
        </div>
        </div>
    );
    }