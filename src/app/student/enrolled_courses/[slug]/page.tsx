import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import EnrolledCourse from "@/components/student/student_enrolled_course";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const course = await prisma.course.findUnique({
    where: { slug },
    select: {
      title: true,
      shortDescription: true,
    },
  });

  return {
    title: course ? `${course.title} | My Enrolled Courses` : "Enrolled Course Not Found",
    description: course?.shortDescription ?? "View your enrolled course content.",
  };
}

export default function EnrolledCoursePage({ params }: PageProps) {
  return <EnrolledCourse params={params} />;
}
