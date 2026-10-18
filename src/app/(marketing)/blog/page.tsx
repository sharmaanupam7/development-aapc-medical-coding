//  code for other style blog page

// import Link from "next/link";
// import { Container } from "@/components/layout/container";
// import { FaArrowRight, FaCalendarAlt, FaBookMedical, FaUserMd } from "react-icons/fa";

// const blogPosts = [
//   {
//     id: 1,
//     title: "What Is Medical Coding and Why Is It Important?",
//     slug: "what-is-medical-coding",
//     excerpt:
//       "Learn how medical coding transforms healthcare documentation into standardized codes used for billing, reporting and healthcare operations.",
//     category: "Medical Coding",
//     date: "August 18, 2026",
//     author: "Development AAPC Medical Coding",
//     image: "/images/blog/medical-coding.jpg",
//   },
//   {
//     id: 2,
//     title: "CPC Certification: A Complete Guide for Beginners",
//     slug: "cpc-certification-guide",
//     excerpt:
//       "Discover what CPC certification is, who should pursue it and how proper preparation can help you build a successful medical coding career.",
//     category: "Certification",
//     date: "August 15, 2026",
//     author: "Development AAPC Medical Coding",
//     image: "/images/blog/cpc-certification.jpg",
//   },
//   {
//     id: 3,
//     title: "ICD-10-CM Coding: Understanding the Fundamentals",
//     slug: "icd-10-cm-coding-fundamentals",
//     excerpt:
//       "Understand the fundamentals of ICD-10-CM coding, diagnosis codes and the importance of accurate clinical documentation.",
//     category: "ICD-10-CM",
//     date: "August 12, 2026",
//     author: "Development AAPC Medical Coding",
//     image: "/images/blog/icd-coding.jpg",
//   },
//   {
//     id: 4,
//     title: "CPT Coding Explained for Medical Coding Students",
//     slug: "cpt-coding-explained",
//     excerpt:
//       "Explore the basics of CPT coding and understand how procedure and service codes are used in healthcare documentation.",
//     category: "CPT Coding",
//     date: "August 10, 2026",
//     author: "Development AAPC Medical Coding",
//     image: "/images/blog/cpt-coding.jpg",
//   },
//   {
//     id: 5,
//     title: "How to Start a Career in Medical Coding",
//     slug: "career-in-medical-coding",
//     excerpt:
//       "A practical guide for students and beginners who want to build a rewarding career in medical coding and healthcare administration.",
//     category: "Career",
//     date: "August 7, 2026",
//     author: "Development AAPC Medical Coding",
//     image: "/images/blog/medical-coding-career.jpg",
//   },
//   {
//     id: 6,
//     title: "Medical Coding Interview Preparation Tips",
//     slug: "medical-coding-interview-tips",
//     excerpt:
//       "Prepare for your medical coding interview with practical tips covering coding knowledge, communication and professional skills.",
//     category: "Career",
//     date: "August 5, 2026",
//     author: "Development AAPC Medical Coding",
//     image: "/images/blog/interview.jpg",
//   },
// ];

// export default function BlogPage() {
//   return (
//     <main className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-linear-to-br from-[#031522] via-[#062c3b] to-[#020617] py-24 text-white">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-teal-400 blur-3xl" />
//           <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
//         </div>

//         <Container>
//           <div className="relative mx-auto max-w-4xl text-center">
//             <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-teal-300">Medical Coding Insights</p>

//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Medical Coding Blog</h1>

//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
//               Explore practical insights, coding knowledge, certification guidance and career resources to help you grow
//               in the healthcare industry.
//             </p>
//           </div>
//         </Container>
//       </section>

//       {/* Blog Section */}
//       <section className="bg-slate-50 py-16 sm:py-20">
//         <Container>
//           {/* Section Heading */}
//           <div className="mx-auto mb-12 max-w-3xl text-center">
//             <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Latest Articles</p>

//             <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
//               Learn. Practice. Grow.
//             </h2>

