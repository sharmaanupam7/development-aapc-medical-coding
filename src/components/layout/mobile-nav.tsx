"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { mainNavigation } from "@/lib/constants/navigation";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
        aria-label="Open navigation menu"
      >
        <Menu className="h-5 w-5" />
      </SheetTrigger>

      <SheetContent side="right" className="w-40 sm:w-90">
        <SheetHeader>
          <SheetTitle>
            Development AAPC
            <br />
            <span className="text-sm">Medical Coding</span>
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-2 ml-2 flex flex-col gap-2">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-teal-700"
            >
              {item.label}
            </Link>
          ))}

          <div className="my-4 border-t border-slate-200" />

          <Link
            href="/register"
            className="rounded px-4 ml-2 py-2 text-sm font-semibold text-center bg-slate-50 shadow text-slate-700 hover:bg-slate-300"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="rounded px-4 ml-2 py-2 text-sm font-semibold text-center bg-slate-50 shadow text-slate-700 hover:bg-slate-300"
          >
            Sign In
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
