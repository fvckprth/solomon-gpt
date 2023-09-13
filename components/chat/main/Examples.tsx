import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'

const exampleMessages = [
  {
    preview: 'PRODUCT',
    heading: 'What is the value of P307?',
    message: `Can you explain the importance and features of P307 in East Park's assets held?`
  },
  {
    preview: 'TEAM',
    heading: 'Describe the expertise of the team?',
    message: `Who are the key members of East Park's team, and what are their backgrounds and roles?`
  },
  {
    preview: 'DEVELOPMENT',
    heading: 'Breakdown the technology stack.',
    message: `What technologies and tools does East Park use in its development process?`
  },
  {
    preview: 'VISION',
    heading: 'Elaborate on East Park’s vision',
    message: `What is East Park's long-term vision and mission? How does SolomonGPT align with that vision?`
  },
]

const Examples: React.FC<Pick<UseChatHelpers, 'setInput'>> = ({ setInput }) => {
  return (
    <div className="md:mx-auto md:max-w-2xl">
        <div className="mt-4 grid grid-cols-2 gap-2 md:gap-4 items-center justify-center h-full">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="outline"
              className="p-0 justify-start items-start w-full h-full border border-[#1E1E1E] border-opacity-25 hover:bg-white"
              onClick={() => setInput(message.message)}
            >
            <div className='flex flex-col p-2 md:p-4'>
              <div className="inline-flex">
                <div className="p-1 bg-[#FF2264] text-custom-white text-xs md:text-xs text-left leading-tight">
                  {message.preview}
                </div>
              </div>
              <div className='mt-1 md:mt-2 text-[#1E1E1E] text-xs md:text-base text-left	text-opacity-50'>
               {message.heading}
              </div>
            </div>
            </Button>
          ))}
        </div>
    </div>
  )
}

export default Examples;
