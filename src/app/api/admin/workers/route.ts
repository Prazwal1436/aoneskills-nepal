import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET() {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const rows = await query<
    { id: number; name: string; role: string; created_at: string }[]
  >("SELECT id, name, role, created_at FROM workers ORDER BY created_at DESC");

  return NextResponse.json({ workers: rows });
}

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const name = String(body?.name || "").trim();
  const role = String(body?.role || "Worker").trim() || "Worker";

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  await query("INSERT INTO workers (name, role) VALUES (?, ?)", [name, role]);
  return NextResponse.json({ ok: true });
}
