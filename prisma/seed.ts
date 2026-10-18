// import { PrismaClient } from "../src/generated/prisma/client";
// import { PrismaMariaDb } from "@prisma/adapter-mariadb";
// import { randomUUID } from "crypto";

// import { LOCATION_DATA } from "./location-data";
// import { COUNTRY_MOBILE_RULES } from "./country-mobile-rules";

// import { COURSE_CATEGORIES, COURSES } from "./course-data";

// import { MOCK_EXAMS } from "./mock-exam-data";

// import { BLOG_CATEGORIES, BLOG_POSTS } from "./blog-data";

// /* ============================================================
//    PRISMA CLIENT
//    ============================================================ */

// const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);

// const prisma = new PrismaClient({
//   adapter,
// });

// /* ============================================================
//    COURSE CATEGORIES
//    ============================================================ */

// async function seedCourseCategories(now: Date) {
//   console.log("Seeding course categories...");

//   for (const category of COURSE_CATEGORIES) {
//     await prisma.coursecategory.upsert({
//       where: {
//         slug: category.slug,
//       },

//       update: {
//         name: category.name,
//         description: category.description,
//         sortOrder: category.sortOrder,
//         updatedAt: now,
//       },

//       create: {
//         id: randomUUID(),
//         name: category.name,
//         slug: category.slug,
//         description: category.description,
//         isActive: true,
//         sortOrder: category.sortOrder,
//         createdAt: now,
//         updatedAt: now,
//       },
//     });
//   }

//   console.log(`Course categories seeded: ${COURSE_CATEGORIES.length}`);
// }

// /* ============================================================
//    COURSES
//    ============================================================ */

// async function seedCourses(now: Date) {
//   console.log("Seeding courses...");

//   for (const course of COURSES) {
//     /*
//      * Resolve the category ID using the category slug.
//      *
//      * This keeps course-data.ts independent of database IDs.
//      */

//     const category = await prisma.coursecategory.findUnique({
//       where: {
//         slug: course.categorySlug,
//       },

//       select: {
//         id: true,
//       },
//     });

//     if (!category) {
//       throw new Error(`Course category not found: ${course.categorySlug}`);
//     }

//     await prisma.course.upsert({
//       where: {
//         slug: course.slug,
//       },

//       update: {
//         title: course.title,
//         shortDescription: course.shortDescription,
//         description: course.description,
//         price: course.price,
//         thumbnail: course.thumbnail,
//         durationMinutes: course.durationMinutes,
//         level: course.level,
//         status: course.status,
//         isPublished: course.isPublished,
//         isFeatured: course.isFeatured,
//         categoryId: category.id,
//         updatedAt: now,
//       },

//       create: {
//         id: randomUUID(),
//         title: course.title,
//         slug: course.slug,
//         shortDescription: course.shortDescription,
//         description: course.description,
//         price: course.price,
//         thumbnail: course.thumbnail,
//         durationMinutes: course.durationMinutes,
//         level: course.level,
//         status: course.status,
//         isPublished: course.isPublished,
//         isFeatured: course.isFeatured,
//         categoryId: category.id,
//         createdAt: now,
//         updatedAt: now,
//         sortOrder: 0,
//       },
//     });
//   }

//   console.log(`Courses seeded: ${COURSES.length}`);
// }

// /* ============================================================
//    MOCK EXAMS
//    ============================================================ */

// async function seedMockExams(now: Date) {
//   console.log("Seeding mock exams...");

//   for (const exam of MOCK_EXAMS) {
//     await prisma.mockexam.upsert({
//       where: {
//         slug: exam.slug,
//       },

//       update: {
//         title: exam.title,
//         description: exam.description,
//         type: exam.type,
//         isPublished: exam.isPublished,
//         sortOrder: exam.sortOrder,
//         updatedAt: now,
//       },

