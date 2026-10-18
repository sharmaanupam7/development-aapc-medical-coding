import { NextResponse } from "next/server";
import crypto from "crypto";
import { hash } from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { resetPasswordSchema } from "@/schemas/reset-password.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // --------------------------------------------------
    // 1. Validate request
    // --------------------------------------------------

    const validation = resetPasswordSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the validation errors.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { token, password } = validation.data;

    // --------------------------------------------------
    // 2. Hash token received from URL
    // --------------------------------------------------

    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");

    // --------------------------------------------------
    // 3. Find reset token
    // --------------------------------------------------

    const resetToken = await prisma.passwordresettoken.findUnique({
      where: {
        tokenHash,
      },
    });

    // --------------------------------------------------
    // 4. Token does not exist
    // --------------------------------------------------

    if (!resetToken) {
      return NextResponse.json(
        {
          success: false,
          message: "This password reset link is invalid or has already been used.",
        },
        { status: 400 },
      );
    }

    // --------------------------------------------------
    // 5. Check expiration
    // --------------------------------------------------

    if (resetToken.expiresAt <= new Date()) {
      await prisma.passwordresettoken.delete({
        where: {
          id: resetToken.id,
        },
      });

      return NextResponse.json(
        {
          success: false,
          message: "This password reset link has expired. Please request a new one.",
        },
        { status: 400 },
      );
    }

    // --------------------------------------------------
    // 6. Hash new password
    // --------------------------------------------------

    const passwordHash = await hash(password, 12);

    // --------------------------------------------------
    // 7. Update password
    //    + invalidate refresh tokens
    //    + consume reset token
    // --------------------------------------------------

    await prisma.$transaction([
      prisma.user.update({
        where: {
          id: resetToken.userId,
        },
        data: {
          passwordHash,
        },
      }),

      /*
       * Invalidate all existing sessions.
       */
      prisma.refreshtoken.deleteMany({
        where: {
          userId: resetToken.userId,
        },
      }),

      /*
       * Delete reset token.
       *
       * This makes the reset URL one-time use.
       */
      prisma.passwordresettoken.delete({
        where: {
          id: resetToken.id,
        },
      }),
    ]);

    // --------------------------------------------------
    // 8. Success
    // --------------------------------------------------

    return NextResponse.json({
      success: true,
      message: "Password reset successfully.",
    });
  } catch (error) {
    console.error("Reset password error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to reset your password. Please try again.",
      },
      { status: 500 },
    );
  }
}
