// // updated code with panel

// import Link from "next/link";
// import { ChevronDown } from "lucide-react";

// import { prisma } from "@/lib/prisma";

// // in course panel courses will be dispalyed based on these conditions
// //CourseCategory.isActive = true Course.isPublished = true Course.status = PUBLISHED
// export async function MainNav() {
//   const categories = await prisma.courseCategory.findMany({
//     where: {
//       isActive: true,

//       courses: {
//         some: {
//           isPublished: true,
//           status: "DRAFT",
//         },
//       },
//     },

//     orderBy: {
//       name: "asc",
//     },

//     select: {
//       id: true,
//       name: true,
//       slug: true,

//       courses: {
//         where: {
//           isPublished: true,
//           status: "DRAFT",
//         },

//         orderBy: {
//           createdAt: "desc",
//         },

//         select: {
//           id: true,
//           title: true,
//           slug: true,
//         },
//       },
//     },
//   });

//   return (
//     <nav className="hidden items-center md:flex">
//       <ul className="flex items-center gap-7">
//         {/* =====================================================
//             HOME
//         ====================================================== */}

//         <li>
//           <Link href="/" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Home
//           </Link>
//         </li>

//         {/* =====================================================
//             ABOUT
//         ====================================================== */}

//         <li>
//           <Link href="/about" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             About Us
//           </Link>
//         </li>

//         {/* =====================================================
//             COURSES
//         ====================================================== */}

//         <li className="group relative">
//           {/* Courses Link */}

//           <Link
//             href="/courses"
//             className="flex items-center gap-1 text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600"
//           >
//             <span>Courses</span>

//             <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//           </Link>

//           {/* ===================================================
//               MEGA MENU
//           ==================================================== */}

//           <div
//             className="
//               invisible
//               absolute
//               left-1/2
//               top-full
//               z-10
//               w-280
//               -translate-x-1/2
//               pt-4
//               ml-38
//               opacity-0
//               transition-all
//               duration-200
//               group-hover:visible
//               group-hover:opacity-100
//             "
//           >
//             <div
//               className="
//                 overflow-hidden
//                 rounded-xl
//                 border
//                 border-slate-200
//                 bg-white
//                 shadow-xl
//               "
//             >
//               {/* =================================================
//                   HEADER
//               ================================================== */}

//               <div className="border-b border-slate-100 px-6 py-5">
//                 <Link
//                   href="/courses"
//                   className="text-base font-bold text-slate-950 transition-colors hover:text-teal-600"
//                 >
//                   All Courses
//                 </Link>

//                 <p className="mt-1 text-sm text-slate-500">
//                   Explore our medical coding courses and professional training programs.
//                 </p>
//               </div>

//               {/* =================================================
//                   CATEGORY / COURSE GRID
//               ================================================== */}

//               {categories.length > 0 ? (
//                 <div className="grid grid-cols-3 gap-x-8 gap-y-8 p-6">
//                   {categories.map((category) => (
//                     <div key={category.id}>
//                       {/* Category */}

//                       {/* <Link
//                         href={`/courses?category=${category.slug}`}
//                         className="
//                           block
//                           text-sm
//                           font-bold
//                           text-slate-900
//                           transition-colors
//                           hover:text-teal-600
//                         "
//                       >
//                         {category.name}
//                       </Link> */}

//                       {/* Courses */}

//                       <div className="mt-3 space-y-2">
//                         {category.courses.map((course) => (
//                           <Link
//                             key={course.id}
//                             href={`/courses/${course.slug}`}
//                             className="
//                               group/course
//                               block
//                               text-sm
//                               leading-5
//                               text-slate-600
//                               transition-colors
//                               hover:text-teal-600
//                             "
//                           >
//                             <span className="mr-1 text-slate-400">»</span>

//                             {course.title}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="px-6 py-8 text-center">
//                   <p className="text-sm text-slate-500">Courses will be available soon</p>
//                 </div>
//               )}

