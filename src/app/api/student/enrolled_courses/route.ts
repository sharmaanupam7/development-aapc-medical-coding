import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
import { getAuthenticatedUser } from "@/services/auth.service";

// =========================================================
// GET STUDENT COURSES
// =========================================================

export async function GET() {
  try {
    // -------------------------------------------------------
    // Get authenticated student
    // -------------------------------------------------------

    const authenticatedUser = await getAuthenticatedUser();
    if (!authenticatedUser) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
          courses: [],
        },
        { status: 401 },
      );
    }

    // -------------------------------------------------------
    // Get courses assigned to the logged-in student
    // -------------------------------------------------------

    const enrollments = await prisma.enrollment.findMany({
      where: {
        userId: authenticatedUser.id,

        // Do not show cancelled courses
        status: {
          in: ["ACTIVE", "COMPLETED"],
        },
      },

      select: {
        id: true,
        status: true,
        enrolledAt: true,

        course: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },

      orderBy: {
        enrolledAt: "asc",
      },
    });

    // -------------------------------------------------------
    // Convert enrollment records to course list
    // -------------------------------------------------------

    const courses = enrollments.map((enrollment) => ({
      id: enrollment.course.id,
      title: enrollment.course.title,
      slug: enrollment.course.slug,
      enrollmentId: enrollment.id,
      enrollmentStatus: enrollment.status,
    }));

    // -------------------------------------------------------
    // Response
    // -------------------------------------------------------

    return NextResponse.json({
      success: true,
      courses,
    });
  } catch (error) {
    console.error("GET /api/student/enrolled_courses failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load student courses",
        courses: [],
      },
      { status: 500 },
    );
  }
}
