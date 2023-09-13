import { type UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { PromptForm } from '@/components/chat/main/PromptForm'
import { ButtonScrollToBottom } from '@/components/chat/main/ButtonScrollToBottom'
import { IconRefresh, IconStop } from '@/components/ui/icons'
import { FooterText } from '@/components/chat/footer/ChatFooter'

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | 'append'
    | 'isLoading'
    | 'reload'
    | 'messages'
    | 'stop'
    | 'input'
    | 'setInput'
  > {
  id?: string
}

export function ChatPanel({
  id,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages
}: ChatPanelProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 mx-4">
      <ButtonScrollToBottom />
      <div className="mx-auto sm:max-w-2xl">
        <div className="flex items-center justify-start text-[#181818] text-opacity-25">
          {isLoading ? (
            <Button
              variant="outline"
              onClick={() => stop()}
              className="p-2 rounded-none bg-white bg-opacity-25 backdrop-blur-sm text-sm self-center hover:opacity-50"
            >
              <IconStop className="mr-1" style={{ color: '#181818', opacity: 0.25 }} />
              Stop generating
            </Button>
          ) : (
            messages?.length > 0 && (
              <Button
                variant="outline"
                onClick={() => reload()}
                className="p-2 rounded-none bg-white bg-opacity-25 backdrop-blur-sm text-sm self-center hover:opacity-50"
              >
                <IconRefresh className="mr-1" style={{ color: '#181818', opacity: 0.25 }} />
                Regenerate response
              </Button>
            )
          )}
        </div>
        <div className="space-y-2 bg-gradient-to-t from-white to-transparent bg-opacity-25 py-4">
          <PromptForm
            onSubmit={async value => {
              await append({
                id,
                content: value,
                role: 'user'
              })
            }}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
          />
          <FooterText />
        </div>
      </div>
    </div>
  )
}