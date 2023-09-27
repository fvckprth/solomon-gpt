'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {
  DropdownMenuLabel,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function UserMenu({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true)
  const [first_name, setFirstName] = useState<string | null>(null)
  const [last_name, setLastName] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)
  const user = session?.user
  const router = useRouter();

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)
  
      if (!user?.id) {
        console.log('User ID is not available'); // Log when user ID is not available
        return;
      }
  
      console.log('User ID:', user.id); // Log the user ID
  
      let { data: profiles, error, status } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
  
      console.log('Profiles:', profiles); // Log the profiles data
  
      if (error && status !== 406) {
        console.error('Error:', error); // Log the error
        throw error
      }
  
      if (profiles) {
        setFirstName(profiles.first_name)
        setLastName(profiles.last_name)
        setEmail(profiles.email)
        setAvatarUrl(profiles.avatar_url)
      } else {
        console.log('No profiles found for user ID:', user.id); // Log when no profiles are found
      }
    } catch (error) {
      console.error('Catch Error:', error); // Log the error caught
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="py-2 px-3 flex items-center bg-[#FF2264]/25 border border-[#FF2264] backdrop-blur-sm md:backdrop-blur-md">
            {avatar_url && (
              <Image
                height={40}
                width={40}
                src={avatar_url}
                alt={`${first_name} ${last_name}`}
                className="pr-2"
              />
            )}
            <span className='text-base text-[#FF2264]'>{`${first_name} ${last_name}`}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className='bg-transparent'>
            <div className='flex flex-col'>
              <div>{first_name} {last_name}</div>
              <div>{email}</div>
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
