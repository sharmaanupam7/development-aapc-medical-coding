// src/app/fonts.ts

import { Inter, Roboto, Roboto_Mono, Geist } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: true,
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  preload: false,
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false,
  fallback: ["monospace"],
  adjustFontFallback: true,
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false,
  fallback: ["Arial", "sans-serif"],
  adjustFontFallback: true,
});
