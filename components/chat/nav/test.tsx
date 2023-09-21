import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Profile = {
    id: string;
    full_name: string;
    username: string;
  };

export default function Profile() {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    fetchProfiles();
  }, []);

  async function fetchProfiles() {
    const { data, error } = await supabase.from('profiles').select('*');

    if (error) {
      console.error('Error fetching profiles:', error);
    } else {
      setProfiles(data);
    }
  }

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <h2>{profile.full_name}</h2>
          <p>{profile.username}</p>
        </div>
      ))}
    </div>
  );
}