//       create: {
//         id: randomUUID(),
//         title: exam.title,
//         slug: exam.slug,
//         description: exam.description,
//         type: exam.type,
//         isPublished: exam.isPublished,
//         sortOrder: exam.sortOrder,
//         createdAt: now,
//         updatedAt: now,
//       },
//     });
//   }

//   console.log(`Mock exams seeded: ${MOCK_EXAMS.length}`);
// }

// /* ============================================================
//    BLOG CATEGORIES
//    ============================================================ */

// async function seedBlogCategories(now: Date) {
//   console.log("Seeding blog categories...");

//   for (const category of BLOG_CATEGORIES) {
//     await prisma.blogcategory.upsert({
//       where: {
//         slug: category.slug,
//       },

//       update: {
//         name: category.name,
//         description: category.description,
//         updatedAt: now,
//       },

//       create: {
//         id: randomUUID(),
//         name: category.name,
//         slug: category.slug,
//         description: category.description,
//         isActive: true,
//         createdAt: now,
//         updatedAt: now,
//       },
//     });
//   }

//   console.log(`Blog categories seeded: ${BLOG_CATEGORIES.length}`);
// }

// /* ============================================================
//    BLOG POSTS
//    ============================================================ */

// async function seedBlogPosts(now: Date) {
//   console.log("Seeding blog posts...");

//   for (const post of BLOG_POSTS) {
//     /*
//      * Resolve the blog category ID using category slug.
//      */

//     const category = await prisma.blogcategory.findUnique({
//       where: {
//         slug: post.categorySlug,
//       },

//       select: {
//         id: true,
//       },
//     });

//     if (!category) {
//       throw new Error(`Blog category not found: ${post.categorySlug}`);
//     }

//     await prisma.blogpost.upsert({
//       where: {
//         slug: post.slug,
//       },

//       update: {
//         title: post.title,
//         excerpt: post.excerpt,
//         content: post.content,
//         authorName: post.authorName,
//         status: post.status,
//         isFeatured: post.isFeatured,
//         publishedAt: post.publishedAt,
//         readingTime: post.readingTime,
//         categoryId: category.id,
//         seoTitle: post.seoTitle,
//         seoDescription: post.seoDescription,
//         updatedAt: now,
//       },

//       create: {
//         id: randomUUID(),
//         title: post.title,
//         slug: post.slug,
//         excerpt: post.excerpt,
//         content: post.content,
//         authorName: post.authorName,
//         status: post.status,
//         isFeatured: post.isFeatured,
//         publishedAt: post.publishedAt,
//         readingTime: post.readingTime,
//         categoryId: category.id,
//         seoTitle: post.seoTitle,
//         seoDescription: post.seoDescription,
//         createdAt: now,
//         updatedAt: now,
//       },
//     });
//   }

//   console.log(`Blog posts seeded: ${BLOG_POSTS.length}`);
// }

// /* ============================================================
//    LOCATION DATA
//    Country → State → City → Postal Code
//    ============================================================ */

// async function seedCountryLocationData(locationData: (typeof LOCATION_DATA)[keyof typeof LOCATION_DATA]) {
//   /*
//    * ----------------------------------------------------------
//    * 1. COUNTRY
//    * ----------------------------------------------------------
//    */

//   const country = await prisma.country.upsert({
//     where: {
//       country_code: locationData.country.country_code,
//     },

//     update: {
//       country_name: locationData.country.country_name,

//       phoneCode: locationData.country.phoneCode,

//       isActive: true,
//     },

//     create: {
//       country_name: locationData.country.country_name,

//       country_code: locationData.country.country_code,

//       phoneCode: locationData.country.phoneCode,

//       isActive: true,
//     },
//   });

//   console.log(`Country seeded: ${country.country_name}`);

//   /*
//    * ----------------------------------------------------------
//    * 2. STATES
//    * ----------------------------------------------------------
//    */