//               {/* =================================================
//                   VIEW ALL COURSES
//               ================================================== */}

//               <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
//                 <Link
//                   href="/courses"
//                   className="
//                     inline-flex
//                     items-center
//                     text-sm
//                     font-semibold
//                     text-teal-600
//                     transition-colors
//                     hover:text-teal-700
//                   "
//                 >
//                   View All Courses
//                   <span className="ml-1">→</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </li>

//         {/* =====================================================
//             RCM
//         ====================================================== */}

//         <li>
//           <Link href="/rcm" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             RCM
//           </Link>
//         </li>

//         {/* =====================================================
//             CAREER
//         ====================================================== */}

//         <li>
//           <Link href="/career" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Career
//           </Link>
//         </li>

//         {/* =====================================================
//             TRAINING
//         ====================================================== */}

//         <li>
//           <Link href="/training" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Training
//           </Link>
//         </li>

//         {/* =====================================================
//             PRACTICE
//         ====================================================== */}

//         <li>
//           <Link href="/practice" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Practice
//           </Link>
//         </li>

//         {/* =====================================================
//             VIDEOS
//         ====================================================== */}

//         <li>
//           <Link href="/videos" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Videos
//           </Link>
//         </li>

//         {/* =====================================================
//             BLOG
//         ====================================================== */}

//         <li>
//           <Link href="/blog" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Blog
//           </Link>
//         </li>

//         {/* =====================================================
//             CONTACT
//         ====================================================== */}

//         <li>
//           <Link href="/contact" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// **************** updated code with course and mock sections******************************************************************************** //

// import Link from "next/link";
// import { ChevronDown } from "lucide-react";
// import { prisma } from "@/lib/prisma";
// import { trainingNavigation } from "@/lib/constants/navigation";

// export async function MainNav() {
//   const [categories, mockExams] = await Promise.all([
//     // ============================================================
//     // COURSE CATEGORIES
//     // ============================================================

//     prisma.coursecategory.findMany({
//       where: {
//         isActive: true,

//         // Only show categories that contain published courses
//         course: {
//           some: {
//             isPublished: true,
//             status: "PUBLISHED",
//           },
//         },
//       },

//       orderBy: {
//         sortOrder: "asc",
//       },

//       select: {
//         id: true,
//         name: true,
//         slug: true,

//         course: {
//           where: {
//             isPublished: true,
//             status: "PUBLISHED",
//           },

//           orderBy: [
//             {
//               sortOrder: "asc",
//             },
//             {
//               createdAt: "desc",
//             },
//           ],

//           select: {
//             id: true,
//             title: true,
//             slug: true,
//           },
//         },
//       },
//     }),

//     // ============================================================
//     // MOCKS & EXAMS
//     // ============================================================

//     prisma.mockexam.findMany({
//       where: {
//         isPublished: true,
//       },

//       orderBy: [
//         {
//           sortOrder: "asc",
//         },
//         {
//           createdAt: "desc",
//         },
//       ],

//       select: {
//         id: true,
//         title: true,
//         slug: true,
//         type: true,
//       },
//     }),
//   ]);

//   return (
//     <nav className="hidden items-center md:flex">
//       <ul className="flex items-center gap-4">
//         {/* =====================================================
//             HOME
//         ====================================================== */}

//         <li>
//           <Link href="/" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Home
//           </Link>
//         </li>

//         {/* =====================================================
//             ABOUT
//         ====================================================== */}

//         <li>
//           <Link href="/about" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             About Us
//           </Link>
//         </li>

//         {/* =====================================================
//             COURSES
//         ====================================================== */}

//         <li className="group relative">
//           <div className="flex cursor-pointer items-center gap-1 text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             <span>Courses</span>

//             <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//           </div>

//           {/* ===================================================
//               MEGA MENU
//           ==================================================== */}

