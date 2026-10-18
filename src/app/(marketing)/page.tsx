import { ArticlesSection } from "@/components/home/articles-section";
import { CareerSection } from "@/components/home/career-section";
import { CertificationSection } from "@/components/home/certification-section";
import { CTASection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { LearningProcess } from "@/components/home/learning-process";
import { PopularCourses } from "@/components/home/popular-courses";
import { PracticeSection } from "@/components/home/practice-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { getFeaturedCourses } from "@/lib/course";

export default async function HomePage() {
  const courses = await getFeaturedCourses();
  return (
    <>
      <HeroSection />

      <StatsSection />

      <PopularCourses courses={courses} />

      <WhyChooseUs />

      <CertificationSection />

      <CareerSection />

      <LearningProcess />

      <PracticeSection />

      <TestimonialsSection />

      <ArticlesSection />

      <CTASection />
    </>
  );
}
