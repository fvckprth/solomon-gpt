import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Button, buttonVariants } from '@/components/ui/button'
import { IconPlus } from '@/components/ui/icons'
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export function NewChatButton() {
  const router = useRouter()

  return (
    <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={e => {
            e.preventDefault()
            router.refresh()
            router.push('/')
          }}
          className={cn(
            buttonVariants({ size: 'sm', variant: 'outline' }),
            'h-8 w-8 rounded-full bg-black p-0'
          )}
        >
          <IconPlus />
          <span className="sr-only">New Chat</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>New Chat</TooltipContent>
    </Tooltip>
    </TooltipProvider>
  )
}
