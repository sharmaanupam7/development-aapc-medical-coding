// // import Link from "next/link";
// // import { ArrowRight, Clock, GraduationCap } from "lucide-react";
// // import Image from "next/image";
// // import type { CourseCardData } from "@/types/course";

// // interface CourseCardProps {
// //   course: CourseCardData;
// // }

// // function formatLevel(level: CourseCardData["level"]) {
// //   return level.charAt(0) + level.slice(1).toLowerCase();
// // }

// // export function CourseCard({ course }: CourseCardProps) {
// //   return (
// //     <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
// //       <Link href={`/courses/${course.slug}`}>
// //         <div className="aspect-video overflow-hidden bg-slate-100 relative">
// //           {course.thumbnail ? (
// //             <Image
// //               src={course.thumbnail}
// //               alt={course.title}
// //               width={390}
// //               height={280}
// //               sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
// //               className="object-cover transition-transform duration-500 group-hover:scale-105"
// //             />
// //           ) : (
// //             <div className="flex h-full items-center justify-center bg-linear-to-br from-teal-600 to-cyan-700">
// //               <GraduationCap className="h-14 w-14 text-white/90" />
// //             </div>
// //           )}
// //         </div>
// //       </Link>

// //       <div className="p-6">
// //         {course.category && (
// //           <p className="text-xs font-bold uppercase tracking-wider text-teal-600">{course.category.name}</p>
// //         )}

// //         <Link href={`/courses/${course.slug}`}>
// //           <h3 className="mt-3 pb-3 text-xl font-bold text-slate-950 transition hover:text-teal-700">{course.title}</h3>
// //         </Link>

// //         <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{course.shortDescription}</p>

// //         <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
// //           <span>{formatLevel(course.level)}</span>

// //           {course.durationMinutes && (
// //             <span className="flex items-center gap-1">
// //               <Clock className="h-4 w-4" />
// //               {course.durationMinutes} Weeks
// //             </span>
// //           )}
// //         </div>

// //         <div className="mt-6 flex items-end justify-between gap-4">
// //           <div>
// //             {course.price !== null ? (
// //               <>
// //                 {/* <p className="text-xs text-slate-400 line-through">₹{course.price.toLocaleString("en-IN")}</p> */}

// //                 <p className="text-xl font-bold text-slate-950">₹{course.price.toLocaleString("en-IN")}</p>
// //               </>
// //             ) : (
// //               <p>Medical Coding</p>
// //             )}
// //           </div>

// //           <Link
// //             href={`/courses/${course.slug}`}
// //             className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition group-hover:gap-3"
// //           >
// //             View Course
// //             <ArrowRight className="h-4 w-4" />
// //           </Link>
// //         </div>
// //       </div>
// //     </article>
// //   );
// // }

// //updated code with correct alignment

// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Clock } from "lucide-react";

// import type { CourseCardData } from "@/types/course";

// interface CourseCardProps {
//   course: CourseCardData;
// }

// export function CourseCard({ course }: CourseCardProps) {
//   return (
//     <article className="group flex h-full flex-col overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
//       {/* =====================================================
//           COURSE IMAGE
//       ===================================================== */}
//       <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-100">
//         {course.thumbnail ? (
//           <Image
//             src={course.thumbnail}
//             alt={course.title}
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//             className="object-cover transition duration-300 group-hover:scale-105"
//           />
//         ) : (
//           <div className="flex h-full w-full items-center justify-center bg-slate-100">
//             <span className="text-sm font-medium text-slate-400">{course.title}</span>
//           </div>
//         )}
//       </div>

//       {/* =====================================================
//           COURSE CONTENT
//       ===================================================== */}
//       <div className="flex flex-1 flex-col p-5">
//         {/* ===================================================
//             COURSE CATEGORY
//         =================================================== */}
//         <div className="min-h-4.5">
//           {course.category?.name && (
//             <p className="text-[11px] font-bold uppercase tracking-wider text-teal-600">{course.category.name}</p>
//           )}
//         </div>

//         {/* ===================================================
//             COURSE TITLE
//         =================================================== */}
//         <h3 className="mt-2 line-clamp-2 min-h-12 text-lg font-bold leading-6 text-slate-950">{course.title}</h3>

//         {/* ===================================================
//             COURSE DESCRIPTION
//         =================================================== */}
//         <p className="mt-3 line-clamp-3 min-h-16.5 text-sm leading-5 text-slate-600">
//           {course.shortDescription ?? course.description ?? ""}
//         </p>

//         {/* ===================================================
//             COURSE META
//         =================================================== */}
//         <div className="mt-4 flex min-h-16.5 items-center gap-4 text-xs font-medium text-slate-500">
//           {/* {course.level && <span>{course.level}</span>} */}

//           {course.durationMinutes !== null && course.durationMinutes !== undefined && (
//             <span className="flex items-center gap-1">
//               <Clock className="h-3.5 w-3.5" />
//               {course.durationMinutes}+ Weeks
//             </span>
//           )}
//         </div>

//         {/* ===================================================
//             PRICE + VIEW COURSE
//             mt-auto keeps this section at the bottom
//         =================================================== */}
//         <div className="mt-auto pt-5">
//           <div className="flex items-center justify-between gap-4">
//             {/* PRICE */}
//             <p className="text-xl font-bold text-slate-950">₹{Number(course.price).toLocaleString("en-IN")}</p>

//             {/* VIEW COURSE */}
//             <Link
//               href={`/courses/${course.slug}`}
//               className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-teal-700 transition-all duration-200 hover:text-teal-800 group-hover:gap-2.5"
//             >
//               View Course
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// updated code with smaller cards

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import type { CourseCardData } from "@/types/course";

interface CourseCardProps {
  course: CourseCardData;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* COURSE IMAGE */}
      <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-slate-100">
        {course.thumbnail ? (
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 280px, 300px"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100 px-3">
            <span className="line-clamp-2 text-center text-sm font-medium text-slate-400">{course.title}</span>
          </div>
        )}
      </div>

      {/* COURSE CONTENT */}
      <div className="flex flex-1 flex-col p-4">
        {/* CATEGORY */}
        <div className="min-h-4">
          {course.category?.name && (
            <p className="line-clamp-1 text-[10px] font-bold uppercase tracking-wider text-teal-600">
              {course.category.name}
            </p>
          )}
        </div>

        {/* TITLE */}
        <h3 className="mt-2 line-clamp-2 min-h-11 text-base font-bold leading-5 text-slate-950">{course.title}</h3>

        {/* DESCRIPTION */}
        <p className="mt-2 line-clamp-3 min-h-15 text-xs leading-5 text-slate-600">
          {course.shortDescription ?? course.description ?? ""}
        </p>

        {/* COURSE DURATION */}
        <div className="mt-3 flex min-h-6 items-center text-xs font-medium text-slate-500">
          {course.durationMinutes !== null && course.durationMinutes !== undefined && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 shrink-0" />
              {course.durationMinutes}+ Weeks
            </span>
          )}
        </div>

        {/* PRICE + VIEW COURSE */}
        <div className="mt-auto border-t border-slate-100 pt-3">
          <div className="flex items-center justify-between gap-2">
            {/* PRICE */}
            <p className="text-lg font-bold text-slate-950">₹{Number(course.price).toLocaleString("en-IN")}</p>

            {/* VIEW COURSE */}
            <Link
              href={`/courses/${course.slug}`}
              className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-teal-700 transition-all duration-200 hover:text-teal-800 group-hover:gap-2"
            >
              View Course
              {/* <ArrowRight className="h-3.5 w-3.5" />   */}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
