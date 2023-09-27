'use client'

import { useChat, Message } from 'ai/react'
import { useEffect } from 'react'
import { cn } from '@/lib/utils'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ChatList } from '@/components/chat/main/ChatList'
import { ChatPanel } from '@/components/chat/main/ChatPanel'
import Examples from '@/components/chat/main/Examples'
import { ChatScrollAnchor } from '@/components/chat/main/ChatScrollAnchor'
import WelcomeBox from './main/WelcomeBox'
import { addChat } from '@/app/actions'
import { CreateMessage } from 'ai'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string,
  userId?: string
}

export function Chat({ id, initialMessages, className, userId }: ChatProps) {
    const { messages, append, reload, stop, isLoading, input, setInput } =
      useChat({
        initialMessages,
        id,
        body: {
          id,
        },
        onResponse(response) {
          if (response.status === 401) {
            throw new Error(response.statusText)
          }
        },
        onFinish(message: Message) {
          console.log('finished message ', message)
          addToChatHistory(message);
        }
    })


    const addToChatHistory = async (message : Message | CreateMessage) => {
      const response = await addChat(userId, message.role, message.content)
      console.log('adding new message: ', response);
    }

    useEffect(() => {
        if (messages.length === 0) {
          document.body.style.overflow = 'hidden';
        }
        return () => {
          document.body.style.overflow = 'auto';
        }
      }, [messages.length]);
    
    console.log('messages:  ', messages)

    return (
    <div>
        <div className={cn('md:mx-auto mx-4 pb-[200px] pt-4 md:pt-10', className)}>
          {messages.length ? (
            <div>
              <ChatList messages={messages} />
              <ChatScrollAnchor trackVisibility={isLoading} />
            </div>
          ) : (
            <div className='h-screen flex grow flex-col justify-around w-full pb-[80px]'>
              <WelcomeBox />
              <Examples setInput={setInput} />
            </div>
          )}
        </div>
        <ChatPanel
          id={id}
          isLoading={isLoading}
          stop={stop}
          append={append}
          reload={reload}
          messages={messages}
          input={input}
          setInput={setInput}
          addToChatHistory={addToChatHistory}
        />
      </div>
    )
}