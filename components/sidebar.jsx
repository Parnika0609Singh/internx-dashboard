"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 min-h-screen bg-gray-900 text-white flex flex-col p-6">
      <h2 className="text-xl font-bold mb-8">InternX</h2>

      <nav className="flex flex-col gap-3 text-sm">
        <Link
          href="/dashboard"
          className="rounded-lg px-3 py-2 hover:bg-gray-800 transition"
        >
          Dashboard
        </Link>

        <Link
          href="/dashboard/projects"
          className="rounded-lg px-3 py-2 hover:bg-gray-800 transition"
        >
          Projects
        </Link>
      </nav>

      <div className="mt-auto text-xs text-gray-400">
        {user?.role === "admin" ? "Admin View" : "Intern View"}
      </div>
    </aside>
  );
}
