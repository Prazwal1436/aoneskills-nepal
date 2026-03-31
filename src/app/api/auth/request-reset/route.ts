import { NextResponse } from "next/server";
import crypto from "crypto";
import { query } from "@/lib/db";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json();
  const email = String(body?.email || "").trim().toLowerCase();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const users = await query<{ id: number; email: string }[]>(
    "SELECT id, email FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  if (users.length === 0) {
    // Do not reveal user existence
    return NextResponse.json({ ok: true });
  }

  const user = users[0];
  const token = crypto.randomBytes(32).toString("hex");
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

  await query("DELETE FROM password_resets WHERE user_id = ?", [user.id]);
  await query(
    "INSERT INTO password_resets (user_id, token_hash, expires_at) VALUES (?, ?, ?)",
    [user.id, tokenHash, expiresAt]
  );

  const baseUrl = process.env.APP_URL || "http://localhost:3000";
  const resetUrl = `${baseUrl}/reset-password?token=${token}`;

  await sendMail({
    to: user.email,
    subject: "Reset your password",
    html: `
      <p>You requested a password reset.</p>
      <p>Click the link below to set a new password:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>This link will expire in 1 hour.</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
