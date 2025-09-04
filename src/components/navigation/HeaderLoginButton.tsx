"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function HeaderLoginButton() {
  const { data: session } = useSession();

  const loginButtonText = "Login with Discord";
  const logoutButtonText = "Logout";
  const redirectAfterLogin = "/dashboard"; // Zielseite nach Login

  if (session) {
    return (
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
      >
        {logoutButtonText}
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("discord", { callbackUrl: redirectAfterLogin })}
      className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
    >
      {loginButtonText}
    </button>
  );
}
