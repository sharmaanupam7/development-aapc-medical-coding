import { NextResponse } from "next/server";
import crypto from "crypto";

import { prisma } from "@/lib/prisma";
import { forgotPasswordSchema } from "@/schemas/forgot-password.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = forgotPasswordSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const email = validation.data.email;

    // --------------------------------------------------
    // 1. Find user
    // --------------------------------------------------

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    /*
     * IMPORTANT:
     * Always return the same response whether the
     * email exists or not.
     *
     * This prevents email/account enumeration.
     */
    if (!user) {
      return NextResponse.json({
        success: true,
        message: "If an account exists for this email, a password reset link has been sent.",
      });
    }

    // --------------------------------------------------
    // 2. Delete existing reset tokens
    // --------------------------------------------------

    await prisma.passwordresettoken.deleteMany({
      where: {
        userId: user.id,
      },
    });

    // --------------------------------------------------
    // 3. Generate cryptographically secure token
    // --------------------------------------------------

    const resetToken = crypto.randomBytes(32).toString("hex");

    // --------------------------------------------------
    // 4. Hash token before storing in database
    // --------------------------------------------------

    const tokenHash = crypto.createHash("sha256").update(resetToken).digest("hex");

    // --------------------------------------------------
    // 5. Token expires after 30 minutes
    // --------------------------------------------------

    const expiresAt = new Date(Date.now() + 30 * 60 * 1000);

    // --------------------------------------------------
    // 6. Store only token hash
    // --------------------------------------------------

    await prisma.passwordresettoken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt,
      },
    });

    // --------------------------------------------------
    // 7. Create reset URL
    // --------------------------------------------------

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    const resetUrl = `${baseUrl}/reset-password?token=${encodeURIComponent(resetToken)}`;

    // --------------------------------------------------
    // 8. Send email
    // --------------------------------------------------

    /*
     * DEVELOPMENT ONLY
     *
     * Remove this in production.
     */
    console.log("Password reset URL:", resetUrl);

    /*
     * Production:
     *
     * await sendPasswordResetEmail({
     *   email: user.email,
     *   resetUrl,
     * });
     */

    return NextResponse.json({
      success: true,
      message: "If an account exists for this email, a password reset link has been sent.",
    });
  } catch (error) {
    console.error("Forgot password error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your request. Please try again.",
      },
      { status: 500 },
    );
  }
}