//   for (const stateData of locationData.states) {
//     const state = await prisma.state.upsert({
//       where: {
//         country_id_state_name: {
//           country_id: country.country_id,
//           state_name: stateData.state_name,
//         },
//       },

//       update: {
//         state_name: stateData.state_name,
//         isActive: true,
//       },

//       create: {
//         state_name: stateData.state_name,
//         country_id: country.country_id,
//         isActive: true,
//       },
//     });

//     console.log(`  State seeded: ${state.state_name}`);

//     /*
//      * --------------------------------------------------------
//      * 3. CITIES
//      * --------------------------------------------------------
//      */

//     for (const cityData of stateData.cities) {
//       const city = await prisma.city.upsert({
//         where: {
//           state_id_city_name: {
//             state_id: state.state_id,
//             city_name: cityData.city_name,
//           },
//         },

//         update: {
//           city_name: cityData.city_name,
//           isActive: true,
//         },

//         create: {
//           city_name: cityData.city_name,
//           state_id: state.state_id,
//           isActive: true,
//         },
//       });

//       console.log(`    City seeded: ${city.city_name}`);

//       /*
//        * ------------------------------------------------------
//        * 4. POSTAL CODES
//        * ------------------------------------------------------
//        */

//       for (const postalCode of cityData.postal_codes) {
//         await prisma.postal_code.upsert({
//           where: {
//             city_id_postal_code: {
//               city_id: city.city_id,
//               postal_code: postalCode,
//             },
//           },

//           update: {
//             postal_code: postalCode,
//             isActive: true,
//           },

//           create: {
//             postal_code: postalCode,
//             city_id: city.city_id,
//             isActive: true,
//           },
//         });
//       }
//     }
//   }
// }

// /* ============================================================
//    LOCATION MASTER DATA
//    ============================================================ */

// async function seedLocationData() {
//   console.log("Seeding location data...");

//   for (const locationData of Object.values(LOCATION_DATA)) {
//     await seedCountryLocationData(locationData);
//   }

//   console.log("Location master data seeded successfully.");
// }

// /* ============================================================
//    COUNTRY MOBILE VALIDATION RULES
//    DB-DRIVEN
//    ============================================================ */

// async function seedCountryMobileValidationRules() {
//   console.log("Seeding country mobile validation rules...");

//   let updated = 0;
//   let skipped = 0;

//   for (const rule of COUNTRY_MOBILE_RULES) {
//     const country = await prisma.country.findUnique({
//       where: {
//         country_code: rule.country_code,
//       },

//       select: {
//         country_id: true,
//         country_name: true,
//         country_code: true,
//       },
//     });

//     /*
//      * A mobile rule can only be applied if the
//      * corresponding country exists in the country table.
//      */

//     if (!country) {
//       console.warn(`Country not found: ${rule.country_code}. Skipping.`);

//       skipped++;
//       continue;
//     }

//     await prisma.country.update({
//       where: {
//         country_id: country.country_id,
//       },

//       data: {
//         mobileMinLength: rule.mobileMinLength,

//         mobileMaxLength: rule.mobileMaxLength,

//         mobilePattern: rule.mobilePattern,
//       },
//     });

//     console.log(`Mobile rule updated: ${country.country_name} (${country.country_code})`);

//     updated++;
//   }

//   console.log("--------------------------------------");
//   console.log(`Mobile rules updated : ${updated}`);
//   console.log(`Mobile rules skipped : ${skipped}`);
//   console.log("--------------------------------------");
// }

// /* ============================================================
//    MAIN SEED
//    ============================================================ */

// async function main() {
//   console.log("======================================");
//   console.log("Starting database seed...");
//   console.log("======================================");

//   /*
//    * Use one timestamp for the complete seed operation.
//    *
//    * This keeps createdAt / updatedAt consistent
//    * for records created during this execution.
//    */

//   const now = new Date();

//   /*
//    * ==========================================================
//    * 1. COURSE MASTER DATA
//    * ==========================================================
//    */

