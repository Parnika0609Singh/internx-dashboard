"use client";

export default function InternDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-black">Good morning 👋</h1>
        <p className="text-gray-600">Here’s your current progress</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Total Projects", value: 6 },
          { title: "Urgent Deadlines", value: 2 },
          { title: "In Progress", value: 3 },
          { title: "Completed", value: 1 },
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

      {/* Projects */}
      <div>
        <h2 className="text-xl font-semibold text-black mb-4">
          Your Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Website Redesign", progress: 65 },
            { name: "Customer Feedback Analysis", progress: 90 },
            { name: "Internal Documentation", progress: 40 },
          ].map((project) => (
            <div
              key={project.name}
              className="rounded-xl bg-white p-6 shadow border"
            >
              <h3 className="font-semibold text-black">{project.name}</h3>

              <div className="mt-4">
                <div className="h-2 w-full rounded bg-gray-200">
                  <div
                    className="h-2 rounded bg-blue-600"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Progress: {project.progress}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
