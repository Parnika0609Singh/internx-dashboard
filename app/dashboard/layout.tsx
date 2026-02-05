"use client";

type Props = {
  role: "admin" | "intern";
};

export default function Sidebar({ role }: Props) {
  return (
    <aside className="w-64 bg-blue-600 text-white flex flex-col">
      <div className="px-6 py-6 border-b border-blue-500">
        <h1 className="text-2xl font-bold">InternX</h1>
        <p className="text-sm opacity-80">
          {role === "admin" ? "Admin Portal" : "Intern Dashboard"}
        </p>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <SidebarItem label="Dashboard" />
        {role === "admin" && (
          <>
            <SidebarItem label="Interns" />
            <SidebarItem label="Tasks" />
            <SidebarItem label="Performance" />
            <SidebarItem label="Reports" />
          </>
        )}
        {role === "intern" && (
          <>
            <SidebarItem label="My Tasks" />
            <SidebarItem label="Progress" />
          </>
        )}
      </nav>

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

