'use client'

import { Chat } from '@/components/chat/Chat'

export default function Test() {
  return (
    <div>
      <div className='absolute bg-white top-0 left-0 w-full h-full'>
        <Chat />
      </div>
    </div>
  )
}