// import Image from "next/image";
// import Link from "next/link";

// import {
//   FaUserMd,
//   FaFileInvoiceDollar,
//   FaLaptopMedical,
//   FaHeadset,
//   FaArrowRight,
//   FaChevronRight,
// } from "react-icons/fa";

// const openPositions = [
//   {
//     title: "Medical Coders (1)",
//     experience: "0-1 years",
//     location: "Noida, Mohali, Hyderabad, Gurugram",
//     email: "developmentaapcmedicalcoding.com",
//     icon: FaUserMd,
//     featured: true,
//   },
//   {
//     title: "Medical Biller/Account Receivables",
//     experience: "1-3 years",
//     location: "Noida, Delhi, Mumbai,Gurugram",
//     email: "developmentaapcmedicalcoding.com",
//     icon: FaFileInvoiceDollar,
//   },
//   {
//     title: "Medical Coders",
//     experience: "2-3 years",
//     location: "Noida, Chandigarh, Mumbai,Gurugram",
//     email: "developmentaapcmedicalcoding.com",
//     icon: FaLaptopMedical,
//   },
//   {
//     title: "Customer Services/HRO",
//     experience: "1-2 years",
//     location: "Delhi, Chandigarh, Punjab ,Gurugram",
//     email: "developmentaapcmedicalcoding.com",
//     icon: FaHeadset,
//   },
// ];

// export default function CareerPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* =========================================================
//           HERO SECTION
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-linear-to-r from-[#03152f] via-[#06294a] to-[#009c9a]">
//         {/* Background pattern */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-teal-300/30" />
//           <div className="absolute -right-20 top-10 h-64 w-64 rounded-full border border-teal-200/30" />

//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
//               backgroundSize: "22px 22px",
//               maskImage: "linear-gradient(to right, black 0%, transparent 25%, transparent 75%, black 100%)",
//               WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 25%, transparent 75%, black 100%)",
//             }}
//           />
//         </div>

//         {/* Decorative glow */}
//         <div className="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-teal-400/20 to-transparent" />

//         <div className="relative mx-auto flex min-h-90 max-w-7xl items-center justify-center px-6 py-20 text-center">
//           <div>
//             <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-teal-300">Career</p>

//             <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">Career</h1>
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           CAREER CONTENT
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-24">
//         {/* Background decoration */}
//         <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />
//         <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="grid items-start gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
//             {/* =====================================================
//                 LEFT - OPEN POSITIONS
//             ===================================================== */}
//             <div>
//               {/* Small heading */}
//               <div className="mb-3">
//                 <span className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Join Our Team</span>

//                 <div className="mt-3 h-1 w-16 rounded-full bg-linear-to-r from-teal-500 to-cyan-400" />
//               </div>

//               <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-[#071d49] sm:text-5xl">Open Positions</h2>

//               {/* Position Cards */}
//               <div className="space-y-3">
//                 {openPositions.map((position, index) => {
//                   const Icon = position.icon;

//                   return (
//                     <div
//                       key={`${position.title}-${index}`}
//                       className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
//                     >
//                       <div className="flex items-center gap-5">
//                         {/* Icon */}
//                         <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#008f91] to-[#087d9a] text-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-105">
//                           <Icon />
//                         </div>

//                         {/* Position Details */}
//                         <div className="min-w-0 flex-1">
//                           <h3 className="text-xl font-bold text-[#071d49]">{position.title}</h3>

//                           {position.featured && (
//                             <div className="mt-2 space-y-1 text-sm text-slate-600">
//                               <p>
//                                 <span className="font-semibold text-slate-800">Experience:</span> {position.experience}
//                               </p>

//                               <p>
//                                 <span className="font-semibold text-slate-800">Location:</span> {position.location}
//                               </p>

//                               <p>
//                                 <span className="font-semibold text-slate-800">Email:</span>{" "}
//                                 <a
//                                   href={`mailto:${position.email}`}
//                                   className="text-teal-700 transition hover:text-teal-900 hover:underline"
//                                 >
//                                   {position.email}
//                                 </a>
//                               </p>
//                             </div>
//                           )}
//                         </div>

//                         {/* Arrow */}
//                         <div className="hidden shrink-0 text-xl text-teal-700 transition-transform duration-300 group-hover:translate-x-1 sm:block">
//                           <FaArrowRight />
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Bottom CTA */}
//               <div className="mt-8 rounded-xl border border-teal-100 bg-linear-to-r from-teal-50 to-cyan-50 p-6">
//                 <h3 className="text-lg font-bold text-[#071d49]">Interested in joining our team?</h3>

//                 <p className="mt-2 text-sm leading-6 text-slate-600">
//                   We are always looking for talented and motivated professionals to join our growing healthcare and
//                   medical coding team.
//                 </p>

//                 <a
//                   href="mailto:hr@genusheolthcoresolution.com"
//                   className="mt-4 inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#008f91] to-[#087d9a] px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   Send Your Resume
//                   <FaArrowRight className="text-xs" />
//                 </a>
//               </div>
//             </div>

