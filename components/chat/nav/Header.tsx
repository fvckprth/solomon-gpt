import * as React from 'react'
import UserMenu from '@/components/chat/nav/UserMenu'
import { cookies } from 'next/headers'
import { auth } from '@/cookieStore'

export async function Header() {
  const cookieStore = cookies()
  await auth({ cookieStore })
  return (
    <div className="fixed z-50 p-4 items-center justify-between">
      <div className="flex items-center">
        <UserMenu />      
      </div>
    </div>
  )
}

