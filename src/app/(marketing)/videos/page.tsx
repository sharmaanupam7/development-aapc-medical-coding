import Videos from "@/components/videos/VideoGallery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos | Development AAPC Medical Coding",
  description: "Explore Medical Coding related lecture videos",
  icons: {
    icon: "/images/icons/video_icon.png",
  },
};

export default function VideosPage() {
  return (
    <>
      <Videos />
    </>
  );
}
