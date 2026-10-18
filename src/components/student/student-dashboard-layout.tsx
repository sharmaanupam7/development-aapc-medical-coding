// initial code

"use client";

import React from "react";
import { StudentSidebar } from "./student-sidebar";

interface StudentDashboardLayoutProps {
  children: React.ReactNode;
}

export default function StudentDashboardLayout({ children }: StudentDashboardLayoutProps) {
  return (
    <div className="w-full bg-slate-50">
      <div className="w-full flex">
        {/* =================================================
            FIXED SIDEBAR
            ================================================= */}
        <aside className="w-80">
          <StudentSidebar />
        </aside>

        {/* =================================================
            MAIN DASHBOARD AREA
            ================================================= */}
        <main className="flex-1 w-full mx-2 py-2">{children}</main>
      </div>
    </div>
  );
}

// code with responsiveness

// "use client";

// import React from "react";
// import { StudentSidebar } from "./student-sidebar";

// interface StudentDashboardLayoutProps {
//   children: React.ReactNode;
// }

// export default function StudentDashboardLayout({ children }: StudentDashboardLayoutProps) {
//   return (
//     <div className="flex min-h-screen w-full min-w-0 overflow-x-hidden bg-white">
//       {/* =====================================================
//           SIDEBAR
//           ===================================================== */}
//       <StudentSidebar />

//       {/* =====================================================
//           MAIN CONTENT
//           ===================================================== */}
//       <main
//         className="
//           min-w-0
//           flex-1
//           w-full
//           overflow-x-hidden
//           px-3
//           py-3
//           sm:px-4
//           sm:py-4
//           md:px-5
//           lg:px-5
//           lg:py-4
//         "
//       >
//         {children}
//       </main>
//     </div>
//   );
// }
