"use client";

import Link from "next/link";
import { useState } from "react";

import { forgotPasswordSchema } from "@/schemas/forgot-password.schema";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");

    const validation = forgotPasswordSchema.safeParse({
      email: email.trim(),
    });

    if (!validation.success) {
      setError(validation.error.issues[0]?.message ?? "Invalid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/password/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: validation.data.email,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message ?? "Unable to process your request.");
        return;
      }

      setSuccess(result.message ?? "If an account exists for this email, a password reset link has been sent.");
    } catch (error) {
      console.error("Forgot password error:", error);

      setError("Unable to process your request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-[calc(100vh-80px)] bg-slate-50 px-4 py-6">
      <div className="mx-auto flex min-h-[calc(100vh-128px)] max-w-5xl items-center justify-center">
        <div className="w-full max-w-md border border-slate-200 bg-white px-6 py-6 shadow-[0_8px_30px_rgba(15,23,42,0.10)] sm:px-8">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-slate-950 sm:text-3xl">FORGOT PASSWORD</h1>

            <p className="mt-2 text-xs text-slate-500">
              Enter your registered email address and we&apos;ll send password reset link
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="mb-1 block text-xs font-medium text-slate-700">
                Email Address
                <span className="text-red-500">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your email address"
                disabled={loading}
                className={`h-10 w-full border bg-white px-3 text-sm text-slate-900 outline-none focus:ring-2 ${
                  error
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/10"
                    : "border-slate-300 focus:border-teal-500 focus:ring-teal-500/10"
                }`}
              />

              {error && <p className="mt-1 text-xs text-red-500">{error}</p>}

              {success && <p className="mt-1 text-xs text-green-600">{success}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="h-10 w-full bg-teal-600 px-4 text-sm font-semibold cursor-pointer text-white shadow-md shadow-teal-600/20 transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-4 text-center text-xs text-slate-600">
            Remember your password?{" "}
            <Link href="/login" className="font-semibold text-teal-600 hover:text-teal-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
