import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth";

export const runtime = "nodejs";

export default async function WorkerLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user || user.role !== "worker") {
    redirect("/login");
  }
  return children as React.ReactElement;
}
