'use client'

import { type Message } from 'ai'

import { Button } from '@/components/ui/button'
import { IconCheck, IconCopy } from '@/components/ui/icons'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'

interface ChatMessageActionsProps extends React.ComponentProps<'div'> {
  message: Message
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  const onCopy = () => {
    if (isCopied) return
    copyToClipboard(message.content)
  }

  return (
    <div
      className={cn(
        'flex items-center justify-end transition-opacity',
        className
      )}
      {...props}
    >
      <Button size="icon" className='bg-transparent hover:opacity-50' onClick={onCopy}>
        {isCopied ? 
          <IconCheck style={{ color: '#1E1E1E', opacity: 0.25 }} className="h-4 w-4" /> 
          : 
          <IconCopy style={{ color: '#1E1E1E', opacity: 0.25 }} className="h-4 w-4" />
        }
        <span className="sr-only">Copy message</span>
      </Button>
    </div>
  )
}