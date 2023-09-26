'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button'
import {
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

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('ERROR:', error);
      alert('Error during sign out: ' + error.message);
    } else {
      router.push('/sign-in');
    }
  }

  return (
    <div className="fixed top-0 right-0 p-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant="ghost" className="pl-0">
              {avatar_url ? (
                <Image
                  height={60}
                  width={60}
                  src={avatar_url}
                  alt={`${first_name} ${last_name}`}
                />
              ) : (
                <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground">
                  {`${first_name?.[0]}${last_name?.[0]}`}
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div>{first_name} {last_name}</div>
            <div>{email}</div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="https://eastpark.xyz" target="_blank" rel="noopener noreferrer">East Park Home Page</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="https://p307.net" target="_blank" rel="noopener noreferrer">P307 Welcome Page</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="mailto:info@eastpark.xyz">Get Help</a>
          </DropdownMenuItem>
            <button className="button block" type="submit" onClick={handleSignOut}>
              Sign out
            </button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
