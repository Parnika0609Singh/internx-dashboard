"use client";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      {/* TOP BAR */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">Admin Dashboard</h1>
          <p className="text-gray-600">
            Manage interns, tasks and performance
          </p>
        </div>

        <input
          type="text"
          placeholder="Search interns, tasks..."
          className="w-72 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Interns" value="12" />
        <StatCard title="Active Tasks" value="28" />
        <StatCard title="Completed Tasks" value="91" />
        <StatCard title="Avg Performance" value="85%" />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* TASK MANAGEMENT */}
        <div className="xl:col-span-2 rounded-xl bg-white shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-black">
              Task Management
            </h2>
            <button className="text-sm text-blue-600 hover:underline">
              View all
            </button>
          </div>

          <div className="space-y-4">
            <TaskItem title="Complete Dashboard UI" status="In Progress" />
            <TaskItem title="Review API Integration" status="To Do" />
            <TaskItem title="Design System Setup" status="Done" />
            <TaskItem title="Database Optimization" status="In Progress" />
            <TaskItem title="Unit Testing" status="To Do" />
          </div>
        </div>

        {/* PERFORMANCE */}
        <div className="rounded-xl bg-white shadow p-6">
          <h2 className="text-xl font-semibold text-black mb-2">
            Performance Overview
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Average intern performance
          </p>

          {/* FAKE GRAPH */}
          <div className="relative h-48 rounded-lg bg-blue-50 flex items-end p-4 gap-3">
            <Bar height="40%" />
            <Bar height="55%" />
            <Bar height="50%" />
            <Bar height="70%" />
            <Bar height="85%" />
            <Bar height="78%" />
          </div>

          <p className="mt-4 text-sm text-gray-700">
            <span className="font-semibold text-blue-600">85%</span> current
            average score
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl bg-white shadow p-6">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="mt-2 text-2xl font-bold text-black">{value}</p>
    </div>
  );
}

function TaskItem({
  title,
  status,
}: {
  title: string;
  status: "In Progress" | "To Do" | "Done";
}) {
  const statusColor =
    status === "Done"
      ? "bg-green-100 text-green-700"
      : status === "In Progress"
      ? "bg-blue-100 text-blue-700"
      : "bg-gray-100 text-gray-700";

  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3">
      <p className="text-black font-medium">{title}</p>
      <span
        className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}
      >
        {status}
      </span>
    </div>
  );
}

function Bar({ height }: { height: string }) {
  return (
    <div
      className="w-full rounded bg-blue-600"
      style={{ height }}
    />
  );
}

