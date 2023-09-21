import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { supabase } from '@/lib/supabaseClient';
import { Profiles } from '@/types/collection';

export default function UserMenu() {
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profiles | null>(null);
  const router = useRouter()

  const fetcher = useCallback(async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session?.user.id)
      .single()
    if (error) {
      console.error('Error fetching profile:', error);
    } else {
      setProfile(data);
    }
  },[session]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  const signOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <div className="fixed top-0 right-0 p-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
        <Button variant="ghost" className="pl-0">
            {profile.av ? (
              <Image
                height={60}
                width={60}
                className="h-6 w-6 select-none rounded-none ring-1 ring-zinc-100/10 transition-opacity duration-300 hover:opacity-80"
                src={
                  user.user_metadata.avatar_url
                    ? `${user.user_metadata.avatar_url}&s=60`
                    : ''
                }
                alt={user.user_metadata.name ?? 'Avatar'}
              />
            ) : (
              <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground">
                {`${profile?.first_name[0]}${profile?.last_name[0]}`}
              </div>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div>{user?.user_metadata.name}</div>
            <div>{user?.email}</div>
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
          <DropdownMenuItem onClick={signOut}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

