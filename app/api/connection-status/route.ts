import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    connected: false,
    transport: "none",
    updatedAt: new Date().toISOString(),
  });
}
