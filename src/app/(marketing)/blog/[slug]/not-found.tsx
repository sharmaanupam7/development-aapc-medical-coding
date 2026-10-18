import Link from "next/link";
import { FaArrowLeft, FaBookMedical, FaHome } from "react-icons/fa";

import { Container } from "@/components/layout/container";

export default function BlogNotFound() {
  return (
    <main className="min-h-[70vh] bg-slate-50">
      <section className="relative overflow-hidden bg-linear-to-br from-[#031522] via-[#063846] to-[#020617] py-24 text-white">
        {/* Background glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-teal-400 blur-3xl" />

          <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
        </div>

        <Container>
          <div className="relative mx-auto max-w-3xl text-center">
            {/* Icon */}
            {/* <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-500/10 ring-1 ring-teal-400/30">
              <FaBookMedical className="text-4xl text-teal-300" />
            </div> */}

            <h1 className="-mt-5 text-3xl font-bold sm:text-4xl">Article Not Found</h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Sorry, the medical coding article you are looking for could not be found. It may have been removed, moved,
              or is no longer available
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded bg-teal-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-400"
              >
                Back to Blog
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <FaHome className="text-xs" />
                Go to Home
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Helpful section */}
      <section className="bg-white py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-600">Explore Development AAPC</p>

            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Continue Your Medical Coding Journey</h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore our latest articles, medical coding courses and learning resources.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/courses"
                className="rounded bg-teal-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
              >
                Explore Courses
              </Link>

              <Link
                href="/blog"
                className="rounded border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
              >
                Read Our Blogs
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
