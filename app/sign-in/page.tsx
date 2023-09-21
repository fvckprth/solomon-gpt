'use client'

import UserAuthForm from '@/components/auth/UserAuthForm'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


export default function SignIn() {
    const router = useRouter();
    const supabase = createClientComponentClient();
  
    const isAuthenticated = async () => {
      const { data } = await supabase.auth.getSession();
      return data?.session ? true : false;
    }
  
    useEffect(() => {
      isAuthenticated().then(authenticated => {
        if (authenticated) {
          router.push('/chat');
        }
      });
    }, []);

  return (
    <div>
      <div className='absolute bg-white top-0 left-0 w-full h-screen flex items-center justify-center'>
        <UserAuthForm />
      </div>
    </div>
  );
}