// import Link from "next/link";
// import { ArrowRight, Clock, GraduationCap } from "lucide-react";

// import { Container } from "@/components/layout/container";
// import { FadeIn } from "./fade-in";
// import type { CourseCardData } from "@/types/course";

// const courses = [
//     {
//       title: "Medical Coding Fundamentals",
//       description: "Build a strong foundation in medical coding concepts, terminology and coding guidelines.",
//       level: "Beginner",
//       duration: "8 Weeks",
//       href: "/courses/medical-coding-fundamentals",
//     },
//     {
//       title: "CPC Certification Preparation",
//       description: "Prepare systematically for professional medical coding certification with focused learning.",
//       level: "Intermediate",
//       duration: "12 Weeks",
//       href: "/courses/cpc-certification-preparation",
//     },
//     {
//       title: "ICD-10-CM Coding",
//       description: "Develop practical knowledge of ICD-10-CM coding concepts and application.",
//       level: "Intermediate",
//       duration: "10 Weeks",
//       href: "/courses/icd-10-cm-coding",
//     },
// ];

// export function PopularCourses() {
//   return (
//     <section className="bg-slate-50 py-20">
//       <Container>
//         <FadeIn>
//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <div className="max-w-2xl">
//               <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Featured Learning</p>

//               <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
//                 Explore Our Popular Courses
//               </h2>

//               <p className="mt-4 text-slate-600">
//                 Learn through structured, practical and career-focused medical coding programs.
//               </p>
//             </div>

//             <Link
//               href="/courses"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
//             >
//               View all courses
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </FadeIn>

//         <div className="mt-10 grid gap-6 lg:grid-cols-3">
//           {courses.map((course, index) => (
//             <FadeIn key={course.title} delay={index * 0.08}>
//               <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
//                 <div className="aspect-video bg-linear-to-br from-teal-600 to-cyan-700 p-6">
//                   <div className="flex h-full flex-col justify-between">
//                     <div className="flex items-center justify-between">
//                       <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
//                         Medical Coding
//                       </span>

//                       <GraduationCap className="h-6 w-6 text-white" />
//                     </div>

//                     <p className="text-2xl font-bold text-white">{course.title}</p>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-slate-950">{course.title}</h3>

//                   <p className="mt-3 text-sm leading-6 text-slate-600">{course.description}</p>

//                   <div className="mt-5 flex items-center gap-5 text-xs font-medium text-slate-500">
//                     <span>{course.level}</span>

//                     <span className="flex items-center gap-1">
//                       <Clock className="h-4 w-4" />
//                       {course.duration}
//                     </span>
//                   </div>

//                   <Link
//                     href={`/courses/`}
//                     className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition group-hover:gap-3"
//                   >
//                     View Course
//                     <ArrowRight className="h-4 w-4" />
//                   </Link>
//                 </div>
//               </article>
//             </FadeIn>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

// previous code

// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// import { Container } from "@/components/layout/container";
// import { CourseCard } from "@/components/course/course-card";
// import { FadeIn } from "./fade-in";
// import type { CourseCardData } from "@/types/course";

// interface PopularCoursesProps {
//   courses: CourseCardData[];
// }

// export function PopularCourses({ courses }: PopularCoursesProps) {
//   return (
//     <section className="bg-slate-50 py-20">
//       <Container>
//         <FadeIn>
//           <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <div className="max-w-2xl">
//               <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Featured Learning</p>

//               <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
//                 Explore Our Popular Courses
//               </h2>

//               <p className="mt-4 text-slate-600">
//                 Learn through structured, practical and career-focused medical coding programs.
//               </p>
//             </div>

//             <Link
//               href="/courses"
//               className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
//             >
//               View all courses
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </FadeIn>

//         {courses.length > 0 ? (
//           <div className="mt-10 grid gap-6 lg:grid-cols-3">
//             {courses.map((course) => (
//               <CourseCard key={course.id} course={course} />
//             ))}
//           </div>
//         ) : (
//           <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center">
//             <p className="text-slate-500">Courses will be available soon.</p>
//           </div>
//         )}
//       </Container>
//     </section>
//   );
// }

// updated code

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";
import type { CourseCardData } from "@/types/course";
import { CourseCarousel } from "../course/CourseCarousel";

interface PopularCoursesProps {
  courses: CourseCardData[];
}

export function PopularCourses({ courses }: PopularCoursesProps) {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <Container>
        {/* SECTION HEADER */}
        <FadeIn>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Featured Learning</p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Explore Our Popular Courses
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                Learn through structured, practical and career-focused medical coding programs.
              </p>
            </div>

            <Link
              href="/courses"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
            >
              View All Courses
              {/* <ArrowRight className="h-4 w-4" /> */}
            </Link>
          </div>
        </FadeIn>

        {/* COURSE CAROUSEL */}
        {courses.length > 0 ? (
          <div className="mt-8 sm:mt-10">
            <CourseCarousel courses={courses} />
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-10 text-center">
            <p className="text-slate-500">Courses will be available soon</p>
          </div>
        )}
      </Container>
    </section>
  );
}