//           <div
//             className="
//               invisible
//               absolute
//               left-1/2
//               top-full
//               z-50
//               w-225
//               -translate-x-1/2
//               pt-7.5
//               opacity-0
//               transition-all
//               duration-200
//               group-hover:visible
//               group-hover:opacity-100
//             "
//           >
//             <div
//               className="
//                 overflow-hidden
//                 rounded
//                 border
//                 border-slate-200
//                 bg-white
//                 shadow-xl
//               "
//             >
//               {/* =================================================
//                   HEADER
//               ================================================== */}

//               <div className="border-b border-slate-100 px-6 py-5">
//                 <h3 className="text-sm font-bold uppercase tracking-wide text-slate-950">All Courses</h3>

//                 <p className="mt-1 text-sm text-slate-500">
//                   Explore our medical coding courses and professional training programs.
//                 </p>
//               </div>

//               {/* =================================================
//                   TWO MAIN SECTIONS
//               ================================================== */}

//               <div className="grid grid-cols-2 divide-x divide-slate-100">
//                 {/* =================================================
//                     COURSES
//                 ================================================== */}

//                 <div className="p-6">
//                   <div className="mb-4">
//                     <h3 className="text-sm font-bold uppercase tracking-wide text-slate-950">Courses</h3>

//                     <div className="mt-2 h-0.5 w-8 rounded-full bg-teal-500" />
//                   </div>

//                   {categories.length > 0 ? (
//                     <div className="grid grid-cols-2 gap-x-6 gap-y-5">
//                       {categories.map((category) => (
//                         <div key={category.id}>
//                           <h3 className="text-sm font-medium tracking-wide text-slate-950">{category.name}</h3>

//                           {/* Courses under category */}

//                           <div className="mt-2 space-y-2">
//                             {category.course.map((course) => (
//                               <Link
//                                 key={course.id}
//                                 href={`/courses/${course.slug}`}
//                                 className="
//                                   group/course
//                                   flex
//                                   items-start
//                                   gap-1
//                                   text-sm
//                                   leading-5
//                                   text-slate-600
//                                   transition-colors
//                                   hover:text-teal-600
//                                 "
//                               >
//                                 <span className="text-sm text-slate-400">»</span>

//                                 <span className="text-sm">{course.title}</span>
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-sm text-slate-500">Courses will be available soon</p>
//                   )}
//                 </div>

//                 {/* =================================================
//                     MOCKS & EXAMS
//                 ================================================== */}

//                 <div className="p-6">
//                   <div className="mb-4">
//                     <h3 className="text-sm font-bold uppercase tracking-wide text-slate-950">Mocks & Exams</h3>

//                     <div className="mt-2 h-0.5 w-8 rounded-full bg-teal-500" />
//                   </div>

//                   {mockExams.length > 0 ? (
//                     <div className="space-y-3">
//                       {mockExams.map((mockExam) => (
//                         <Link
//                           key={mockExam.id}
//                           href={`/mocks/${mockExam.slug}`}
//                           className="
//                             group/mock
//                             flex
//                             items-start
//                             gap-2
//                             text-sm
//                             leading-5
//                             text-slate-600
//                             transition-colors
//                             hover:text-teal-600
//                           "
//                         >
//                           <span className="text-sm text-slate-400">»</span>

//                           <span className="text-sm">{mockExam.title}</span>
//                         </Link>
//                       ))}
//                     </div>
//                   ) : (
//                     <p className="text-sm text-slate-500">Mock tests and exams will be available soon</p>
//                   )}
//                 </div>
//               </div>

//               {/* =================================================
//                   FOOTER ACTIONS
//               ================================================== */}

//               <div
//                 className="
//                   grid
//                   grid-cols-2
//                   border-t
//                   border-slate-100
//                   bg-slate-50
//                 "
//               >
//                 {/* View All Courses */}

//                 <Link
//                   href="/courses"
//                   className="
//                     px-6
//                     py-4
//                     text-sm
//                     font-semibold
//                     text-teal-600
//                     transition-colors
//                     hover:bg-slate-100
//                     hover:text-teal-700
//                   "
//                 >
//                   View All Courses →
//                 </Link>

