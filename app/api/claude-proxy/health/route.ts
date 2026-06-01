import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "claude-proxy",
    status: "unconfigured",
    updatedAt: new Date().toISOString(),
  });
}
