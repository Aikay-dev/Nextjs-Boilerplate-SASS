/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* Core */
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { amount = 1 } = body;

  // simulate IO latency
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((r) => setTimeout(r, 500));

  return NextResponse.json({ data: amount });
}
