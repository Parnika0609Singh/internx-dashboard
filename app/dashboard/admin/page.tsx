"use client";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-black">
            Admin Overview
          </h1>
          <p className="text-gray-600">
            Monitor interns and task performance
          </p>
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Active Interns", value: 12 },
          { title: "Tasks Assigned", value: 28 },
          { title: "Pending Reviews", value: 4 },
          { title: "Avg Performance", value: "85%" },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-xl bg-white p-6 shadow border"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="mt-2 text-3xl font-bold text-blue-600">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Task Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tasks */}
        <div className="rounded-xl bg-white p-6 shadow border">
          <h2 className="font-semibold text-black mb-4">
            Task Management
          </h2>

          {[
            { task: "Design System", status: "In Progress" },
            { task: "API Review", status: "To Do" },
            { task: "Unit Testing", status: "Done" },
          ].map((t) => (
            <div
              key={t.task}
              className="flex justify-between items-center py-3 border-b last:border-none"
            >
              <p className="text-black">{t.task}</p>
              <span className="text-sm text-blue-600 font-medium">
                {t.status}
              </span>
            </div>
          ))}
        </div>

        {/* Performance Overview */}
        <div className="rounded-xl bg-white p-6 shadow border">
          <h2 className="font-semibold text-black mb-4">
            Performance Overview
          </h2>

          <div className="h-40 flex items-end gap-3">
            {[70, 78, 75, 82, 88, 85].map((value, i) => (
              <div
                key={i}
                className="flex-1 rounded bg-blue-600"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Avg score over last 6 months
          </p>
        </div>
      </div>
    </div>
  );
}
