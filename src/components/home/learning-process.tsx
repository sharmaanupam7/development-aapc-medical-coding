import { Container } from "@/components/layout/container";
import { FadeIn } from "./fade-in";

const steps = [
  {
    number: "01",
    title: "Choose Your Course",
    description: "Explore our medical coding programs and select the learning path that matches your goals.",
  },
  {
    number: "02",
    title: "Learn",
    description: "Study structured lessons, resources and coding concepts at your own pace.",
  },
  {
    number: "03",
    title: "Practice",
    description: "Reinforce your knowledge with practice activities and assessments.",
  },
  {
    number: "04",
    title: "Grow",
    description: "Build confidence and continue developing your professional medical coding skills.",
  },
];

export function LearningProcess() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-teal-600">How It Works</p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">A simple path to better learning</h2>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.08}>
              <div className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-4xl font-black text-teal-100">{step.number}</span>

                <h3 className="mt-5 font-bold text-slate-950">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
