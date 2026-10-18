"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

import { resetPasswordSchema } from "@/schemas/reset-password.schema";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token") ?? "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");

    const validation = resetPasswordSchema.safeParse({
      token,
      password,
      confirmPassword,
    });

    if (!validation.success) {
      setError(validation.error.issues[0]?.message ?? "Please correct the errors.");

      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/password/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password,
          confirmPassword,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message ?? "Unable to reset your password.");

        return;
      }

      setSuccess("Password reset successfully. Redirecting to login...");

      setTimeout(() => {
        router.replace("/login");
      }, 1500);
    } catch (error) {
      console.error(error);

      setError("Unable to reset your password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 px-4 py-6">
      <div className="mx-auto flex min-h-[calc(100vh-128px)] max-w-5xl items-center justify-center">
        <div className="w-full max-w-md border border-slate-200 bg-white px-6 py-6 shadow-[0_8px_30px_rgba(15,23,42,0.10)] sm:px-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">RESET PASSWORD</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="password" className="mb-1 block text-xs font-medium text-slate-700">
                New Password
              </label>

              <input
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Enter new password"
                disabled={loading}
                className="h-10 w-full border border-slate-300 bg-white px-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="mb-1 block text-xs font-medium text-slate-700">
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setError("");
                }}
                placeholder="Confirm new password"
                disabled={loading}
                className="h-10 w-full border border-slate-300 bg-white px-3 text-sm outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/10"
              />
            </div>

            {error && <p className="text-xs text-red-500">{error}</p>}

            {success && <p className="text-xs text-green-600">{success}</p>}

            <button
              type="submit"
              disabled={loading}
              className="h-10 w-full bg-teal-600 px-4 text-sm font-semibold text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
