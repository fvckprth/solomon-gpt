import { NextResponse } from 'next/server';
import redis from "@/lib/redis";

export const runtime = 'edge';

export async function GET() {
  const views = await redis.get("pageViews");
  return NextResponse.json({ count: Number(views) || 0 });
}

export async function POST() {
  const newViews = await redis.incr("pageViews");
  return NextResponse.json({ message: 'Page view count incremented', count: newViews });
}