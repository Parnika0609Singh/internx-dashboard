"use client";

import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const { user } = useAuth();

  if (!user) return null; // safety

  const role = user.role;

  return (
    <aside className="w-64 bg-blue-600 text-white flex flex-col">
      {/* HEADER */}
      <div className="px-6 py-6 border-b border-blue-500">
        <h1 className="text-2xl font-bold">InternX</h1>
        <p className="text-sm opacity-80">
          {role === "admin" ? "Admin Portal" : "Intern Dashboard"}
        </p>
      </div>

      {/* NAV */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <SidebarItem label="Dashboard" />

        {role === "admin" && (
          <>
            <div className="h-px bg-blue-500 my-4" />
            <SidebarItem label="Interns" />
            <SidebarItem label="Tasks" />
            <SidebarItem label="Performance" />
            <SidebarItem label="Reports" />
          </>
        )}

        {role === "intern" && (
          <>
            <div className="h-px bg-blue-500 my-4" />
            <SidebarItem label="My Tasks" />
            <SidebarItem label="Progress" />
          </>
        )}
      </nav>

      {/* FOOTER */}
      <div className="px-4 py-4 border-t border-blue-500 text-sm opacity-80">
        © 2026 InternX
      </div>
    </aside>
  );
}

function SidebarItem({ label }: { label: string }) {
  return (
    <div className="rounded-lg px-4 py-2 hover:bg-blue-500 cursor-pointer transition">
      {label}
    </div>
  );
}

