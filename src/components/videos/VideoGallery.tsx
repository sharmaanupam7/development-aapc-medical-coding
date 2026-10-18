// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import { BookOpen, ChevronRight, Clock3, Play, Search, Sparkles, Stethoscope, Video } from "lucide-react";
// import { Container } from "@/components/layout/container";

// type VideoItem = {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   duration: string;
//   level: string;
//   featured?: boolean;
//   videoUrl: string;
// };

// const categories = ["All Videos", "Medical Coding", "CPT", "ICD-10-CM", "HCPCS", "Beginner"];

// const videos: VideoItem[] = [
//   {
//     id: 1,
//     title: "Introduction to Medical Coding",
//     description:
//       "Understand the fundamentals of medical coding and how coding is used in the healthcare revenue cycle.",
//     category: "Medical Coding",
//     duration: "12 min",
//     level: "Beginner",
//     featured: true,
//     videoUrl: "/videos/introduction-to-medical-coding",
//   },
//   {
//     id: 2,
//     title: "Medical Coding Basics for Beginners",
//     description: "A simple introduction to medical coding concepts, terminology and coding workflow.",
//     category: "Beginner",
//     duration: "18 min",
//     level: "Beginner",
//     videoUrl: "/videos/medical-coding-basics",
//   },
//   {
//     id: 3,
//     title: "Understanding CPT Coding",
//     description: "Learn the basics of CPT coding and understand how procedure and service codes are assigned.",
//     category: "CPT",
//     duration: "22 min",
//     level: "Intermediate",
//     videoUrl: "/videos/cpt-coding-basics",
//   },
//   {
//     id: 4,
//     title: "ICD-10-CM Coding Fundamentals",
//     description: "Learn the foundation of ICD-10-CM diagnosis coding and understand the coding structure.",
//     category: "ICD-10-CM",
//     duration: "20 min",
//     level: "Beginner",
//     videoUrl: "/videos/icd10-cm-fundamentals",
//   },
//   {
//     id: 5,
//     title: "HCPCS Coding Explained",
//     description: "Understand HCPCS coding and its role in healthcare claims and reimbursement.",
//     category: "HCPCS",
//     duration: "16 min",
//     level: "Intermediate",
//     videoUrl: "/videos/hcpcs-coding",
//   },
//   {
//     id: 6,
//     title: "Medical Terminology for Coders",
//     description: "Build your medical terminology knowledge and improve your understanding of clinical documentation.",
//     category: "Beginner",
//     duration: "25 min",
//     level: "Beginner",
//     videoUrl: "/videos/medical-terminology",
//   },
//   {
//     id: 7,
//     title: "ICD-10-CM Guidelines",
//     description: "Explore important ICD-10-CM coding guidelines that every medical coder should understand.",
//     category: "ICD-10-CM",
//     duration: "24 min",
//     level: "Intermediate",
//     videoUrl: "/videos/icd10-guidelines",
//   },
//   {
//     id: 8,
//     title: "CPT Modifiers Explained",
//     description: "Learn how CPT modifiers are used and understand common modifier concepts.",
//     category: "CPT",
//     duration: "19 min",
//     level: "Intermediate",
//     videoUrl: "/videos/cpt-modifiers",
//   },
// ];

