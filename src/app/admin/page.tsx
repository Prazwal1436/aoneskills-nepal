"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Worker = {
  id: number;
  name: string;
  role: string;
};

type Task = {
  id: number;
  title: string;
  description: string | null;
  priority: string;
};

type Assignment = {
  id: number;
  task_id: number;
  title: string;
  priority: string;
  status: string;
  assigned_at: string;
};

type User = {
  id: number;
  email: string;
  role: "admin" | "worker";
  worker_id: number | null;
};

type AuditLog = {
  id: number;
  assignment_id: number;
  action: string;
  details: string | null;
  created_at: string;
  actor_email: string | null;
  task_title: string | null;
  worker_id: number | null;
  worker_name: string | null;
};

export default function AdminPage() {
  const router = useRouter();
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  const [newWorkerName, setNewWorkerName] = useState("");
  const [newWorkerRole, setNewWorkerRole] = useState("Worker");

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("Medium");

  const [selectedWorkerId, setSelectedWorkerId] = useState<number | "">("");
  const [selectedTaskIds, setSelectedTaskIds] = useState<number[]>([]);
  const [message, setMessage] = useState<string | null>(null);

  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [newUserRole, setNewUserRole] = useState<"admin" | "worker">("worker");
  const [newUserWorkerId, setNewUserWorkerId] = useState<number | "">("");
  const [passwordUpdate, setPasswordUpdate] = useState<{ userId: number | ""; password: string }>({
    userId: "",
    password: "",
  });

  const selectedWorker = useMemo(
    () => workers.find((w) => w.id === selectedWorkerId),
    [workers, selectedWorkerId]
  );

  async function loadData() {
    setLoading(true);
    const sessionRes = await fetch("/api/auth/session");
    if (!sessionRes.ok) {
      router.push("/login");
      return;
    }
    const sessionJson = await sessionRes.json();
    if (sessionJson?.user?.role !== "admin") {
      router.push("/login");
      return;
    }

    const [wRes, tRes] = await Promise.all([
      fetch("/api/admin/workers"),
      fetch("/api/admin/tasks"),
    ]);

    const wJson = await wRes.json();
    const tJson = await tRes.json();

    setWorkers(wJson.workers || []);
    setTasks(tJson.tasks || []);
    setLoading(false);
  }

  async function loadAssignments(workerId: number) {
    const res = await fetch(`/api/admin/assignments?workerId=${workerId}`);
    const json = await res.json();
    setAssignments(json.assignments || []);
  }

  async function loadUsers() {
    const res = await fetch("/api/admin/users");
    const json = await res.json();
    setUsers(json.users || []);
  }

  async function loadAuditLogs() {
    const res = await fetch("/api/admin/audit-logs?limit=100");
    const json = await res.json();
    setAuditLogs(json.logs || []);
  }

  useEffect(() => {
    loadData().then(() => Promise.all([loadUsers(), loadAuditLogs()]));
  }, []);

  useEffect(() => {
    if (typeof selectedWorkerId === "number") {
      loadAssignments(selectedWorkerId);
    } else {
      setAssignments([]);
    }
  }, [selectedWorkerId]);

  async function createWorker(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const res = await fetch("/api/admin/workers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newWorkerName, role: newWorkerRole }),
    });

    if (!res.ok) {
      const json = await res.json();
      setMessage(json.error || "Failed to create worker");
      return;
    }

    setNewWorkerName("");
    await loadData();
    await loadUsers();
    setMessage("Worker created");
  }

  async function createTask(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const res = await fetch("/api/admin/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTaskTitle,
        description: newTaskDesc,
        priority: newTaskPriority,
      }),
    });

    if (!res.ok) {
      const json = await res.json();
      setMessage(json.error || "Failed to create task");
      return;
    }

    setNewTaskTitle("");
    setNewTaskDesc("");
    setNewTaskPriority("Medium");
    await loadData();
    setMessage("Task created");
  }

  async function assignTasks(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (typeof selectedWorkerId !== "number" || selectedTaskIds.length === 0) {
      setMessage("Select a worker and at least one task");
      return;
    }

    const res = await fetch("/api/admin/assignments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ workerId: selectedWorkerId, taskIds: selectedTaskIds }),
    });

    if (!res.ok) {
      const json = await res.json();
      setMessage(json.error || "Failed to assign tasks");
      return;
    }

    setSelectedTaskIds([]);
    await loadAssignments(selectedWorkerId);
    await loadAuditLogs();
    setMessage("Tasks assigned");
  }

  async function createUser(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const res = await fetch("/api/admin/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: newUserEmail,
        password: newUserPassword,
        role: newUserRole,
        workerId: newUserRole === "worker" ? newUserWorkerId || null : null,
      }),
    });

    const json = await res.json();
    if (!res.ok) {
      setMessage(json.error || "Failed to create user");
      return;
    }

    setNewUserEmail("");
    setNewUserPassword("");
    setNewUserRole("worker");
    setNewUserWorkerId("");
    await loadUsers();
    setMessage("User created");
  }

  async function updateUserPassword(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const res = await fetch("/api/admin/users", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: passwordUpdate.userId,
        newPassword: passwordUpdate.password,
      }),
    });

    const json = await res.json();
    if (!res.ok) {
      setMessage(json.error || "Failed to update password");
      return;
    }

    setPasswordUpdate({ userId: "", password: "" });
    setMessage("Password updated");
  }

  if (loading) {
    return <div className="p-8">Loading admin panel...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Panel</h1>
            <p className="text-slate-600">Create workers, create tasks, and assign multiple tasks to a worker.</p>
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

        {message && (
          <div className="mb-6 rounded-lg bg-blue-50 border border-blue-200 px-4 py-3 text-blue-700">
            {message}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={createWorker} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Create Worker</h2>
            <div className="space-y-4">
              <input
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="Worker name"
                value={newWorkerName}
                onChange={(e) => setNewWorkerName(e.target.value)}
              />
              <input
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="Role (e.g., Developer, Designer)"
                value={newWorkerRole}
                onChange={(e) => setNewWorkerRole(e.target.value)}
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add Worker
              </button>
            </div>
          </form>

          <form onSubmit={createTask} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Create Task</h2>
            <div className="space-y-4">
              <input
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="Task title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <textarea
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="Task description"
                value={newTaskDesc}
                onChange={(e) => setNewTaskDesc(e.target.value)}
                rows={3}
              />
              <select
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                value={newTaskPriority}
                onChange={(e) => setNewTaskPriority(e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Add Task
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Assign Tasks to Worker</h2>
          <form onSubmit={assignTasks} className="space-y-4">
            <select
              className="w-full border border-slate-300 rounded-lg px-3 py-2"
              value={selectedWorkerId}
              onChange={(e) => setSelectedWorkerId(e.target.value ? Number(e.target.value) : "")}
            >
              <option value="">Select worker</option>
              {workers.map((w) => (
                <option key={w.id} value={w.id}>
                  {w.name} ({w.role})
                </option>
              ))}
            </select>

            <div className="grid md:grid-cols-2 gap-3">
              {tasks.map((task) => (
                <label key={task.id} className="flex items-start gap-3 border border-slate-200 rounded-lg p-3">
                  <input
                    type="checkbox"
                    checked={selectedTaskIds.includes(task.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTaskIds((prev) => [...prev, task.id]);
                      } else {
                        setSelectedTaskIds((prev) => prev.filter((id) => id !== task.id));
                      }
                    }}
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{task.title}</div>
                    <div className="text-sm text-slate-600">{task.priority}</div>
                  </div>
                </label>
              ))}
            </div>

            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
              Assign Selected Tasks
            </button>
          </form>
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">User Accounts (Email/Password)</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <form onSubmit={createUser} className="space-y-4">
              <input
                type="email"
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="Email"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="Password"
                value={newUserPassword}
                onChange={(e) => setNewUserPassword(e.target.value)}
                required
              />
              <select
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                value={newUserRole}
                onChange={(e) => setNewUserRole(e.target.value as "admin" | "worker")}
              >
                <option value="worker">Worker</option>
                <option value="admin">Admin</option>
              </select>
              {newUserRole === "worker" && (
                <select
                  className="w-full border border-slate-300 rounded-lg px-3 py-2"
                  value={newUserWorkerId}
                  onChange={(e) => setNewUserWorkerId(e.target.value ? Number(e.target.value) : "")}
                >
                  <option value="">Link to worker profile</option>
                  {workers.map((w) => (
                    <option key={w.id} value={w.id}>
                      {w.name} ({w.role})
                    </option>
                  ))}
                </select>
              )}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Create User
              </button>
            </form>

            <form onSubmit={updateUserPassword} className="space-y-4">
              <select
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                value={passwordUpdate.userId}
                onChange={(e) =>
                  setPasswordUpdate((prev) => ({
                    ...prev,
                    userId: e.target.value ? Number(e.target.value) : "",
                  }))
                }
              >
                <option value="">Select user</option>
                {users.map((u) => (
                  <option key={u.id} value={u.id}>
                    {u.email} ({u.role})
                  </option>
                ))}
              </select>
              <input
                type="password"
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
                placeholder="New password"
                value={passwordUpdate.password}
                onChange={(e) =>
                  setPasswordUpdate((prev) => ({ ...prev, password: e.target.value }))
                }
              />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
                Update Password
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Assignment Audit Logs</h2>
            <button
              onClick={loadAuditLogs}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Refresh
            </button>
          </div>
          {auditLogs.length === 0 ? (
            <p className="text-slate-500">No audit logs yet.</p>
          ) : (
            <div className="space-y-3">
              {auditLogs.map((log) => (
                <div key={log.id} className="border border-slate-200 rounded-lg p-3">
                  <div className="text-sm text-slate-500">{new Date(log.created_at).toLocaleString()}</div>
                  <div className="font-semibold text-slate-900">
                    {log.action}
                    {log.task_title ? ` • ${log.task_title}` : ""}
                    {log.worker_name ? ` • ${log.worker_name}` : ""}
                  </div>
                  <div className="text-sm text-slate-600">{log.details}</div>
                  {log.actor_email && (
                    <div className="text-xs text-slate-500">by {log.actor_email}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Assigned Tasks</h2>
          {selectedWorker ? (
            <>
              <div className="mb-4 text-slate-700">
                Worker: <span className="font-semibold">{selectedWorker.name}</span> ({selectedWorker.role})
              </div>
              {assignments.length === 0 ? (
                <p className="text-slate-500">No tasks assigned yet.</p>
              ) : (
                <div className="space-y-3">
                  {assignments.map((a) => (
                    <div key={a.id} className="border border-slate-200 rounded-lg p-3 flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-slate-900">{a.title}</div>
                        <div className="text-sm text-slate-600">Priority: {a.priority}</div>
                      </div>
                      <span className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-700">{a.status}</span>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-slate-500">Select a worker to view assignments.</p>
          )}
        </div>
      </div>
    </div>
  );
}