//                 {/* View All Mocks */}

//                 <Link
//                   href="/mocks"
//                   className="
//                     border-l
//                     border-slate-100
//                     px-6
//                     py-4
//                     text-sm
//                     font-semibold
//                     text-teal-600
//                     transition-colors
//                     hover:bg-slate-100
//                     hover:text-teal-700
//                   "
//                 >
//                   View All Mocks & Exams →
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </li>

//         {/* =====================================================
//             RCM
//         ====================================================== */}

//         <li>
//           <Link href="/rcm" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             RCM
//           </Link>
//         </li>

//         {/* =====================================================
//             CAREER
//         ====================================================== */}

//         <li>
//           <Link href="/career" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Career
//           </Link>
//         </li>

//         {/* =====================================================
//             TRAINING
//         ====================================================== */}

//         <li className="group relative">
//           <div className="flex cursor-pointer items-center gap-1 text-sm font-medium hover:text-teal-600">
//             Training
//             <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
//           </div>

//           <div
//             className="
//               invisible
//               absolute
//               left-0
//               top-full
//               z-50
//               mt-7.5
//               w-64
//               translate-y-2
//               rounded
//               border
//               bg-white
//               opacity-0
//               shadow-lg
//               transition-all
//               group-hover:visible
//               group-hover:translate-y-0
//               group-hover:opacity-100
//             "
//           >
//             {trainingNavigation.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="
//                   block
//                   px-4
//                   py-2.5
//                   text-sm
//                   text-slate-700
//                   hover:text-teal-700
//                 "
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </li>

//         {/* =====================================================
//             VIDEOS
//         ====================================================== */}

//         <li>
//           <Link href="/videos" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Videos
//           </Link>
//         </li>

//         {/* =====================================================
//             BLOG
//         ====================================================== */}

//         <li>
//           <Link href="/blog" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Blog
//           </Link>
//         </li>

//         {/* =====================================================
//             CONTACT
//         ====================================================== */}

//         <li>
//           <Link href="/contact" className="text-sm font-semibold text-slate-800 transition-colors hover:text-teal-600">
//             Contact Us
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// updated code with full course dropdown panel

import Link from "next/link";
import { HiChevronUp } from "react-icons/hi";
import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";
import { trainingNavigation } from "@/lib/constants/navigation";

const getMainNavData = unstable_cache(
  async () => {
    const [categories, mockExams] = await Promise.all([
      // ============================================================
      // COURSE CATEGORIES
      // ============================================================

      prisma.coursecategory.findMany({
        where: {
          isActive: true,

          course: {
            some: {
              isPublished: true,
              status: "PUBLISHED",
            },
          },
        },

        orderBy: {
          sortOrder: "asc",
        },

        select: {
          id: true,
          name: true,
          slug: true,

          course: {
            where: {
              isPublished: true,
              status: "PUBLISHED",
            },

            orderBy: [
              {
                sortOrder: "asc",
              },
              {
                createdAt: "desc",
              },
            ],

            select: {
              id: true,
              title: true,
              slug: true,
            },
          },
        },
      }),

      // ============================================================
      // MOCKS & EXAMS
      // ============================================================

      prisma.mockexam.findMany({
        where: {
          isPublished: true,
        },

        orderBy: [
          {
            sortOrder: "asc",
          },
          {
            createdAt: "desc",
          },
        ],

        select: {
          id: true,
          title: true,
          slug: true,
          type: true,
        },
      }),
    ]);

    return {
      categories,
      mockExams,
    };
  },

  ["main-navigation-data"],

  {
    revalidate: 300,
    tags: ["main-navigation"],
  },
);