//   await seedCourseCategories(now);

//   /*
//    * ==========================================================
//    * 2. BLOG MASTER DATA
//    * ==========================================================
//    */

//   await seedBlogCategories(now);

//   /*
//    * ==========================================================
//    * 3. COURSES
//    * ==========================================================
//    */

//   await seedCourses(now);

//   /*
//    * ==========================================================
//    * 4. MOCK EXAMS
//    * ==========================================================
//    */

//   await seedMockExams(now);

//   /*
//    * ==========================================================
//    * 5. BLOG POSTS
//    * ==========================================================
//    */

//   await seedBlogPosts(now);

//   /*
//    * ==========================================================
//    * 6. LOCATION MASTER DATA
//    *
//    * Country
//    *    ↓
//    * State
//    *    ↓
//    * City
//    *    ↓
//    * Postal Code
//    * ==========================================================
//    */

//   await seedLocationData();

//   /*
//    * ==========================================================
//    * 7. COUNTRY-SPECIFIC MOBILE VALIDATION
//    *
//    * IMPORTANT:
//    * Countries must exist before mobile rules are applied.
//    * ==========================================================
//    */

//   await seedCountryMobileValidationRules();

//   console.log("======================================");
//   console.log("Database seed completed successfully");
//   console.log("======================================");
// }

// /* ============================================================
//    RUN SEED
//    ============================================================ */

// main()
//   .catch((error) => {
//     console.error("Seed failed:", error);

//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// updated code

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { randomUUID } from "crypto";

import { LOCATION_DATA } from "./location-data";
import { COUNTRY_MOBILE_RULES } from "./country-mobile-rules";

import { COURSE_CATEGORIES, COURSES } from "./course-data";

import { MOCK_EXAMS } from "./mock-exam-data";

import { BLOG_CATEGORIES, BLOG_POSTS } from "./blog-data";

/* ============================================================
   PRISMA CLIENT
   ============================================================ */

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!);

const prisma = new PrismaClient({
  adapter,
});

/* ============================================================
   COURSE CATEGORIES
   ============================================================ */

async function seedCourseCategories(now: Date) {
  console.log("Seeding course categories...");

  for (const category of COURSE_CATEGORIES) {
    await prisma.coursecategory.upsert({
      where: {
        slug: category.slug,
      },

      update: {
        name: category.name,
        description: category.description,
        sortOrder: category.sortOrder,
        updatedAt: now,
      },

      create: {
        id: randomUUID(),
        name: category.name,
        slug: category.slug,
        description: category.description,
        isActive: true,
        sortOrder: category.sortOrder,
        createdAt: now,
        updatedAt: now,
      },
    });
  }

  console.log(`Course categories seeded: ${COURSE_CATEGORIES.length}`);
}

/* ============================================================
   COURSES
   ============================================================ */

async function seedCourses(now: Date) {
  console.log("Seeding courses...");

  for (const course of COURSES) {
    /*
     * Resolve category using category slug.
     *
     * This keeps course-data.ts independent of database IDs.
     */

    const category = await prisma.coursecategory.findUnique({
      where: {
        slug: course.categorySlug,
      },

      select: {
        id: true,
      },
    });

    if (!category) {
      throw new Error(`Course category not found: ${course.categorySlug}`);
    }

    await prisma.course.upsert({
      where: {
        slug: course.slug,
      },

      update: {
        title: course.title,
        shortDescription: course.shortDescription,
        description: course.description,
        price: course.price,
        thumbnail: course.thumbnail,
        durationMinutes: course.durationMinutes,
        level: course.level,
        status: course.status,
        isPublished: course.isPublished,
        isFeatured: course.isFeatured,
        categoryId: category.id,
        updatedAt: now,
      },

      create: {
        id: randomUUID(),
        title: course.title,
        slug: course.slug,
        shortDescription: course.shortDescription,
        description: course.description,
        price: course.price,
        thumbnail: course.thumbnail,
        durationMinutes: course.durationMinutes,
        level: course.level,
        status: course.status,
        isPublished: course.isPublished,
        isFeatured: course.isFeatured,
        categoryId: category.id,
        createdAt: now,
        updatedAt: now,
        sortOrder: 0,
      },
    });
  }

  console.log(`Courses seeded: ${COURSES.length}`);
}

