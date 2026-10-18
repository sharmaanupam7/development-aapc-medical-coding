import { ContactUs } from "@/components/contact_us/ContactUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  icons: {
    icon: "/images/icons/contact_icon.png",
  },
};

export default function ContactPage() {
  return <ContactUs />;
}
