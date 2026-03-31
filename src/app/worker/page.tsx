"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Assignment = {
  id: number;
  task_id: number;
  title: string;
  priority: string;
  status: string;
  assigned_at: string;
};

export default function WorkerPage() {
  const router = useRouter();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadAssignments() {
    const res = await fetch("/api/worker/assignments");
    if (!res.ok) {
      router.push("/login");
      return;
    }
    const json = await res.json();
    setAssignments(json.assignments || []);
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      const sessionRes = await fetch("/api/auth/session");
      if (!sessionRes.ok) {
        router.push("/login");
        return;
      }
      const sessionJson = await sessionRes.json();
      if (sessionJson?.user?.role !== "worker") {
        router.push("/login");
        return;
      }
      await loadAssignments();
    })();
  }, []);

  async function updateStatus(assignmentId: number, status: string) {
    await fetch(`/api/worker/assignments/${assignmentId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    await loadAssignments();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Worker Panel</h1>
            <p className="text-slate-600">Your assigned tasks.</p>
          </div>
          <button
            onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              router.push("/login");
            }}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Logout
          </button>
        </div>

        {loading ? (
          <div>Loading tasks...</div>
        ) : assignments.length === 0 ? (
          <div className="bg-white p-6 rounded-xl border border-slate-200">No tasks assigned yet.</div>
        ) : (
          <div className="space-y-4">
            {assignments.map((a) => (
              <div key={a.id} className="bg-white p-6 rounded-xl border border-slate-200">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{a.title}</div>
                    <div className="text-sm text-slate-600">Priority: {a.priority}</div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700">{a.status}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["New", "In Progress", "Blocked", "Done"].map((s) => (
                    <button
                      key={s}
                      onClick={() => updateStatus(a.id, s)}
                      className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                        a.status === s
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-white text-slate-700 border-slate-300 hover:border-blue-400"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
