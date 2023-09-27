'use cli'

import { Message } from 'ai';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Header } from '@/components/chat/nav/Header';
import { Chat } from '@/components/chat/Chat';
import { loadChat } from '../actions';

export default async function ChatPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: {session} } = await supabase.auth.getSession();
  const { data: { user } } = await supabase.auth.getUser()
  if (!session) {
    redirect('/sign-in');
  }
  const initialMessages: any = await loadChat( user?.id );
  return (
    <div>
      <div className='absolute bg-white top-0 left-0 w-full h-screen'>
        <div className='mx-auto'>
          <Header />
        </div>
        <Chat initialMessages={initialMessages} userId={user?.id}/>
      </div>
    </div>
  )
}