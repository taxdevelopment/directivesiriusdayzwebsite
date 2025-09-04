"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { authConfig } from "../../config";

export default function HeaderLoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut({ callbackUrl: authConfig.redirectAfterLogin })}
        className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
      >
        {authConfig.logoutButtonText}
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("discord", { callbackUrl: authConfig.redirectAfterLogin })}
      className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
    >
      {authConfig.loginButtonText}
    </button>
  );
}