//             <p className="mt-4 text-slate-600">
//               Stay updated with medical coding concepts, certification preparation, industry knowledge and career
//               guidance.
//             </p>
//           </div>

//           {/* Blog Grid */}
//           <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//             {blogPosts.map((post) => (
//               <article
//                 key={post.id}
//                 className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >
//                 {/* Image */}
//                 <div className="relative h-52 overflow-hidden bg-linear-to-br from-[#073b4c] to-[#0f766e]">
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <FaBookMedical className="text-6xl text-white/20" />
//                   </div>

//                   <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/50 to-transparent p-5">
//                     <span className="inline-flex rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white">
//                       {post.category}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   {/* Meta */}
//                   <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
//                     <span className="flex items-center gap-2">
//                       <FaCalendarAlt className="text-teal-600" />
//                       {post.date}
//                     </span>

//                     <span className="flex items-center gap-2">
//                       <FaUserMd className="text-teal-600" />
//                       AAPC
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="mt-4 text-xl font-bold leading-7 text-slate-950 transition-colors group-hover:text-teal-600">
//                     {post.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>

//                   {/* Read More */}
//                   <Link
//                     href={`/blog/${post.slug}`}
//                     className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-600 transition-all hover:gap-3"
//                   >
//                     Read More
//                     <FaArrowRight className="text-xs" />
//                   </Link>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </Container>
//       </section>

//       {/* CTA */}
//       <section className="relative overflow-hidden bg-linear-to-r from-[#032a3a] via-[#064e5b] to-[#063b46] py-16 text-white">
//         <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />

//         <Container>
//           <div className="relative mx-auto max-w-3xl text-center">
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Build Your Future</p>

//             <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to Start Your Medical Coding Journey?</h2>

//             <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
//               Explore our medical coding courses and develop the knowledge and practical skills required to advance your
//               healthcare career.
//             </p>

//             <Link
//               href="/courses"
//               className="mt-7 inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-teal-400"
//             >
//               Explore Courses
//               <FaArrowRight />
//             </Link>
//           </div>
//         </Container>
//       </section>
//     </main>
//   );
// }

// updated code

// import Image from "next/image";
// import Link from "next/link";

// import { FaArrowRight, FaCalendarAlt, FaClock, FaBookMedical, FaChevronRight } from "react-icons/fa";

// const blogPosts = [
//   {
//     id: 1,
//     title: "What Is Medical Coding and Why Is It Important?",
//     slug: "what-is-medical-coding",
//     excerpt:
//       "Learn the fundamentals of medical coding, why accurate coding matters, and how medical coders support healthcare organizations.",
//     category: "Medical Coding",
//     date: "August 19, 2026",
//     readTime: "5 min read",
//     image: "/images/blog/medical-coding.jpg",
//   },
//   {
//     id: 2,
//     title: "CPC Certification: A Complete Guide for Beginners",
//     slug: "cpc-certification-guide",
//     excerpt:
//       "Discover what the CPC certification involves, how to prepare for the examination, and what career opportunities it can provide.",
//     category: "CPC",
//     date: "August 15, 2026",
//     readTime: "7 min read",
//     image: "/images/blog/cpc-certification.jpg",
//   },
//   {
//     id: 3,
//     title: "Understanding ICD-10-CM Coding",
//     slug: "understanding-icd-10-cm-coding",
//     excerpt:
//       "Explore the fundamentals of ICD-10-CM coding and understand how diagnosis codes are used in healthcare documentation.",
//     category: "ICD-10-CM",
//     date: "August 12, 2026",
//     readTime: "6 min read",
//     image: "/images/blog/icd-10-cm.jpg",
//   },
//   {
//     id: 4,
//     title: "CPT Coding Guidelines Every Beginner Should Know",
//     slug: "cpt-coding-guidelines",
//     excerpt: "Understand important CPT coding concepts and guidelines that every aspiring medical coder should learn.",
//     category: "CPT",
//     date: "August 10, 2026",
//     readTime: "6 min read",
//     image: "/images/blog/cpt-coding.jpg",
//   },
//   {
//     id: 5,
//     title: "Medical Coding Career Opportunities in 2026",
//     slug: "medical-coding-career-opportunities",
//     excerpt:
//       "Explore career opportunities in medical coding and discover the skills that can help you build a successful career.",
//     category: "Career",
//     date: "August 7, 2026",
//     readTime: "5 min read",
//     image: "/images/blog/medical-coding-career.jpg",
//   },
//   {
//     id: 6,
//     title: "How to Prepare for Your Medical Coding Exam",
//     slug: "medical-coding-exam-preparation",
//     excerpt:
//       "Practical preparation strategies, study techniques, and useful tips for students preparing for medical coding certification exams.",
//     category: "Exam Preparation",
//     date: "August 4, 2026",
//     readTime: "8 min read",
//     image: "/images/blog/exam-preparation.jpg",
//   },
// ];

