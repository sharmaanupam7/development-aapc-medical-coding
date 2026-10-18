import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";

const articles = [
  {
    title: "Understanding Medical Coding Fundamentals",
    category: "Medical Coding",
    date: "Learning Guide",
  },
  {
    title: "Introduction to ICD-10-CM Coding",
    category: "ICD-10-CM",
    date: "Learning Guide",
  },
  {
    title: "Preparing for a Medical Coding Certification",
    category: "Career",
    date: "Career Guide",
  },
];

export function ArticlesSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <FadeIn>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Knowledge Center</p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Latest Medical Coding Insights</h2>

              <p className="mt-4 max-w-2xl text-slate-600">
                Helpful resources, learning guides and career-focused information for medical coding professionals.
              </p>
            </div>
          </FadeIn>

          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
            View All Articles
            {/* <ArrowRight className="h-4 w-4" /> */}
          </Link>
        </div>

        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <FadeIn key={article.title} delay={index * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-16/7 shrink-0 bg-linear-to-br from-slate-800 to-teal-700" />

                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-600">{article.category}</span>

                  <h3 className="mt-3 min-h-12 text-base font-bold leading-6 text-slate-950">{article.title}</h3>

                  <div className="mt-3 flex items-center gap-2 text-xs leading-5 text-slate-500">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    <span>{article.date}</span>
                  </div>

                  <Link
                    href="/blog"
                    className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-900"
                  >
                    Read Article
                    {/* <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /> */}
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
