'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { useAtBottom } from '@/lib/hooks/use-at-bottom'
import { Button, type ButtonProps } from '@/components/ui/button'
import { IconPlus } from '@/components/ui/icons'

export function ButtonScrollToBottom({ className, ...props }: ButtonProps) {
  const isAtBottom = useAtBottom()

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        'z-10 bg-black transition-opacity duration-300 sm:right-8 md:top-2',
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
      <IconPlus />
      <span className="sr-only">Scroll to bottom</span>
    </Button>
  )
}