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
  const workerId = Number(searchParams.get("workerId"));

  if (!workerId) {
    return NextResponse.json({ error: "workerId is required" }, { status: 400 });
  }

  const rows = await query<
    {
      id: number;
      task_id: number;
      title: string;
      priority: string;
      status: string;
      assigned_at: string;
      updated_at: string;
    }[]
  >(
    `SELECT ta.id, ta.task_id, t.title, t.priority, ta.status, ta.assigned_at, ta.updated_at
     FROM task_assignments ta
     JOIN tasks t ON t.id = ta.task_id
     WHERE ta.worker_id = ?
     ORDER BY ta.assigned_at DESC`,
    [workerId]
  );

  return NextResponse.json({ assignments: rows });
}

export async function POST(req: Request) {
  const admin = await requireAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const workerId = Number(body?.workerId);
  const taskIds = Array.isArray(body?.taskIds) ? body.taskIds.map(Number) : [];

  if (!workerId || taskIds.length === 0) {
    return NextResponse.json({ error: "workerId and taskIds are required" }, { status: 400 });
  }

  const values = taskIds.map((taskId: number) => [taskId, workerId]);

  await query(
    "INSERT IGNORE INTO task_assignments (task_id, worker_id) VALUES ?",
    [values]
  );

  const inserted = await query<{ id: number }[]>(
    "SELECT id FROM task_assignments WHERE worker_id = ? AND task_id IN (?)",
    [workerId, taskIds]
  );

  if (inserted.length > 0) {
    const auditValues = inserted.map((row) => [
      row.id,
      "assigned",
      `Assigned by admin ${admin.email} to worker ${workerId}`,
      admin.id,
    ]);
    await query(
      "INSERT INTO assignment_audit_logs (assignment_id, action, details, created_by_user_id) VALUES ?",
      [auditValues]
    );
  }

  return NextResponse.json({ ok: true });
}
