import { BriefcaseBusiness, TrendingUp, Users } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";

const items = [
  {
    title: "Build Relevant Skills",
    description: "Develop knowledge that aligns with medical coding and healthcare documentation.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Grow Professionally",
    description: "Strengthen your understanding through structured courses and continuous practice.",
    icon: TrendingUp,
  },
  {
    title: "Learn for the Industry",
    description: "Explore concepts that help you understand the professional medical coding environment.",
    icon: Users,
  },
];

export function CareerSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Your Career Journey</p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Turn medical coding knowledge into career-ready skills.
            </h2>

            <p className="mt-5 text-slate-600">
              Learn progressively, practice consistently and build confidence as you develop your medical coding
              expertise.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.08}>
                <div className="rounded-2xl bg-slate-50 p-8 text-center">
                  <div className="mx-auto inline-flex rounded-2xl bg-white p-4 text-teal-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 font-bold text-slate-950">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
