import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Programs | Development AAPC Medical Coding",
  description:
    "Explore Medical Coding, Medical Billing & AR and Claims Adjudication training programs at Development AAPC Medical Coding.",
  icons: {
    icon: "/images/icons/training_icon.png",
  },
};

const trainingPrograms = [
  {
    title: "Medical Coding Online and Offline",
    slug: "medical-coding",
    image: "/images/training/medical-coding.jpg",
    shortDescription:
      "Comprehensive medical coding training covering CPT, HCPCS, ICD-10-CM, medical terminology, anatomy and practical coding concepts.",
    mode: "Online & Offline",
    status: "Available",
  },
  {
    title: "Medical Billing & AR",
    slug: "medical-billing-ar",
    image: "/images/training/medical-billing-ar.jpg",
    shortDescription:
      "Learn medical billing, accounts receivable, claim follow-up, denial management and healthcare revenue cycle processes.",
    mode: "Online & Offline",
    status: "Available",
  },
  {
    title: "Claims Adjudication",
    slug: "claims-adjudication",
    image: "/images/training/claim_adjudication.jpg",
    shortDescription: "Training focused on healthcare claims processing, claim review and adjudication concepts.",
    mode: "Coming Soon",
    status: "Coming Soon",
  },
];

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container>
          <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">Training</p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Medical Training Programs</h1>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
        {/* <div className="mx-auto max-w-5xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-teal-600">Professional Training</p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#173b62] sm:text-3xl">
            Healthcare Training Programs
          </h2>

          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-teal-500" />

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-slate-600">
            Build your professional skills with our healthcare training programs designed to provide practical knowledge
            and industry relevant understanding of medical coding, medical billing, accounts receivable and claims
            processing.
          </p>
        </div> */}
      </section>

      {/* =========================================================
          TRAINING PROGRAMS
      ========================================================= */}
      <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6">
            <h2 className="mt-1 text-xl font-bold text-[#173b62] sm:text-2xl">Explore Our Training Programs</h2>

            <div className="mt-2 h-1 w-10 rounded-full bg-teal-500" />
          </div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingPrograms.map((program) => {
              const isComingSoon = program.status === "Coming Soon";

              return (
                <article
                  key={program.slug}
                  className="group overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Status */}
                    <div className="absolute left-3 top-3">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-semibold shadow-sm ${
                          isComingSoon ? "bg-amber-50 text-amber-700" : "bg-teal-50 text-teal-700"
                        }`}
                      >
                        {program.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">Training Program</p>

                    <h3 className="mt-2 min-h-12 text-lg font-bold leading-6 text-[#173b62]">{program.title}</h3>

                    <p className="mt-3 min-h-24 text-sm leading-6 text-slate-500">{program.shortDescription}</p>

                    {/* Mode */}
                    <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
                      <span className="text-xs font-semibold text-slate-700">Mode:</span>

                      <span className="text-xs text-slate-500">{program.mode}</span>
                    </div>

                    {/* Button */}
                    <div className="mt-5">
                      <Link
                        href={`/training/${program.slug}`}
                        className={`inline-flex w-full items-center justify-center rounded px-4 py-2.5 text-sm font-semibold transition ${
                          isComingSoon
                            ? "border border-slate-200 bg-slate-50 text-slate-600 hover:border-teal-500 hover:text-teal-600"
                            : "bg-teal-600 text-white shadow-sm shadow-teal-600/20 hover:bg-teal-700"
                        }`}
                      >
                        {isComingSoon ? "View Details" : "View Training"}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CHOOSE OUR TRAINING
      ========================================================= */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-teal-600">Why Choose Us</p>

            <h2 className="mt-2 text-2xl font-bold text-[#173b62]">Learn Practice Grow</h2>

            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-teal-500" />
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-600">
                01
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#173b62]">Industry Focused</h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Training focused on practical healthcare industry requirements.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-600">
                02
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#173b62]">Practical Learning</h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Understand concepts through practical examples and real-world scenarios.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-600">
                03
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#173b62]">Career Oriented</h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Develop skills that support career opportunities in healthcare operations.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:shadow-md">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-600">
                04
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#173b62]">Professional Growth</h3>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Build knowledge that helps you progress in the healthcare revenue cycle domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      {/* <section className="bg-[#173b62] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Start Your Healthcare Career</h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/70">
            Explore our training programs and choose the course that best matches your professional goals.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/training/medical-coding"
              className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-teal-400"
            >
              Explore Medical Coding
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}
