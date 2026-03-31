import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET(req: Request) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get("limit") || 50);

  const rows = await query<
    {
      id: number;
      assignment_id: number;
      action: string;
      details: string | null;
      created_at: string;
      actor_email: string | null;
      task_title: string | null;
      worker_id: number | null;
      worker_name: string | null;
    }[]
  >(
    `SELECT al.id, al.assignment_id, al.action, al.details, al.created_at,
            u.email as actor_email,
            t.title as task_title,
            ta.worker_id,
            w.name as worker_name
     FROM assignment_audit_logs al
     LEFT JOIN users u ON u.id = al.created_by_user_id
     LEFT JOIN task_assignments ta ON ta.id = al.assignment_id
     LEFT JOIN tasks t ON t.id = ta.task_id
     LEFT JOIN workers w ON w.id = ta.worker_id
     ORDER BY al.created_at DESC
     LIMIT ?`,
    [Number.isFinite(limit) ? limit : 50]
  );

  return NextResponse.json({ logs: rows });
}
