// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { ChevronDown, LayoutDashboard, LogIn, LogOut, User, UserPlus } from "lucide-react";
// import { FaChevronDown, FaTachometerAlt, FaSignInAlt, FaSignOutAlt, FaUser, FaUserPlus } from "react-icons/fa";
// interface AuthenticatedUser {
//   id: string;
//   firstname: string;
//   middlename: string | null;
//   lastname: string;
//   email: string;
//   role: string;
//   isActive: boolean;
//   emailVerified: boolean;
//   profileImage: string | null;
// }

// export default function DashboardPanel() {
//   const [user, setUser] = useState<AuthenticatedUser | null>(null);
//   const pathname = usePathname();
//   const [isLoading, setIsLoading] = useState(true);
//   const [open, setOpen] = useState(false);
//   const panelRef = useRef<HTMLDivElement>(null);

//   // --------------------------------------------------
//   // Load authenticated user
//   // --------------------------------------------------

//   useEffect(() => {
//     let cancelled = false;

//     async function loadAuthenticatedUser() {
//       try {
//         setIsLoading(true);

//         const response = await fetch("/api/auth/authenticated_user", {
//           method: "GET",
//           credentials: "include",
//           cache: "no-store",
//         });

//         if (!response.ok) {
//           if (!cancelled) {
//             setUser(null);
//           }

//           return;
//         }

//         const data = await response.json();

//         if (!cancelled) {
//           setUser(data.user ?? null);
//         }
//       } catch (error) {
//         console.error("Failed to load authenticated user:", error);

//         if (!cancelled) {
//           setUser(null);
//         }
//       } finally {
//         if (!cancelled) {
//           setIsLoading(false);
//         }
//       }
//     }

//     loadAuthenticatedUser();

//     return () => {
//       cancelled = true;
//     };
//   }, [pathname]);

//   // --------------------------------------------------
//   // Close panel when clicking outside
//   // --------------------------------------------------

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
//         setOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // --------------------------------------------------
//   // Loading state
//   // --------------------------------------------------

//   if (isLoading) {
//     return <div className="h-10 w-24 animate-pulse rounded-lg bg-slate-100" />;
//   }

//   // --------------------------------------------------
//   // Logged out
//   // --------------------------------------------------

//   if (!user) {
//     const isLoginPage = pathname === "/login";
//     const isRegisterPage = pathname === "/register";

//     return (
//       <div className="flex items-center gap-0">
//         {isLoginPage ? (
//           <Link
//             href="/register"
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded
//               px-4
//               py-2
//               text-sm
//               font-semibold
//               text-black
//               hover:text-teal-500
//               shadow-sm
//               transition
//             "
//           >
//             <FaUserPlus className="h-4 w-4" />

//             <span>Register</span>
//           </Link>
//         ) : (
//           <Link
//             href="/login"
//             className="
//               inline-flex
//               items-center
//               gap-2
//               rounded
//               px-4
//               py-2
//               text-sm
//               font-semibold
//               text-black
//               hover:text-teal-500
//               shadow-sm
//               transition
//             "
//           >
//             <FaSignInAlt className="h-4 w-4" />

//             <span>Log In</span>
//           </Link>
//         )}
//       </div>
//     );
//   }

//   // --------------------------------------------------
//   // Logged in
//   // --------------------------------------------------

//   const email = user.email ?? "";
//   const firstname = user.firstname ?? "";
//   const lastname = user.lastname ?? "";
//   // const middlename = user.middlename ?? "";
//   const displayName = [firstname, lastname].filter(Boolean).join(" ") || email.split("@")[0] || "Student";

//   const initials = displayName.trim().charAt(0).toUpperCase();

//   const profileImage = user.profileImage
//     ? user.profileImage.startsWith("/")
//       ? user.profileImage
//       : `/${user.profileImage}`
//     : "/images/profile/profile1.jpg";

//   // --------------------------------------------------
//   // Logout
//   // --------------------------------------------------

//   async function handleLogout() {
//     try {
//       setOpen(false);

//       await fetch("/api/auth/logout", {
//         method: "POST",
//         credentials: "include",
//       });

//       setUser(null);

//       window.location.href = "/";
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   }

//   return (
//     <div ref={panelRef} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
//       {/* Student account button */}

//       <button
//         type="button"
//         onClick={() => setOpen((value) => !value)}
//         aria-expanded={open}
//         className="flex items-center gap-3 w-70 rounded px-2 py-3 transition hover:bg-white"
//       >
//         {/* Avatar */}
//         {/* <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
//           {initials}
//         </span> */}

