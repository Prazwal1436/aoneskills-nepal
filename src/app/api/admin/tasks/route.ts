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
    { id: number; title: string; description: string | null; priority: string; created_at: string }[]
  >("SELECT id, title, description, priority, created_at FROM tasks ORDER BY created_at DESC");

  return NextResponse.json({ tasks: rows });
}

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const title = String(body?.title || "").trim();
  const description = String(body?.description || "").trim() || null;
  const priority = String(body?.priority || "Medium").trim() || "Medium";

  if (!title) {
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  }

  await query(
    "INSERT INTO tasks (title, description, priority) VALUES (?, ?, ?)",
    [title, description, priority]
  );

  return NextResponse.json({ ok: true });
}
