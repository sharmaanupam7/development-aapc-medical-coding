import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/schemas/register.schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = registerSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          message: "Please correct the validation errors.",
          errors: validation.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { firstname, lastname, middlename, email, mobile, password } = validation.data;

    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: normalizedEmail,
          },
          {
            mobile,
          },
        ],
      },
    });

    if (existingUser) {
      if (existingUser.email === normalizedEmail) {
        return NextResponse.json(
          {
            message: "An account with this email already exists.",
          },
          { status: 409 },
        );
      }

      return NextResponse.json(
        {
          message: "An account with this mobile number already exists.",
        },
        { status: 409 },
      );
    }

    const passwordHash = await hash(password, 12);

    await prisma.user.create({
      data: {
        firstname,
        lastname,
        middlename,
        email: normalizedEmail,
        mobile,
        passwordHash,
        role: "STUDENT",
      },
    });

    return NextResponse.json(
      {
        message: "Account created successfully.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Registration error:", error);

    return NextResponse.json(
      {
        message: "Unable to create account. Please try again.",
      },
      { status: 500 },
    );
  }
}
