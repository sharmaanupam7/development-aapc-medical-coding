import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Container } from "@/components/layout/container";
import type { Metadata } from "next";
import Image from "next/image";

type CourseDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   DYNAMIC SEO METADATA
========================================================= */

export async function generateMetadata({ params }: CourseDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: {
      slug,
    },

    select: {
      title: true,
      shortDescription: true,
      thumbnail: true,
    },
  });

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  return {
    title: `${course.title} | Development AAPC Medical Coding`,

    description: course.shortDescription ?? `Learn ${course.title} with Development AAPC Medical Coding.`,
    icons: {
      icon: "/images/icons/course_icon.png",
    },

    openGraph: {
      title: course.title,

      description: course.shortDescription ?? `Learn ${course.title}.`,

      images: course.thumbnail
        ? [
            {
              url: course.thumbnail,
              width: 1200,
              height: 630,
              alt: course.title,
            },
          ]
        : undefined,
    },
  };
}

/* =========================================================
   COURSE DETAILS PAGE
========================================================= */

export default async function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: {
      slug,
    },

    include: {
      /* -----------------------------------------------
         COURSE CATEGORY
         Prisma relation name from schema:
         coursecategory
      ----------------------------------------------- */
      coursecategory: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },

      /* -----------------------------------------------
         COURSE MODULES
         Prisma relation name from schema:
         coursemodule
      ----------------------------------------------- */
      coursemodule: {
        orderBy: {
          sortOrder: "asc",
        },

        include: {
          /* -------------------------------------------
             LESSONS
             Prisma relation name from schema:
             lesson
          ------------------------------------------- */
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

  /* =====================================================
     COURSE STATISTICS
  ===================================================== */

  const totalModules = course.coursemodule.length;

  const totalLessons = course.coursemodule.reduce((total, module) => total + module.lesson.length, 0);

  return (
    <main className="bg-slate-50">
      {/* =================================================
          HERO / COURSE SUMMARY
      ================================================= */}

      <section className="border-b border-slate-200 bg-white">
        <Container>
          <div className="grid gap-10 py-12 lg:grid-cols-[1fr_380px] lg:py-16">
            {/* =================================================
                COURSE INFORMATION
            ================================================= */}

            <div>
              {/* Course Category */}

              {course.coursecategory && (
                <p className="text-sm font-bold uppercase tracking-wider text-teal-600">{course.coursecategory.name}</p>
              )}

              {/* Course Title */}

              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">{course.title}</h1>

              {/* Short Description */}

              {course.shortDescription && (
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{course.shortDescription}</p>
              )}

              {/* =================================================
                  COURSE DESCRIPTION
              ================================================= */}

              {course.description && (
                <section className="py-10">
                  <div className="max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-950">About This Course</h2>

                    <div className="mt-5 whitespace-pre-line text-base leading-8 text-slate-600">
                      {course.description}
                    </div>
                  </div>

                  {/* Course Duration */}

                  {course.durationMinutes !== null && (
                    <div className="mt-7">
                      <span className="font-semibold text-slate-950">Duration:</span>{" "}
                      {/* {Math.floor(course.durationMinutes / 60)}h {course.durationMinutes % 60}m */}
                      {course.durationMinutes}+ weeks
                    </div>
                  )}
                </section>
              )}

              {/* =================================================
                  COURSE META
              ================================================= */}

              {/* <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                <div>
                  <span className="font-semibold text-slate-950">Level:</span> {course.level}
                </div>

                <div>
                  <span className="font-semibold text-slate-950">Modules:</span> {totalModules}
                </div>

                <div>
                  <span className="font-semibold text-slate-950">Lessons:</span> {totalLessons}
                </div>
              </div> */}
            </div>

            {/* COURSE CARD */}
            <aside className="h-fit rounded border border-slate-200 bg-black p-2 shadow-sm lg:min-h-107.5">
              {course.thumbnail ? (
                <div className="mb-2 aspect-video w-full overflow-hidden rounded">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={600}
                    height={338}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="mb-6 aspect-video w-full rounded-xl bg-slate-100" />
              )}

              <div className="mt-10 py-0 max-h-20 text-sm font-semibold text-white">
                {course.description}

                <span className="flex mt-2">₹{Number(course.price).toLocaleString("en-IN")}</span>
              </div>

              <div>
                <button
                  type="button"
                  className="mt-20 w-full cursor-pointer rounded bg-teal-600 px-5 py-2 font-semibold text-white transition hover:bg-teal-700"
                >
                  Enroll Now
                </button>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </main>
  );
}
