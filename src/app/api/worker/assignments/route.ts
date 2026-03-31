import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { requireWorker } from "@/lib/auth";

export const runtime = "nodejs";

export async function GET() {
  const user = await requireWorker();
  if (!user || !user.worker_id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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
    [user.worker_id]
  );

  return NextResponse.json({ assignments: rows });
}
