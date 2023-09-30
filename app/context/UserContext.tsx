"use client"

import React, { createContext, useContext, useCallback, useEffect, useState } from 'react';
import { Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';

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
  const supabase = createClientComponentClient(); 

  const getCurrentSession = async () => {
    const res = await supabase.auth.getSession();
    if (res && res.data.session) {
      return res.data.session;
    }
    setUserProfile(null);
    return null;
  };

  const getCurrentProfile = useCallback(async () => {
    try {
      setLoading(true);
      const session = await getCurrentSession();
      const user = session?.user;

      if (!user?.id) {
        console.log('User ID is not available');
        return;
      }

      const { data, error, status } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error loading user data!');
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <UserContext.Provider value={{ userProfile, loading }}>
      {children}
    </UserContext.Provider>
  );
};
