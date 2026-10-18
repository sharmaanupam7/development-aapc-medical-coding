import { Star } from "lucide-react";

import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";

const testimonials = [
  {
    name: "Student Review",
    role: "Medical Coding Learner",
    text: "The structured learning approach helped me understand medical coding concepts more clearly.",
  },
  {
    name: "Student Review",
    role: "Certification Candidate",
    text: "The combination of lessons and practice made my preparation more organized.",
  },
  {
    name: "Student Review",
    role: "Healthcare Professional",
    text: "A convenient learning experience with useful medical coding resources.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-teal-400">Learner Experience</p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What our learners say</h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <FadeIn key={item.name + index} delay={index * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-300">“{item.text}”</p>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="font-semibold text-white">{item.name}</p>

                  <p className="mt-1 text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