// export default function VideosPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All Videos");

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredVideos = useMemo(() => {
//     return videos.filter((video) => {
//       const matchesCategory = selectedCategory === "All Videos" || video.category === selectedCategory;

//       const search = searchTerm.toLowerCase().trim();

//       const matchesSearch =
//         !search ||
//         video.title.toLowerCase().includes(search) ||
//         video.description.toLowerCase().includes(search) ||
//         video.category.toLowerCase().includes(search);

//       return matchesCategory && matchesSearch;
//     });
//   }, [selectedCategory, searchTerm]);

//   const featuredVideo = videos.find((video) => video.featured) ?? videos[0];

//   return (
//     <main className="min-h-screen bg-white">
//       {/* =====================================================
//           HERO
//       ===================================================== */}
//       <section className="relative overflow-hidden bg-slate-950">
//         {/* Background decorative elements */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

//         <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
//         <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

//         <Container>
//           <div className="relative flex min-h-65 items-center justify-center py-16 text-center">
//             <div>
//               <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-teal-400">Learning Library</p>

//               <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Medical Coding Videos</h1>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* =====================================================
//           QUICK ACCESS
//       ===================================================== */}
//       <section className="border-b border-slate-100 bg-white">
//         <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
//           <div className="grid gap-4 sm:grid-cols-3">
//             <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
//                 <Video className="h-5 w-5" />
//               </div>

//               <div>
//                 <p className="text-lg font-bold text-[#173b62]">{videos.length}+</p>

//                 <p className="text-xs text-slate-500">Learning Videos</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
//                 <BookOpen className="h-5 w-5" />
//               </div>

//               <div>
//                 <p className="text-lg font-bold text-[#173b62]">5+</p>

//                 <p className="text-xs text-slate-500">Learning Categories</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//               <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
//                 <Stethoscope className="h-5 w-5" />
//               </div>

//               <div>
//                 <p className="text-lg font-bold text-[#173b62]">Beginner Friendly</p>

//                 <p className="text-xs text-slate-500">Easy-to-follow lessons</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FEATURED VIDEO
//       ===================================================== */}
//       <section className="bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-6xl">
//           <div className="mb-6">
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">Start Here</p>

//             <h2 className="mt-1 text-2xl font-bold text-[#173b62]">Featured Medical Coding Video</h2>

//             <div className="mt-3 h-1 w-12 rounded-full bg-teal-500" />
//           </div>

//           <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-[1.1fr_1fr]">
//             {/* Video Preview */}
//             <div className="relative flex min-h-65 items-center justify-center overflow-hidden bg-[#173b62] sm:min-h-80">
//               {/* Background pattern */}
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute left-10 top-10 h-40 w-40 rounded-full border-30 border-teal-300" />
//                 <div className="absolute bottom-12.5right-5 h-64 w-64 rounded-full border-40 border-cyan-300" />
//               </div>

//               <div className="relative text-center">
//                 <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl shadow-teal-900/30 transition hover:scale-105">
//                   <Play className="ml-1 h-8 w-8 fill-current" />
//                 </div>

//                 <p className="mt-4 text-xs font-medium uppercase tracking-wider text-teal-200">Featured Lesson</p>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="flex flex-col justify-center p-6 sm:p-8">
//               <span className="w-fit rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
//                 {featuredVideo.category}
//               </span>

//               <h3 className="mt-4 text-xl font-bold leading-7 text-[#173b62] sm:text-2xl">{featuredVideo.title}</h3>

//               <p className="mt-3 text-sm leading-6 text-slate-500">{featuredVideo.description}</p>

//               <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-slate-500">
//                 <span className="flex items-center gap-1.5">
//                   <Clock3 className="h-4 w-4 text-teal-600" />
//                   {featuredVideo.duration}
//                 </span>

//                 <span className="rounded-full bg-slate-100 px-3 py-1">{featuredVideo.level}</span>
//               </div>

//               <Link
//                 href={featuredVideo.videoUrl}
//                 className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
//               >
//                 <Play className="h-4 w-4 fill-current" />
//                 Watch Video
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           VIDEO LIBRARY
//       ===================================================== */}
//       <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-6xl">
//           {/* Heading */}
//           <div className="text-center">
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">Video Library</p>

//             <h2 className="mt-2 text-2xl font-bold text-[#173b62] sm:text-3xl">Learn Medical Coding</h2>

//             <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
//               Select a topic or search for a specific medical coding lesson.
//             </p>

//             <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-teal-500" />
//           </div>

//           {/* Search */}
//           <div className="mx-auto mt-8 max-w-2xl">
//             <div className="relative">
//               <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(event) => setSearchTerm(event.target.value)}
//                 placeholder="Search medical coding videos..."
//                 className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
//               />
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="mt-6 flex flex-wrap justify-center gap-2">
//             {categories.map((category) => {
//               const active = selectedCategory === category;

//               return (
//                 <button
//                   key={category}
//                   type="button"
//                   onClick={() => setSelectedCategory(category)}
//                   className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
//                     active
//                       ? "bg-teal-600 text-white shadow-sm"
//                       : "border border-slate-200 bg-white text-slate-600 hover:border-teal-400 hover:text-teal-600"
//                   }`}
//                 >
//                   {category}
//                 </button>
//               );
//             })}
//           </div>

//           {/* Results */}
//           <div className="mt-10">
//             {filteredVideos.length > 0 ? (
//               <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
//                 {filteredVideos.map((video) => (
//                   <article
//                     key={video.id}
//                     className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                   >
//                     {/* Thumbnail */}
//                     <div className="relative flex h-44 items-center justify-center overflow-hidden bg-[#173b62]">
//                       {/* Decorative circles */}
//                       <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-teal-400/10" />

//                       <div className="absolute -bottom-10 -right-5 h-36 w-36 rounded-full bg-cyan-400/10" />

//                       <div className="absolute inset-0 bg-linear-to-br from-[#173b62] via-[#164e63] to-teal-700 opacity-80" />

//                       <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-teal-600 shadow-lg transition duration-300 group-hover:scale-110">
//                         <Play className="ml-0.5 h-6 w-6 fill-current" />
//                       </div>

//                       {/* Duration */}
//                       <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-[10px] font-semibold text-white">
//                         {video.duration}
//                       </span>

//                       {/* Category */}
//                       <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold text-teal-700">
//                         {video.category}
//                       </span>
//                     </div>

//                     {/* Content */}
//                     <div className="p-5">
//                       <div className="flex items-center justify-between gap-3">
//                         <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-600">
//                           Medical Coding
//                         </span>

//                         <span className="text-[10px] text-slate-400">{video.level}</span>
//                       </div>

//                       <h3 className="mt-2 text-base font-bold leading-6 text-[#173b62]">{video.title}</h3>

//                       <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-500">{video.description}</p>

//                       <Link
//                         href={video.videoUrl}
//                         className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 transition hover:text-teal-700"
//                       >
//                         Watch Now
//                         <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </Link>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             ) : (
//               /* Empty State */
//               <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
//                 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
//                   <Search className="h-6 w-6" />
//                 </div>

//                 <h3 className="mt-4 text-lg font-bold text-[#173b62]">No videos found</h3>

//                 <p className="mt-2 text-sm text-slate-500">Try another search term or select a different category.</p>

//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchTerm("");
//                     setSelectedCategory("All Videos");
//                   }}
//                   className="mt-5 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
//                 >
//                   Clear Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}
//       <section className="bg-[#173b62] px-4 py-12 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-4xl text-center">
//           <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
//             <Video className="h-6 w-6" />
//           </div>

//           <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Keep Learning. Keep Growing.</h2>

//           <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
//             Explore our medical coding training programs and take your learning beyond videos with structured
//             professional training.
//           </p>

//           <div className="mt-6 flex flex-wrap justify-center gap-3">
//             <Link
//               href="/training/medical-coding"
//               className="inline-flex items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-400"
//             >
//               Explore Medical Coding
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// updated code with responsiveness

// "use client";

// import Link from "next/link";
// import { useMemo, useState } from "react";
// import { BookOpen, ChevronRight, Clock3, Play, Search, Sparkles, Stethoscope, Video } from "lucide-react";
// import { Container } from "@/components/layout/container";

// type VideoItem = {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   duration: string;
//   level: string;
//   featured?: boolean;
//   videoUrl: string;
// };

// const categories = ["All Videos", "Medical Coding", "CPT", "ICD-10-CM", "HCPCS", "Beginner"];

// const videos: VideoItem[] = [
//   {
//     id: 1,
//     title: "Introduction to Medical Coding",
//     description:
//       "Understand the fundamentals of medical coding and how coding is used in the healthcare revenue cycle.",
//     category: "Medical Coding",
//     duration: "12 min",
//     level: "Beginner",
//     featured: true,
//     videoUrl: "/videos/introduction-to-medical-coding",
//   },
//   {
//     id: 2,
//     title: "Medical Coding Basics for Beginners",
//     description: "A simple introduction to medical coding concepts, terminology and coding workflow.",
//     category: "Beginner",
//     duration: "18 min",
//     level: "Beginner",
//     videoUrl: "/videos/medical-coding-basics",
//   },
//   {
//     id: 3,
//     title: "Understanding CPT Coding",
//     description: "Learn the basics of CPT coding and understand how procedure and service codes are assigned.",
//     category: "CPT",
//     duration: "22 min",
//     level: "Intermediate",
//     videoUrl: "/videos/cpt-coding-basics",
//   },
//   {
//     id: 4,
//     title: "ICD-10-CM Coding Fundamentals",
//     description: "Learn the foundation of ICD-10-CM diagnosis coding and understand the coding structure.",
//     category: "ICD-10-CM",
//     duration: "20 min",
//     level: "Beginner",
//     videoUrl: "/videos/icd10-cm-fundamentals",
//   },
//   {
//     id: 5,
//     title: "HCPCS Coding Explained",
//     description: "Understand HCPCS coding and its role in healthcare claims and reimbursement.",
//     category: "HCPCS",
//     duration: "16 min",
//     level: "Intermediate",
//     videoUrl: "/videos/hcpcs-coding",
//   },
//   {
//     id: 6,
//     title: "Medical Terminology for Coders",
//     description: "Build your medical terminology knowledge and improve your understanding of clinical documentation.",
//     category: "Beginner",
//     duration: "25 min",
//     level: "Beginner",
//     videoUrl: "/videos/medical-terminology",
//   },
//   {
//     id: 7,
//     title: "ICD-10-CM Guidelines",
//     description: "Explore important ICD-10-CM coding guidelines that every medical coder should understand.",
//     category: "ICD-10-CM",
//     duration: "24 min",
//     level: "Intermediate",
//     videoUrl: "/videos/icd10-guidelines",
//   },
//   {
//     id: 8,
//     title: "CPT Modifiers Explained",
//     description: "Learn how CPT modifiers are used and understand common modifier concepts.",
//     category: "CPT",
//     duration: "19 min",
//     level: "Intermediate",
//     videoUrl: "/videos/cpt-modifiers",
//   },
// ];

// export default function VideosPage() {
//   const [selectedCategory, setSelectedCategory] = useState("All Videos");

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredVideos = useMemo(() => {
//     return videos.filter((video) => {
//       const matchesCategory = selectedCategory === "All Videos" || video.category === selectedCategory;

//       const search = searchTerm.toLowerCase().trim();

//       const matchesSearch =
//         !search ||
//         video.title.toLowerCase().includes(search) ||
//         video.description.toLowerCase().includes(search) ||
//         video.category.toLowerCase().includes(search);

//       return matchesCategory && matchesSearch;
//     });
//   }, [selectedCategory, searchTerm]);

//   const featuredVideo = videos.find((video) => video.featured) ?? videos[0];

//   return (
//     <main className="min-h-screen overflow-x-hidden bg-white">
//       {/* =====================================================
//           HERO
//       ===================================================== */}
//       <section className="relative overflow-hidden bg-slate-950">
//         {/* Background decorative elements */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

//         <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

//         <div className="absolute -bottom-40 -left-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

//         <Container>
//           <div className="relative flex min-h-50 items-center justify-center px-2 py-12 text-center sm:min-h-60 sm:px-4 sm:py-16 lg:min-h-65">
//             <div className="w-full max-w-3xl">
//               <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-400 sm:text-sm sm:tracking-[0.25em]">
//                 Learning Library
//               </p>

//               <h1 className="break-word text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
//                 Medical Coding Videos
//               </h1>
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/* =====================================================
//           QUICK ACCESS
//       ===================================================== */}
//       <section className="border-b border-slate-100 bg-white">
//         <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
//             <div className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 sm:h-11 sm:w-11">
//                 <Video className="h-5 w-5" />
//               </div>

//               <div className="min-w-0">
//                 <p className="text-base font-bold text-[#173b62] sm:text-lg">{videos.length}+</p>

//                 <p className="truncate text-xs text-slate-500">Learning Videos</p>
//               </div>
//             </div>

//             <div className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 sm:h-11 sm:w-11">
//                 <BookOpen className="h-5 w-5" />
//               </div>

//               <div className="min-w-0">
//                 <p className="text-base font-bold text-[#173b62] sm:text-lg">5+</p>

//                 <p className="truncate text-xs text-slate-500">Learning Categories</p>
//               </div>
//             </div>

//             <div className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
//               <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 sm:h-11 sm:w-11">
//                 <Stethoscope className="h-5 w-5" />
//               </div>

//               <div className="min-w-0">
//                 <p className="truncate text-base font-bold text-[#173b62] sm:text-lg">Beginner Friendly</p>

//                 <p className="truncate text-xs text-slate-500">Easy-to-follow lessons</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           FEATURED VIDEO
//       ===================================================== */}
//       <section className="bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
//         <div className="mx-auto w-full max-w-6xl">
//           <div className="mb-5 sm:mb-6">
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">Start Here</p>

//             <h2 className="mt-1 text-xl font-bold text-[#173b62] sm:text-2xl">Featured Medical Coding Video</h2>

//             <div className="mt-3 h-1 w-12 rounded-full bg-teal-500" />
//           </div>

//           <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:grid-cols-[1.1fr_1fr]">
//             {/* Video Preview */}
//             <div className="relative flex min-h-55 items-center justify-center overflow-hidden bg-[#173b62] sm:min-h-70 md:min-h-80">
//               {/* Background pattern */}
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute left-5 top-5 h-28 w-28 rounded-full border-20 border-teal-300 sm:left-10 sm:top-10 sm:h-40 sm:w-40 sm:border-30" />

//                 <div className="absolute bottom-5 right-5 h-40 w-40 rounded-full border-25 border-cyan-300 sm:bottom-10 sm:right-5 sm:h-64 sm:w-64 sm:border-40" />
//               </div>

//               <div className="relative px-4 text-center">
//                 <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl shadow-teal-900/30 transition hover:scale-105 sm:h-20 sm:w-20">
//                   <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
//                 </div>

//                 <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-teal-200 sm:mt-4 sm:text-xs">
//                   Featured Lesson
//                 </p>
//               </div>
//             </div>

//             {/* Details */}
//             <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6 md:p-8">
//               <span className="w-fit max-w-full rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
//                 {featuredVideo.category}
//               </span>

//               <h3 className="mt-3 wrap-break-word text-lg font-bold leading-6 text-[#173b62] sm:mt-4 sm:text-xl sm:leading-7 md:text-2xl">
//                 {featuredVideo.title}
//               </h3>

//               <p className="mt-3 text-sm leading-6 text-slate-500">{featuredVideo.description}</p>

//               <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500 sm:mt-5 sm:gap-4">
//                 <span className="flex items-center gap-1.5">
//                   <Clock3 className="h-4 w-4 shrink-0 text-teal-600" />
//                   {featuredVideo.duration}
//                 </span>

//                 <span className="rounded-full bg-slate-100 px-3 py-1">{featuredVideo.level}</span>
//               </div>

//               <Link
//                 href={featuredVideo.videoUrl}
//                 className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 sm:mt-6 sm:w-fit"
//               >
//                 <Play className="h-4 w-4 fill-current" />
//                 Watch Video
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           VIDEO LIBRARY
//       ===================================================== */}
//       <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
//         <div className="mx-auto w-full max-w-6xl">
//           {/* Heading */}
//           <div className="text-center">
//             <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">Video Library</p>

//             <h2 className="mt-2 text-xl font-bold text-[#173b62] sm:text-2xl md:text-3xl">Learn Medical Coding</h2>

//             <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
//               Select a topic or search for a specific medical coding lesson.
//             </p>

//             <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-teal-500" />
//           </div>

//           {/* Search */}
//           <div className="mx-auto mt-6 w-full max-w-2xl sm:mt-8">
//             <div className="relative w-full">
//               <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 sm:left-4 sm:h-5 sm:w-5" />

//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(event) => setSearchTerm(event.target.value)}
//                 placeholder="Search medical coding videos..."
//                 className="h-11 w-full min-w-0 rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 sm:h-12 sm:pl-12 sm:pr-4"
//               />
//             </div>
//           </div>

//           {/* Categories */}
//           <div className="mt-5 w-full overflow-hidden sm:mt-6">
//             <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
//               {categories.map((category) => {
//                 const active = selectedCategory === category;

//                 return (
//                   <button
//                     key={category}
//                     type="button"
//                     onClick={() => setSelectedCategory(category)}
//                     className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition sm:px-4 ${
//                       active
//                         ? "bg-teal-600 text-white shadow-sm"
//                         : "border border-slate-200 bg-white text-slate-600 hover:border-teal-400 hover:text-teal-600"
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Results */}
//           <div className="mt-8 sm:mt-10">
//             {filteredVideos.length > 0 ? (
//               <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {filteredVideos.map((video) => (
//                   <article
//                     key={video.id}
//                     className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                   >
//                     {/* Thumbnail */}
//                     <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-[#173b62] sm:aspect-16/10 lg:aspect-video">
//                       {/* Decorative circles */}
//                       <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-teal-400/10" />

//                       <div className="absolute -bottom-10 -right-5 h-36 w-36 rounded-full bg-cyan-400/10" />

//                       <div className="absolute inset-0 bg-linear-to-br from-[#173b62] via-[#164e63] to-teal-700 opacity-80" />

//                       <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-teal-600 shadow-lg transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
//                         <Play className="ml-0.5 h-5 w-5 fill-current sm:h-6 sm:w-6" />
//                       </div>

//                       {/* Duration */}
//                       <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-[9px] font-semibold text-white sm:bottom-3 sm:right-3 sm:text-[10px]">
//                         {video.duration}
//                       </span>

//                       {/* Category */}
//                       <span className="absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold text-teal-700 sm:left-3 sm:top-3">
//                         {video.category}
//                       </span>
//                     </div>

//                     {/* Content */}
//                     <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
//                       <div className="flex min-w-0 items-center justify-between gap-2">
//                         <span className="min-w-0 truncate text-[9px] font-semibold uppercase tracking-wider text-teal-600 sm:text-[10px]">
//                           Medical Coding
//                         </span>

//                         <span className="shrink-0 whitespace-nowrap text-[9px] text-slate-400 sm:text-[10px]">
//                           {video.level}
//                         </span>
//                       </div>

//                       <h3 className="mt-2 line-clamp-2 wrap-break-words text-sm font-bold leading-5 text-[#173b62] sm:text-base sm:leading-6">
//                         {video.title}
//                       </h3>

//                       <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
//                         {video.description}
//                       </p>

//                       <div className="mt-auto pt-4">
//                         <Link
//                           href={video.videoUrl}
//                           className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 transition hover:text-teal-700 sm:text-sm"
//                         >
//                           Watch Now
//                           <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                         </Link>
//                       </div>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             ) : (
//               /* Empty State */
//               <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-12 text-center sm:px-6 sm:py-14">
//                 <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
//                   <Search className="h-6 w-6" />
//                 </div>

//                 <h3 className="mt-4 text-lg font-bold text-[#173b62]">No videos found</h3>

//                 <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
//                   Try another search term or select a different category.
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSearchTerm("");
//                     setSelectedCategory("All Videos");
//                   }}
//                   className="mt-5 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
//                 >
//                   Clear Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* =====================================================
//           CTA
//       ===================================================== */}
//       <section className="bg-[#173b62] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
//         <div className="mx-auto w-full max-w-4xl text-center">
//           <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 sm:h-12 sm:w-12">
//             <Video className="h-5 w-5 sm:h-6 sm:w-6" />
//           </div>

//           <h2 className="mt-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">Keep Learning. Keep Growing.</h2>

//           <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
//             Explore our medical coding training programs and take your learning beyond videos with structured
//             professional training.
//           </p>

//           <div className="mt-6 flex flex-col items-stretch justify-center gap-3 xs:flex-row sm:flex-row sm:items-center">
//             <Link
//               href="/training/medical-coding"
//               className="inline-flex w-full items-center justify-center rounded-lg bg-teal-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-400 sm:w-auto"
//             >
//               Explore Medical Coding
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// code with pagination

"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, Clock3, Play, Search, Stethoscope, Video } from "lucide-react";
import { Container } from "@/components/layout/container";

type VideoItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  featured?: boolean;
  videoUrl: string;
};

const categories = ["All Videos", "Medical Coding", "CPT", "ICD-10-CM", "HCPCS", "Beginner"];

const videos: VideoItem[] = [
  {
    id: 1,
    title: "Introduction to Medical Coding",
    description:
      "Understand the fundamentals of medical coding and how coding is used in the healthcare revenue cycle.",
    category: "Medical Coding",
    duration: "12 min",
    level: "Beginner",
    featured: true,
    videoUrl: "/videos/introduction-to-medical-coding",
  },
  {
    id: 2,
    title: "Medical Coding Basics for Beginners",
    description: "A simple introduction to medical coding concepts, terminology and coding workflow.",
    category: "Beginner",
    duration: "18 min",
    level: "Beginner",
    videoUrl: "/videos/medical-coding-basics",
  },
  {
    id: 3,
    title: "Understanding CPT Coding",
    description: "Learn the basics of CPT coding and understand how procedure and service codes are assigned.",
    category: "CPT",
    duration: "22 min",
    level: "Intermediate",
    videoUrl: "/videos/cpt-coding-basics",
  },
  {
    id: 4,
    title: "ICD-10-CM Coding Fundamentals",
    description: "Learn the foundation of ICD-10-CM diagnosis coding and understand the coding structure.",
    category: "ICD-10-CM",
    duration: "20 min",
    level: "Beginner",
    videoUrl: "/videos/icd10-cm-fundamentals",
  },
  {
    id: 5,
    title: "HCPCS Coding Explained",
    description: "Understand HCPCS coding and its role in healthcare claims and reimbursement.",
    category: "HCPCS",
    duration: "16 min",
    level: "Intermediate",
    videoUrl: "/videos/hcpcs-coding",
  },
  {
    id: 6,
    title: "Medical Terminology for Coders",
    description: "Build your medical terminology knowledge and improve your understanding of clinical documentation.",
    category: "Beginner",
    duration: "25 min",
    level: "Beginner",
    videoUrl: "/videos/medical-terminology",
  },
  {
    id: 7,
    title: "ICD-10-CM Guidelines",
    description: "Explore important ICD-10-CM coding guidelines that every medical coder should understand.",
    category: "ICD-10-CM",
    duration: "24 min",
    level: "Intermediate",
    videoUrl: "/videos/icd10-guidelines",
  },
  {
    id: 8,
    title: "CPT Modifiers Explained",
    description: "Learn how CPT modifiers are used and understand common modifier concepts.",
    category: "CPT",
    duration: "19 min",
    level: "Intermediate",
    videoUrl: "/videos/cpt-modifiers",
  },
];

export default function Videos() {
  const [selectedCategory, setSelectedCategory] = useState("All Videos");
  const [searchTerm, setSearchTerm] = useState("");

  // =====================================================
  // PAGINATION
  // =====================================================
  const [currentPage, setCurrentPage] = useState(1);

  // Number of videos displayed per page
  const VIDEOS_PER_PAGE = 4;

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesCategory = selectedCategory === "All Videos" || video.category === selectedCategory;

      const search = searchTerm.toLowerCase().trim();

      const matchesSearch =
        !search ||
        video.title.toLowerCase().includes(search) ||
        video.description.toLowerCase().includes(search) ||
        video.category.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  // =====================================================
  // PAGINATED VIDEOS
  // =====================================================
  const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE);

  const paginatedVideos = useMemo(() => {
    const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
    const endIndex = startIndex + VIDEOS_PER_PAGE;

    return filteredVideos.slice(startIndex, endIndex);
  }, [filteredVideos, currentPage]);

  // =====================================================
  // RESET PAGE WHEN FILTER / SEARCH CHANGES
  // =====================================================
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // =====================================================
  // PAGE CHANGE
  // =====================================================
  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    // Scroll back to video library
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  const featuredVideo = videos.find((video) => video.featured) ?? videos[0];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.28),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(15,118,110,0.22),transparent_40%)]" />

        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

        <div className="absolute -bottom-40 -left-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

        <Container>
          <div className="relative flex min-h-50 items-center justify-center px-2 py-12 text-center sm:min-h-60 sm:px-4 sm:py-16 lg:min-h-65">
            <div className="w-full max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-teal-400 sm:text-sm sm:tracking-[0.25em]">
                Learning Library
              </p>

              <h1 className="break-word text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Medical Coding Videos
              </h1>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          QUICK ACCESS
      ===================================================== */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            <div className="flex min-w-0 items-center gap-3 rounded border border-slate-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 sm:h-11 sm:w-11">
                <Video className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="text-base font-bold text-[#173b62] sm:text-lg">{videos.length}+</p>

                <p className="truncate text-xs text-slate-500">Learning Videos</p>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-3 rounded border border-slate-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 sm:h-11 sm:w-11">
                <BookOpen className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="text-base font-bold text-[#173b62] sm:text-lg">5+</p>

                <p className="truncate text-xs text-slate-500">Learning Categories</p>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-3 rounded border border-slate-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600 sm:h-11 sm:w-11">
                <Stethoscope className="h-5 w-5" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-base font-bold text-[#173b62] sm:text-lg">Beginner Friendly</p>

                <p className="truncate text-xs text-slate-500">Easy-to-follow lessons</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED VIDEO
      ===================================================== */}
      <section className="bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-5 sm:mb-6">
            <h2 className="mt-1 text-xl font-bold text-[#173b62] sm:text-2xl">Featured Medical Coding Video</h2>

            <div className="mt-3 h-1 w-12 rounded bg-teal-500" />
          </div>

          <div className="grid overflow-hidden rounded border border-slate-200 bg-white shadow-sm md:grid-cols-[1.1fr_1fr]">
            {/* Video Preview */}
            <div className="relative flex min-h-55 items-center justify-center overflow-hidden bg-[#173b62] sm:min-h-70 md:min-h-80">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute left-5 top-5 h-28 w-28 rounded-full border-20 border-teal-300 sm:left-10 sm:top-10 sm:h-40 sm:w-40 sm:border-30" />

                <div className="absolute bottom-5 right-5 h-40 w-40 rounded-full border-25 border-cyan-300 sm:bottom-10 sm:right-5 sm:h-64 sm:w-64 sm:border-40" />
              </div>

              <div className="relative px-4 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-white shadow-xl shadow-teal-900/30 transition hover:scale-105 sm:h-20 sm:w-20">
                  <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8" />
                </div>

                <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-teal-200 sm:mt-4 sm:text-xs">
                  Featured Lesson
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="flex min-w-0 flex-col justify-center p-5 sm:p-6 md:p-8">
              <span className="w-fit max-w-full rounded-full bg-teal-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-700">
                {featuredVideo.category}
              </span>

              <h3 className="mt-3 wrap-break-word text-lg font-bold leading-6 text-[#173b62] sm:mt-4 sm:text-xl sm:leading-7 md:text-2xl">
                {featuredVideo.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">{featuredVideo.description}</p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500 sm:mt-5 sm:gap-4">
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 shrink-0 text-teal-600" />
                  {featuredVideo.duration}
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1">{featuredVideo.level}</span>
              </div>

              <Link
                href={featuredVideo.videoUrl}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700 sm:mt-6 sm:w-fit"
              >
                <Play className="h-4 w-4 fill-current" />
                Watch Video
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VIDEO LIBRARY
      ===================================================== */}
      <section className="bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-600">Video Library</p>

            <h2 className="mt-2 text-xl font-bold text-[#173b62] sm:text-2xl md:text-3xl">Learn Medical Coding</h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Select a topic or search for a specific medical coding lesson.
            </p>

            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-teal-500" />
          </div>

          {/* Search */}
          <div className="mx-auto mt-6 w-full max-w-2xl sm:mt-8">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 sm:left-4 sm:h-5 sm:w-5" />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => handleSearchChange(event.target.value)}
                placeholder="Search medical coding videos..."
                className="h-11 w-full min-w-0 rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 sm:h-12 sm:pl-12 sm:pr-4"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mt-5 w-full overflow-hidden sm:mt-6">
            <div className="flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition sm:px-4 ${
                      active
                        ? "bg-teal-600 text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-teal-400 hover:text-teal-600"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results */}
          <div className="mt-8 sm:mt-10">
            {filteredVideos.length > 0 ? (
              <>
                {/* =====================================================
                    PAGINATED VIDEO GRID
                ===================================================== */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {paginatedVideos.map((video) => (
                    <article
                      key={video.id}
                      className="group flex min-w-0 flex-col overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      {/* Thumbnail */}
                      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-[#173b62] sm:aspect-16/10 lg:aspect-video">
                        <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-teal-400/10" />

                        <div className="absolute -bottom-10 -right-5 h-36 w-36 rounded-full bg-cyan-400/10" />

                        <div className="absolute inset-0 bg-linear-to-br from-[#173b62] via-[#164e63] to-teal-700 opacity-80" />

                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-teal-600 shadow-lg transition duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                          <Play className="ml-0.5 h-5 w-5 fill-current sm:h-6 sm:w-6" />
                        </div>

                        {/* Duration */}
                        <span className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-[9px] font-semibold text-white sm:bottom-3 sm:right-3 sm:text-[10px]">
                          {video.duration}
                        </span>

                        {/* Category */}
                        <span className="absolute left-2 top-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold text-teal-700 sm:left-3 sm:top-3">
                          {video.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
                        <div className="flex min-w-0 items-center justify-between gap-2">
                          <span className="min-w-0 truncate text-[9px] font-semibold uppercase tracking-wider text-teal-600 sm:text-[10px]">
                            Medical Coding
                          </span>

                          <span className="shrink-0 whitespace-nowrap text-[9px] text-slate-400 sm:text-[10px]">
                            {video.level}
                          </span>
                        </div>

                        <h3 className="mt-2 line-clamp-2 wrap-break-words text-sm font-bold leading-5 text-[#173b62] sm:text-base sm:leading-6">
                          {video.title}
                        </h3>

                        <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                          {video.description}
                        </p>

                        <div className="mt-auto pt-4">
                          <Link
                            href={video.videoUrl}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 transition hover:text-teal-700 sm:text-sm"
                          >
                            Watch Now
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* =====================================================
                    PAGINATION
                ===================================================== */}
                {totalPages > 1 && (
                  <div className="mt-10 flex flex-col items-center gap-4">
                    {/* Page information */}
                    <p className="text-xs text-slate-500">
                      Showing{" "}
                      <span className="font-semibold text-[#173b62]">{(currentPage - 1) * VIDEOS_PER_PAGE + 1}</span> -{" "}
                      <span className="font-semibold text-[#173b62]">
                        {Math.min(currentPage * VIDEOS_PER_PAGE, filteredVideos.length)}
                      </span>{" "}
                      of <span className="font-semibold text-[#173b62]">{filteredVideos.length}</span> videos
                    </p>

                    {/* Pagination Controls */}
                    <div className="flex w-full items-center justify-center gap-2 sm:w-auto">
                      {/* Previous */}
                      <button
                        type="button"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition hover:border-teal-400 hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 sm:px-4 sm:text-sm"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Previous</span>
                      </button>

                      {/* Page Numbers */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                          <button
                            key={page}
                            type="button"
                            onClick={() => goToPage(page)}
                            aria-current={currentPage === page ? "page" : undefined}
                            className={`h-10 min-w-10 rounded-lg px-3 text-xs font-semibold transition sm:text-sm ${
                              currentPage === page
                                ? "bg-teal-600 text-white shadow-sm"
                                : "border border-slate-200 bg-white text-slate-600 hover:border-teal-400 hover:text-teal-600"
                            }`}
                          >
                            {page}
                          </button>
                        ))}
                      </div>

                      {/* Next */}
                      <button
                        type="button"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition hover:border-teal-400 hover:text-teal-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:text-slate-600 sm:px-4 sm:text-sm"
                      >
                        <span>Next</span>
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-12 text-center sm:px-6 sm:py-14">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  <Search className="h-6 w-6" />
                </div>

                <h3 className="mt-4 text-lg font-bold text-[#173b62]">No videos found</h3>

                <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                  Try another search term or select a different category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All Videos");
                    setCurrentPage(1);
                  }}
                  className="mt-5 rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#173b62] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto w-full max-w-4xl text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 sm:h-12 sm:w-12">
            <Video className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>

          <h2 className="mt-4 text-xl font-bold text-white sm:text-2xl md:text-3xl">Keep Learning. Keep Growing.</h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Explore our medical coding training programs and take your learning beyond videos with structured
            professional training.
          </p>

          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 xs:flex-row sm:flex-row sm:items-center">
            <Link
              href="/training/medical-coding"
              className="inline-flex w-full items-center justify-center rounded bg-teal-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-teal-400 sm:w-auto"
            >
              Explore Medical Coding
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
