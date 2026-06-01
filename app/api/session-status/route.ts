import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionKey = searchParams.get("sessionKey") ?? "main";

  return NextResponse.json({
    ok: true,
    sessionKey,
    status: "idle",
    connected: false,
    updatedAt: new Date().toISOString(),
  });
}
