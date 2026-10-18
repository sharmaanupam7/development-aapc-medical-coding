import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RCM | Development AAPC Medical Coding",
  icons: {
    icon: "/images/icons/rcm_icon.png",
  },
};

export default function RCMPage() {
  return (
    <main className="bg-white">
      {/* =========================================================
          PAGE HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container>
          <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">RCM</p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Revenue Cycle Management</h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Comprehensive revenue cycle management solutions designed to support healthcare organizations and
                improve financial performance
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            {/* Intro */}
            <div className="max-w-4xl">
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">RCM Services</p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#102a56] sm:text-4xl">
                Revenue Cycle Management
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  As a leading provider of medical billing services, Development AAPC Medical Coding has the experience
                  and expertise to provide comprehensive healthcare revenue cycle management services.
                </p>

                <p>
                  Our experienced team works with healthcare organizations to manage important aspects of the revenue
                  cycle, helping providers improve collections, reduce administrative workload and maintain efficient
                  billing operations.
                </p>
              </div>
            </div>

            {/* =====================================================
                RCM IMAGE
            ===================================================== */}
            <div className="relative mt-10 overflow-hidden rounded shadow-lg">
              <Image
                src="/images/rcm.jpg"
                alt="Revenue Cycle Management services"
                width={1200}
                height={650}
                className="h-auto w-full object-cover"
              />
            </div>

            {/* =====================================================
                RCM DESCRIPTION
            ===================================================== */}
            <div className="mt-10 space-y-5 text-base leading-8 text-slate-600">
              <p>
                As the healthcare delivery system continues to become more complex and difficult to navigate, having an
                outsourced medical billing partner has become increasingly important. Development AAPC Medical Coding
                provides healthcare organizations with revenue cycle management support designed to improve billing
                efficiency and financial performance.
              </p>

              <p>
                With the healthcare industry continuously evolving, healthcare providers must manage increasing
                regulatory requirements, insurance processes and documentation standards. Our team helps simplify these
                processes while maintaining accuracy and compliance.
              </p>

              <p>
                Our experienced professionals work closely with healthcare providers to maximize reimbursement, reduce
                accounts receivable and improve overall cash flow.
              </p>

              <p>
                Our medical billing services include coding, claims processing, payment posting, denial management,
                insurance verification, accounts receivable follow-up and other important revenue cycle activities.
              </p>
            </div>

            {/* =====================================================
                SERVICES
            ===================================================== */}
            <div className="mt-14">
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Our RCM Services</p>

              <h3 className="mt-2 text-3xl font-bold text-[#102a56]">Comprehensive Revenue Cycle Support</h3>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {/* Service 1 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-bold text-teal-700">
                    01
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-[#102a56]">Medical Billing</h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Professional medical billing support designed to improve billing accuracy, reduce delays and
                    maximize revenue.
                  </p>
                </div>

                {/* Service 2 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-bold text-teal-700">
                    02
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-[#102a56]">Medical Coding</h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Accurate coding support based on appropriate coding guidelines, documentation and payer
                    requirements.
                  </p>
                </div>

                {/* Service 3 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-bold text-teal-700">
                    03
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-[#102a56]">Claims Management</h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Efficient claims submission and follow-up to help reduce claim delays and improve reimbursement.
                  </p>
                </div>

                {/* Service 4 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-bold text-teal-700">
                    04
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-[#102a56]">Denial Management</h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Identification and follow-up of denied claims to help healthcare providers recover eligible revenue.
                  </p>
                </div>

                {/* Service 5 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-bold text-teal-700">
                    05
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-[#102a56]">Accounts Receivable</h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Structured accounts receivable follow-up to improve collections and reduce outstanding balances.
                  </p>
                </div>

                {/* Service 6 */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-sm font-bold text-teal-700">
                    06
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-[#102a56]">Eligibility & Verification</h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Insurance eligibility and verification support to help reduce billing issues and improve the patient
                    revenue cycle.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                SPECIALTIES
            ===================================================== */}
            <div className="mt-14">
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Medical Specialties</p>

              <h3 className="mt-2 text-3xl font-bold text-[#102a56]">
                Medical Billing Services Across Multiple Specialties
              </h3>

              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
                Development AAPC Medical Coding provides medical billing and revenue cycle management support across a
                broad range of healthcare specialties.
              </p>

              <div className="mt-8 grid gap-x-10 gap-y-3 rounded border border-slate-200 bg-slate-50 p-7 sm:grid-cols-2 lg:grid-cols-3 sm:p-9">
                {/* Column 1 */}
                <div className="space-y-3">
                  <p className="text-sm text-slate-600">Anesthesiology</p>
                  <p className="text-sm text-slate-600">Cardiology</p>
                  <p className="text-sm text-slate-600">Dermatology</p>
                  <p className="text-sm text-slate-600">Endocrinology</p>
                  <p className="text-sm text-slate-600">ENT</p>
                  <p className="text-sm text-slate-600">Family Medicine</p>
                </div>

                {/* Column 2 */}
                <div className="space-y-3">
                  <p className="text-sm text-slate-600">Gastroenterology</p>
                  <p className="text-sm text-slate-600">Internal Medicine</p>
                  <p className="text-sm text-slate-600">Nephrology</p>
                  <p className="text-sm text-slate-600">Neurology</p>
                  <p className="text-sm text-slate-600">OB/GYN</p>
                </div>

                {/* Column 3 */}
                <div className="space-y-3">
                  <p className="text-sm text-slate-600">Ophthalmology</p>
                  <p className="text-sm text-slate-600">Pediatric Cardiology</p>
                  <p className="text-sm text-slate-600">Physiatry</p>
                  <p className="text-sm text-slate-600">Podiatry</p>
                  <p className="text-sm text-slate-600">Radiology</p>
                </div>
              </div>
            </div>

            {/* =====================================================
                WHY US
            ===================================================== */}
            <div className="mt-14 rounded bg-linear-to-r from-[#173f7a] to-[#078c91] p-8 text-white sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-200">Why Development AAPC</p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">A Practical Approach to Revenue Cycle Management</h3>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/85 sm:text-base">
                Our experienced team combines healthcare knowledge, structured processes and technology to help
                healthcare providers manage their revenue cycle more effectively while allowing them to focus on
                delivering quality patient care.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-white/10 p-5">
                  <h4 className="font-bold">Experienced Team</h4>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Experienced professionals supporting healthcare revenue cycle operations.
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  <h4 className="font-bold">Quality & Accuracy</h4>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Focus on accurate coding, billing and claims processing.
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-5">
                  <h4 className="font-bold">Better Revenue Performance</h4>
                  <p className="mt-2 text-sm leading-6 text-white/75">
                    Processes designed to improve collections and reduce revenue leakage.
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
                CTA
            ===================================================== */}
            <div className="mt-14 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Get Started</p>

              <h3 className="mt-2 text-3xl font-bold text-[#102a56]">Strengthen Your Healthcare Revenue Cycle</h3>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Explore how Development AAPC Medical Coding can support your healthcare organization with structured
                revenue cycle management services.
              </p>

              <div className="mt-7">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded bg-[#078c91] px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#06777b]"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
