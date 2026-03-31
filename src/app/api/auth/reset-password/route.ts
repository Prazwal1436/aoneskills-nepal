import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { query } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json();
  const token = String(body?.token || "").trim();
  const password = String(body?.password || "");

  if (!token || !password) {
    return NextResponse.json({ error: "Token and password required" }, { status: 400 });
  }

  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

  const rows = await query<{ id: number; user_id: number; expires_at: string }[]>(
    "SELECT id, user_id, expires_at FROM password_resets WHERE token_hash = ? LIMIT 1",
    [tokenHash]
  );

  const reset = rows[0];
  if (!reset) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
  }

  const expiresAt = new Date(reset.expires_at);
  if (expiresAt.getTime() < Date.now()) {
    await query("DELETE FROM password_resets WHERE id = ?", [reset.id]);
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);
  await query("UPDATE users SET password_hash = ? WHERE id = ?", [hash, reset.user_id]);
  await query("DELETE FROM password_resets WHERE id = ?", [reset.id]);

  return NextResponse.json({ ok: true });
}
