// countries API Route

import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const countries = await prisma.country.findMany({
      where: {
        isActive: true,
      },
      select: {
        country_id: true,
        country_name: true,
        country_code: true,
        phoneCode: true,
      },
      orderBy: {
        country_name: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      countries,
    });
  } catch (error) {
    console.error("COUNTRIES API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load countries.",
      },
      {
        status: 500,
      },
    );
  }
}
