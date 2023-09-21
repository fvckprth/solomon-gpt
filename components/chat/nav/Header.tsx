'use client'

import * as React from 'react'
import Link from 'next/link'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { User } from '@supabase/supabase-js';
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import UserMenu from '@/components/chat/nav/UserMenu'

type HeaderProps = {
  user: User | null;
};

const Header: React.FC<HeaderProps> = ({ user }) => {

  return (
    <header className="sticky top-0 z-50 mx-auto flex h-16 w-full shrink-0 items-center justify-between border-b bg-custom-white bg-opacity-25 px-4 backdrop-blur-sm">
      <div className="flex items-center">
        <div className="flex items-center">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Button variant="link" asChild className="-ml-2">
              <Link href="/sign-in">Login</Link>
            </Button>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <a
          target="_blank"
          href="https://github.com/thorwebdev/vercel-ai-chatbot"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          <span className="ml-2 hidden md:flex">GitHub</span>
        </a>
      </div>
    </header>
  )
}

export default Header;