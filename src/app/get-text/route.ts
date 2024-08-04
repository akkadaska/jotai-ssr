import { NextResponse } from 'next/server';

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return NextResponse.json({
    text: `Fetched Text! Fetched at ${new Date().toString()}`,
  });
}

export const dynamic = 'force-dynamic';
