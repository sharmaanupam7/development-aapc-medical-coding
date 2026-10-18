import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";

export function CTASection() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="relative overflow-hidden rounded bg-teal-600 px-8 py-14 text-center text-white sm:px-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-2xl" />

          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to start your medical coding journey?</h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-teal-50">
              Explore our courses and discover a structured approach to learning medical coding
            </p>

            <Link
              href="/courses"
              className="mt-8 inline-flex items-center gap-2 rounded bg-white px-6 py-3.5 text-sm font-semibold text-teal-700 shadow-lg transition hover:bg-slate-50"
            >
              Explore Courses
              {/* <ArrowRight className="h-4 w-4" /> */}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
