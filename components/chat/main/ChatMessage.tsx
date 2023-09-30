import { Message } from 'ai'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { CodeBlock } from '@/components/ui/codeblock'
import { MemoizedReactMarkdown } from '@/components/chat/main/Markdown'
import SolomonGPTLogo from '@/public/images/solomonGPT-logo.png'
import { ChatMessageActions } from '@/components/chat/main/ChatMessageActions'
import { useUser } from '@/app/context/UserContext'

export interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
    const userContext = useUser();
    const userProfile = userContext?.userProfile;
    
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
            'relative flex h-12 w-12 items-center justify-center',
            message.role === 'user'
              ? 'bg-transparent'
              : 'bg-transparent'
          )}
        >
            <div className="w-full h-full flex items-center justify-center">
            {message.role === 'user' && userProfile ? 
              <Image
                src={userProfile.avatar_url || ''}
                alt={`${userProfile.first_name} ${userProfile.last_name}`}
                height={40}
                width={40}
              /> : 
              <Image
                src={SolomonGPTLogo}
                alt='Solomon GPT Logo'
                height={40}
                width={40}
              />
            }      
            </div>
        </div>
        <div className="flex flex-row items-start justify-between w-full space-x-4 overflow-hidden">
          <MemoizedReactMarkdown
            className="prose break-words dark:prose-invert prose-p:leading-tight prose-pre:p-0"
            remarkPlugins={[remarkGfm, remarkMath]}
            components={{
            p({ children }) {
              return <p className="text-[#181818] text-xs md:text-sm mb-2">{children}</p>
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