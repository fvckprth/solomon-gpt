'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { useAtBottom } from '@/lib/hooks/use-at-bottom'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconRefresh } from '@/components/ui/icons'

export function ButtonScrollToBottom({ className, ...props }: ButtonProps) {
  const isAtBottom = useAtBottom()

  return (
    <Button
      variant="outline"
      className={cn(
        "z-100 p-2 rounded-none bg-white bg-opacity-25 backdrop-blur-sm text-sm self-center hover:opacity-50 absolute right-0 z-10",
        isAtBottom ? 'opacity-0' : 'opacity-100',
        className
      )}
      onClick={() =>
        window.scrollTo({
          top: document.body.offsetHeight,
          behavior: 'smooth'
        })
      }
      {...props}
    >
      <IconRefresh style={{ color: '#181818', opacity: 0.25 }} />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  )
}