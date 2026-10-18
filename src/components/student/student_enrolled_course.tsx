import { notFound } from "next/navigation";
import { requireStudent } from "@/lib/auth-guard";
import { prisma } from "@/lib/prisma";

type EnrolledCourseProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function EnrolledCourse({ params }: EnrolledCourseProps) {
  const { slug } = await params;

  // =========================================================
  // 1. AUTHENTICATE STUDENT USING EXISTING JWT COOKIE SYSTEM
  // =========================================================

  const user = await requireStudent();

  console.log("[EnrolledCourse] Authenticated student:", user.id);
  console.log("[EnrolledCourse] Requested course slug:", slug);

  // =========================================================
  // 2. FETCH COURSE, CATEGORY, MODULES AND LESSONS
  // =========================================================

  const course = await prisma.course.findUnique({
    where: {
      slug,
    },
    include: {
      coursecategory: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },
      coursemodule: {
        orderBy: {
          sortOrder: "asc",
        },
        include: {
          lesson: {
            orderBy: {
              sortOrder: "asc",
            },
            select: {
              id: true,
              title: true,
              slug: true,
              description: true,
              type: true,
              videoUrl: true,
              resourceUrl: true,
              isPreview: true,
              sortOrder: true,
            },
          },
        },
      },
    },
  });

  if (!course) {
    notFound();
  }

  // =========================================================
  // 3. VERIFY ENROLLMENT FOR THIS SPECIFIC COURSE
  // =========================================================

  const enrollment = await prisma.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId: user.id,
        courseId: course.id,
      },
    },
    select: {
      id: true,
      status: true,
    },
  });

  console.log("[EnrolledCourse] Enrollment status:", enrollment?.status);

  if (!enrollment || !["ACTIVE", "COMPLETED"].includes(enrollment.status)) {
    notFound();
  }

  // =========================================================
  // 4. COURSE STATISTICS
  // =========================================================

  const totalModules = course.coursemodule.length;

  const totalLessons = course.coursemodule.reduce((total, module) => total + module.lesson.length, 0);

  // =========================================================
  // 5. RENDER COURSE DETAILS AND CONTENT
  // =========================================================

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* COURSE HEADER */}

        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {course.coursecategory && (
            <p className="text-sm font-bold uppercase tracking-wider text-teal-600">{course.coursecategory.name}</p>
          )}

          <h1 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">{course.title}</h1>

          {course.shortDescription && <p className="mt-4 leading-7 text-slate-600">{course.shortDescription}</p>}

          {course.description && (
            <div className="mt-6 whitespace-pre-line leading-7 text-slate-700">{course.description}</div>
          )}

          {/* COURSE STATISTICS */}

          <div className="mt-6 flex flex-wrap gap-6 border-t border-slate-100 pt-5 text-sm text-slate-600">
            <p>
              <span className="font-semibold text-slate-900">Modules:</span> {totalModules}
            </p>

            <p>
              <span className="font-semibold text-slate-900">Lessons:</span> {totalLessons}
            </p>

            <p>
              <span className="font-semibold text-slate-900">Enrollment:</span> {enrollment.status}
            </p>
          </div>
        </section>

        {/* COURSE MODULES */}

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-slate-950">Course Content</h2>

          {totalModules === 0 ? (
            <div className="mt-4 rounded-lg border border-slate-200 bg-white p-6 text-slate-600">
              Course modules have not been added yet.
            </div>
          ) : (
            <div className="mt-5 space-y-5">
              {course.coursemodule.map((module, moduleIndex) => (
                <section
                  key={module.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                  {/* MODULE HEADER */}

                  <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
                    <h3 className="font-semibold text-slate-900">
                      Module {moduleIndex + 1}: {module.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {module.lesson.length} {module.lesson.length === 1 ? "lesson" : "lessons"}
                    </p>
                  </div>

                  {/* LESSON LIST */}

                  {module.lesson.length === 0 ? (
                    <p className="px-5 py-4 text-sm text-slate-500">No lessons have been added to this module yet.</p>
                  ) : (
                    <div className="divide-y divide-slate-100">
                      {module.lesson.map((lesson, lessonIndex) => (
                        <article key={lesson.id} className="px-5 py-4">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            {/* LESSON DETAILS */}

                            <div>
                              <h4 className="font-medium text-slate-900">
                                {moduleIndex + 1}.{lessonIndex + 1} {lesson.title}
                              </h4>

                              {lesson.description && (
                                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                                  {lesson.description}
                                </p>
                              )}

                              <div className="mt-2 flex flex-wrap gap-2 text-xs">
                                <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">{lesson.type}</span>

                                {lesson.isPreview && (
                                  <span className="rounded bg-teal-50 px-2 py-1 font-medium text-teal-700">
                                    Preview
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* LESSON RESOURCES */}

                            <div className="flex shrink-0 flex-wrap gap-3 text-sm">
                              {lesson.videoUrl && (
                                <a
                                  href={lesson.videoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-teal-700 hover:text-teal-900"
                                >
                                  View Video
                                </a>
                              )}

                              {lesson.resourceUrl && (
                                <a
                                  href={lesson.resourceUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-teal-700 hover:text-teal-900"
                                >
                                  Open Resource
                                </a>
                              )}

                              {!lesson.videoUrl && !lesson.resourceUrl && (
                                <span className="text-slate-400">Content coming soon</span>
                              )}
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