// export default function BlogPage() {
//   const featuredPost = blogPosts[0];
//   const remainingPosts = blogPosts.slice(1);

//   return (
//     <main className="min-h-screen bg-white">
//       {/* =========================================================
//           HERO SECTION
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-linear-to-r from-[#03152f] via-[#06294a] to-[#009c9a]">
//         {/* Decorative background */}
//         <div className="absolute inset-0">
//           <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full border border-teal-300/20" />

//           <div className="absolute -right-20 top-0 h-72 w-72 rounded-full border border-teal-200/20" />

//           <div
//             className="absolute inset-0 opacity-20"
//             style={{
//               backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
//               backgroundSize: "24px 24px",
//             }}
//           />

//           <div className="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-teal-400/20 to-transparent" />
//         </div>

//         <div className="relative mx-auto flex min-h-90 max-w-7xl items-center justify-center px-6 py-20 text-center">
//           <div>
//             <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-teal-300">Blog</p>

//             <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
//               Medical Coding Insights
//             </h1>

//             <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
//               Practical insights, coding knowledge, career guidance and educational resources for aspiring and
//               professional medical coders
//             </p>

//             {/* Breadcrumb
//             <div className="mt-7 flex items-center justify-center gap-2 text-sm">
//               <Link href="/" className="text-white transition hover:text-teal-300">
//                 Home
//               </Link>

//               <FaChevronRight className="text-xs text-teal-300" />

//               <span className="font-medium text-teal-300">Blog</span>
//             </div> */}
//           </div>
//         </div>
//       </section>

//       {/* =========================================================
//           BLOG CONTENT
//       ========================================================= */}
//       <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">
//         {/* Background decoration */}
//         <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

//         <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

//         <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
//           {/* Section heading */}
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-700">Our Latest Articles</p>

//             <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#071d49] sm:text-4xl">
//               Learn Practice Grow
//             </h2>

//             <p className="mt-4 text-base leading-7 text-slate-600">
//               Stay informed with useful medical coding knowledge, certification guidance, exam preparation tips and
//               career insights
//             </p>

//             <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-linear-to-r from-teal-500 to-cyan-400" />
//           </div>

//           {/* =======================================================
//               FEATURED POST
//           ======================================================= */}
//           <div className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
//             <div className="grid lg:grid-cols-2">
//               {/* Image */}
//               <div className="relative min-h-80 lg:min-h-107.5">
//                 <Image
//                   src={featuredPost.image}
//                   alt={featuredPost.title}
//                   fill
//                   priority
//                   className="object-cover transition duration-700 hover:scale-105"
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                 />

//                 <div className="absolute inset-0 bg-linear-to-t from-[#03152f]/70 via-transparent to-transparent" />

//                 <div className="absolute bottom-6 left-6">
//                   <span className="rounded-full bg-teal-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
//                     Featured Article
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
//                 <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
//                   <span className="rounded-full bg-teal-50 px-3 py-1.5 text-teal-700">{featuredPost.category}</span>

//                   <span className="flex items-center gap-1.5">
//                     <FaCalendarAlt className="text-teal-600" />
//                     {featuredPost.date}
//                   </span>
//                 </div>

//                 <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#071d49] sm:text-4xl">
//                   {featuredPost.title}
//                 </h2>

//                 <p className="mt-5 leading-7 text-slate-600">{featuredPost.excerpt}</p>

//                 <div className="mt-6 flex items-center gap-2 text-sm text-slate-500">
//                   <FaClock className="text-teal-600" />
//                   {featuredPost.readTime}
//                 </div>

//                 <Link
//                   href={`/blog/${featuredPost.slug}`}
//                   className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-linear-to-r from-[#008f91] to-[#087d9a] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   Read Featured Article
//                   <FaArrowRight className="text-xs" />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* =======================================================
//               BLOG GRID
//           ======================================================= */}
//           <div className="mt-16">
//             <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//               <div>
//                 <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">Explore</p>

//                 <h2 className="mt-2 text-3xl font-extrabold text-[#071d49]">Latest Articles</h2>
//               </div>

//               <div className="hidden h-1 w-20 rounded-full bg-linear-to-r from-teal-500 to-cyan-400 sm:block" />
//             </div>

//             <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//               {remainingPosts.map((post) => (
//                 <article
//                   key={post.id}
//                   className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-teal-200 hover:shadow-xl"
//                 >
//                   {/* Image */}
//                   <Link href={`/blog/${post.slug}`} className="block">
//                     <div className="relative aspect-16/10 overflow-hidden">
//                       <Image
//                         src={post.image}
//                         alt={post.title}
//                         fill
//                         className="object-cover transition duration-700 group-hover:scale-110"
//                         sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       />

//                       <div className="absolute inset-0 bg-linear-to-t from-[#03152f]/50 via-transparent to-transparent opacity-70" />

//                       <div className="absolute left-4 top-4">
//                         <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-teal-700 shadow-sm">
//                           {post.category}
//                         </span>
//                       </div>
//                     </div>
//                   </Link>

//                   {/* Content */}
//                   <div className="p-6">
//                     <div className="flex items-center gap-3 text-xs text-slate-500">
//                       <span className="flex items-center gap-1.5">
//                         <FaCalendarAlt className="text-teal-600" />
//                         {post.date}
//                       </span>

//                       <span className="h-1 w-1 rounded-full bg-slate-300" />

//                       <span className="flex items-center gap-1.5">
//                         <FaClock className="text-teal-600" />
//                         {post.readTime}
//                       </span>
//                     </div>

//                     <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-7 text-[#071d49] transition-colors group-hover:text-teal-700">
//                       {post.title}
//                     </h3>

//                     <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>

//                     <Link
//                       href={`/blog/${post.slug}`}
//                       className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-700 transition-all hover:gap-3 hover:text-teal-900"
//                     >
//                       Read More
//                       <FaArrowRight className="text-xs" />
//                     </Link>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>

//           {/* =======================================================
//               BLOG CTA
//           ======================================================= */}
//           <div className="mt-16 overflow-hidden rounded-3xl bg-linear-to-r from-[#03152f] via-[#07345b] to-[#008f91] shadow-xl">
//             <div className="relative px-7 py-12 text-center sm:px-12">
//               <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-teal-400/10 blur-2xl" />

//               <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl" />

//               <div className="relative">
//                 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-2xl text-teal-300">
//                   <FaBookMedical />
//                 </div>

//                 <h2 className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
//                   Build Your Medical Coding Knowledge
//                 </h2>

//                 <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
//                   Explore our medical coding courses and start building the knowledge and skills you need for your
//                   professional journey.
//                 </p>

//                 <Link
//                   href="/courses"
//                   className="mt-7 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-[#071d49] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-teal-50"
//                 >
//                   Explore Courses
//                   <FaArrowRight className="text-teal-700" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

//////////////////////////////

// import Link from "next/link";
// import { Container } from "@/components/layout/container";
// import { FaArrowRight, FaCalendarAlt, FaBookMedical, FaUserMd } from "react-icons/fa";

// import { prisma } from "@/lib/prisma";

// export default async function BlogPage() {
//   const posts = await prisma.blogPost.findMany({
//     where: {
//       status: "PUBLISHED",
//     },
//     orderBy: {
//       publishedAt: "desc",
//     },
//     include: {
//       category: {
//         select: {
//           name: true,
//           slug: true,
//         },
//       },
//     },
//   });

//   const featuredPost = posts.find((post) => post.isFeatured) ?? posts[0];

//   const remainingPosts = featuredPost ? posts.filter((post) => post.id !== featuredPost.id) : [];

//   return (
//     <main className="min-h-screen bg-white">
//       {/* HERO */}
//       <section className="relative overflow-hidden bg-linear-to-br from-[#031522] via-[#062c3b] to-[#020617] py-24 text-white">
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-teal-400 blur-3xl" />
//           <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
//         </div>

//         <Container>
//           <div className="relative mx-auto max-w-4xl text-center">
//             <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-teal-300">Medical Coding Insights</p>

//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Medical Coding Blog</h1>

//             <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
//               Explore practical insights, coding knowledge, certification guidance and career resources to help you grow
//               in healthcare.
//             </p>
//           </div>
//         </Container>
//       </section>

//       {/* BLOG */}
//       <section className="bg-slate-50 py-16 sm:py-20">
//         <Container>
//           <div className="mx-auto mb-12 max-w-3xl text-center">
//             <p className="text-sm font-bold uppercase tracking-wider text-teal-600">Latest Articles</p>

//             <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">Learn. Practice. Grow.</h2>

//             <p className="mt-4 text-slate-600">
//               Stay updated with medical coding concepts, certification preparation, industry knowledge and career
//               guidance.
//             </p>
//           </div>

//           {posts.length === 0 ? (
//             <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center">
//               <FaBookMedical className="mx-auto text-4xl text-teal-500" />

//               <h2 className="mt-4 text-xl font-bold text-slate-950">No articles available</h2>

//               <p className="mt-2 text-slate-500">Please check back soon for new articles.</p>
//             </div>
//           ) : (
//             <>
//               {/* FEATURED */}
//               {featuredPost && (
//                 <div className="mb-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
//                   <div className="grid lg:grid-cols-2">
//                     <div className="relative flex min-h-82.5 items-center justify-center bg-linear-to-br from-[#063b4c] to-[#008f91]">
//                       <FaBookMedical className="text-8xl text-white/20" />

//                       <div className="absolute left-6 top-6">
//                         <span className="rounded-full bg-teal-500 px-4 py-2 text-xs font-bold text-white">
//                           Featured Article
//                         </span>
//                       </div>
//                     </div>

//                     <div className="flex flex-col justify-center p-8 sm:p-10">
//                       <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
//                         {featuredPost.category && (
//                           <span className="rounded-full bg-teal-50 px-3 py-1.5 font-semibold text-teal-700">
//                             {featuredPost.category.name}
//                           </span>
//                         )}

//                         {featuredPost.publishedAt && (
//                           <span className="flex items-center gap-2">
//                             <FaCalendarAlt className="text-teal-600" />
//                             {featuredPost.publishedAt.toLocaleDateString("en-IN", {
//                               day: "numeric",
//                               month: "long",
//                               year: "numeric",
//                             })}
//                           </span>
//                         )}
//                       </div>

//                       <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-950">
//                         {featuredPost.title}
//                       </h2>

//                       <p className="mt-4 leading-7 text-slate-600">{featuredPost.excerpt}</p>

//                       <Link
//                         href={`/blog/${featuredPost.slug}`}
//                         className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
//                       >
//                         Read Article
//                         <FaArrowRight className="text-xs" />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* GRID */}
//               <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
//                 {remainingPosts.map((post) => (
//                   <article
//                     key={post.id}
//                     className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//                   >
//                     <div className="relative flex h-52 items-center justify-center bg-linear-to-br from-[#073b4c] to-[#0f766e]">
//                       <FaBookMedical className="text-6xl text-white/20" />

//                       <div className="absolute bottom-4 left-4">
//                         {post.category && (
//                           <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-teal-700">
//                             {post.category.name}
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="p-6">
//                       <div className="flex items-center gap-2 text-xs text-slate-500">
//                         <FaCalendarAlt className="text-teal-600" />

//                         {post.publishedAt
//                           ? post.publishedAt.toLocaleDateString("en-IN", {
//                               day: "numeric",
//                               month: "short",
//                               year: "numeric",
//                             })
//                           : "Coming soon"}
//                       </div>

//                       <h3 className="mt-4 text-xl font-bold leading-7 text-slate-950 transition-colors group-hover:text-teal-600">
//                         {post.title}
//                       </h3>

//                       <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>

//                       <Link
//                         href={`/blog/${post.slug}`}
//                         className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-600 transition-all hover:gap-3"
//                       >
//                         Read More
//                         <FaArrowRight className="text-xs" />
//                       </Link>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </>
//           )}
//         </Container>
//       </section>

//       {/* CTA */}
//       <section className="bg-linear-to-r from-[#032a3a] via-[#064e5b] to-[#063b46] py-16 text-white">
//         <Container>
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Build Your Future</p>

//             <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to Start Your Medical Coding Journey?</h2>

//             <p className="mt-4 leading-7 text-slate-300">
//               Explore our medical coding courses and develop the knowledge and practical skills required to advance your
//               healthcare career.
//             </p>

//             <Link
//               href="/courses"
//               className="mt-7 inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-teal-400"
//             >
//               Explore Courses
//               <FaArrowRight />
//             </Link>
//           </div>
//         </Container>
//       </section>
//     </main>
//   );
// }

// ******************************************************************************************************************8 //

import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaBookMedical, FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

import { Container } from "@/components/layout/container";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Development AAPC Medical Coding",
  description: "It contains all blogs related to Development AAPC Medical Coding",
  icons: {
    icon: "/images/icons/blog_icon.png",
  },
};

