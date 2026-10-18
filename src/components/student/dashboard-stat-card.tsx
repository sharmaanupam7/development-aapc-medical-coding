import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, PlayCircle } from "lucide-react";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function StudentDashboardCard() {
  // --------------------------------------------------
  // Get logged-in user
  // --------------------------------------------------

  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const userId = session.user.id;

  // --------------------------------------------------
  // Get user information
  // --------------------------------------------------

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      firstname: true,
      lastname: true,
    },
  });

  if (!user) {
    return null;
  }

  // --------------------------------------------------
  // Get student's enrollments and course progress
  // --------------------------------------------------

  const enrollments = await prisma.enrollment.findMany({
    where: {
      userId,
    },
    select: {
      id: true,
      courseId: true,
      enrolledAt: true,
      status: true,
      courseprogress: {
        select: {
          progress: true,
        },
      },
    },
    orderBy: {
      enrolledAt: "desc",
    },
  });

  // --------------------------------------------------
  // Get course IDs
  // --------------------------------------------------

  const courseIds = enrollments.map((enrollment) => enrollment.courseId);

  // --------------------------------------------------
  // Get courses
  // --------------------------------------------------

  const courses =
    courseIds.length > 0
      ? await prisma.course.findMany({
          where: {
            id: {
              in: courseIds,
            },
          },
          select: {
            id: true,
            title: true,
            slug: true,
            description: true,
            thumbnail: true,
          },
        })
      : [];

  // --------------------------------------------------
  // Combine enrollment, course, and progress information
  // --------------------------------------------------

  const enrolledCourses = enrollments
    .map((enrollment) => {
      const course = courses.find((item) => item.id === enrollment.courseId);

      if (!course) {
        return null;
      }

      return {
        ...course,
        enrollmentId: enrollment.id,
        progress: Math.min(Math.max(enrollment.courseprogress?.progress ?? 0, 0), 100),
        status: enrollment.status,
        enrolledAt: enrollment.enrolledAt,
      };
    })
    .filter((course) => course !== null);

  // --------------------------------------------------
  // Dashboard statistics
  // --------------------------------------------------

  const totalCourses = enrolledCourses.length;

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Welcome */}

        <div className="mb-6">
          <p className="text-sm font-medium text-blue-600">Student Dashboard</p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Welcome, {user.firstname} {user.lastname}
          </h1>

          <p className="mt-1 text-sm text-slate-500">Continue your medical coding learning journey.</p>
        </div>

        {/* Statistics Cards */}

        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <BookOpen className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Total Courses</p>

                <p className="mt-0.5 text-2xl font-bold text-slate-900">{totalCourses}</p>
              </div>
            </div>
          </div>
        </div>

        {/* My Courses Header */}

        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">My Courses</h2>

            <p className="mt-1 text-sm text-slate-500">Courses you currently have access to</p>
          </div>

          {totalCourses > 0 && (
            <Link
              href="/student/courses"
              className="hidden items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 sm:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* No Courses */}

        {totalCourses === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <BookOpen className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-base font-semibold text-slate-900">No courses available</h3>

            <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
              You don&apos;t have access to any courses yet.
            </p>

            <Link
              href="/courses"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Browse Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          /* Course Cards */

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <div
                key={course.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Course Image */}

                <div className="relative h-36 overflow-hidden bg-slate-100">
                  {course.thumbnail ? (
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-50 to-slate-100">
                      <BookOpen className="h-10 w-10 text-blue-300" />
                    </div>
                  )}
                </div>

                {/* Course Details */}

                <div className="p-4">
                  <h3 className="line-clamp-2 text-base font-semibold text-slate-900">{course.title}</h3>

                  {course.description && (
                    <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-slate-500">{course.description}</p>
                  )}

                  {/* Progress */}

                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500">Progress</span>

                      <span className="text-xs font-semibold text-blue-600">{Math.round(course.progress)}%</span>
                    </div>

                    <div
                      className="h-1.5 overflow-hidden rounded-full bg-slate-100"
                      role="progressbar"
                      aria-label={`${course.title} progress`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round(course.progress)}
                    >
                      <div
                        className="h-full rounded-full bg-blue-600 transition-all"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Continue Button */}

                  <Link
                    href={`/student/courses/${course.slug}`}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Continue Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mobile View All */}

        {totalCourses > 0 && (
          <div className="mt-5 sm:hidden">
            <Link
              href="/student/courses"
              className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-blue-600"
            >
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