/* ============================================================
   MOCK EXAMS
   ============================================================ */

async function seedMockExams(now: Date) {
  console.log("Seeding mock exams...");

  for (const exam of MOCK_EXAMS) {
    await prisma.mockexam.upsert({
      where: {
        slug: exam.slug,
      },

      update: {
        title: exam.title,
        description: exam.description,
        type: exam.type,
        isPublished: exam.isPublished,
        sortOrder: exam.sortOrder,
        updatedAt: now,
      },

      create: {
        id: randomUUID(),
        title: exam.title,
        slug: exam.slug,
        description: exam.description,
        type: exam.type,
        isPublished: exam.isPublished,
        sortOrder: exam.sortOrder,
        createdAt: now,
        updatedAt: now,
      },
    });
  }

  console.log(`Mock exams seeded: ${MOCK_EXAMS.length}`);
}

/* ============================================================
   BLOG CATEGORIES
   ============================================================ */

async function seedBlogCategories(now: Date) {
  console.log("Seeding blog categories...");

  for (const category of BLOG_CATEGORIES) {
    await prisma.blogcategory.upsert({
      where: {
        slug: category.slug,
      },

      update: {
        name: category.name,
        description: category.description,
        updatedAt: now,
      },

      create: {
        id: randomUUID(),
        name: category.name,
        slug: category.slug,
        description: category.description,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      },
    });
  }

  console.log(`Blog categories seeded: ${BLOG_CATEGORIES.length}`);
}

/* ============================================================
   BLOG POSTS
   ============================================================ */

async function seedBlogPosts(now: Date) {
  console.log("Seeding blog posts...");

  for (const post of BLOG_POSTS) {
    /*
     * Resolve blog category ID using category slug.
     */

    const category = await prisma.blogcategory.findUnique({
      where: {
        slug: post.categorySlug,
      },

      select: {
        id: true,
      },
    });

    if (!category) {
      throw new Error(`Blog category not found: ${post.categorySlug}`);
    }

    /*
     * IMPORTANT:
     *
     * blogpost requires an author/user relationship in the
     * current schema only if your schema defines authorId
     * as required.
     *
     * The current seed structure is preserved here because
     * your existing blogpost schema/data already supports it.
     */

    await prisma.blogpost.upsert({
      where: {
        slug: post.slug,
      },

      update: {
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        authorName: post.authorName,
        status: post.status,
        isFeatured: post.isFeatured,
        publishedAt: post.publishedAt,
        readingTime: post.readingTime,
        categoryId: category.id,
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        updatedAt: now,
      },

      create: {
        id: randomUUID(),
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content,
        authorName: post.authorName,
        status: post.status,
        isFeatured: post.isFeatured,
        publishedAt: post.publishedAt,
        readingTime: post.readingTime,
        categoryId: category.id,
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        createdAt: now,
        updatedAt: now,
      },
    });
  }

  console.log(`Blog posts seeded: ${BLOG_POSTS.length}`);
}

/* ============================================================
   LOCATION DATA
   Country → State → City → Postal Code
   ============================================================ */