const POSTS_PER_PAGE = 4;

interface BlogPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;

  const categorySlug = params.category?.trim() || "";
  const searchTerm = params.search?.trim() || "";

  const parsedPage = Number.parseInt(params.page ?? "1", 10);
  const currentPage = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1;

  /*
   * Get active blog categories
   */
  const categories = await prisma.blogcategory.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      name: true,
      slug: true,
    },
    orderBy: {
      name: "asc",
    },
  });

  /*
   * Build database filter
   */
  const where = {
    status: "PUBLISHED" as const,

    ...(categorySlug
      ? {
          category: {
            slug: categorySlug,
            isActive: true,
          },
        }
      : {}),

    ...(searchTerm
      ? {
          OR: [
            {
              title: {
                contains: searchTerm,
              },
            },
            {
              excerpt: {
                contains: searchTerm,
              },
            },
            {
              content: {
                contains: searchTerm,
              },
            },
          ],
        }
      : {}),
  };

  /*
   * Count matching posts
   */
  const totalPosts = await prisma.blogpost.count({
    where,
  });

  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE));

  /*
   * Prevent invalid pages
   */
  const safePage = Math.min(currentPage, totalPages);
  const skip = (safePage - 1) * POSTS_PER_PAGE;

  /*
   * Get posts for current page
   */
  const posts = await prisma.blogpost.findMany({
    where,
    orderBy: [
      {
        publishedAt: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
    skip,
    take: POSTS_PER_PAGE,
    include: {
      blogcategory: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });

  /*
   * Featured post only appears on the first page
   */
  const featuredPost =
    safePage === 1 && !searchTerm && !categorySlug ? posts.find((post) => post.isFeatured) : undefined;

  const displayedPosts = featuredPost ? posts.filter((post) => post.id !== featuredPost.id) : posts;

  /*
   * Helper for pagination/filter URLs
   */
  function buildUrl(page: number) {
    const query = new URLSearchParams();

    if (categorySlug) {
      query.set("category", categorySlug);
    }

    if (searchTerm) {
      query.set("search", searchTerm);
    }

    if (page > 1) {
      query.set("page", String(page));
    }

    const queryString = query.toString();

    return queryString ? `/blog?${queryString}` : "/blog";
  }

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container>
          <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">
                Medical Coding Insights
              </p>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Medical Coding Blog</h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Explore practical insights, coding knowledge, certification guidance and career resources to help you
                grow in healthcare
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          BLOG CONTENT
      ====================================================== */}

      <section className="bg-slate-50 py-14 sm:py-20">
        <Container>
          {/* SEARCH */}
          <div className="mx-auto max-w-2xl">
            <form action="/blog" method="GET" className="flex flex-col gap-3 sm:flex-row">
              {categorySlug && <input type="hidden" name="category" value={categorySlug} />}

              <div className="relative flex-1">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="search"
                  name="search"
                  defaultValue={searchTerm}
                  placeholder="Search medical coding articles..."
                  className="h-10 w-full rounded border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              <button
                type="submit"
                className="h-10 rounded bg-teal-600 px-7 text-sm font-bold text-white transition hover:cursor-pointer hover:bg-teal-700"
              >
                Search
              </button>
            </form>
          </div>

          {/* CATEGORY FILTER */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Link
              href={searchTerm ? `/blog?search=${encodeURIComponent(searchTerm)}` : "/blog"}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                !categorySlug
                  ? "bg-teal-600 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-teal-50 hover:text-teal-700"
              }`}
            >
              All Articles
            </Link>

            {categories.map((category) => {
              const query = new URLSearchParams();

              query.set("category", category.slug);

              if (searchTerm) {
                query.set("search", searchTerm);
              }

              return (
                <Link
                  key={category.id}
                  href={`/blog?${query.toString()}`}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    categorySlug === category.slug
                      ? "bg-teal-600 text-white"
                      : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-teal-50 hover:text-teal-700"
                  }`}
                >
                  {category.name}
                </Link>
              );
            })}
          </div>

          {/* ACTIVE FILTER */}
          {(searchTerm || categorySlug) && (
            <div className="mx-auto mt-8 max-w-5xl rounded-xl border border-teal-100 bg-teal-50 px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm text-slate-600">
                  Showing results
                  {searchTerm && (
                    <>
                      {" "}
                      for <strong className="text-slate-900">&quot;{searchTerm}&quot;</strong>
                    </>
                  )}
                  {categorySlug && (
                    <>
                      {" "}
                      in{" "}
                      <strong className="text-slate-900">
                        {categories.find((category) => category.slug === categorySlug)?.name ?? categorySlug}
                      </strong>
                    </>
                  )}
                </div>

                <Link href="/blog" className="text-sm font-bold text-teal-700 hover:text-teal-800">
                  Clear Filters
                </Link>
              </div>
            </div>
          )}

          {/* =================================================
              FEATURED ARTICLE
          ================================================== */}

          {featuredPost && (
            <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="relative flex min-h-82.5 items-center justify-center bg-linear-to-br from-[#063b4c] to-[#008f91]">
                  <FaBookMedical className="text-8xl text-white/20" />

                  <div className="absolute left-6 top-6">
                    <span className="rounded-full bg-teal-500 px-4 py-2 text-xs font-bold text-white">
                      Featured Article
                    </span>
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    {featuredPost.blogcategory && (
                      <span className="rounded-full bg-teal-50 px-3 py-1.5 font-semibold text-teal-700">
                        {featuredPost.blogcategory.name}
                      </span>
                    )}

                    {featuredPost.publishedAt && (
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-teal-600" />

                        {featuredPost.publishedAt.toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-5 text-3xl font-extrabold leading-tight text-slate-950">{featuredPost.title}</h2>

                  {featuredPost.excerpt && <p className="mt-4 leading-7 text-slate-600">{featuredPost.excerpt}</p>}

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded bg-teal-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* =================================================
              POSTS GRID
          ================================================== */}

          {displayedPosts.length > 0 ? (
            <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
              {displayedPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative flex h-52 shrink-0 items-center justify-center overflow-hidden bg-linear-to-br from-[#073b4c] to-[#0f766e]">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        width={600}
                        height={400}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <FaBookMedical className="text-6xl text-white/20" />
                    )}

                    {post.blogcategory && (
                      <div className="absolute bottom-4 left-4">
                        <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-teal-700 shadow-sm">
                          {post.blogcategory.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Publication date */}
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <FaCalendarAlt className="shrink-0 text-teal-600" />

                      {post.publishedAt
                        ? post.publishedAt.toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "Coming soon"}
                    </div>

                    {/* Article title */}
                    <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-7 text-slate-950 transition-colors group-hover:text-teal-600">
                      {post.title}
                    </h3>

                    {/* Article description */}
                    {post.excerpt && (
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                    )}

                    {/* Read More: aligned at the bottom */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-teal-600 transition-all hover:gap-3"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* NO RESULTS */
            <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <FaBookMedical className="mx-auto text-5xl text-teal-500/40" />

              <h2 className="mt-5 text-2xl font-bold text-slate-950">No Articles Found</h2>

              <p className="mt-3 text-slate-500">
                We couldn&apos;t find any articles matching your search or selected category.
              </p>

              <Link
                href="/blog"
                className="mt-6 inline-flex rounded-lg bg-teal-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
              >
                View All Articles
              </Link>
            </div>
          )}

          {/* =================================================
              PAGINATION
          ================================================== */}

          {totalPages > 1 && (
            <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
              {/* Previous */}
              {safePage > 1 ? (
                <Link
                  href={buildUrl(safePage - 1)}
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
                >
                  <FaChevronLeft className="text-xs" />
                  Previous
                </Link>
              ) : (
                <span className="inline-flex h-10 cursor-not-allowed items-center gap-2 rounded-lg border border-slate-100 bg-slate-100 px-4 text-sm font-semibold text-slate-400">
                  <FaChevronLeft className="text-xs" />
                  Previous
                </span>
              )}

              {/* Page numbers */}
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
                  const isCurrent = page === safePage;

                  return (
                    <Link
                      key={page}
                      href={buildUrl(page)}
                      className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-bold transition ${
                        isCurrent
                          ? "bg-teal-600 text-white"
                          : "border border-slate-200 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-600"
                      }`}
                    >
                      {page}
                    </Link>
                  );
                })}
              </div>

              {/* Next */}
              {safePage < totalPages ? (
                <Link
                  href={buildUrl(safePage + 1)}
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-600"
                >
                  Next
                  <FaChevronRight className="text-xs" />
                </Link>
              ) : (
                <span className="inline-flex h-10 cursor-not-allowed items-center gap-2 rounded-lg border border-slate-100 bg-slate-100 px-4 text-sm font-semibold text-slate-400">
                  Next
                  <FaChevronRight className="text-xs" />
                </span>
              )}
            </div>
          )}

          {/* Result count */}
          {totalPosts > 0 && (
            <p className="mt-5 text-center text-sm text-slate-500">
              Showing <span className="font-semibold text-slate-700">{skip + 1}</span>
              {" - "}
              <span className="font-semibold text-slate-700">{Math.min(skip + POSTS_PER_PAGE, totalPosts)}</span>
              {" of "}
              <span className="font-semibold text-slate-700">{totalPosts}</span>
              {" articles"}
            </p>
          )}
        </Container>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="bg-linear-to-r from-[#032a3a] via-[#064e5b] to-[#063b46] py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Build Your Future</p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Ready to Start Your Medical Coding Journey?</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Explore our medical coding courses and develop the knowledge and practical skills required to advance your
              healthcare career.
            </p>

            <Link
              href="/courses"
              className="mt-7 inline-flex items-center gap-2 rounded bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-teal-400"
            >
              Explore Courses
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
