"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">
      <div className="bg-slate-800 p-6 rounded-2xl text-center w-80 space-y-4">
        <h1 className="text-white text-2xl font-bold">Login</h1>
        <button
          onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
          className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
        >
          Mit Discord einloggen
        </button>
      </div>
    </div>
  );
}
