// // "use client";

// // import Link from "next/link";
// // import { LogoutButton } from "@/components/auth/logout-button";
// // import { usePathname } from "next/navigation";
// // import { FaSignOutAlt } from "react-icons/fa";
// // import { sidebarNavigation } from "@/lib/constants/navigation";
// // import { GraduationCap, LogOut } from "lucide-react";
// // import DashboardPanel from "../layout/dashboard-panel";

// // const handleLogout = async () => {
// //   try {
// //     const response = await fetch("/api/auth/logout", {
// //       method: "POST",
// //       credentials: "include",
// //     });

// //     console.log("Logout status:", response.status);
// //     console.log("Logout response:", response.json());

// //     if (!response.ok) {
// //       throw new Error("Logout failed");
// //     }

// //     window.location.href = "/";
// //   } catch (error) {
// //     console.error("Logout failed:", error);
// //   }
// // };

// // export function StudentSidebar() {
// //   const pathname = usePathname();

// //   return (
// //     <aside className="hidden min-h-screen w-64 border-r border-slate-200 bg-white lg:block">
// //       <div className="sticky top-0 flex h-screen flex-col">
// //         <div className="border-b border-slate-200 px-6 py-5">
// //           <Link href="/student" className="flex items-center gap-3">
// //             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white">
// //               <GraduationCap className="h-5 w-5" />
// //             </div>

// //             <div>
// //               <p className="text-sm font-bold text-slate-950">Development AAPC</p>

// //               <p className="text-xs text-slate-500">Medical Coding</p>
// //             </div>
// //           </Link>
// //         </div>

// //         <nav className="flex-1 space-y-1 px-3 py-5">
// //           {sidebarNavigation.map((item) => {
// //             const Icon = item.icon;

// //             const isActive = item.href === "/student" ? pathname === "/student" : pathname.startsWith(item.href);

// //             return (
// //               <Link
// //                 key={item.href}
// //                 href={item.href}
// //                 className={[
// //                   "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition",
// //                   isActive ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
// //                 ].join(" ")}
// //               >
// //                 <Icon className="h-5 w-5" />

// //                 <span>{item.label}</span>
// //               </Link>
// //             );
// //           })}

// //           <div className="border-t border-slate-200 p-3">
// //             {/* <LogoutButton /> */}
// //             <button
// //               type="button"
// //               onClick={handleLogout}
// //               className="flex w-full items-center gap-3 rounded-xl px-4 py-3 cursor-pointer text-sm font-medium text-slate-600 transition hover:text-red-600"
// //             >
// //               <FaSignOutAlt />

// //               <span>Log Out</span>
// //             </button>
// //           </div>
// //         </nav>
// //       </div>
// //     </aside>
// //   );
// // }

// // updated code

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { FaSignOutAlt } from "react-icons/fa";
// import { sidebarNavigation } from "@/lib/constants/navigation";

// interface StudentUser {
//   id: string;
//   firstname: string;
//   middlename?: string | null;
//   lastname: string;
//   email: string;
//   profileImage?: string | null;
// }

// const handleLogout = async () => {
//   try {
//     const response = await fetch("/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     });

//     if (!response.ok) {
//       throw new Error("Logout failed");
//     }

//     window.location.href = "/";
//   } catch (error) {
//     console.error("Logout failed:", error);
//   }
// };

// export function StudentSidebar() {
//   const pathname = usePathname();

//   const [user, setUser] = useState<StudentUser | null>(null);
//   const [loadingUser, setLoadingUser] = useState(true);

//   // ---------------------------------------------
//   // Load authenticated user
//   // ---------------------------------------------

//   useEffect(() => {
//     let mounted = true;

