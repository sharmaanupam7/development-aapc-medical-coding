import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRing, FaLifeRing, FaDotCircle, FaStar } from "react-icons/fa";

import { Container } from "@/components/layout/container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* =========================================================
          EXISTING BACKGROUND IMAGE
      ========================================================== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/footer-bg.jpg')",
        }}
      />

      {/* =========================================================
          RADIANT BACKGROUND
          Same visual direction as About page
      ========================================================== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(13,148,136,0.30),transparent_35%),radial-gradient(circle_at_top_right,rgba(20,184,166,0.18),transparent_35%),linear-gradient(135deg,rgba(2,6,23,0.94),rgba(15,23,42,0.91),rgba(15,118,110,0.82))]" />

      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-slate-950/40" />

      {/* =========================================================
          FOOTER CONTENT
      ========================================================== */}
      <div className="relative">
        <Container>
          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {/* =====================================================
                CONTACT INFO
            ====================================================== */}
            <div className="w-90">
              <h3 className="text-lg font-bold text-white">Contact Info</h3>

              <div className="mt-6 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30">
                    <FaMapMarkerAlt className="h-4 w-4" />
                  </div>

                  <p className="pt-1 text-sm leading-6 text-white/90">
                    Tower 6 Flat No. G07 <br /> Panchasheel Wellington Crossings Republic <br /> PIN Code - 201016
                    (Ghaziabad, Uttar Pradesh)
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30">
                    <FaPhoneAlt className="h-4 w-4" />
                  </div>

                  <a href="tel:+919911222639" className="text-sm text-slate-300 transition hover:text-teal-300">
                    +91 9716260598
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 w-80">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30">
                    <FaEnvelope className="h-4 w-4" />
                  </div>

                  <a
                    href="mailto:developmentaapcmedicalcoding.com"
                    className="break-all text-sm text-slate-300 transition hover:text-teal-300"
                  >
                    developmentaapcmedicalcoding.com
                  </a>
                </div>
              </div>

              {/* =================================================
                  SOCIAL LINKS
              ================================================== */}
              <div className="mt-7">
                {/* <p className="mb-3 text-sm font-semibold text-white">Follow Us</p> */}

                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white transition hover:-translate-y-1 hover:bg-teal-400"
                  >
                    <FaFacebookF className="h-4 w-4" />
                  </a>

                  {/* Twitter */}
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white transition hover:-translate-y-1 hover:bg-teal-400"
                  >
                    <FaTwitter className="h-4 w-4" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white transition hover:-translate-y-1 hover:bg-teal-400"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-white transition hover:-translate-y-1 hover:bg-teal-400"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* =====================================================
                QUICK LINKS
            ====================================================== */}
            <div className="ml-20">
              <h3 className="text-lg font-bold text-white">Quick Links</h3>

              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/"
                    className="group flex items-center gap-2 text-sm text-slate-300 transition hover:text-teal-300"
                  >
                    <FaRing className="h-3 w-3 text-teal-400 transition group-hover:translate-x-1" />
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="group flex items-center gap-2 text-sm text-slate-300 transition hover:text-teal-300"
                  >
                    <FaRing className="h-3 w-3 text-teal-400 transition group-hover:translate-x-1" />
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/courses"
                    className="group flex items-center gap-2 text-sm text-slate-300 transition hover:text-teal-300"
                  >
                    <FaRing className="h-3 w-3 text-teal-400 transition group-hover:translate-x-1" />
                    Courses
                  </Link>
                </li>

                <li>
                  <Link
                    href="/rcm"
                    className="group flex items-center gap-2 text-sm text-slate-300 transition hover:text-teal-300"
                  >
                    <FaRing className="h-3 w-3 text-teal-400 transition group-hover:translate-x-1" />
                    RCM
                  </Link>
                </li>

                <li>
                  <Link
                    href="/career"
                    className="group flex items-center gap-2 text-sm text-slate-300 transition hover:text-teal-300"
                  >
                    <FaRing className="h-3 w-3 text-teal-400 transition group-hover:translate-x-1" />
                    Career
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-2 text-sm text-slate-300 transition hover:text-teal-300"
                  >
                    <FaRing className="h-3 w-3 text-teal-400 transition group-hover:translate-x-1" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* =====================================================
                SUPPORT
            ====================================================== */}
            <div>
              <h3 className="text-lg font-bold text-white">Support</h3>

              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/videos"
                    className="group flex items-center gap-2 text-sm text-slate-300 transition hover:text-teal-300"
                  >
                    <FaRing className="h-3 w-3 text-teal-400 transition group-hover:translate-x-1" />
                    Videos
                  </Link>
                </li>

                <li>
                  <Link
                    href="/mocks"
                    className="group flex items-center gap-2 text-sm text-slate-300 transition hover:text-teal-300"
                  >
                    <FaRing className="h-3 w-3 text-teal-400 transition group-hover:translate-x-1" />
                    Mock plus Certifications
                  </Link>
                </li>
              </ul>
            </div>

            {/* =====================================================
                DEVELOPMENT AAPC
            ====================================================== */}
            <div>
              <h3 className="text-lg font-bold text-white">Development AAPC</h3>

              <p className="mt-6 text-sm leading-7 text-slate-300">
                Structured medical coding courses, practice resources and professional learning programs designed for
                students and healthcare professionals
              </p>

              <Link
                href="/courses"
                className="mt-6 inline-flex items-center gap-2 rounded bg-teal-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-teal-950/30 transition hover:bg-teal-400"
              >
                Explore Courses
                {/* <FaArrowRight className="h-3.5 w-3.5" /> */}
              </Link>
            </div>
          </div>
        </Container>

        {/* =========================================================
            COPYRIGHT
        ========================================================== */}
        <div className="border-t border-white/10 bg-slate-950/50">
          <Container>
            <div className="flex min-h-17 items-center justify-center text-center">
              <p className="text-sm text-slate-400">
                Copyright ©2026 Development AAPC Medical Coding | All Rights Reserved
              </p>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
