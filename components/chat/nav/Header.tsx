import * as React from 'react'
import UserMenu from '@/components/chat/nav/UserMenu'
import { cookies } from 'next/headers'
import { auth } from '@/cookieStore'

export async function Header() {
  const cookieStore = cookies()
  const session = await auth({ cookieStore })
  return (
    <div className="sticky top-0 z-50 md:mx-auto mx-4 flex h-16 items-center justify-between px-4">
      <div className="flex items-center">
        <UserMenu session={session} />      
      </div>
    </div>
  )
}

