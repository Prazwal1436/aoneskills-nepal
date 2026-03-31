import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { query } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await query<
    { id: number; email: string; role: "admin" | "worker"; worker_id: number | null; created_at: string }[]
  >(
    "SELECT id, email, role, worker_id, created_at FROM users ORDER BY created_at DESC"
  );

  return NextResponse.json({ users: rows });
}

export async function POST(req: Request) {
  const adminCountRows = await query<{ count: number }[]>(
    "SELECT COUNT(*) as count FROM users WHERE role = 'admin'"
  );
  const hasAdmin = (adminCountRows[0]?.count || 0) > 0;
  if (hasAdmin) {
    const admin = await requireAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const body = await req.json();
  const email = String(body?.email || "").trim().toLowerCase();
  const password = String(body?.password || "");
  const role = body?.role === "admin" ? "admin" : "worker";
  const workerId = body?.workerId ? Number(body.workerId) : null;

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);
  const finalRole = hasAdmin ? role : "admin";
  await query(
    "INSERT INTO users (email, password_hash, role, worker_id) VALUES (?, ?, ?, ?)",
    [email, hash, finalRole, finalRole === "worker" ? workerId : null]
  );

  return NextResponse.json({ ok: true, role: finalRole });
}

export async function PATCH(req: Request) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const userId = Number(body?.userId);
  const newPassword = String(body?.newPassword || "");

  if (!userId || !newPassword) {
    return NextResponse.json({ error: "userId and newPassword required" }, { status: 400 });
  }

  const hash = await bcrypt.hash(newPassword, 10);
  await query("UPDATE users SET password_hash = ? WHERE id = ?", [hash, userId]);

  return NextResponse.json({ ok: true });
}
