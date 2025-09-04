"use client";

import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Lade…</p>;
  if (!session) return <p>Access denied. <a href="/login">Login</a></p>;

  return (
    <div className="text-center p-6">
      <h1>Willkommen {session.user?.name}</h1>
      {session.user?.image && (
        <img
          src={session.user.image}
          alt="avatar"
          className="mx-auto rounded-full w-16 h-16 mt-4"
        />
      )}
      <button
        onClick={() => signOut({ callbackUrl: "/login" })}
        className="mt-4 bg-red-500 text-white p-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
