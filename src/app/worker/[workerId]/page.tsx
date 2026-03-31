"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WorkerRedirectPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/worker");
  }, []);

  return null;
}