async function seedCountryLocationData(locationData: (typeof LOCATION_DATA)[keyof typeof LOCATION_DATA]) {
  /*
   * ----------------------------------------------------------
   * 1. COUNTRY
   * ----------------------------------------------------------
   */

  const country = await prisma.country.upsert({
    where: {
      country_code: locationData.country.country_code,
    },

    update: {
      country_name: locationData.country.country_name,
      phoneCode: locationData.country.phoneCode,
      isActive: true,
    },

    create: {
      country_name: locationData.country.country_name,
      country_code: locationData.country.country_code,
      phoneCode: locationData.country.phoneCode,
      isActive: true,
    },
  });

  console.log(`Country seeded: ${country.country_name}`);

  /*
   * ----------------------------------------------------------
   * 2. STATES
   * ----------------------------------------------------------
   */

  for (const stateData of locationData.states) {
    const state = await prisma.state.upsert({
      where: {
        country_id_state_name: {
          country_id: country.country_id,
          state_name: stateData.state_name,
        },
      },

      update: {
        state_name: stateData.state_name,
        isActive: true,
      },

      create: {
        state_name: stateData.state_name,
        country_id: country.country_id,
        isActive: true,
      },
    });

    console.log(`  State seeded: ${state.state_name}`);

    /*
     * --------------------------------------------------------
     * 3. CITIES
     * --------------------------------------------------------
     */

    for (const cityData of stateData.cities) {
      const city = await prisma.city.upsert({
        where: {
          state_id_city_name: {
            state_id: state.state_id,
            city_name: cityData.city_name,
          },
        },

        update: {
          city_name: cityData.city_name,
          isActive: true,
        },

        create: {
          city_name: cityData.city_name,
          state_id: state.state_id,
          isActive: true,
        },
      });

      console.log(`    City seeded: ${city.city_name}`);

      /*
       * ------------------------------------------------------
       * 4. POSTAL CODES
       * ------------------------------------------------------
       */

      for (const postalCode of cityData.postal_codes) {
        await prisma.postal_code.upsert({
          where: {
            city_id_postal_code: {
              city_id: city.city_id,
              postal_code: postalCode,
            },
          },

          update: {
            postal_code: postalCode,
            isActive: true,
          },

          create: {
            postal_code: postalCode,
            city_id: city.city_id,
            isActive: true,
          },
        });
      }
    }
  }
}

/* ============================================================
   LOCATION MASTER DATA
   ============================================================ */

async function seedLocationData() {
  console.log("Seeding location data...");

  for (const locationData of Object.values(LOCATION_DATA)) {
    await seedCountryLocationData(locationData);
  }

  console.log("Location master data seeded successfully.");
}

/* ============================================================
   COUNTRY MOBILE VALIDATION RULES
   DB-DRIVEN
   ============================================================ */

async function seedCountryMobileValidationRules() {
  console.log("Seeding country mobile validation rules...");

  let updated = 0;
  let skipped = 0;

  for (const rule of COUNTRY_MOBILE_RULES) {
    const country = await prisma.country.findUnique({
      where: {
        country_code: rule.country_code,
      },

      select: {
        country_id: true,
        country_name: true,
        country_code: true,
      },
    });

    /*
     * A mobile rule can only be applied if the
     * corresponding country exists in the country table.
     */

    if (!country) {
      console.warn(`Country not found: ${rule.country_code}. Skipping.`);
      skipped++;
      continue;
    }

    await prisma.country.update({
      where: {
        country_id: country.country_id,
      },

      data: {
        mobileMinLength: rule.mobileMinLength,
        mobileMaxLength: rule.mobileMaxLength,
        mobilePattern: rule.mobilePattern,
      },
    });

    console.log(`Mobile rule updated: ${country.country_name} (${country.country_code})`);

    updated++;
  }

  console.log("--------------------------------------");
  console.log(`Mobile rules updated : ${updated}`);
  console.log(`Mobile rules skipped : ${skipped}`);
  console.log("--------------------------------------");
}

/* ============================================================
   STUDENT ENROLLMENT
   ============================================================

   Architecture:

   user
     ↓
   enrollment
     ↓
   courseprogress
     ↓
   lessonprogress
     ↓
   lesson

   IMPORTANT:

   courseprogress no longer contains:
     userId
     courseId

   It contains:
     enrollmentId

   lessonprogress contains:
     enrollmentId
     lessonId

   ============================================================ */

