import Link from "next/link";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";

const points = [
  "Understand core coding concepts",
  "Practice coding scenarios",
  "Review important coding guidelines",
  "Prepare with structured learning",
];

export function CertificationSection() {
  return (
    <section className="overflow-hidden bg-slate-950 py-20 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div>
              <div className="inline-flex rounded-xl bg-teal-500/10 p-3 text-teal-400">
                <Award className="h-7 w-7" />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-wider text-teal-400">Certification Preparation</p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Prepare with confidence for your medical coding career.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Develop the knowledge and practical understanding required to move toward professional medical coding
                certification.
              </p>

              <div className="mt-7 space-y-4">
                {points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-400" />
                    <span className="text-sm text-slate-300">{point}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/courses"
                className="mt-8 inline-flex items-center gap-2 rounded bg-teal-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
              >
                Explore Certification Courses
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-teal-500/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-400">Learning Path</span>

                    <span className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold text-teal-400">
                      Certification
                    </span>
                  </div>

                  <div className="mt-8 space-y-5">
                    {["Fundamentals", "Coding Guidelines", "Practical Scenarios", "Exam Preparation"].map(
                      (item, index) => (
                        <div key={item} className="flex items-center gap-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-slate-950">
                            {index + 1}
                          </div>

                          <span className="font-medium text-white">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
