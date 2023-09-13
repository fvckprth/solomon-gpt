import { Message } from 'ai'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import { cn } from '@/lib/utils'
import { CodeBlock } from '@/components/ui/codeblock'
import { MemoizedReactMarkdown } from '@/components/chat/main/Markdown'
import { IconSolomon, IconUser } from '@/components/ui/icons'
import { ChatMessageActions } from '@/components/chat/main/ChatMessageActions'

export interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
    return (
      <div
        className={cn(
          'group relative mb-4 mx-auto flex items-start space-x-4',
          message.role === 'user' ? 'bg-[#DBDBDB] bg-opacity-50 p-4' : 'border border-[#181818] border-opacity-25 p-4',
        )}
        {...props}
      >
        <div
          className={cn(
            'flex h-12 w-12 items-center justify-center',
            message.role === 'user'
              ? 'bg-white'
              : 'bg-white'
          )}
        >
          {message.role === 'user' ? <IconUser /> : <IconSolomon />}
        </div>
        <div className="flex flex-row items-start justify-between w-full space-x-4 overflow-hidden">
          <MemoizedReactMarkdown
            className="prose break-words dark:prose-invert prose-p:leading-tight prose-pre:p-0"
            remarkPlugins={[remarkGfm, remarkMath]}
            components={{
            p({ children }) {
              return <p className="text-[#181818] text-xs mb-2">{children}</p>
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] == '▍') {
                  return (
                    <span className="mt-1 animate-pulse cursor-default">▍</span>
                  )
                }

                children[0] = (children[0] as string).replace('`▍`', '▍')
              }

              const match = /language-(\w+)/.exec(className || '')

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              )
            }
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
        <ChatMessageActions message={message} />
      </div>
    </div>
  )
}