//             {/* =====================================================
//                 RIGHT - CAREER IMAGE
//             ===================================================== */}
//             <div className="lg:sticky lg:top-24">
//               <div className="relative overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-xl">
//                 {/* Image */}
//                 <div className="relative aspect-4/4.5 overflow-hidden rounded-xl">
//                   <Image
//                     src="/images/career.jpg"
//                     alt="Development AAPC Medical Coding team"
//                     fill
//                     priority
//                     className="object-cover transition duration-700 hover:scale-105"
//                     sizes="(max-width: 1024px) 100vw, 45vw"
//                   />

//                   {/* Image overlay */}
//                   <div className="absolute inset-0 bg-linear-to-t from-[#03152f]/60 via-transparent to-transparent" />

//                   {/* Image text */}
//                   <div className="absolute bottom-6 left-6 right-6">
//                     <div className="rounded-xl border border-white/20 bg-white/10 p-5 backdrop-blur-md">
//                       <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-200">Join Our Team</p>

//                       <h3 className="mt-2 text-2xl font-bold text-white">Build Your Career With Us</h3>

//                       <p className="mt-2 text-sm leading-6 text-white/80">
//                         Be part of a team focused on healthcare, medical coding and professional growth.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Small feature boxes */}
//               <div className="mt-5 grid grid-cols-2 gap-4">
//                 <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
//                   <div className="text-2xl font-extrabold text-teal-700">Growth</div>

//                   <p className="mt-1 text-xs text-slate-500">Professional Development</p>
//                 </div>

//                 <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
//                   <div className="text-2xl font-extrabold text-[#071d49]">Team</div>

//                   <p className="mt-1 text-xs text-slate-500">Collaborative Environment</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// updated code with collapse position panel

import Image from "next/image";
import { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { CareerPositions } from "@/components/career/career-positions";

export const metadata: Metadata = {
  title: "Career | Development AAPC Medical Coding",
  description: "Explore job openings for Development AAPC Medical Coding",
  icons: {
    icon: "/images/icons/career_icon.png",
  },
};

const positions = [
  {
    title: "Medical Coders (1)",
    experience: "1-2 Years",
    location: "Noida, Delhi, Hyderabad, Gurugram",
    email: "developmentaapcmedicalcoding.com",
    description:
      "We are looking for motivated medical coding professionals who are interested in building a rewarding career in healthcare and medical coding.",
  },
  {
    title: "Medical Biller / Account Receivables",
    experience: "Entry Level / Experienced",
    location: "Noida, Mohali, Hyderabad, Gurugram",
    email: "developmentaapcmedicalcoding.com",
    description:
      "Join our healthcare operations team and contribute to medical billing, account receivables and revenue cycle management activities.",
  },
  {
    title: "Medical Coders (2)",
    experience: "Experienced",
    location: "Noida, Chennai, Hyderabad, Gurugram",
    email: "developmentaapcmedicalcoding.com",
    description:
      "Become part of our medical coding team and work with healthcare documentation, coding standards and quality-focused processes.",
  },
  {
    title: "Customer Services / HRO",
    experience: "Entry Level / Experienced",
    location: "Noida, Kolkata, Pune, Gurugram",
    email: "developmentaapcmedicalcoding.com",
    description:
      "We are looking for customer service and healthcare operations professionals who can support our clients and contribute to high-quality service delivery.",
  },
];

export default function CareerPage() {
  return (
    <main className="bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container>
          <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">Career</p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Build Your Career With Us</h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Join a growing healthcare organization where you can develop your skills, gain valuable experience and
                build a rewarding career in medical coding and healthcare operations
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CAREER CONTENT
      ====================================================== */}

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Open Positions</p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Explore Career Opportunities
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-slate-600">
                We are always looking for talented and motivated professionals to join our team. Explore our current
                openings below and click on a position to view additional information. <br /> Email us your resume at
                <span className="text-sm font-semibold text-zinc-400"> developmentaapcmedicalcoding.com </span>
              </p>

              {/* COLLAPSIBLE POSITIONS */}
              <CareerPositions positions={positions} />
            </div>

            {/* RIGHT IMAGE */}
            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded bg-linear-to-br from-teal-700 to-cyan-900 shadow-xl">
                <div className="relative aspect-4/5">
                  <Image
                    src="/images/career.jpg"
                    alt="Career opportunities in medical coding"
                    width={526}
                    height={30}
                    priority
                    className="object-cover rounded"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">
                    <p className="text-sm font-bold uppercase tracking-wider text-teal-300">Your Future Starts Here</p>

                    <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                      Grow With Development AAPC Medical Coding
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-200">
                      Discover opportunities to learn, grow and make a difference in the healthcare industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-linear-to-r from-[#032a3a] via-[#075766] to-[#063b46] py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Join Our Team</p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to Take the Next Step?</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Explore our open positions and send us your application. We would love to hear from you.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
