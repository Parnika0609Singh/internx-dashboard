"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">
          InternX Login
        </h1>

        <div className="flex flex-col gap-4">
          <button
            className="w-full py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
            onClick={() => {
              login("admin");
              router.push("/dashboard");
            }}
          >
            Login as Admin
          </button>

          <button
            className="w-full py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
            onClick={() => {
              login("intern");
              router.push("/dashboard");
            }}
          >
            Login as Intern
          </button>
        </div>

        <p className="text-xs text-center text-gray-500 mt-6">
          Frontend demo • Role-based access
        </p>
      </div>
    </div>
  );
}
