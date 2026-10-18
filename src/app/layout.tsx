import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { inter, roboto, roboto_mono, geist } from "@/app/fonts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Development AAPC Medical Coding",
    template: "%s | Development AAPC Medical Coding",
  },

  description:
    "Professional medical coding training, certification preparation, practice tests, and career-focused learning.",

  applicationName: "Development AAPC Medical Coding",

  keywords: [
    "medical coding",
    "CPC certification",
    "CCS certification",
    "ICD-10-CM",
    "CPT",
    "HCPCS",
    "medical coding training",
    "AAPC medical coding",
  ],

  openGraph: {
    type: "website",
    siteName: "Development AAPC Medical Coding",
    title: "Development AAPC Medical Coding",
    description: "Professional medical coding training, certification preparation, and career-focused learning.",
    url: "/",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Development AAPC Medical Coding",
      },
    ],
  },

  icons: {
    icon: [
      {
        url: "/images/icons/logo_aapc1.png",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Development AAPC Medical Coding",
    description: "Medical coding training and certification preparation.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.variable, roboto.variable, roboto_mono.variable, geist.variable)}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
