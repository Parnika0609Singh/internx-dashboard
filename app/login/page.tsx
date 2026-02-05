"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth(); // ✅ correct

  return (
    <div className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center">

      {/* BACKGROUND CIRCLES */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-100 opacity-60" />
      <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-blue-50 opacity-70" />
      <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-100 opacity-50" />
      <div className="absolute top-24 right-1/4 h-40 w-40 rounded-full bg-blue-50 opacity-80" />

      {/* CARD */}
      <div className="relative z-10 flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">

        {/* LEFT */}
        <div className="w-full md:w-1/2">

          {/* HEADER */}
          <div className="bg-blue-50 px-10 pt-8 pb-6">
            <h1 className="text-2xl font-bold text-black">InternX</h1>
            <p className="mt-1 text-sm text-gray-700">
              Role-based frontend dashboard
            </p>
            <div className="mt-4 h-px w-full bg-blue-200" />
          </div>

          {/* BODY */}
          <div className="px-10 py-8">
            <button
              onClick={() => {
                login("admin"); // ✅ FIXED
                router.push("/dashboard/admin");
              }}
              className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 transition"
            >
              Login as Admin
            </button>

            <button
              onClick={() => {
                login("intern"); // ✅ FIXED
                router.push("/dashboard/intern");
              }}
              className="mt-4 w-full rounded-lg border border-blue-600 py-3 font-medium text-blue-600 hover:bg-blue-50 transition"
            >
              Login as Intern
            </button>

            <p className="mt-6 text-sm text-gray-700">
              Don&apos;t have an account?{" "}
              <span className="cursor-pointer text-blue-600 hover:underline">
                Sign up
              </span>
            </p>

            <p className="mt-4 text-xs text-gray-500">
              Frontend demo • No backend involved
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 p-6">
          <Image
            src="/undraw_dashboard_p93p.png"
            alt="Dashboard illustration"
            width={420}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
}

