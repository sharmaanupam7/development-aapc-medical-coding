import { BookOpenCheck, MonitorPlay, Target, UserRoundCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";

const features = [
  {
    title: "Structured Curriculum",
    description: "Follow an organized learning path designed to build your knowledge progressively.",
    icon: BookOpenCheck,
  },
  {
    title: "Practical Learning",
    description: "Focus on concepts and practical applications that help connect learning with real coding scenarios.",
    icon: Target,
  },
  {
    title: "Flexible Online Access",
    description: "Access learning resources and course content according to your schedule.",
    icon: MonitorPlay,
  },
  {
    title: "Career-Oriented Guidance",
    description: "Develop skills with a curriculum designed around professional medical coding goals.",
    icon: UserRoundCheck,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <FadeIn>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Why Development AAPC</p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Learn medical coding with a clear path toward your goals.
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Our learning experience is designed to make medical coding education structured, accessible and
                practical.
              </p>
            </div>
          </FadeIn>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <FadeIn key={feature.title} delay={index * 0.08}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-lg">
                    <div className="inline-flex rounded-xl bg-teal-50 p-3 text-teal-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 font-bold text-slate-950">{feature.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
