import { redirect } from "next/navigation";

import { getAuthenticatedUser } from "@/services/auth.service";

// --------------------------------------------------
// Student authentication guard
// --------------------------------------------------

export async function requireStudent() {
  const user = await getAuthenticatedUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "STUDENT") {
    redirect("/unauthorized");
  }

  return user;
}

// --------------------------------------------------
// Guest-only authentication guard
//
// Used for:
// /login
// /register
// /forgot-password (if required)
//
// Logged-in users are redirected to dashboard.
// --------------------------------------------------

export async function requireGuest() {
  const user = await getAuthenticatedUser();

  if (user) {
    redirect("/student/dashboard");
  }

  return null;
}
