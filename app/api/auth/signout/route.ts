import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  await auth.api.signOut({ headers: request.headers })
  const origin = new URL(request.url).origin
  return NextResponse.redirect(`${origin}/login`, { status: 302 })
}
