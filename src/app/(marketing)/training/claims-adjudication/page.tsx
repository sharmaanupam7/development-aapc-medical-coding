import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claims Adjudication | Development AAPC Medical Coding",
  description: "Learn about Claims Adjudication and healthcare claims processing with Development AAPC Medical Coding.",
  icons: {
    icon: "/images/icons/training_icon.png",
  },
};

export default function ClaimsAdjudicationPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* =========================================================
          PAGE BANNER
      ========================================================= */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container>
          <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">Training</p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Claims Adjudication</h1>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Section heading */}
          {/* <div className="mb-5">
            <p className="text-[10px] font-medium text-teal-600">Training</p>

            <h2 className="mt-1 text-xl font-bold text-[#173b62] sm:text-2xl">Claims Adjudication</h2>

            <div className="mt-2 h-1 w-10 rounded-full bg-teal-500" />
          </div> */}

          {/* =====================================================
              IMAGE + CONTENT
          ===================================================== */}
          <div className="grid items-start gap-5 md:grid-cols-[260px_1fr] lg:gap-6">
            <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-md">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="/images/training/claim_adjudication.jpg"
                  alt="Claim Adjudication"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
            </div>

            {/* Course Content */}
            <div className="text-[10px] leading-[1.7] text-slate-600 sm:text-xs">
              <h3 className="font-bold text-[#173b62]">Claims Adjudication</h3>

              {/* Coming Soon Items */}
              <div className="mt-3 space-y-1">
                <p className="flex items-start gap-1">
                  <span className="text-teal-600">»</span>
                  <span>SME Finance Investment Service.</span>
                </p>

                <p className="flex items-start gap-1">
                  <span className="text-teal-600">»</span>
                  <span>SME Finance Advisory Finance.</span>
                </p>

                <p className="flex items-start gap-1">
                  <span className="text-teal-600">»</span>
                  <span>Global SME Finance Facility.</span>
                </p>
              </div>

              <div className="mt-25">
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
    </main>
  );
}
