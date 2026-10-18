import { Prisma } from "../src/generated/prisma/client";

export const COURSE_CATEGORIES = [
  {
    name: "Learning Content",
    slug: "learning-content",
    description: "Foundational and practical medical coding courses",
    sortOrder: 1,
  },
  {
    name: "Certification Preparation",
    slug: "certification-preparation",
    description: "Courses designed to support professional medical coding certification preparation",
    sortOrder: 2,
  },
] as const;

export const COURSES = [
  {
    title: "Certified Inpatient Coder (CIC)® certification",
    slug: "cic_certification",
    shortDescription:
      "A Certified Inpatient Coder (CIC) is a specialized healthcare credential from AAPC that validates expertise in reviewing and assigning accurate diagnostic and procedural codes for hospital inpatient services",
    description:
      "This course introduces learners to the fundamentals of medical coding, healthcare terminology, documentation and coding concepts",
    price: new Prisma.Decimal("30000.00"),
    thumbnail: "/images/courses/cic.jpg",
    durationMinutes: 5,
    level: "BEGINNER" as const,
    status: "PUBLISHED" as const,
    isPublished: true,
    isFeatured: true,

    // Category is resolved by slug in seed.ts
    categorySlug: "learning-content",
  },

  {
    title: "Certified Professional Coder (CPC)® certification",
    slug: "cpc_certification",
    shortDescription:
      "A Certified Professional Coder (CPC) is a trained healthcare specialist who translates patient medical records and doctor services into standardized numerical codes for insurance claims and billing",
    description:
      "This course introduces learners to the fundamentals of medical coding, healthcare terminology, documentation and coding concepts",
    price: new Prisma.Decimal("30000.00"),
    thumbnail: "/images/courses/cic.jpg",
    durationMinutes: 5,
    level: "BEGINNER" as const,
    status: "PUBLISHED" as const,
    isPublished: true,
    isFeatured: true,

    // Category is resolved by slug in seed.ts
    categorySlug: "learning-content",
  },
] as const;