//         <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-teal-100">
//           <Image src={profileImage} alt={email} fill sizes="36px" className="object-cover" />
//         </span>
//         {/* Email */}
//         <span className="hidden max-w-47.5 truncate text-sm font-light text-amber-600 sm:block">{displayName}</span>
//         {/* <FaChevronDown
//           className={`hidden h-4 w-4 text-slate-400 transition-transform sm:block ${open ? "rotate-180" : ""}`}
//         /> */}
//       </button>

//       {/* Dropdown */}

//       {open && (
//         <div className="absolute right-0 top-full z-50 w-72 pt-2">
//           <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-xl">
//             {/* Student information */}

//             {/* <div className="border-b border-slate-100 px-4 py-4">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
//                   {initials}
//                 </span>

//                 <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-teal-100">
//                   <Image src={profileImage} alt={displayName} fill sizes="40px" className="object-cover" />
//                 </span>

//                 <div className="min-w-0">
//                   <p className="text-sm font-semibold text-slate-900">{displayName}</p>

//                   <p className="mt-0.5 truncate text-sm text-rose-900">{email}</p>
//                 </div>
//               </div>
//             </div> */}

//             {/* Dashboard */}

//             {/* <Link
//               href="/student/dashboard"
//               onClick={() => setOpen(false)}
//               className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700"
//             >
//               <FaTachometerAlt className="h-4 w-4" />

//               <span>Student Dashboard</span>
//             </Link> */}

//             {/* Profile */}

//             <Link
//               href="/student/profile_view"
//               onClick={() => setOpen(false)}
//               className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-teal-700"
//             >
//               <FaUser className="h-4 w-4" />

//               <span>Account</span>
//             </Link>

//             {/* Logout */}

//             <button
//               type="button"
//               onClick={handleLogout}
//               className="flex w-full items-center gap-3 border-t border-slate-100 px-4 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
//             >
//               <FaSignOutAlt className="h-4 w-4" />

//               <span>Logout</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

//updated code

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaUser, FaSignOutAlt, FaUserPlus, FaSignInAlt, FaKey } from "react-icons/fa";

interface AuthenticatedUser {
  id: string;
  firstname: string;
  middlename: string | null;
  lastname: string;
  email: string;
  role: string;
  isActive: boolean;
  emailVerified: boolean;
  profileImage: string | null;
}

