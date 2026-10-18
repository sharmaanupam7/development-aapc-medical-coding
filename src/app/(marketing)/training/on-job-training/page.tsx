import { Container } from "@/components/layout/container";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On The Job Training | Development AAPC Medical Coding",
  description:
    "On The Job Training program designed to provide practical healthcare industry experience and workplace skills.",
  icons: {
    icon: "/images/icons/training_icon.png",
  },
};

export default function OnJobTrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================
          PAGE BANNER
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container>
          <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">Training</p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">On The Job Training</h1>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Image + Content */}
          <div className="grid items-start gap-5 md:grid-cols-[260px_1fr] lg:gap-6">
            {/* Image */}
            <div className="relative h-50 w-full overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/training/on-job-training.jpg"
                alt="On The Job Training"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 260px"
              />
            </div>

            {/* Content */}
            <div className="text-[10px] leading-[1.7] text-slate-600 sm:text-xs">
              <h3 className="font-bold text-[#173b62]">On The Job Training</h3>

              <p className="mt-1">
                Our On The Job Training program is designed to provide practical exposure to healthcare operations and
                help students understand how knowledge gained during training is applied in a professional work
                environment.
              </p>

              <p className="mt-2">
                The program focuses on developing workplace skills, understanding healthcare processes and gaining
                practical experience through real-world scenarios.
              </p>

              {/* Training Areas */}
              <div className="mt-4">
                <p className="font-bold text-[#173b62]">Training Includes</p>

                <ul className="mt-2 space-y-1">
                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Practical healthcare workflow training</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Medical coding workflow</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Medical billing processes</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Accounts receivable workflow</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Claims processing concepts</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Denial management and claim follow-up</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Professional workplace practices</span>
                  </li>
                </ul>
              </div>

              {/* Benefits */}
              <div className="mt-4">
                <p className="font-bold text-[#173b62]">Benefits of OJT</p>

                <ul className="mt-2 space-y-1">
                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Hands-on practical experience</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Improved understanding of healthcare operations</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Workplace readiness</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Practical problem-solving skills</span>
                  </li>

                  <li className="flex items-start gap-1">
                    <span className="text-teal-600">»</span>
                    <span>Better preparation for healthcare careers</span>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
                >
                  Enquire Now
                </Link>

                <Link
                  href="/training"
                  className="inline-flex items-center justify-center rounded border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
                >
                  Back to Training
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HIGHLIGHT SECTION
      ========================================================= */}
      <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-600">
                01
              </div>

              <h3 className="mt-3 text-sm font-bold text-[#173b62]">Practical Experience</h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">Gain practical exposure to healthcare workflows.</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-600">
                02
              </div>

              <h3 className="mt-3 text-sm font-bold text-[#173b62]">Industry Skills</h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">Develop skills relevant to healthcare operations.</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-600">
                03
              </div>

              <h3 className="mt-3 text-sm font-bold text-[#173b62]">Career Readiness</h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Prepare for professional healthcare work environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