export async function MainNav() {
  const { categories, mockExams } = await getMainNavData();

  return (
    <nav className="hidden items-center justify-center md:flex">
      <ul className="flex items-center justify-center gap-3 lg:gap-4">
        {/* =====================================================
            HOME
        ====================================================== */}

        <li>
          <Link href="/" className="text-sm font-semibold text-white transition-colors hover:text-teal-950">
            Home
          </Link>
        </li>

        {/* =====================================================
            ABOUT
        ====================================================== */}

        <li>
          <Link href="/about" className="text-sm font-semibold text-white transition-colors hover:text-teal-950">
            About Us
          </Link>
        </li>

        {/* =====================================================
            COURSES
        ====================================================== */}

        <li className="group">
          {/* ===================================================
              COURSES TRIGGER
          ==================================================== */}

          <div
            className="
              flex
              cursor-pointer
              items-center
              gap-1
              text-sm
              font-semibold
              text-white transition-colors 
              hover:text-teal-950
            "
          >
            <span>Courses</span>

            <HiChevronUp
              className="
                h-4
                w-4
                transition-transform
                duration-200
                group-hover:rotate-180
              "
            />
          </div>

          {/* ===================================================
              FULL-WIDTH MEGA MENU
          ==================================================== */}

          <div
            className="
              invisible
              fixed
              left-0
              right-0
              top-21
              z-50
              w-screen
              pt-0
              opacity-0
              transition-all
              duration-200
              group-hover:visible
              group-hover:opacity-100
            "
          >
            {/* =================================================
                FULL WIDTH BACKGROUND
            ================================================== */}

            <div
              className="
                w-full
                border-y
                border-slate-200
                bg-white
                shadow-xl
              "
            >
              {/* =================================================
                  CENTERED CONTENT
              ================================================== */}

              <div className="mx-auto w-full max-w-7xl">
                {/* =================================================
                    HEADER
                ================================================== */}

                <div
                  className="
                    border-b
                    border-slate-100
                    px-6
                    py-5
                  "
                >
                  <h3
                    className="
                      text-sm
                      font-bold
                      uppercase
                      tracking-wide
                      text-slate-950
                    "
                  >
                    All Courses
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Explore our medical coding courses and professional training programs.
                  </p>
                </div>

                {/* =================================================
                    TWO MAIN SECTIONS
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-2
                    divide-x
                    divide-slate-100
                  "
                >
                  {/* =================================================
                      COURSES
                  ================================================== */}

                  <div className="p-6">
                    <div className="mb-4">
                      <h3
                        className="
                          text-sm
                          font-bold
                          uppercase
                          tracking-wide
                          text-slate-950
                        "
                      >
                        Courses
                      </h3>

                      <div className="mt-2 h-0.5 w-8 rounded-full bg-teal-500" />
                    </div>

                    {categories.length > 0 ? (
                      <div
                        className="
                          grid
                          grid-cols-2
                          gap-x-8
                          gap-y-6
                        "
                      >
                        {categories.map((category) => (
                          <div key={category.id}>
                            {/* =================================================
                                CATEGORY
                            ================================================== */}

                            <h3
                              className="
                                text-sm
                                font-semibold
                                tracking-wide
                                text-slate-950
                              "
                            >
                              {category.name}
                            </h3>

                            {/* =================================================
                                COURSES UNDER CATEGORY
                            ================================================== */}

                            <div className="mt-2 space-y-2">
                              {category.course.map((course) => (
                                <Link
                                  key={course.id}
                                  href={`/courses/${course.slug}`}
                                  className="
                                    group/course
                                    flex
                                    items-start
                                    gap-2
                                    text-sm
                                    leading-5
                                    text-slate-600
                                    transition-colors
                                    hover:text-teal-600
                                  "
                                >
                                  <span
                                    className="
                                      shrink-0
                                      text-sm
                                      text-slate-400
                                      transition-colors
                                      group-hover/course:text-teal-500
                                    "
                                  >
                                    »
                                  </span>

                                  <span>{course.title}</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500">Courses will be available soon</p>
                    )}
                  </div>

                  {/* =================================================
                      MOCKS & EXAMS
                  ================================================== */}

                  <div className="p-6">
                    <div className="mb-4">
                      <h3
                        className="
                          text-sm
                          font-bold
                          uppercase
                          tracking-wide
                          text-slate-950
                        "
                      >
                        Mocks & Exams
                      </h3>

                      <div className="mt-2 h-0.5 w-8 rounded-full bg-teal-500" />
                    </div>

                    {mockExams.length > 0 ? (
                      <div className="space-y-3">
                        {mockExams.map((mockExam) => (
                          <Link
                            key={mockExam.id}
                            href={`/mocks/${mockExam.slug}`}
                            className="
                              group/mock
                              flex
                              items-start
                              gap-2
                              text-sm
                              leading-5
                              text-slate-600
                              transition-colors
                              hover:text-teal-600
                            "
                          >
                            <span
                              className="
                                shrink-0
                                text-sm
                                text-slate-400
                                transition-colors
                                group-hover/mock:text-teal-500
                              "
                            >
                              »
                            </span>

                            <span>{mockExam.title}</span>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-slate-500">Mock tests and exams will be available soon</p>
                    )}
                  </div>
                </div>

                {/* =================================================
                    FOOTER ACTIONS
                ================================================== */}

                <div
                  className="
                    grid
                    grid-cols-2
                    border-slate-100
                  "
                >
                  {/* =================================================
                      VIEW ALL COURSES
                  ================================================== */}

                  <Link
                    href="/courses"
                    className="
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-teal-600
                      transition-colors
                      hover:text-teal-700
                    "
                  >
                    View All Courses
                  </Link>

                  {/* =================================================
                      VIEW ALL MOCKS
                  ================================================== */}

                  <Link
                    href="/mocks"
                    className="
                      border-l
                      border-slate-100
                      px-6
                      py-4
                      text-sm
                      font-semibold
                      text-teal-600
                      transition-colors
                      hover:bg-slate-100
                      hover:text-teal-700
                    "
                  >
                    View All Mocks & Exams
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* =====================================================
            RCM
        ====================================================== */}

        <li>
          <Link href="/rcm" className="text-sm font-semibold text-white transition-colors hover:text-teal-950">
            RCM
          </Link>
        </li>

        {/* =====================================================
            CAREER
        ====================================================== */}

        <li>
          <Link href="/career" className="text-sm font-semibold text-white transition-colors hover:text-teal-950">
            Career
          </Link>
        </li>

        {/* =====================================================
            TRAINING
        ====================================================== */}

        <li className="group relative">
          <div
            className="
              flex
              cursor-pointer
              items-center
              gap-1
              text-sm
              font-medium
              text-white 
              transition-colors 
              hover:text-teal-950
            "
          >
            Training
            <HiChevronUp
              className="
                h-4
                w-4
                transition-transform
                duration-200
                group-hover:rotate-180
              "
            />
          </div>

          {/* Training Dropdown */}

          <div
            className="
              invisible
              absolute
              left-0
              top-full
              z-50
              mt-8.5
              w-64
              translate-y-2
              rounded
              border
              border-slate-200
              bg-white
              opacity-0
              shadow-lg
              transition-all
              duration-200
              group-hover:visible
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            {trainingNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="
                  block
                  px-4
                  py-2.5
                  text-sm
                  text-slate-700
                  transition-colors
                  hover:bg-slate-50
                  hover:text-teal-700
                  
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </li>

        {/* =====================================================
            VIDEOS
        ====================================================== */}

        <li>
          <Link href="/videos" className="text-sm font-semibold text-white transition-colors hover:text-teal-950">
            Videos
          </Link>
        </li>

        {/* =====================================================
            BLOG
        ====================================================== */}

        <li>
          <Link href="/blog" className="text-sm font-semibold text-white transition-colors hover:text-teal-950">
            Blog
          </Link>
        </li>

        {/* =====================================================
            CONTACT
        ====================================================== */}

        <li>
          <Link href="/contact" className="text-sm font-semibold text-white transition-colors hover:text-teal-950">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
