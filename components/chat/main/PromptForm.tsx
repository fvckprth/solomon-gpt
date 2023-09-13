import { UseChatHelpers } from 'ai/react'
import * as React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { IconArrowElbow } from '@/components/ui/icons'
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useEnterSubmit } from '@/lib/hooks/use-enter-submit'

export interface PromptProps
  extends Pick<UseChatHelpers, 'input' | 'setInput'> {
  onSubmit: (value: string) => Promise<void>
  isLoading: boolean
}

export function PromptForm({
    onSubmit,
    input,
    setInput,
    isLoading
  }: PromptProps) {
    const { formRef, onKeyDown } = useEnterSubmit()
    const inputRef = React.useRef<HTMLTextAreaElement>(null)
  
    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, [])
  
    return (
      <form
        onSubmit={async e => {
          e.preventDefault()
          if (!input?.trim()) {
            return
          }
          setInput('')
          await onSubmit(input)
        }}
        ref={formRef}
      >
        <div className="relative flex flex-col w-full grow rounded-none bg-transparent overflow-hidden">
          <div className='flex flex-row items-center'>
            <Textarea
              ref={inputRef}
              tabIndex={0}
              onKeyDown={onKeyDown}
              rows={1}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask Solomon."
              spellCheck={false}
              className="py-3 h-12 min-h-[12px] rounded-none w-full flex-grow resize-none bg-[#DBDBDB] bg-opacity-50 backdrop-blur-sm text-sm md:text-base focus-within:outline-none placeholder:text-[#1E1E1E] placeholder:text-opacity-25 sm:text-sm mr-3"
            />
            <div className="rounded-none">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      type="submit"
                      size="icon"
                      className='bg-[#FF2264] h-12 w-12'
                      disabled={isLoading || input === ''}
                    >
                      <IconArrowElbow />
                      <span className="sr-only">Send message</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Send message</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </form>
  )
}
