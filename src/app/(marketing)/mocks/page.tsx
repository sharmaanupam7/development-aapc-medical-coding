import { Container } from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mocks | Development AAPC Medical Coding",
  description: "Explore mocks for Development AAPC Medical Coding",
  icons: {
    icon: "/images/icons/mocks_icon.png",
  },
};

const MocksPage = () => {
  return (
    <>
      <Container className="text-2xl bg-slate-200 font-bold flex h-screen items-center justify-center">
        Mock Test will be available soon
      </Container>
    </>
  );
};

export default MocksPage;
