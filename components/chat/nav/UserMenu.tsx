import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { User } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { supabase } from '@/lib/supabaseClient';
import { Profiles } from '@/types/collection';

type UserMenuProps = {
  user: User | null;
};

export default function UserMenu({ user }: UserMenuProps) {
  const [session, setSession] = useState<{ user: User | null; session?: Session | null; } | null>(null);
  const [profile, setProfile] = useState<Profiles | null>(null);
  const router = useRouter();

  useEffect(() => {
    const session = {
      user: user,
    };
    setSession(session); 
  }, [user]);


  const fetcher = useCallback(async () => {
    if (session?.user) {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', session.user.id)
        .single()
      if (error) {
        console.error('Error fetching profile:', error);
      } else {
        setProfile(data);
      }
    }
  },[session]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('ERROR:', error);
      alert('Error during sign out: ' + error.message);
    } else {
      setSession(null);
      router.push('/sign-in');
    }
  }
  return (
    <div className="fixed top-0 right-0 p-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant="ghost" className="pl-0">
              {profile?.avatar_url ? (
                <Image
                  height={60}
                  width={60}
                  src={profile?.avatar_url}
                  alt={`${profile?.first_name} ${profile?.last_name}`}
                />
              ) : (
                <div className="flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-muted/50 text-xs font-medium uppercase text-muted-foreground">
                  {`${profile?.first_name?.[0]}${profile?.last_name?.[0]}`}
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div>{profile?.first_name} {profile?.last_name}</div>
            <div>{profile?.email}</div>
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
          <DropdownMenuItem onClick={handleSignOut}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

