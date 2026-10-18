import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Coding Training",
  description: "Explore medical coding courses, certification preparation, practice tests, and learning resources.",
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  );
}
