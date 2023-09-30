import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies })
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  

  if (code) {
    const result = await supabase.auth.exchangeCodeForSession(code)
    console.log('Exchange Code For Session Result:', result) // Log the result
  }

  return NextResponse.redirect(new URL('/chat', req.url))
}