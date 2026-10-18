import { Award, BookOpen, Users, Clock } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";

const stats = [
  {
    value: "10+",
    label: "Learning Programs",
    icon: BookOpen,
  },
  {
    value: "500+",
    label: "Learning Resources",
    icon: Users,
  },
  {
    value: "24/7",
    label: "Flexible Learning",
    icon: Clock,
  },
  {
    value: "100%",
    label: "Career Focused",
    icon: Award,
  },
];

export function StatsSection() {
  return (
    <section className="border-b border-slate-100 bg-white py-12">
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <FadeIn key={stat.label} delay={index * 0.05}>
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-teal-50 p-3 text-teal-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-slate-950">{stat.value}</p>

                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
