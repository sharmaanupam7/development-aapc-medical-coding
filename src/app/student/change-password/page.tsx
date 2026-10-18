import { redirect } from "next/navigation";

import ProfileChangePassword from "@/components/student/profile-change-password";
import { getAuthenticatedUser } from "@/services/auth.service";

export default async function StudentProfile_ChangePasswordPage() {
  const user = await getAuthenticatedUser();

  // User is not authenticated
  if (!user) {
    redirect("/login");
  }

  return <ProfileChangePassword email={user.email} />;
}
