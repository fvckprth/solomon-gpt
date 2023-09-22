import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Header from '@/components/chat/nav/Header';
import { Chat } from '@/components/chat/Chat';

export default async function ChatPage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: {session} } = await supabase.auth.getSession();

  if (!session) {
    redirect('/sign-in');
  }

  return (
    <div>
      <Header user={session?.user} />
      <div className='absolute bg-white top-0 left-0 w-full h-screen'>
        <Chat />
      </div>
    </div>
  )
}