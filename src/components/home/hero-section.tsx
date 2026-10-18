import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, PlayCircle } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-100/60 blur-3xl" />

      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <Container>
        <div className="relative grid min-h-170 items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
                <BookOpen className="h-4 w-4" />
                Medical Coding Education
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Build Your Future in <span className="text-teal-600">Medical Coding</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Develop practical medical coding skills, prepare for professional certification, and build the knowledge
                you need for a successful healthcare coding career.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/courses"
                  className="inline-flex font-mono items-center justify-center gap-2 rounded bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
                >
                  Explore Courses
                  {/* <ArrowRight className="h-4 w-4" /> */}
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
                >
                  <PlayCircle className="h-4 w-4" />
                  Learn More
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Certification-focused learning",
                  "Practical coding training",
                  "Flexible online learning",
                  "Career-oriented curriculum",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-teal-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-0 rounded-[2rem] bg-teal-200/40 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl">
                <div className="aspect-4/3 overflow-hidden rounded-[1.5rem] bg-linear-to-br from-teal-600 via-cyan-600 to-slate-800">
                  <div className="flex h-full flex-col justify-between p-8 text-white">
                    <div>
                      <div className="inline-flex rounded-xl bg-white/15 p-3 backdrop-blur">
                        <BookOpen className="h-7 w-7" />
                      </div>

                      <p className="mt-8 text-sm font-medium text-white/70 font-roboto-mono">PROFESSIONAL LEARNING</p>

                      <h2 className="mt-2 text-3xl font-bold">
                        Medical Coding
                        <br />
                        Training
                      </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                        <p className="text-2xl font-bold">CPC</p>
                        <p className="mt-1 text-xs text-white/70">Certification Preparation</p>
                      </div>

                      <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                        <p className="text-2xl font-bold">ICD</p>
                        <p className="mt-1 text-xs text-white/70">Coding Knowledge</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-teal-50 p-3 text-teal-600">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">Learn with confidence</p>
                    <p className="text-xs text-slate-500">Structured learning paths</p>
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

// code with background image

// import Link from "next/link";
// import { ArrowRight, BookOpen, CheckCircle2, PlayCircle } from "lucide-react";

// import { Container } from "@/components/layout/container";
// import { FadeIn } from "./fade-in";

// export function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-slate-950">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: "url('/images/hero_section_bg.jpg')",
//         }}
//       />

//       {/* Background Blur */}
//       <div className="absolute inset-0" />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-slate-950/55" />
//       <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-100/60 blur-xl" />

//       <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-100/50 blur-xl" />

//       <Container>
//         <div className="relative grid min-h-170 items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
//           <FadeIn>
//             <div className="max-w-2xl">
//               <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
//                 <BookOpen className="h-4 w-4" />
//                 Medical Coding Education
//               </div>

//               <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
//                 Build Your Future in <span className="text-teal-600">Medical Coding</span>
//               </h1>

//               <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
//                 Develop practical medical coding skills, prepare for professional certification, and build the knowledge
//                 you need for a successful healthcare coding career.
//               </p>

//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <Link
//                   href="/courses"
//                   className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700"
//                 >
//                   Explore Courses
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>

//                 <Link
//                   href="/about"
//                   className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-300 hover:text-teal-700"
//                 >
//                   <PlayCircle className="h-4 w-4" />
//                   Learn More
//                 </Link>
//               </div>

//               <div className="mt-8 grid gap-3 sm:grid-cols-2">
//                 {[
//                   "Certification-focused learning",
//                   "Practical coding training",
//                   "Flexible online learning",
//                   "Career-oriented curriculum",
//                 ].map((item) => (
//                   <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
//                     <CheckCircle2 className="h-4 w-4 text-teal-600" />
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </FadeIn>

//           <FadeIn delay={0.15}>
//             <div className="relative mx-auto w-full max-w-xl">
//               <div className="absolute inset-0 rounded-[2rem] bg-teal-200/40 blur-3xl" />

//               <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl">
//                 <div className="aspect-4/3 overflow-hidden rounded-[1.5rem] bg-linear-to-br from-teal-600 via-cyan-600 to-slate-800">
//                   <div className="flex h-full flex-col justify-between p-8 text-white">
//                     <div>
//                       <div className="inline-flex rounded-xl bg-white/15 p-3 backdrop-blur">
//                         <BookOpen className="h-7 w-7" />
//                       </div>

//                       <p className="mt-8 text-sm font-medium text-white/70">PROFESSIONAL LEARNING</p>

//                       <h2 className="mt-2 text-3xl font-bold">
//                         Medical Coding
//                         <br />
//                         Training
//                       </h2>
//                     </div>

//                     <div className="grid grid-cols-2 gap-3">
//                       <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
//                         <p className="text-2xl font-bold">CPC</p>
//                         <p className="mt-1 text-xs text-white/70">Certification Preparation</p>
//                       </div>

//                       <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
//                         <p className="text-2xl font-bold">ICD</p>
//                         <p className="mt-1 text-xs text-white/70">Coding Knowledge</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
//                 <div className="flex items-center gap-3">
//                   <div className="rounded-xl bg-teal-50 p-3 text-teal-600">
//                     <CheckCircle2 className="h-5 w-5" />
//                   </div>

//                   <div>
//                     <p className="text-sm font-bold text-slate-900">Learn with confidence</p>
//                     <p className="text-xs text-slate-500">Structured learning paths</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeIn>
//         </div>
//       </Container>
//     </section>
//   );
// }
