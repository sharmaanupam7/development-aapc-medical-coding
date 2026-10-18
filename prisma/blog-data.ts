export const BLOG_CATEGORIES = [
  {
    name: "Medical Coding",
    slug: "medical-coding",
    description: "Articles covering medical coding concepts, guidelines and industry knowledge.",
  },
  {
    name: "Certification",
    slug: "certification",
    description: "Medical coding certification preparation and career guidance.",
  },
  {
    name: "CPC",
    slug: "cpc",
    description: "CPC certification preparation, tips and resources.",
  },
  {
    name: "ICD-10-CM",
    slug: "icd-10-cm",
    description: "ICD-10-CM coding concepts and practical guidance.",
  },
  {
    name: "CPT Coding",
    slug: "cpt-coding",
    description: "CPT coding concepts, guidelines and practical examples.",
  },
  {
    name: "Career",
    slug: "career",
    description: "Medical coding career advice and professional development.",
  },
] as const;

export const BLOG_POSTS = [
  {
    title: "What Is Medical Coding and Why Is It Important?",
    slug: "what-is-medical-coding",
    excerpt:
      "Learn how medical coding transforms healthcare documentation into standardized codes used for billing, reporting and healthcare operations.",
    content:
      "Medical coding is the process of converting healthcare diagnoses, procedures and services into standardized codes. Accurate coding plays an important role in healthcare administration, billing and reporting.",
    authorName: "Development AAPC Medical Coding",
    status: "PUBLISHED" as const,
    isFeatured: true,
    publishedAt: new Date("2026-08-18"),
    readingTime: 5,
    categorySlug: "medical-coding",
    seoTitle: "What Is Medical Coding and Why Is It Important?",
    seoDescription:
      "Learn the fundamentals of medical coding and understand why accurate coding is important in healthcare.",
  },

  {
    title: "CPC Certification: A Complete Guide for Beginners",
    slug: "cpc-certification-guide",
    excerpt:
      "Discover what CPC certification is, who should pursue it and how proper preparation can help you build a successful medical coding career.",
    content:
      "The Certified Professional Coder certification is one of the important credentials for professionals pursuing a medical coding career. Proper preparation requires understanding coding guidelines, medical terminology and examination structure.",
    authorName: "Development AAPC Medical Coding",
    status: "PUBLISHED" as const,
    isFeatured: false,
    publishedAt: new Date("2026-08-15"),
    readingTime: 7,
    categorySlug: "cpc",
    seoTitle: "CPC Certification Guide for Beginners",
    seoDescription: "A beginner-friendly guide to CPC certification and medical coding exam preparation.",
  },

  {
    title: "ICD-10-CM Coding: Understanding the Fundamentals",
    slug: "icd-10-cm-coding-fundamentals",
    excerpt:
      "Understand the fundamentals of ICD-10-CM coding, diagnosis codes and the importance of accurate clinical documentation.",
    content:
      "ICD-10-CM provides a standardized system for reporting diagnoses and medical conditions. Understanding the structure and guidelines is essential for medical coding students and professionals.",
    authorName: "Development AAPC Medical Coding",
    status: "PUBLISHED" as const,
    isFeatured: false,
    publishedAt: new Date("2026-08-12"),
    readingTime: 6,
    categorySlug: "icd-10-cm",
    seoTitle: "ICD-10-CM Coding Fundamentals",
    seoDescription: "Learn the fundamentals of ICD-10-CM coding and diagnosis coding.",
  },

  {
    title: "CPT Coding Explained for Medical Coding Students",
    slug: "cpt-coding-explained",
    excerpt:
      "Explore the basics of CPT coding and understand how procedure and service codes are used in healthcare documentation.",
    content:
      "CPT codes are used to report medical procedures and services. Students learning medical coding should develop a strong understanding of CPT structure and coding guidelines.",
    authorName: "Development AAPC Medical Coding",
    status: "PUBLISHED" as const,
    isFeatured: false,
    publishedAt: new Date("2026-08-10"),
    readingTime: 6,
    categorySlug: "cpt-coding",
    seoTitle: "CPT Coding Explained",
    seoDescription: "Understand CPT coding fundamentals with this guide for medical coding students.",
  },

  {
    title: "How to Start a Career in Medical Coding",
    slug: "career-in-medical-coding",
    excerpt:
      "A practical guide for students and beginners who want to build a rewarding career in medical coding and healthcare administration.",
    content:
      "Medical coding offers opportunities for individuals interested in healthcare administration and coding. Building a strong foundation in medical terminology, anatomy and coding guidelines can help students prepare for their professional journey.",
    authorName: "Development AAPC Medical Coding",
    status: "PUBLISHED" as const,
    isFeatured: false,
    publishedAt: new Date("2026-08-07"),
    readingTime: 5,
    categorySlug: "career",
    seoTitle: "How to Start a Career in Medical Coding",
    seoDescription:
      "Learn how to begin your career in medical coding and develop the skills required for the profession.",
  },
] as const;
