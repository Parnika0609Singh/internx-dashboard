"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "@/components/sidebar";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
      return;
    }

    // Redirect base /dashboard to role-specific dashboard
    if (pathname === "/dashboard") {
      router.replace(
        user.role === "admin"
          ? "/dashboard/admin"
          : "/dashboard/intern"
      );
    }
  }, [user, pathname, router]);

  if (!user) return null;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}

