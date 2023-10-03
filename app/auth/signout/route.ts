import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })

  await supabase.auth.signOut()
  
  return NextResponse.redirect(new URL('/sign-in', req.url), {
    status: 302,
  })
}