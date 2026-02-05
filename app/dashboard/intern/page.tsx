"use client";

export default function AdminDashboard() {
  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Good morning,</p>
          <h1 className="text-3xl font-bold text-black">Admin User</h1>
        </div>

        <div className="flex items-center gap-4">
          <input
            placeholder="Search projects..."
            className="w-72 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
          />

          <div className="relative">
            <div className="h-9 w-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              AU
            </div>
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-600 text-xs text-white flex items-center justify-center">
              3
            </span>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Projects" value="6" subtitle="2 added this week" />
        <StatCard title="Urgent Deadlines" value="2" subtitle="Due within 3 days" />
        <StatCard title="In Progress" value="3" subtitle="" />
        <StatCard title="Completed" value="1" subtitle="This month" />
      </div>

      {/* PROJECTS */}
      <div>
        <h2 className="text-2xl font-semibold text-black">Your Projects</h2>
        <p className="text-gray-600 mb-6">
          Track progress and manage assigned tasks
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Website Redesign"
            priority="High Priority"
            status="In Progress"
            progress={65}
            daysLeft={5}
          />

          <ProjectCard
            title="Customer Feedback Analysis"
            priority="High Priority"
            status="In Review"
            progress={90}
            daysLeft={3}
          />

          <ProjectCard
            title="Internal Documentation"
            priority="Medium Priority"
            status="In Progress"
            progress={40}
            daysLeft={10}
          />
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="mt-2 text-3xl font-bold text-black">{value}</p>
      {subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
}

function ProjectCard({
  title,
  priority,
  status,
  progress,
  daysLeft,
}: {
  title: string;
  priority: string;
  status: string;
  progress: number;
  daysLeft: number;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-black">{title}</h3>

      <div className="mt-2 flex gap-2">
        <Badge text={priority} />
        <Badge text={status} />
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Progress
      </p>

      <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-blue-600"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 text-sm text-gray-600">
        {daysLeft} days left
      </div>
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-blue-600 px-3 py-1 text-xs font-medium text-blue-600">
      {text}
    </span>
  );
}