async function seedStudentEnrollment() {
  console.log("Seeding Student enrollments");

  /*
   * ----------------------------------------------------------
   * 1. FIND STUDENT
   * ----------------------------------------------------------
   */

  const studentEmail = "conour-deray1@yahoo.com";

  const student = await prisma.user.findUnique({
    where: {
      email: studentEmail,
    },

    select: {
      id: true,
      email: true,
    },
  });

  if (!student) {
    throw new Error(`Enrollment seed failed: User with email "${studentEmail}" was not found.`);
  }

  /*
   * ----------------------------------------------------------
   * 2. COURSES TO ENROLL
   * ----------------------------------------------------------
   *
   * SAME USER:
   *
   * 1. Medical Terminology
   * 2. CPC Certification
   *
   * Each course gets its own Enrollment record.
   */

  const courseSlugs = ["medical-terminology", "cpc_certification"];

  /*
   * ----------------------------------------------------------
   * 3. PROCESS EACH COURSE
   * ----------------------------------------------------------
   */

  for (const courseSlug of courseSlugs) {
    console.log("--------------------------------------");
    console.log(`Processing course: ${courseSlug}`);

    /*
     * --------------------------------------------------------
     * FIND COURSE
     * --------------------------------------------------------
     */

    const course = await prisma.course.findUnique({
      where: {
        slug: courseSlug,
      },

      select: {
        id: true,
        title: true,
        slug: true,
      },
    });

    if (!course) {
      console.warn(`Course ${courseSlug} was not found. Skipping this course.`);

      continue;
    }

    console.log(`Course found: ${course.title}`);

    /*
     * --------------------------------------------------------
     * 4. CREATE / FIND ENROLLMENT
     * --------------------------------------------------------
     *
     * @@unique([userId, courseId])
     *
     * Therefore upsert is safe.
     *
     * Existing enrollment is NOT duplicated.
     */

    const enrollment = await prisma.enrollment.upsert({
      where: {
        userId_courseId: {
          userId: student.id,
          courseId: course.id,
        },
      },

      update: {
        status: "ACTIVE",
      },

      create: {
        id: randomUUID(),
        userId: student.id,
        courseId: course.id,
        status: "ACTIVE",
        enrolledAt: new Date(),
      },

      select: {
        id: true,
        userId: true,
        courseId: true,
        status: true,
      },
    });

    console.log(`Enrollment ready: ${enrollment.id}`);

    /*
     * --------------------------------------------------------
     * 5. CREATE / FIND COURSE PROGRESS
     * --------------------------------------------------------
     *
     * One CourseProgress belongs to one Enrollment.
     *
     * @@unique([enrollmentId])
     */

    const courseProgress = await prisma.courseprogress.upsert({
      where: {
        enrollmentId: enrollment.id,
      },

      update: {},

      create: {
        id: randomUUID(),
        enrollmentId: enrollment.id,
        progress: 0,
        completed: false,
      },

      select: {
        id: true,
        enrollmentId: true,
        progress: true,
        completed: true,
      },
    });

    console.log(`Course progress ready: ${courseProgress.id} (${courseProgress.progress}%)`);

    /*
     * --------------------------------------------------------
     * 6. FIND COURSE LESSONS
     * --------------------------------------------------------
     */

    const lessons = await prisma.lesson.findMany({
      where: {
        courseId: course.id,
      },

      orderBy: {
        createdAt: "asc",
      },

      select: {
        id: true,
        title: true,
      },
    });

    console.log(`Lessons found: ${lessons.length}`);

    /*
     * --------------------------------------------------------
     * 7. CREATE / FIND LESSON PROGRESS
     * --------------------------------------------------------
     *
     * One record for:
     *
     * enrollment + lesson
     *
     * @@unique([enrollmentId, lessonId])
     */

    let lessonProgressCount = 0;

    for (const lesson of lessons) {
      await prisma.lessonprogress.upsert({
        where: {
          enrollmentId_lessonId: {
            enrollmentId: enrollment.id,
            lessonId: lesson.id,
          },
        },

        update: {},

        create: {
          id: randomUUID(),
          enrollmentId: enrollment.id,
          lessonId: lesson.id,
          completed: false,
        },
      });

      lessonProgressCount++;
    }

    console.log(`Lesson progress records ready: ${lessonProgressCount}`);

    /*
     * --------------------------------------------------------
     * COURSE SUMMARY
     * --------------------------------------------------------
     */

    console.log("--------------------------------------");
    console.log("Course enrollment seed completed");
    console.log(`Student       : ${student.email}`);
    console.log(`Course        : ${course.title}`);
    console.log(`Slug          : ${course.slug}`);
    console.log(`Enrollment    : ${enrollment.id}`);
    console.log(`CourseProgress: ${courseProgress.id}`);
    console.log(`Lessons       : ${lessons.length}`);
    console.log("--------------------------------------");
  }

  /*
   * ----------------------------------------------------------
   * FINAL SUMMARY
   * ----------------------------------------------------------
   */

  const enrollments = await prisma.enrollment.findMany({
    where: {
      userId: student.id,
    },

    include: {
      course: {
        select: {
          title: true,
          slug: true,
        },
      },
    },

    orderBy: {
      enrolledAt: "asc",
    },
  });

  console.log("");
  console.log("======================================");
  console.log("STUDENT ENROLLMENT SEED COMPLETED");
  console.log("======================================");
  console.log(`Student: ${student.email}`);

  for (const enrollment of enrollments) {
    console.log(`✓ ${enrollment.course.title} (${enrollment.course.slug})`);
  }

  console.log("======================================");
}

