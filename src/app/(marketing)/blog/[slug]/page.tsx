import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaClock, FaUserMd } from "react-icons/fa";

import { Container } from "@/components/layout/container";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

interface BlogDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Dynamic SEO metadata
 */
export async function generateMetadata({ params }: BlogDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await prisma.blogpost.findUnique({
    where: {
      slug,
    },
    select: {
      title: true,
      excerpt: true,
      seoTitle: true,
      seoDescription: true,
      featuredImage: true,
    },
  });

  if (!post) {
    return {
      title: "Blog Not Found | Development AAPC Medical Coding",
      description: "The requested medical coding article could not be found.",
    };
  }

  const title = post.seoTitle ?? `${post.title} | Development AAPC Medical Coding`;

  const description = post.seoDescription ?? post.excerpt ?? `Read ${post.title} at Development AAPC Medical Coding.`;

  return {
    title,
    description,
    icons: {
      icon: "/images/icons/blog_icon.png",
    },
    openGraph: {
      title,
      description,

      type: "article",

      images: post.featuredImage
        ? [
            {
              url: post.featuredImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
  };
}

/**
 * Blog Details Page
 */
export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { slug } = await params;

  const post = await prisma.blogpost.findUnique({
    where: {
      slug,
    },

    include: {
      blogcategory: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });

  /**
   * Important:
   * Only published articles should be publicly accessible.
   */
  if (!post || post.status !== "PUBLISHED") {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#031522] via-[#063846] to-[#020617] py-20 text-white sm:py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-teal-400 blur-3xl" />

          <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan-500 blur-3xl" />
        </div>

        <Container>
          <div className="relative mx-auto max-w-4xl">
            {/* Category */}
            {post.blogcategory && (
              <div className="mt-8">
                <Link
                  href={`/blog?category=${post.blogcategory.slug}`}
                  className="inline-flex rounded-full bg-teal-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-300 ring-1 ring-teal-400/30 transition hover:bg-teal-500/30"
                >
                  {post.blogcategory.name}
                </Link>
              </div>
            )}

            {/* Title */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{post.excerpt}</p>
            )}

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-300">
              {post.authorName && (
                <span className="flex items-center gap-2">
                  <FaUserMd className="text-teal-300" />
                  {post.authorName}
                </span>
              )}

              {post.publishedAt && (
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-teal-300" />

                  {post.publishedAt.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}

              {post.readingTime && (
                <span className="flex items-center gap-2">
                  <FaClock className="text-teal-300" />
                  {post.readingTime} min read
                </span>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ARTICLE */}
      <section className="bg-slate-50 py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Featured image */}
            {post.featuredImage ? (
              <div className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                <Image src={post.featuredImage} alt={post.title} className="h-auto w-full object-cover" />
              </div>
            ) : (
              <div className="mb-10 flex h-64 items-center justify-center overflow-hidden rounded bg-linear-to-br from-[#063b4c] to-[#008f91] shadow-lg sm:h-80">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white/20">AAPC</div>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Medical Coding</p>
                </div>
              </div>
            )}

            {/* Content */}
            <article className="rounded border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
              <div
                className="
                  prose
                  prose-slate
                  max-w-none

                  prose-headings:font-bold
                  prose-headings:text-slate-950

                  prose-h2:mt-10
                  prose-h2:text-2xl

                  prose-h3:mt-8
                  prose-h3:text-xl

                  prose-p:text-slate-600
                  prose-p:leading-8

                  prose-li:text-slate-600
                  prose-li:leading-7

                  prose-a:font-semibold
                  prose-a:text-teal-600
                  hover:prose-a:text-teal-700

                  prose-strong:text-slate-900
                "
              >
                {post.content.split("\n").map((paragraph, index) => {
                  const text = paragraph.trim();

                  if (!text) {
                    return null;
                  }

                  return <p key={index}>{text}</p>;
                })}
              </div>
            </article>

            {/* Bottom navigation */}
            <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 rounded bg-teal-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-700"
              >
                Explore Courses
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-[#032a3a] via-[#064e5b] to-[#063b46] py-16 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Start Your Journey</p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to Build Your Medical Coding Career?</h2>

            <p className="mt-4 leading-7 text-slate-300">
              Develop your medical coding knowledge with structured courses designed for students and aspiring
              healthcare professionals.
            </p>

            <Link
              href="/courses"
              className="mt-7 inline-flex items-center gap-2 rounded bg-teal-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-teal-400"
            >
              View Courses
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
