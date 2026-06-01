import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    providers: [],
    totals: {
      requests: 0,
      tokensIn: 0,
      tokensOut: 0,
      costUsd: 0,
    },
    updatedAt: new Date().toISOString(),
  });
}
