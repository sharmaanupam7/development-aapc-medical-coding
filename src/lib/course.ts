import { prisma } from "@/lib/prisma";
import { CourseCardData } from "@/types/course";

export async function getFeaturedCourses(): Promise<CourseCardData[]> {
  const courses = await prisma.course.findMany({
    where: {
      isPublished: true,
      isFeatured: true,
    },

    include: {
      coursecategory: {
        select: {
          name: true,
          slug: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return courses.map((course) => ({
    id: course.id,
    title: course.title,
    slug: course.slug,
    description: course.description,
    shortDescription: course.shortDescription,
    thumbnail: course.thumbnail,
    price: Number(course.price),
    level: course.level,
    durationMinutes: course.durationMinutes,

    // Prisma relation name → UI type name
    category: course.coursecategory,
  }));
}
