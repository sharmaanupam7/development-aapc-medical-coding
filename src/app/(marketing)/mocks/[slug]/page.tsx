import { Container } from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mock Details | Development AAPC Medical Coding",
  description: "Explore mocks for Development AAPC Medical Coding",
  icons: {
    icon: "/images/icons/mocks_icon.png",
  },
};

export default async function MockDetailsPage() {
  return (
    <>
      <div>
        <Container className="text-2xl bg-slate-200 font-bold flex h-screen items-center justify-center">
          Mock Test Detail Page will be available soon
        </Container>
      </div>
    </>
  );
}
