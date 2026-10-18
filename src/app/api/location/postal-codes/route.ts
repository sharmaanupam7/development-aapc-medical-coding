import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    const cityIdParam = request.nextUrl.searchParams.get("cityId");

    const cityId = Number(cityIdParam);

    if (!cityIdParam || !Number.isInteger(cityId)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid city.",
        },
        {
          status: 400,
        },
      );
    }

    const postalCodes = await prisma.postal_code.findMany({
      where: {
        city_id: cityId,
        isActive: true,
      },
      select: {
        postal_code_id: true,
        postal_code: true,
      },
      orderBy: {
        postal_code: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      postalCodes,
    });
  } catch (error) {
    console.error("POSTAL CODES API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to load postal codes.",
      },
      {
        status: 500,
      },
    );
  }
}
