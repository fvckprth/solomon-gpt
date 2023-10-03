"use client"

import { useEffect, useState, createContext, useContext } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface UserProfile {
  avatar_url: string | null;
  email: string | null;
  first_name: string | null;
  id: string;
  last_name: string | null;
  username: string | null;
}

const UserContext = createContext<{ userProfile: UserProfile | null, loading: boolean } | null>(null);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient()

  const fetchUserProfile = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error:', error);
      alert('Error loading user data!');
    }

    if (data) {
      setUserProfile(data);
    }
  };
  
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          fetchUserProfile(session.user.id);
        } else {
          setUserProfile(null);
        }
      }
    );
  
    return () => {
      data?.subscription.unsubscribe();
    };
  }, [supabase]);

  return (
    <UserContext.Provider value={{ userProfile, loading }}>
      {children}
    </UserContext.Provider>
  );
};