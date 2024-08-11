"use client";

import { signIn, signOut } from "next-auth/react";

export const SignInButton = () => {
  return (
    <button className="btn" onClick={() => signIn("github")}>
      Sign In
    </button>
  );
};

export const SignOutButton = () => {
  return (
    <button className="btn" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
