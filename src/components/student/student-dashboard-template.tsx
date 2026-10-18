// code without responsiveness

// "use client";

// import React from "react";

// interface DashboardPageTemplateProps {
//   title: string;
//   description?: string;
//   children: React.ReactNode;
//   headerRight?: React.ReactNode;
// }

// export default function DashboardPageTemplate({
//   title,
//   description,
//   children,
//   headerRight,
// }: DashboardPageTemplateProps) {
//   return (
//     <div className="w-full">
//       {/* =====================================================
//           P1 - COMMON PAGE HEADER
//           ===================================================== */}
//       <section className="bg-zinc-500 rounded mb-4">
//         <div className="relative min-h-20 px-5 py-1 flex items-center justify-center bg-slate-200">
//           <div className="text-center">
//             <h1 className="text-[18px] font-semibold text-teal-500">{title}</h1>

//             {description && <p className="mt-1 text-[14px] text-gray-800">{description}</p>}
//           </div>

//           {headerRight && <div className="flex items-center">{headerRight}</div>}
//         </div>
//       </section>

//       {/* =====================================================
//           P2 - DYNAMIC PAGE CONTENT
//           ===================================================== */}
//       <section className="bg-white border-x border-b border-gray-200 rounded">{children}</section>
//     </div>
//   );
// }

// code with responsiveness

"use client";

import React from "react";

interface DashboardPageTemplateProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  headerRight?: React.ReactNode;
}

export default function DashboardPageTemplate({
  title,
  description,
  children,
  headerRight,
}: DashboardPageTemplateProps) {
  return (
    <div className="w-full min-w-0">
      {/* =====================================================
          P1 - COMMON PAGE HEADER
          ===================================================== */}

      <section className="mb-3 w-full overflow-hidden rounded bg-zinc-500 sm:mb-4">
        <div className="relative flex min-h-20 w-full flex-col items-center justify-center gap-3 bg-slate-200 px-3 py-3 sm:px-5 sm:py-3 md:min-h-20 md:px-6 lg:flex-row lg:justify-center lg:gap-5 lg:px-6">
          {/* TITLE + DESCRIPTION */}

          <div className="min-w-0 w-full text-center lg:w-auto lg:flex-none">
            <h1 className="wrap-break-word text-base font-semibold leading-6 text-teal-600 sm:text-[18px] sm:leading-7">
              {title}
            </h1>

            {description && (
              <p className="mt-1 wrap-break-word text-xs leading-5 text-gray-800 sm:text-[14px] sm:leading-5">
                {description}
              </p>
            )}
          </div>

          {/* HEADER RIGHT */}

          {headerRight && (
            <div className="flex w-full min-w-0 items-center justify-center sm:w-auto lg:absolute lg:right-6 lg:top-1/2 lg:w-auto lg:-translate-y-1/2 lg:justify-end">
              {headerRight}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          P2 - DYNAMIC PAGE CONTENT
          ===================================================== */}

      <section className="w-full min-w-0 overflow-hidden rounded border border-gray-200 bg-white">{children}</section>
    </div>
  );
}
