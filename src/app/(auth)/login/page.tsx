import LoginForm from "@/components/auth/login-form";
import { requireGuest } from "@/lib/auth-guard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Development AAPC Medical Coding",
  icons: {
    icon: "/images/icons/login_icon.png",
  },
};

export default async function LoginPage() {
  await requireGuest();
  return (
    <main>
      <LoginForm />
    </main>
  );
}
