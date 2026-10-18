import { Container } from "@/components/layout/container";
import { CourseCard } from "@/components/course/course-card";
import { prisma } from "@/lib/prisma";

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    where: {
      isPublished: true,
      status: "PUBLISHED",
    },

    orderBy: {
      createdAt: "desc",
    },

    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      shortDescription: true,
      thumbnail: true,
      price: true,
      durationMinutes: true,
      level: true,

      coursecategory: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });

  const normalizedCourses = courses.map((course) => ({
    id: course.id,
    title: course.title,
    slug: course.slug,
    description: course.description,
    shortDescription: course.shortDescription,
    thumbnail: course.thumbnail,
    price: Number(course.price),
    durationMinutes: course.durationMinutes,
    level: course.level,

    category: course.coursecategory,
  }));

  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Medical Coding Courses</p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Explore Our Courses</h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Explore structured medical coding programs designed around learning, practice and professional development
          </p>
        </div>

        {normalizedCourses.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {normalizedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-12 text-center">
            <h2 className="text-xl font-bold text-slate-950">No course available</h2>

            <p className="mt-2 text-slate-500">Please check back soon</p>
          </div>
        )}
      </Container>
    </section>
  );
}
