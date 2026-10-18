import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function CourseNotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50">
          <BookOpen className="h-8 w-8 text-teal-600" />
        </div>

        <p className="mt-6 text-sm font-bold uppercase tracking-wider text-teal-600">Course Not Found</p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          We couldn't find this course
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          The course you're looking for may have been removed, unpublished, or the URL may be incorrect.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            Browse All Courses
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