/* ============================================================
   MAIN SEED
   ============================================================ */

async function main() {
  console.log("======================================");
  console.log("Starting database seed...");
  console.log("======================================");

  /*
   * Use one timestamp for the complete seed operation.
   *
   * This keeps createdAt / updatedAt consistent
   * for records created during this execution.
   */

  const now = new Date();

  /*
   * ==========================================================
   * 1. COURSE MASTER DATA
   * ==========================================================
   */

  await seedCourseCategories(now);

  /*
   * ==========================================================
   * 2. BLOG MASTER DATA
   * ==========================================================
   */

  await seedBlogCategories(now);

  /*
   * ==========================================================
   * 3. COURSES
   * ==========================================================
   */

  await seedCourses(now);

  /*
   * ==========================================================
   * 4. MOCK EXAMS
   * ==========================================================
   */

  await seedMockExams(now);

  /*
   * ==========================================================
   * 5. BLOG POSTS
   * ==========================================================
   */

  await seedBlogPosts(now);

  /*
   * ==========================================================
   * 6. LOCATION MASTER DATA
   *
   * Country
   *    ↓
   * State
   *    ↓
   * City
   *    ↓
   * Postal Code
   * ==========================================================
   */

  await seedLocationData();

  /*
   * ==========================================================
   * 7. COUNTRY-SPECIFIC MOBILE VALIDATION
   *
   * IMPORTANT:
   * Countries must exist before mobile rules are applied.
   * ==========================================================
   */

  await seedCountryMobileValidationRules();

  /*
   * ==========================================================
   * 8. STUDENT ENROLLMENT + PROGRESS
   *
   * User
   *   ↓
   * Enrollment
   *   ↓
   * CourseProgress
   *   ↓
   * LessonProgress
   * ==========================================================
   */

  await seedStudentEnrollment();

  console.log("======================================");
  console.log("Database seed completed successfully");
  console.log("======================================");
}

/* ============================================================
   RUN SEED
   ============================================================ */

main()
  .catch((error) => {
    console.error("Seed failed:", error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
