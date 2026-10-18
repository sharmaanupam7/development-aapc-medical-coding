"use client";

import { useState } from "react";
import { FaChevronDown, FaMapMarkerAlt, FaBriefcase, FaEnvelope } from "react-icons/fa";

interface CareerPosition {
  title: string;
  experience: string;
  location: string;
  email: string;
  description?: string;
}

interface CareerPositionsProps {
  positions: CareerPosition[];
}

export function CareerPositions({ positions }: CareerPositionsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const togglePosition = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="mt-8 space-y-4">
      {positions.map((position, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={`${position.title}-${index}`}
            className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
          >
            {/* Header */}
            <button
              type="button"
              onClick={() => togglePosition(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-teal-50/50 sm:px-6"
            >
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">{position.title}</h3>

                  <p className="mt-1 text-sm text-slate-500">{position.experience}</p>
                </div>
              </div>

              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-teal-50 text-teal-600" : ""
                }`}
              >
                <FaChevronDown className="text-sm" />
              </span>
            </button>

            {/* Expandable Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6">
                  {position.description && (
                    <p className="mb-5 text-sm leading-7 text-slate-600">{position.description}</p>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="flex items-center gap-3">
                        <FaBriefcase className="text-teal-600" />

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Experience</p>

                          <p className="mt-1 text-sm font-semibold text-slate-800">{position.experience}</p>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-teal-600" />

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Location</p>

                          <p className="mt-1 text-sm font-semibold text-slate-800">{position.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mt-4 flex flex-col gap-3 rounded-xl bg-teal-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="shrink-0 text-teal-600" />

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Send Your Resume</p>

                        {/* <a
                          href={`mailto:${position.email}`}
                          className="mt-1 block break-all text-sm font-bold text-teal-700 hover:text-teal-800"
                        > */}
                        <p className="mt-1 block break-all text-sm font-bold text-teal-700 hover:text-teal-800">
                          {position.email}
                        </p>
                        {/* </a> */}
                      </div>
                    </div>

                    <a
                      href={`mailto:${position.email}?subject=${encodeURIComponent(`Application - ${position.title}`)}`}
                      className="inline-flex shrink-0 items-center justify-center rounded bg-teal-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-teal-700"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
