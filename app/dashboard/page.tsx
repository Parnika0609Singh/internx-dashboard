"use client";
import { useAuth } from "@/context/AuthContext";
import { projects } from "@/data/projects";

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) return <p>Please login</p>;

  const visibleProjects =
    user.role === "admin"
      ? projects
      : projects.filter(p => p.assignedTo === "intern");

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user.role === "admin" ? "Admin" : "Intern"}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleProjects.map(project => (
          <div
            key={project.id}
            className="border rounded-lg p-4 shadow-sm"
          >
            <h2 className="font-semibold text-lg">
              {project.title}
            </h2>
            <p className="text-sm text-gray-500">
              Assigned to: {project.assignedTo}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
