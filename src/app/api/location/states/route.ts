import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const countryIdParam = request.nextUrl.searchParams.get("countryId");

    const countryId = Number(countryIdParam);

    if (!countryIdParam || !Number.isInteger(countryId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid country.",
        },
        {
          status: 400,
        },
      );
    }

    const states = await prisma.state.findMany({
      where: {
        country_id: countryId,
        isActive: true,
      },
      select: {
        state_id: true,
        state_name: true,
      },
      orderBy: {
        state_name: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      states,
    });
  } catch (error) {
    console.error("STATES API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load states.",
      },
      {
        status: 500,
      },
    );
  }
}