//     const loadUser = async () => {
//       try {
//         const response = await fetch("/api/auth/authenticated_user", {
//           method: "GET",
//           credentials: "include",
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           if (mounted) {
//             setUser(null);
//           }

//           return;
//         }

//         const data = await response.json();

//         if (mounted) {
//           setUser(data.user ?? null);
//         }
//       } catch (error) {
//         console.error("Failed to load authenticated user:", error);

//         if (mounted) {
//           setUser(null);
//         }
//       } finally {
//         if (mounted) {
//           setLoadingUser(false);
//         }
//       }
//     };

//     loadUser();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // ---------------------------------------------
//   // User name
//   // ---------------------------------------------

//   const fullName = user ? `${user.firstname} ${user.lastname}` : "";

//   // ---------------------------------------------
//   // Profile image
//   // ---------------------------------------------

//   const profileImage = user?.profileImage || "/images/profile/avatar.jpg";

//   return (
//     <aside className="hidden min-h-screen w-78 border-r ml-2 mt-2 border-slate-100 rounded bg-zinc-100 lg:block">
//       <div className="sticky top-0 flex h-screen flex-col">
//         {/* =========================================
//             STUDENT INFORMATION
//             ========================================= */}

//         <div className="border-b border-slate-200 px-5 py-5">
//           <Link href="/student/profile" className="flex items-center gap-3 rounded-xl p-2 transition">
//             {/* Profile Image */}

//             <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded bg-slate-100">
//               {loadingUser ? (
//                 <div className="h-full w-full animate-pulse bg-slate-200" />
//               ) : (
//                 <img
//                   src={profileImage}
//                   alt={fullName || "Student profile"}
//                   className="h-full w-full object-cover"
//                   onError={(event) => {
//                     event.currentTarget.src = "/images/profile/profile1.jpg";
//                   }}
//                 />
//               )}
//             </div>

//             {/* Name + Email */}

//             <div className="min-w-0 flex-1">
//               {loadingUser ? (
//                 <>
//                   <div className="mb-2 h-4 w-28 animate-pulse rounded bg-slate-200" />

//                   <div className="h-3 w-36 animate-pulse rounded bg-slate-100" />
//                 </>
//               ) : user ? (
//                 <>
//                   <p className="truncate text-sm font-semibold text-slate-900">{fullName}</p>

//                   <p className="truncate text-xs text-slate-500">{user.email}</p>
//                 </>
//               ) : (
//                 <>
//                   <p className="text-sm font-semibold text-slate-900">Student</p>

//                   <p className="text-xs text-slate-500">Not authenticated</p>
//                 </>
//               )}
//             </div>
//           </Link>
//         </div>

//         {/* =========================================
//             NAVIGATION
//             ========================================= */}

//         <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
//           {sidebarNavigation.map((item) => {
//             const Icon = item.icon;

//             const isActive = item.href === "/student" ? pathname === "/student" : pathname.startsWith(item.href);

//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={[
//                   "flex items-center gap-2 rounded px-6 py-2 text-sm font-medium transition",
//                   isActive ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
//                 ].join(" ")}
//               >
//                 <Icon className="h-5 w-5" />

//                 <span>{item.label}</span>
//               </Link>
//             );
//           })}
//         </nav>

//         {/* =========================================
//             LOGOUT
//             ========================================= */}

//         <div className="border-t border-slate-200 p-3">
//           <button
//             type="button"
//             onClick={handleLogout}
//             className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-red-50 hover:text-red-600"
//           >
//             <FaSignOutAlt className="h-4 w-4" />

//             <span>Log Out</span>
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// }

// code without dropdowns

// "use client";

// import { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import { FaSignOutAlt } from "react-icons/fa";
// import { sidebarNavigation } from "@/lib/constants/navigation";
// import Image from "next/image";

// interface StudentUser {
//   id: string;
//   firstname: string;
//   middlename?: string | null;
//   lastname: string;
//   email: string;
//   profileImage?: string | null;
// }

// // =========================================================
// // LOGOUT
// // =========================================================

// const handleLogout = async () => {
//   try {
//     const response = await fetch("/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     });

//     if (!response.ok) {
//       throw new Error("Logout failed");
//     }

//     window.location.href = "/";
//   } catch (error) {
//     console.error("Logout failed:", error);
//   }
// };

// export function StudentSidebar() {
//   const pathname = usePathname();

//   const [user, setUser] = useState<StudentUser | null>(null);
//   const [loadingUser, setLoadingUser] = useState(true);

//   // =========================================================
//   // LOAD AUTHENTICATED USER
//   // =========================================================

//   useEffect(() => {
//     let mounted = true;

//     const loadUser = async () => {
//       try {
//         const response = await fetch("/api/auth/authenticated_user", {
//           method: "GET",
//           credentials: "include",
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           if (mounted) {
//             setUser(null);
//           }

//           return;
//         }

//         const data = await response.json();

//         if (mounted) {
//           setUser(data.user ?? null);
//         }
//       } catch (error) {
//         console.error("Failed to load authenticated user:", error);

//         if (mounted) {
//           setUser(null);
//         }
//       } finally {
//         if (mounted) {
//           setLoadingUser(false);
//         }
//       }
//     };

//     loadUser();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // =========================================================
//   // USER INFORMATION
//   // =========================================================

//   const fullName = user ? [user.firstname, user.lastname].filter(Boolean).join(" ") : "";

//   // =========================================================
//   // PROFILE IMAGE
//   // =========================================================

//   const profileImage = user?.profileImage || "/images/profile/avatar.jpg";

//   // =========================================================
//   // SIDEBAR
//   // =========================================================

//   return (
//     <aside
//       className="
//         hidden
//         h-screen
//         w-78
//         ml-2
//         mt-2
//         rounded
//         border
//         border-slate-100
//         bg-zinc-100
//         overflow-hidden
//         lg:block
//         sticky top-20 shrink-0
//       "
//     >
//       <div className="flex h-full flex-col">
//         {/* =================================================
//             STUDENT PROFILE
//             No Link - Profile section is not clickable
//             ================================================= */}

//         <div className="shrink-0 border-b border-slate-200 px-5 py-6">
//           <div
//             className="
//               flex
//               flex-col
//               items-center
//               p-2
//               text-center
//             "
//           >
//             {/* =============================================
//     PROFILE IMAGE
//     ============================================= */}

//             <div
//               className="
//     relative
//     h-24
//     w-24
//     shrink-0
//     overflow-hidden
//     rounded-full
//     bg-slate-200
//   "
//             >
//               {loadingUser ? (
//                 <div className="h-full w-full animate-pulse bg-slate-300" />
//               ) : (
//                 <Image
//                   src={profileImage}
//                   alt={fullName || "Student profile"}
//                   fill
//                   priority
//                   sizes="96px"
//                   quality={75}
//                   className="object-cover"
//                   onError={(event) => {
//                     event.currentTarget.src = "/images/profile/profile1.jpg";
//                   }}
//                 />
//               )}
//             </div>

//             {/* =============================================
//                 NAME + EMAIL
//                 ============================================= */}

//             <div className="mt-4 w-full min-w-0">
//               {loadingUser ? (
//                 <>
//                   <div className="mx-auto mb-2 h-5 w-36 animate-pulse rounded bg-slate-200" />

//                   <div className="mx-auto h-4 w-44 animate-pulse rounded bg-slate-100" />
//                 </>
//               ) : user ? (
//                 <>
//                   <p
//                     className="
//                       truncate
//                       text-base
//                       font-semibold
//                       text-slate-900
//                     "
//                   >
//                     {fullName}
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       truncate
//                       text-sm
//                       font-normal
//                       text-slate-500
//                     "
//                   >
//                     {user.email}
//                   </p>
//                 </>
//               ) : (
//                 <>
//                   <p className="text-base font-semibold text-slate-900">Student</p>

//                   <p className="mt-1 text-sm text-slate-500">Not authenticated</p>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* =================================================
//             NAVIGATION
//             ================================================= */}

//         <nav className="flex-1 space-y-1 overflow-hidden px-3 py-3">
//           {sidebarNavigation.map((item) => {
//             const Icon = item.icon;

//             const isActive = item.href === "/student" ? pathname === "/student" : pathname.startsWith(item.href);

//             return (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 className={[
//                   `
//                     flex
//                     items-center
//                     gap-2
//                     rounded
//                     px-6
//                     py-2
//                     text-sm
//                     font-medium
//                     transition
//                   `,
//                   isActive ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
//                 ].join(" ")}
//               >
//                 <Icon className="h-5 w-5" />

//                 <span>{item.label}</span>
//               </a>
//             );
//           })}
//         </nav>

//         {/* =================================================
//             LOGOUT
//             ================================================= */}

//         <div className="shrink-0 border-t border-slate-200 p-3">
//           <button
//             type="button"
//             onClick={handleLogout}
//             className="
//               flex
//               w-full
//               cursor-pointer
//               items-center
//               gap-3
//               rounded-xl
//               px-4
//               py-3
//               text-sm
//               font-medium
//               text-slate-600
//               transition
//               hover:bg-red-50
//               hover:text-red-600
//             "
//           >
//             <FaSignOutAlt className="h-4 w-4" />

//             <span>Log Out</span>
//           </button>
//         </div>
//       </div>
//     </aside>
//   );
// }

// code with dropdowns

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

import { sidebarNavigation } from "@/lib/constants/navigation";

// =========================================================
// TYPES
// =========================================================

interface StudentUser {
  id: string;
  firstname: string;
  middlename?: string | null;
  lastname: string;
  email: string;
  profileImage?: string | null;
}

interface StudentCourse {
  id: string;
  title: string;
  slug: string;
  enrollmentId: string;
  enrollmentStatus: "ACTIVE" | "COMPLETED";
}

// =========================================================
// STUDENT SIDEBAR
// =========================================================

export function StudentSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  // =========================================================
  // USER STATE
  // =========================================================

  const [user, setUser] = useState<StudentUser | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  // =========================================================
  // COURSE STATE
  // =========================================================

  const [courses, setCourses] = useState<StudentCourse[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  // =========================================================
  // MY COURSES DROPDOWN STATE
  // =========================================================

  const [coursesOpen, setCoursesOpen] = useState(false);

  // =========================================================
  // LOGOUT HANDLE
  // =========================================================

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // =========================================================
  // LOAD AUTHENTICATED USER
  // =========================================================

  useEffect(() => {
    let mounted = true;

    const loadUser = async () => {
      try {
        const response = await fetch("/api/auth/authenticated_user", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          if (mounted) {
            setUser(null);
          }

          return;
        }

        const data = await response.json();

        if (mounted) {
          setUser(data.user ?? null);
        }
      } catch (error) {
        console.error("Failed to load authenticated user:", error);

        if (mounted) {
          setUser(null);
        }
      } finally {
        if (mounted) {
          setLoadingUser(false);
        }
      }
    };

    loadUser();

    return () => {
      mounted = false;
    };
  }, []);

  // =========================================================
  // LOAD STUDENT COURSES
  // =========================================================
  //
  // Expected API response:
  //
  // {
  //   courses: [
  //     {
  //       id: 1,
  //       title: "ICD Practice for CPC and CCS",
  //       slug: "icd-practice-for-cpc-and-ccs",
  //     },
  //   ];
  // }
  //
  // =========================================================

  useEffect(() => {
    let mounted = true;

    const loadCourses = async () => {
      try {
        setLoadingCourses(true);

        const response = await fetch("/api/student/enrolled_courses", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        const data = await response.json();

        console.log("Student courses API:", response.status, data);

        if (!response.ok) {
          throw new Error(data?.message || `Failed to load student courses (${response.status})`);
        }

        if (mounted) {
          setCourses(Array.isArray(data.courses) ? data.courses : []);
        }
      } catch (error) {
        console.error("Failed to load student courses:", error);

        if (mounted) {
          setCourses([]);
        }
      } finally {
        if (mounted) {
          setLoadingCourses(false);
        }
      }
    };

    loadCourses();

    return () => {
      mounted = false;
    };
  }, []);

  // =========================================================
  // AUTO OPEN MY COURSES
  // =========================================================
  //
  // If student is currently inside a course page,
  // automatically keep My Courses expanded.
  //
  // =========================================================

  useEffect(() => {
    const isCoursePage = pathname === "/student/enrolled_courses" || pathname.startsWith("/student/enrolled_courses/");

    if (isCoursePage) {
      setCoursesOpen(true);
    }
  }, [pathname]);

  // =========================================================
  // USER INFORMATION
  // =========================================================

  const fullName = user ? [user.firstname, user.lastname].filter(Boolean).join(" ") : "";

  // =========================================================
  // PROFILE IMAGE
  // =========================================================

  const profileImage = user?.profileImage || "/images/profile/avatar.jpg";

  // =========================================================
  // SIDEBAR
  // =========================================================

  return (
    <aside
      className="
    hidden
    h-[calc(100vh-5rem)]
    w-78
    ml-2
    mt-2
    rounded
    border
    border-slate-100
    bg-zinc-100
    overflow-hidden
    lg:block
    sticky
    top-20
    shrink-0
  "
    >
      <div className="flex h-full flex-col">
        {/* =================================================
            STUDENT PROFILE
            ================================================= */}

        <div className="shrink-0 border-b border-slate-200 py-2 px-5">
          <div
            className="
              flex
              flex-col
              items-center
              p-2
              text-center
            "
          >
            {/* =============================================
                PROFILE IMAGE
                ============================================= */}

            <div
              className="
                relative
                h-15
                w-15
                shrink-0
                overflow-hidden
                rounded-full
                bg-slate-200
              "
            >
              {loadingUser ? (
                <div className="h-full w-full animate-pulse bg-slate-300" />
              ) : (
                <Image
                  src={profileImage}
                  alt={fullName || "Student profile"}
                  fill
                  priority
                  sizes="96px"
                  quality={75}
                  className="object-cover"
                  onError={(event) => {
                    event.currentTarget.src = "/images/profile/profile1.jpg";
                  }}
                />
              )}
            </div>

            {/* =============================================
                NAME + EMAIL
                ============================================= */}

            <div className="mt-4 w-full min-w-0">
              {loadingUser ? (
                <>
                  <div className="mx-auto mb-2 h-5 w-36 animate-pulse rounded bg-slate-200" />

                  <div className="mx-auto h-4 w-44 animate-pulse rounded bg-slate-100" />
                </>
              ) : user ? (
                <>
                  <p
                    className="
                      truncate
                      text-base
                      font-medium
                      text-slate-900
                    "
                  >
                    {fullName}
                  </p>

                  <p
                    className="
                      mt-1
                      truncate
                      text-sm
                      font-normal
                      text-slate-500
                    "
                  >
                    {/* {user.email} */}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-base font-semibold text-slate-900">Student</p>

                  <p className="mt-1 text-sm text-slate-500">Not authenticated</p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* =================================================
            NAVIGATION
            ================================================= */}

        <nav
          className="flex-1
          min-h-0
          space-y-1
          overflow-y-auto
          px-3
          py-2
          scrollbar-none
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden"
        >
          {sidebarNavigation.map((item) => {
            const Icon = item.icon;

            // =================================================
            // MY COURSES
            // =================================================

            if (item.label === "Enrolled Courses") {
              const isCoursesActive =
                pathname === "/student/enrolled_courses" || pathname.startsWith("/student/enrolled_courses/");

              return (
                <div key={item.href}>
                  {/* =========================================
                      MY COURSES HEADER
                      ========================================= */}

                  <button
                    type="button"
                    onClick={() => setCoursesOpen((previous) => !previous)}
                    aria-expanded={coursesOpen}
                    className={[
                      `
                        flex
                        w-full
                        cursor-pointer
                        items-center
                        justify-between
                        gap-2
                        rounded
                        px-6
                        py-1
                        text-sm
                        font-normal
                        transition
                      `,
                      isCoursesActive || coursesOpen
                        ? "bg-teal-50 text-teal-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                    ].join(" ")}
                  >
                    {/* Label */}

                    <span className="flex min-w-0 items-center gap-2">
                      <Icon className="h-5 w-5 shrink-0" />

                      <span className="truncate">{item.label}</span>
                    </span>

                    {/* Arrow */}

                    {coursesOpen ? (
                      <HiChevronDown className="h-4 w-4 shrink-0" />
                    ) : (
                      <HiChevronUp className="h-4 w-4 shrink-0" />
                    )}
                  </button>

                  {/* =========================================
                      COURSE DROPDOWN
                      ========================================= */}

                  {coursesOpen && (
                    <div
                      className="
                        mt-1
                        ml-0
                        overflow-hidden
                        rounded
                        bg-zinc-200
                      "
                    >
                      {loadingCourses ? (
                        <div className="space-y-1 px-2 py-2">
                          <div className="h-7 animate-pulse rounded bg-zinc-300" />
                          <div className="h-7 animate-pulse rounded bg-zinc-300" />
                          <div className="h-7 animate-pulse rounded bg-zinc-300" />
                        </div>
                      ) : courses.length === 0 ? (
                        <div
                          className="
                            px-0
                            py-0
                            text-sm
                            text-slate-500
                          "
                        >
                          No courses enrolled
                        </div>
                      ) : (
                        <div className="py-0">
                          {courses.map((course) => {
                            const courseHref = `/student/enrolled_courses/${course.slug}`;

                            const isCourseActive = pathname === courseHref || pathname.startsWith(`${courseHref}/`);

                            return (
                              <Link
                                key={course.id}
                                href={courseHref}
                                className={[
                                  `
                                    flex
                                    min-h-9
                                    w-full
                                    items-center
                                    justify-between
                                    gap-2
                                    px-3
                                    py-2
                                    text-sm
                                    font-normal
                                    transition
                                  `,
                                  isCourseActive
                                    ? "bg-teal-600 text-white"
                                    : "text-blue-950 hover:bg-slate-900 hover:text-zinc-50",
                                ].join(" ")}
                              >
                                {/* Course title */}

                                <span className="min-w-0 flex-1 text-sm">{course.title}</span>

                                {/* Course arrow */}

                                {/* <HiChevronUp
                                  className={[
                                    `
                                      h-3.5
                                      w-3.5
                                      shrink-0
                                    `,
                                    isCourseActive ? "text-white" : "text-slate-500",
                                  ].join(" ")}
                                /> */}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }

            // =================================================
            // NORMAL SIDEBAR ITEMS
            // =================================================

            const isActive = item.href === "/student" ? pathname === "/student" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  `
                    flex
                    items-center
                    gap-2
                    rounded
                    px-6
                    py-1
                    text-sm
                    font-normal
                    transition
                  `,
                  isActive ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                ].join(" ")}
              >
                <Icon className="h-5 w-5" />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* =================================================
            LOGOUT
            ================================================= */}

        <div className="shrink-0 border-t border-slate-200 p-3">
          <button
            type="button"
            onClick={handleLogout}
            className="
              flex
              w-full
              cursor-pointer
              items-center
              gap-3
              rounded-xl
              px-4
              py-3
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-red-50
              hover:text-red-600
            "
          >
            <FaSignOutAlt className="h-4 w-4" />

            <span>Log Out</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

// test code respnsive sidebar
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { FaSignOutAlt } from "react-icons/fa";
// import { HiChevronDown, HiChevronUp, HiMenu, HiX } from "react-icons/hi";

// import { sidebarNavigation } from "@/lib/constants/navigation";

// // =========================================================
// // TYPES
// // =========================================================

// interface StudentUser {
//   id: string;
//   firstname: string;
//   middlename?: string | null;
//   lastname: string;
//   email: string;
//   profileImage?: string | null;
// }

// interface StudentCourse {
//   id: string;
//   title: string;
//   slug: string;
//   enrollmentId: string;
//   enrollmentStatus: "ACTIVE" | "COMPLETED";
// }

// // =========================================================
// // STUDENT SIDEBAR
// // =========================================================

// export function StudentSidebar() {
//   const pathname = usePathname();
//   const router = useRouter();

//   // =========================================================
//   // USER STATE
//   // =========================================================

//   const [user, setUser] = useState<StudentUser | null>(null);
//   const [loadingUser, setLoadingUser] = useState(true);

//   // =========================================================
//   // COURSE STATE
//   // =========================================================

//   const [courses, setCourses] = useState<StudentCourse[]>([]);
//   const [loadingCourses, setLoadingCourses] = useState(true);

//   // =========================================================
//   // DROPDOWN STATE
//   // =========================================================

//   const [coursesOpen, setCoursesOpen] = useState(false);

//   // =========================================================
//   // MOBILE SIDEBAR STATE
//   // =========================================================

//   const [mobileOpen, setMobileOpen] = useState(false);

//   // =========================================================
//   // CLOSE MOBILE SIDEBAR WHEN ROUTE CHANGES
//   // =========================================================

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [pathname]);

//   // =========================================================
//   // PREVENT BODY SCROLL WHEN MOBILE SIDEBAR IS OPEN
//   // =========================================================

//   useEffect(() => {
//     if (mobileOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   // =========================================================
//   // LOGOUT
//   // =========================================================

//   const handleLogout = async () => {
//     try {
//       const response = await fetch("/api/auth/logout", {
//         method: "POST",
//         credentials: "include",
//       });

//       if (!response.ok) {
//         throw new Error("Logout failed");
//       }

//       router.replace("/");
//       router.refresh();
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   // =========================================================
//   // LOAD AUTHENTICATED USER
//   // =========================================================

//   useEffect(() => {
//     let mounted = true;

//     const loadUser = async () => {
//       try {
//         const response = await fetch("/api/auth/authenticated_user", {
//           method: "GET",
//           credentials: "include",
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           if (mounted) {
//             setUser(null);
//           }

//           return;
//         }

//         const data = await response.json();

//         if (mounted) {
//           setUser(data.user ?? null);
//         }
//       } catch (error) {
//         console.error("Failed to load authenticated user:", error);

//         if (mounted) {
//           setUser(null);
//         }
//       } finally {
//         if (mounted) {
//           setLoadingUser(false);
//         }
//       }
//     };

//     loadUser();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // =========================================================
//   // LOAD STUDENT COURSES
//   // =========================================================

//   useEffect(() => {
//     let mounted = true;

//     const loadCourses = async () => {
//       try {
//         setLoadingCourses(true);

//         const response = await fetch("/api/student/enrolled_courses", {
//           method: "GET",
//           credentials: "include",
//           cache: "no-store",
//         });

//         const data = await response.json();

//         console.log("Student courses API:", response.status, data);

//         if (!response.ok) {
//           throw new Error(data?.message || `Failed to load student courses (${response.status})`);
//         }

//         if (mounted) {
//           setCourses(Array.isArray(data.courses) ? data.courses : []);
//         }
//       } catch (error) {
//         console.error("Failed to load student courses:", error);

//         if (mounted) {
//           setCourses([]);
//         }
//       } finally {
//         if (mounted) {
//           setLoadingCourses(false);
//         }
//       }
//     };

//     loadCourses();

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   // =========================================================
//   // AUTO OPEN COURSES
//   // =========================================================

//   useEffect(() => {
//     const isCoursePage = pathname === "/student/enrolled_courses" || pathname.startsWith("/student/enrolled_courses/");

//     if (isCoursePage) {
//       setCoursesOpen(true);
//     }
//   }, [pathname]);

//   // =========================================================
//   // USER INFORMATION
//   // =========================================================

//   const fullName = user ? [user.firstname, user.lastname].filter(Boolean).join(" ") : "";

//   // =========================================================
//   // PROFILE IMAGE
//   // =========================================================

//   const profileImage = user?.profileImage || "/images/profile/avatar.jpg";

//   // =========================================================
//   // NAVIGATION CONTENT
//   // =========================================================

//   const navigationContent = (
//     <nav
//       className="
//         flex-1
//         min-h-0
//         space-y-1
//         overflow-y-auto
//         overflow-x-hidden
//         px-3
//         py-3
//         scrollbar-none
//         [-ms-overflow-style:none]
//         [&::-webkit-scrollbar]:hidden
//       "
//     >
//       {sidebarNavigation.map((item) => {
//         const Icon = item.icon;

//         // =====================================================
//         // COURSES
//         // =====================================================

//         if (item.label === "Courses") {
//           const isCoursesActive =
//             pathname === "/student/enrolled_courses" || pathname.startsWith("/student/enrolled_courses/");

//           return (
//             <div key={item.href}>
//               {/* COURSE HEADER */}

//               <button
//                 type="button"
//                 onClick={() => setCoursesOpen((previous) => !previous)}
//                 aria-expanded={coursesOpen}
//                 className={[
//                   `
//                     flex
//                     w-full
//                     cursor-pointer
//                     items-center
//                     justify-between
//                     gap-2
//                     rounded
//                     px-4
//                     sm:px-6
//                     py-2.5
//                     text-sm
//                     font-medium
//                     transition
//                   `,
//                   isCoursesActive || coursesOpen
//                     ? "bg-teal-50 text-teal-700"
//                     : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
//                 ].join(" ")}
//               >
//                 <span className="flex min-w-0 items-center gap-2">
//                   <Icon className="h-5 w-5 shrink-0" />

//                   <span className="truncate">{item.label}</span>
//                 </span>

//                 {coursesOpen ? (
//                   <HiChevronDown className="h-4 w-4 shrink-0" />
//                 ) : (
//                   <HiChevronUp className="h-4 w-4 shrink-0" />
//                 )}
//               </button>

//               {/* COURSE DROPDOWN */}

//               {coursesOpen && (
//                 <div
//                   className="
//                     mt-1
//                     ml-2
//                     sm:ml-4
//                     max-h-64
//                     overflow-y-auto
//                     overflow-x-hidden
//                     rounded
//                     bg-zinc-200
//                     scrollbar-none
//                     [-ms-overflow-style:none]
//                     [&::-webkit-scrollbar]:hidden
//                   "
//                 >
//                   {loadingCourses ? (
//                     <div className="space-y-1 px-2 py-2">
//                       <div className="h-8 animate-pulse rounded bg-zinc-300" />
//                       <div className="h-8 animate-pulse rounded bg-zinc-300" />
//                       <div className="h-8 animate-pulse rounded bg-zinc-300" />
//                     </div>
//                   ) : courses.length === 0 ? (
//                     <div className="px-4 py-3 text-xs text-slate-500">No courses enrolled</div>
//                   ) : (
//                     <div className="py-1">
//                       {courses.map((course) => {
//                         const courseHref = `${item.href}/${course.slug}`;

//                         const isCourseActive = pathname === courseHref || pathname.startsWith(`${courseHref}/`);

//                         return (
//                           <Link
//                             key={course.id}
//                             href={courseHref}
//                             className={[
//                               `
//                                 flex
//                                 min-h-9
//                                 w-full
//                                 items-center
//                                 gap-2
//                                 px-3
//                                 py-2
//                                 text-sm
//                                 font-light
//                                 transition
//                               `,
//                               isCourseActive
//                                 ? "bg-teal-600 text-white"
//                                 : "text-slate-700 hover:bg-slate-300 hover:text-slate-950",
//                             ].join(" ")}
//                             title={course.title}
//                           >
//                             <span className="min-w-0 flex-1 truncate">{course.title}</span>
//                           </Link>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           );
//         }

//         // =====================================================
//         // NORMAL SIDEBAR ITEM
//         // =====================================================

//         const isActive = item.href === "/student" ? pathname === "/student" : pathname.startsWith(item.href);

//         return (
//           <Link
//             key={item.href}
//             href={item.href}
//             className={[
//               `
//                 flex
//                 w-full
//                 items-center
//                 gap-2
//                 rounded
//                 px-4
//                 sm:px-6
//                 py-2.5
//                 text-sm
//                 font-normal
//                 transition
//               `,
//               isActive ? "bg-teal-50 text-teal-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
//             ].join(" ")}
//           >
//             <Icon className="h-5 w-5 shrink-0" />

//             <span className="truncate">{item.label}</span>
//           </Link>
//         );
//       })}
//     </nav>
//   );

//   // =========================================================
//   // SIDEBAR COMPONENT
//   // =========================================================

//   return (
//     <>
//       {/* =====================================================
//           MOBILE MENU BUTTON
//           Visible only below lg
//           ===================================================== */}

//       <button
//         type="button"
//         aria-label={mobileOpen ? "Close student menu" : "Open student menu"}
//         aria-expanded={mobileOpen}
//         onClick={() => setMobileOpen((previous) => !previous)}
//         className="
//           fixed
//           left-3
//           top-23
//           z-60
//           flex
//           h-10
//           w-7
//           items-center
//           justify-center
//           rounded
//           border
//           border-slate-200
//           bg-white
//           text-slate-700
//           shadow-md
//           transition
//           hover:bg-slate-50
//           lg:hidden
//         "
//       >
//         {mobileOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
//       </button>

//       {/* =====================================================
//           MOBILE OVERLAY
//           ===================================================== */}

//       {/* {mobileOpen && (
//         <button
//           type="button"
//           aria-label="Close student menu"
//           onClick={() => setMobileOpen(false)}
//           className="
//             fixed
//             inset-5
//             z-40
//             bg-green/30
//             lg:hidden
//           "
//         />
//       )} */}

//       {/* =====================================================
//           SIDEBAR
//           ===================================================== */}

//       <aside
//         className={[
//           `
//             fixed
//             left-2
//             top-20
//             z-50
//             flex
//             h-[calc(100vh-5.5rem)]
//             w-[calc(100vw-1rem)]
//             max-w-[320px]
//             flex-col
//             overflow-hidden
//             rounded-lg
//             border
//             border-slate-100
//             bg-zinc-100
//             shadow-xl
//             transition-transform
//             duration-300
//             ease-in-out

//             lg:sticky
//             lg:top-20
//             lg:z-auto
//             lg:ml-2
//             lg:mt-2
//             lg:h-[calc(100vh-5rem)]
//             lg:w-78
//             lg:max-w-none
//             lg:shrink-0
//             lg:translate-x-0
//             lg:rounded
//             lg:shadow-none
//           `,
//           mobileOpen ? "translate-x-0" : "-translate-x-[calc(100%+1rem)]",
//         ].join(" ")}
//       >
//         <div className="flex h-full min-h-0 flex-col">
//           {/* =================================================
//               STUDENT PROFILE
//               ================================================= */}

//           <div
//             className="
//               shrink-0
//               border-b
//               border-slate-200
//               px-4
//               py-3
//               sm:px-5
//             "
//           >
//             <div className="flex flex-col items-center p-2 text-center">
//               {/* PROFILE IMAGE */}

//               <div
//                 className="
//                   relative
//                   h-20
//                   w-20
//                   shrink-0
//                   overflow-hidden
//                   rounded-full
//                   bg-slate-200
//                   sm:h-24
//                   sm:w-24
//                 "
//               >
//                 {loadingUser ? (
//                   <div className="h-full w-full animate-pulse bg-slate-300" />
//                 ) : (
//                   <Image
//                     src={profileImage}
//                     alt={fullName || "Student profile"}
//                     fill
//                     priority
//                     sizes="(max-width: 1024px) 80px, 96px"
//                     quality={75}
//                     className="object-cover"
//                     onError={(event) => {
//                       event.currentTarget.src = "/images/profile/profile1.jpg";
//                     }}
//                   />
//                 )}
//               </div>

//               {/* NAME + EMAIL */}

//               <div className="mt-3 w-full min-w-0 sm:mt-4">
//                 {loadingUser ? (
//                   <>
//                     <div className="mx-auto mb-2 h-5 w-32 animate-pulse rounded bg-slate-200" />

//                     <div className="mx-auto h-4 w-40 animate-pulse rounded bg-slate-100" />
//                   </>
//                 ) : user ? (
//                   <>
//                     <p
//                       className="
//                         truncate
//                         text-base
//                         font-semibold
//                         text-slate-900
//                       "
//                     >
//                       {fullName}
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         truncate
//                         text-sm
//                         font-normal
//                         text-slate-500
//                       "
//                     >
//                       {user.email}
//                     </p>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-base font-semibold text-slate-900">Student</p>

//                     <p className="mt-1 text-sm text-slate-500">Not authenticated</p>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               NAVIGATION
//               ================================================= */}

//           {navigationContent}

//           {/* =================================================
//               LOGOUT
//               ================================================= */}

//           <div
//             className="
//               shrink-0
//               border-t
//               border-slate-200
//               p-3
//             "
//           >
//             <button
//               type="button"
//               onClick={handleLogout}
//               className="
//                 flex
//                 w-full
//                 cursor-pointer
//                 items-center
//                 gap-3
//                 rounded-xl
//                 px-4
//                 py-3
//                 text-sm
//                 font-medium
//                 text-slate-600
//                 transition
//                 hover:bg-red-50
//                 hover:text-red-600
//               "
//             >
//               <FaSignOutAlt className="h-4 w-4 shrink-0" />

//               <span>Log Out</span>
//             </button>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }
