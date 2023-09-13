import React from 'react'

import { cn } from '@/lib/utils'
import Link from 'next/link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'text-left text-sm leading-tight text-[#1E1E1E] text-opacity-25',
        className
      )}
      {...props}
    >
      Internal AI-Powered assistant 
      built<span className="md:hidden"><br /></span> and designed for{' '} 
      <Link href="https://vercel.com/docs/concepts/functions/introduction" className="text-[#FF2264] underline underline-offset-4 decoration-1">
        East Park
      </Link>
      .
    </p>
  )
}