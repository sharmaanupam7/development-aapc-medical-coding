import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Billing & AR | Development AAPC Medical Coding",
  description:
    "Medical Billing and Accounts Receivable training program covering medical billing, AR follow-up, denial management, payment posting and revenue cycle management.",
  icons: {
    icon: "/images/icons/training_icon.png",
  },
};

export default function MedicalBillingARPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================
          HERO / PAGE BANNER
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

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Medical Billing &amp; AR</h1>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          COURSE CONTENT
      ========================================================= */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          {/* <div className="mb-8">
            <p className="text-sm font-semibold text-teal-600">Training</p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Medical Billing &amp; AR
            </h2>

            <div className="mt-3 h-1 w-12 rounded-full bg-teal-500" />
          </div> */}

          {/* =====================================================
              IMAGE + CONTENT
          ===================================================== */}
          <div className="grid items-start gap-8 md:grid-cols-[280px_1fr] lg:gap-10">
            <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-md">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/images/training/medical-billing-ar.jpg"
                  alt="Medical Coding Training"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            </div>

            {/* Course Details */}
            <div className="text-sm leading-7 text-slate-600 sm:text-base">
              <h3 className="text-base font-bold text-slate-950 sm:text-lg">Medical Billing &amp; AR</h3>

              <p className="mt-2">
                The U.S. healthcare industry is rapidly growing, multi-billion-dollar industry. Medical Billing Revenue
                Cycle Management (RCM) is an important part of this industry. Medical Billing includes submitting and
                following up on claims to insurance companies in order to receive payment for services rendered by
                healthcare providers.
              </p>

              <p className="mt-3">
                Medical Billing plays a very crucial role in ensuring operations are properly performed between
                healthcare providers, medical billers, the physician&apos;s office and the insurance companies.
              </p>

              {/* Course Information */}
              <div className="mt-5 space-y-3">
                <p>
                  <span className="font-semibold text-slate-800">Course Hours:</span> 40 hours for experienced
                  candidates and 120 hours for fresh candidates as part of classroom sessions.
                </p>

                <p>
                  <span className="font-semibold text-slate-800">Course Length:</span> The complete training program is
                  designed to provide practical knowledge and hands-on understanding of medical billing and accounts
                  receivable processes.
                </p>

                <p>
                  <span className="font-semibold text-slate-800">Certification:</span> Upon successful completion of the
                  course, students receive course completion certification.
                </p>

                <p>
                  <span className="font-semibold text-slate-800">Course Description:</span> This course is designed to
                  provide students with the knowledge and practical skills required for medical billing, accounts
                  receivable and healthcare revenue cycle operations.
                </p>
              </div>

              {/* =================================================
                  TOPICS COVERED
              ================================================= */}
              <div className="mt-6">
                <h4 className="text-sm font-bold text-slate-950 sm:text-base">Topics Covered</h4>

                <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Value &amp; Account Billing Basics</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Insurance Claims and Follow-up</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Medical Reports &amp; Documentation</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Billing Management System</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Details of Revenue Cycle Management (RCM)</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Medical Coding &amp; Billing</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Medical Billing Terminology</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Denial Management</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>AR Follow-up</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Practice Case Studies</span>
                  </li>

                  <li className="flex gap-2">
                    <span className="font-bold text-teal-600">✓</span>
                    <span>Hands-on experience for easy adaptability to the work environment</span>
                  </li>
                </ul>
              </div>

              <div className="mt-18">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-teal-400"
                >
                  Contact Us
                </Link>
                <Link
                  href="/training"
                  className="inline-flex items-center mx-2 justify-center rounded border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
                >
                  Back to Training Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HIGHLIGHT PANEL
      ========================================================= */}
      <section className="bg-slate-50 py-8 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-teal-100 bg-white-50/70 p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">Training</p>
                <p className="mt-1 text-lg font-bold text-slate-950">Medical Billing</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Practical training in healthcare billing processes.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">Specialization</p>
                <p className="mt-1 text-lg font-bold text-slate-950">Accounts Receivable</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Learn claim follow-up, denials and AR management.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">Career Focus</p>
                <p className="mt-1 text-lg font-bold text-slate-950">Healthcare RCM</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Build skills relevant to the healthcare revenue cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
