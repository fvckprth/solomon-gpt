import { NextResponse } from 'next/server';
import { getData, setData } from "../../../lib/redis";

export const runtime = 'edge';

export async function GET() {
  const views = (await getData("pageViews")) ?? 0;
  return NextResponse.json({ count: views || 0 });
}

export async function POST() {
  const currentViews = Number(await getData("pageViews"));
  await setData("pageViews", (currentViews + 1).toString());
  return NextResponse.json({ message: 'Page view count incremented' });
}

