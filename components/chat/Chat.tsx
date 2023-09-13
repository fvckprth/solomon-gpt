'use client'

import { useChat, Message } from 'ai/react'
import { cn } from '@/lib/utils'
import { ChatList } from '@/components/chat/main/ChatList'
import { ChatPanel } from '@/components/chat/main/ChatPanel'
import Examples from '@/components/chat/main/Examples'
import { ChatScrollAnchor } from '@/components/chat/main/ChatScrollAnchor'
import WelcomeBox from './main/WelcomeBox'
import { useLocalStorage } from '@/lib/hooks/use-local-storage'
import { useState } from 'react'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string
}

export function Chat({ id, initialMessages, className }: ChatProps) {
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
        }
      })

    return (
    <div>
        <div className={cn('md:mx-auto mx-4 flex flex-col justify-between pb-[200px] pt-4 md:pt-10', className)}>
          {messages.length ? (
            <div>
              <ChatList messages={messages} />
              <ChatScrollAnchor trackVisibility={isLoading} />
            </div>
          ) : (
            <div>
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
        />
      </div>
    )
}