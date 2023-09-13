'use client'

import { useChat } from 'ai/react'
import { Input } from '@/components/ui/input'
import SolomonLogo from '@/components/chat/main/SolomonLogo'

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat()
    return (
        <div className='bg-white'>
            {messages.map(message => (
                <div
                    key={message.id}
                    className={`border-t border-black/10 ${
                    message.role === "assistant" && "bg-gray-50"
                    }`}
                >
                <div className="max-w-3xl mx-auto py-6 flex">
                    {message.role === "assistant" && <SolomonLogo />}
                    <span className="ml-3">{message.content}</span>
                </div>
                </div>
            ))}

            <form className='fixed inset-x-0 bottom-10' onSubmit={handleSubmit}>
                <Input 
                    className='max-w-3xl shadow-xl w-full mx-auto py-8 flex h-10 rounded-none border border-input bg-background px-3 text-sm ring-offset-background'
                    placeholder='Ask Solomon' 
                    value={input} 
                    onChange={handleInputChange} />
            </form>
        </div>
    )
}