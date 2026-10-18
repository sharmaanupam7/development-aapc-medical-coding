"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { CourseCard } from "@/components/course/course-card";
import type { CourseCardData } from "@/types/course";

interface CourseCarouselProps {
  courses: CourseCardData[];
}

export function CourseCarousel({ courses }: CourseCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const container = carouselRef.current;

    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>("[data-course-card]");

    const cardWidth = firstCard?.getBoundingClientRect().width ?? 280;
    const gap = 20;

    container.scrollBy({
      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
      behavior: "smooth",
    });
  };

  if (courses.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full">
      {/* LEFT BUTTON */}
      <button
        type="button"
        onClick={() => scrollCarousel("left")}
        aria-label="Previous courses"
        className="absolute left-10 top-110 z-10 flex h-10 w-10 cursor-pointer translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700 sm:left-2 sm:translate-x-0"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* COURSE CAROUSEL */}
      <div
        ref={carouselRef}
        className="flex w-full snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-2 pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {courses.map((course) => (
          <div key={course.id} data-course-card className="w-65 shrink-0 snap-start sm:w-70 lg:w-75">
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <button
        type="button"
        onClick={() => scrollCarousel("right")}
        aria-label="Next courses"
        className="absolute right-0 top-110 z-10 flex h-10 w-10 cursor-pointer translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-md transition hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700 sm:right-2 sm:translate-x-0"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
