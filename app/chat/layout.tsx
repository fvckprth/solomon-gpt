import '@/styles/globals.css'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import type { ReactNode, ReactElement } from 'react';

import AuthProvider from '@/components/auth/AuthProvider';

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <div>
        {children}
      </div>
  );
}

RootLayout.getLayout = async function getLayout(page: ReactElement) {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const accessToken = session?.access_token || null;

  return (
    <AuthProvider accessToken={accessToken}>
      {page}
    </AuthProvider>
  );
}