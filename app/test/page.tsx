'use client'

import { Chat } from '@/components/chat/Chat'

export const runtime = 'edge'

export default function Test() {
  return (
    <div>
      <div className='absolute bg-white top-0 left-0 w-screen h-screen'>
        <Chat />
      </div>
    </div>
  )
}