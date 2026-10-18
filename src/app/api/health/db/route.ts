import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const result = await prisma.$queryRaw`SELECT 1 AS connected`;

    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("DATABASE TEST ERROR:", error);

    return Response.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 },
    );
  }
}
