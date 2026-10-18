import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Coding Online and Offline | Development AAPC Medical Coding",
  description:
    "Learn Medical Coding online and offline with professional training, CPC preparation, ICD-10-CM, CPT and HCPCS coding concepts.",
  icons: {
    icon: "/images/icons/training_icon.png",
  },
};

export default function MedicalCodingPage() {
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

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Medical Coding Online and Offline
              </h1>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          {/* <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">Training</p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#173b62] sm:text-3xl">
              Medical Coding Online and Offline
            </h2>

            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-teal-500" />
          </div> */}

          {/* =====================================================
              COURSE CONTENT
          ===================================================== */}
          <div className="mx-auto max-w-5xl">
            <div className="grid items-start gap-8 md:grid-cols-[360px_1fr] lg:gap-10">
              {/* Image */}
              <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-md">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="/images/training/medical-coding.jpg"
                    alt="Medical Coding Training"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-sm leading-6 text-slate-600">
                <h3 className="text-lg font-bold text-[#173b62]">Medical Coding</h3>

                <p className="mt-2">
                  Medical Coding is a professional training program designed to prepare students for a career in the
                  healthcare revenue cycle and medical coding industry.
                </p>

                <p className="mt-3">
                  The program provides comprehensive knowledge of
                  <strong className="font-semibold text-slate-700"> CPT, HCPCS, ICD-10-CM, ICD-10-PCS</strong> and other
                  essential medical coding concepts.
                </p>

                {/* Course Details */}
                <div className="mt-5 space-y-3">
                  <div>
                    <span className="font-semibold text-slate-800">Prerequisites:</span> Knowledge of medical
                    terminology and anatomy is strongly recommended. Graduation in Life Sciences or a related healthcare
                    field is preferred.
                  </div>

                  <div>
                    <span className="font-semibold text-slate-800">Course Duration:</span> The complete program can be
                    completed in approximately 2 months.
                  </div>

                  <div>
                    <span className="font-semibold text-slate-800">Course Mode:</span> Online and Offline training
                    options are available.
                  </div>

                  <div>
                    <span className="font-semibold text-slate-800">Class Timing:</span> Weekday and weekend batches are
                    available depending on the selected training schedule.
                  </div>

                  <div>
                    <span className="font-semibold text-slate-800">Certification:</span> Students can prepare for
                    professional certification examinations such as AAPC's CPC certification.
                  </div>

                  <div>
                    <span className="font-semibold text-slate-800">Course Description:</span> The program covers
                    fundamental medical terminology, anatomy, coding guidelines, CPT, HCPCS, ICD-10-CM and practical
                    medical coding concepts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT YOU WILL LEARN
      ========================================================= */}
      <section className="bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">Course Highlights</p>

            <h2 className="mt-2 text-2xl font-bold text-[#173b62]">What You Will Learn</h2>

            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-teal-500" />
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Medical Terminology",
                description: "Understand commonly used medical terms and healthcare terminology.",
              },
              {
                title: "Anatomy",
                description: "Learn the fundamentals of human anatomy required for coding.",
              },
              {
                title: "CPT & HCPCS",
                description: "Understand procedure and service coding using CPT and HCPCS.",
              },
              {
                title: "ICD-10-CM",
                description: "Learn diagnosis coding concepts and ICD-10-CM guidelines.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-sm font-bold text-teal-600">
                  ✓
                </div>

                <h3 className="text-base font-bold text-[#173b62]">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-[#173b62] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Start Your Medical Coding Career</h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/75">
            Join our Medical Coding training program and build the knowledge and practical skills required for a career
            in healthcare administration and medical coding.
          </p>

          <div className="mt-6">
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
      </section>
    </main>
  );
}
