import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import { requireWorker } from "@/lib/auth";

export const runtime = "nodejs";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const user = await requireWorker();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const assignmentId = Number(params.id);
  const body = await req.json();
  const status = String(body?.status || "").trim();

  const allowed = ["New", "In Progress", "Blocked", "Done"];
  if (!assignmentId || !allowed.includes(status)) {
    return NextResponse.json({ error: "Invalid assignment or status" }, { status: 400 });
  }

  await query(
    "UPDATE task_assignments SET status = ? WHERE id = ? AND worker_id = ?",
    [status, assignmentId, user.worker_id]
  );
  await query(
    "INSERT INTO assignment_audit_logs (assignment_id, action, details, created_by_user_id) VALUES (?, ?, ?, ?)",
    [assignmentId, "status_change", `Status set to ${status}`, user.id]
  );
  return NextResponse.json({ ok: true });
}
