import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const stateIdParam = request.nextUrl.searchParams.get("stateId");

    const stateId = Number(stateIdParam);

    if (!stateIdParam || !Number.isInteger(stateId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid state.",
        },
        {
          status: 400,
        },
      );
    }

    const cities = await prisma.city.findMany({
      where: {
        state_id: stateId,
        isActive: true,
      },
      select: {
        city_id: true,
        city_name: true,
      },
      orderBy: {
        city_name: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      cities,
    });
  } catch (error) {
    console.error("CITIES API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load cities.",
      },
      {
        status: 500,
      },
    );
  }
}
