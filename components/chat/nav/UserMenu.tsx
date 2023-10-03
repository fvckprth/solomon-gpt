'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { DropdownMenuLabel, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useUser } from '@/app/context/UserContext'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function UserMenu() {
  const supabase = createClientComponentClient<Database>();
  const userContext = useUser();
  const userProfile = userContext?.userProfile;
  const router = useRouter();

  const signOut = async () => {
    const response = await fetch('/auth/signout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    if (response.ok) {
      router.push('/');
    } else {
      console.error('Failed to sign out');
    }
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="py-2 px-3 flex items-center bg-[#FF2264]/25 border border-[#FF2264] backdrop-blur-sm md:backdrop-blur-md">
            {userProfile?.avatar_url && (
              <Image
                height={40}
                width={40}
                src={userProfile.avatar_url}
                alt={`${userProfile.first_name} ${userProfile.last_name}`}
                className="pr-2"
              />
            )}
            <span className='text-base text-[#FF2264]'>{`${userProfile?.first_name} ${userProfile?.last_name}`}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className='bg-transparent'>
            <div className='flex flex-col'>
              <div>{userProfile?.first_name} {userProfile?.last_name}</div>
              <div>{userProfile?.email}</div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            <a href="https://eastpark.xyz" target="_blank" rel="noopener noreferrer">East Park Home Page</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="https://p307.net" target="_blank" rel="noopener noreferrer">P307 Welcome Page</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="mailto:info@eastpark.xyz">Get Help</a>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={signOut}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}