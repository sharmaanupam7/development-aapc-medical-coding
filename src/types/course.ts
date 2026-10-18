export interface CourseCardData {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  shortDescription: string | null;
  thumbnail: string | null;
  price: number;
  durationMinutes: number | null;
  level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
  category: {
    name: string;
    slug: string;
  } | null;
}