export default function DashboardPanel() {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // =========================================================
  // LOAD AUTHENTICATED USER
  // =========================================================

  // useEffect(() => {
  //   let cancelled = false;

  //   async function loadAuthenticatedUser() {
  //     try {
  //       setIsLoading(true);

  //       const response = await fetch("/api/auth/authenticated_user", {
  //         method: "GET",
  //         credentials: "include",
  //         cache: "no-store",
  //       });

  //       if (!response.ok) {
  //         if (!cancelled) {
  //           setUser(null);
  //         }

  //         return;
  //       }

  //       const data = await response.json();

  //       if (!cancelled) {
  //         setUser(data.user ?? null);
  //       }
  //     } catch (error) {
  //       console.error("Failed to load authenticated user:", error);

  //       if (!cancelled) {
  //         setUser(null);
  //       }
  //     } finally {
  //       if (!cancelled) {
  //         setIsLoading(false);
  //       }
  //     }
  //   }

  //   loadAuthenticatedUser();

  //   return () => {
  //     cancelled = true;
  //   };
  // }, [pathname]);

  // updated
  useEffect(() => {
    let cancelled = false;

    async function loadAuthenticatedUser() {
      try {
        // REMOVE this line:
        // setIsLoading(true);

        const response = await fetch("/api/auth/authenticated_user", {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        });

        if (!response.ok) {
          if (!cancelled) {
            setUser(null);
          }
          return;
        }

        const data = await response.json();

        if (!cancelled) {
          setUser(data.user ?? null);
        }
      } catch (error) {
        console.error("Failed to load authenticated user:", error);

        if (!cancelled) {
          setUser(null);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    loadAuthenticatedUser();

    return () => {
      cancelled = true;
    };
  }, [pathname]);

  // =========================================================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // =========================================================

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // =========================================================
  // LOADING
  // =========================================================

  // if (isLoading) {
  //   return <div className="h-10 w-24 animate-pulse rounded-lg bg-slate-100" />;
  // }

  // updated
  if (isLoading) {
    return null;
  }

  // =========================================================
  // LOGGED OUT
  // =========================================================

  if (!user) {
    const isLoginPage = pathname === "/login";

    return (
      <div className="flex items-center">
        {isLoginPage ? (
          <Link
            href="/register"
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition
              hover:text-teal-950
            "
          >
            <FaUserPlus className="h-4 w-4" />

            <span>Register</span>
          </Link>
        ) : (
          <Link
            href="/login"
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition
              hover:text-teal-950
            "
          >
            <FaSignInAlt className="h-4 w-4" />

            <span>Log In</span>
          </Link>
        )}
      </div>
    );
  }

  // =========================================================
  // USER INFORMATION
  // =========================================================

  const email = user.email ?? "";
  const firstname = user.firstname ?? "";
  const lastname = user.lastname ?? "";

  const displayName = [firstname, lastname].filter(Boolean).join(" ") || email.split("@")[0] || "Student";

  const profileImage = user.profileImage
    ? user.profileImage.startsWith("/")
      ? user.profileImage
      : `/${user.profileImage}`
    : "/images/profile/avatar.jpg";

  // =========================================================
  // LOGOUT
  // =========================================================

  // async function handleLogout() {
  //   try {
  //     setOpen(false);

  //     const response = await fetch("/api/auth/logout", {
  //       method: "POST",
  //       credentials: "include",
  //     });

  //     if (!response.ok) {
  //       throw new Error("Logout failed");
  //     }

  //     setUser(null);

  //     router.replace("/");
  //     router.refresh();
  //   } catch (error) {
  //     console.error("Logout failed:", error);
  //   }
  // }

  //updated
  async function handleLogout() {
    try {
      setOpen(false);

      const response = await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);

        throw new Error(data?.message || `Logout failed with status ${response.status}`);
      }

      setUser(null);

      router.replace("/");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  // =========================================================
  // LOGGED IN
  // =========================================================

  return (
    <div ref={panelRef} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {/* =====================================================
          USER BUTTON
          ===================================================== */}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="
          flex
          items-center
          gap-3
          rounded
          px-2
          py-2
          transition
        "
      >
        {/* Avatar */}

        <span
          className="
            relative
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-full
            bg-slate-200
          "
        >
          <Image src={profileImage} alt={displayName} fill sizes="40px" className="object-cover" />
        </span>

        {/* User Name */}

        {/* <span className="hidden text-sm font-medium text-slate-700 sm:block">{displayName}</span> */}
      </button>

      {/* =====================================================
          DROPDOWN
          ===================================================== */}

      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            z-50
            w-72
            pt-4
          "
        >
          <div
            className="
              overflow-hidden
              rounded
              border
              border-slate-200
              bg-white
              shadow-[0_8px_25px_rgba(0,0,0,0.15)]
            "
          >
            {/* =================================================
                USER INFORMATION
                ================================================= */}

            <div className="px-5 py-5">
              <div className="flex items-center gap-3">
                {/* Profile Image */}

                <div
                  className="
                    relative
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-full
                    bg-slate-200
                  "
                >
                  <Image src={profileImage} alt={displayName} fill sizes="48px" className="object-cover" />
                </div>

                {/* Name + Email */}

                <div className="min-w-0">
                  <p className="truncate text-[12px] font-medium text-slate-700">{displayName}</p>

                  <p className="mt-1 truncate text-sm text-slate-500">{email}</p>
                </div>
              </div>
            </div>

            {/* =================================================
                USER PROFILE
                ================================================= */}

            <Link
              href="/student/profile_view"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-4
                px-5
                py-2
                text-sm
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
                hover:text-slate-800
              "
            >
              <FaUser className="h-3 w-3 text-teal-400" />

              <span>User Profile</span>
            </Link>

            <Link
              href="/student/change-password"
              onClick={() => setOpen(false)}
              className="
                flex
                items-center
                gap-4
                px-5
                py-2
                text-sm
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
                hover:text-slate-800
              "
            >
              <FaKey className="h-3 w-3 text-teal-400" />

              <span>Change Password</span>
            </Link>

            {/* =================================================
                LOGOUT
                ================================================= */}

            <button
              type="button"
              onClick={handleLogout}
              className="
                flex
                w-full
                items-center
                gap-4
                border-t
                border-slate-100
                cursor-pointer
                px-5
                py-2
                text-left
                text-sm
                font-medium
                text-slate-600
                transition
                hover:bg-slate-100
                hover:text-slate-800
              "
            >
              <FaSignOutAlt className="h-3 w-3 text-teal-400" />

              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
