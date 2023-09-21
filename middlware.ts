import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse, NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data: { session } } = await supabase.auth.getSession()

  // if user is signed in and the current path is / redirect the user to /chat
  if (session && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/chat', req.url))
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!session && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  return res
}
export const config = {
  matcher: ['/', '/chat'],
}