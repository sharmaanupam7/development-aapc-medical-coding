import Link from "next/link";
import { ClipboardCheck, ArrowRight, Timer, BarChart3 } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";

export function PracticeSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-teal-50">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16 lg:items-center">
            <FadeIn>
              <div>
                <div className="inline-flex rounded-xl bg-white p-3 text-teal-600 shadow-sm">
                  <ClipboardCheck className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-3xl font-bold text-slate-950 sm:text-4xl">Practice what you learn.</h2>

                <p className="mt-5 leading-7 text-slate-600">
                  Strengthen your understanding through practice questions, assessments and mock-test experiences.
                </p>

                {/* <Link
                  href="/mocks"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-700"
                >
                  Mock Test
                  <ArrowRight className="h-4 w-4" />
                </Link> */}
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <Timer className="h-6 w-6 text-teal-600" />

                  <h3 className="mt-5 font-bold text-slate-950">Timed Practice</h3>

                  <p className="mt-2 text-sm text-slate-600">Practice under realistic time constraints.</p>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <BarChart3 className="h-6 w-6 text-teal-600" />

                  <h3 className="mt-5 font-bold text-slate-950">Track Progress</h3>

                  <p className="mt-2 text-sm text-slate-600">Understand your performance and learning progress.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
