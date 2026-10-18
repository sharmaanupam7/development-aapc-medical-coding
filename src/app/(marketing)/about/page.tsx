import Image from "next/image";
import { Container } from "@/components/layout/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Development AAPC Medical Coding",
  icons: {
    icon: "/images/icons/about_icon.png",
  },
};

const teamMembers = [
  {
    name: "Rajni Sharma",
    designation: "Managing Director",
    image: "/images/team/rajni_sharma.jpg",
    bio: `Rajni Sharma is a healthcare and medical coding professional with extensive experience in healthcare operations, medical coding, billing and training. Her professional journey includes working with healthcare organizations and developing practical expertise in medical coding, revenue cycle management and professional training.

She has been involved in building and managing healthcare-focused teams and has extensive exposure to coding standards, healthcare documentation, billing processes and professional development.

Her experience enables her to understand the practical challenges faced by medical coding professionals and learners. Her focus is on developing structured learning programs that combine theoretical knowledge with practical coding skills.

At Development AAPC Medical Coding, she contributes to building professional learning solutions designed to help students and working professionals develop industry-relevant medical coding knowledge and prepare for their career goals.`,
  },
  {
    name: "Vikas Sharma",
    designation: "Director",
    image: "/images/team/vikas_sharma.jpg",
    bio: `Vikas Sharma is an experienced professional with expertise in healthcare operations, professional training and organizational development. He has worked closely with teams and professionals to understand their learning requirements and support effective training initiatives.

His experience includes working with professionals from different backgrounds and helping create structured learning environments that encourage practical understanding and continuous development.

At Development AAPC Medical Coding, he contributes toward creating learner-focused programs and supporting the development of educational initiatives that help students and professionals strengthen their medical coding knowledge and career capabilities.`,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* =========================================================
          PAGE HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container>
          <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">About Us</p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Development AAPC</h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Building practical medical coding knowledge for students, professionals and healthcare learners
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          ABOUT CONTENT
      ========================================================== */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            {/* Section heading */}
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-wider text-teal-600">About Us</p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Development AAPC Medical Coding
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-teal-500" />
            </div>

            <div className="space-y-10 text-[15px] leading-7 text-slate-600">
              {/* Who we are */}
              <div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">About Development AAPC Medical Coding</h3>

                <p>
                  Development AAPC Medical Coding is focused on providing structured and practical medical coding
                  education for students and professionals looking to develop their knowledge and career opportunities
                  in the healthcare industry.
                </p>

                <p className="mt-4">
                  Our learning approach combines coding concepts, healthcare terminology, documentation, coding
                  guidelines and practical examples to help learners build a strong foundation in medical coding.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">Our Mission</h3>

                <p>
                  Our mission is to bridge the gap between professional healthcare knowledge and practical medical
                  coding skills. We aim to create career-ready learning experiences that help learners develop
                  confidence, accuracy and industry-relevant capabilities.
                </p>
              </div>

              {/* Core services */}
              <div>
                <h3 className="mb-5 text-xl font-bold text-slate-900">Our Core Services</h3>

                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-lg font-bold text-white">
                      01
                    </div>

                    <h4 className="font-bold text-slate-900">Medical Coding Training</h4>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Structured learning programs covering medical coding fundamentals, CPT, ICD-10-CM and practical
                      coding concepts.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-lg font-bold text-white">
                      02
                    </div>

                    <h4 className="font-bold text-slate-900">Practice & Assessment</h4>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Practice tests, mock examinations and assessment programs designed to improve coding accuracy and
                      exam readiness.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-md">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-lg font-bold text-white">
                      03
                    </div>

                    <h4 className="font-bold text-slate-900">Professional Development</h4>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Career-oriented learning resources designed to support students and working professionals in their
                      medical coding journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why us */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-slate-900">Why Development AAPC?</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Industry-focused medical coding learning",
                    "Practical and structured training approach",
                    "Coding practice and assessment resources",
                    "Career-oriented learning programs",
                    "Experienced professional guidance",
                    "Learner-focused educational experience",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-700">
                        ✓
                      </span>

                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          OUR EXPERT TEAM
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(13,148,136,0.20),transparent_35%),radial-gradient(circle_at_right,rgba(20,184,166,0.15),transparent_35%)]" />

        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <Container>
          <div className="relative mx-auto max-w-6xl">
            {/* Team heading */}
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                Development AAPC Team Members
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Expert Team</h2>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-teal-400" />

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-300">
                Meet the professionals contributing their experience and expertise toward building better medical coding
                learning experiences.
              </p>
            </div>

            {/* Team members */}
            <div className="space-y-6">
              {teamMembers.map((member) => (
                <article key={member.name} className="overflow-hidden rounded bg-white shadow-2xl">
                  <div className="grid md:grid-cols-[180px_1fr]">
                    {/* Profile image */}
                    <div className="relative h-72 w-full bg-slate-100 sm:h-80 md:h-auto md:min-h-full md:w-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 767px) 100vw, 180px"
                        className="object-contain md:object-cover"
                      />
                    </div>

                    {/* Profile information */}
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl font-bold text-slate-950">{member.name}</h3>

                      <p className="mt-1 text-sm font-semibold text-teal-600">{member.designation}</p>

                      <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                        {member.bio.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================== */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="rounded bg-teal-700 px-6 py-12 text-center shadow-xl sm:px-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-100">Start Learning</p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Build Your Medical Coding Skills
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-teal-50 sm:text-base">
              Explore our medical coding courses, practice resources and professional learning programs
            </p>

            <div className="mt-8">
              <a
                href="/courses"
                className="inline-flex items-center rounded bg-white px-6 py-3 text-sm font-bold text-teal-700 shadow-sm transition hover:bg-slate-100"
              >
                Explore All Courses
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
