import { type Message } from 'ai'

import { Separator } from '@/components/ui/separator'
import { ChatMessage } from '@/components/chat/main/ChatMessage'

export interface ChatList {
  messages: Message[]
}

export function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-2xl">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && (
            <Separator className="my-1 md:my-2" />
          )}
        </div>
      ))}
    </div>
  )
}