import ResetPasswordForm from "@/components/auth/reset-password";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-slate-50 px-4">
          <p className="text-sm text-slate-600">Loading reset password form...</p>
        </main>
      }
    >
      <ResetPasswordForm />
    </Suspense>
  );
}
