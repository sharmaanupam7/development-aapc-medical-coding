import RegisterForm from "@/components/auth/register-form";
import { requireGuest } from "@/lib/auth-guard";
import { getActiveCountries } from "@/services/country.service";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Development AAPC Medical Coding",
  icons: {
    icon: "/images/icons/register_icon.png",
  },
};

export default async function RegisterPage() {
  await requireGuest();

  const countries = await getActiveCountries();

  return (
    <main>
      <RegisterForm countries={countries} />
    </main>
  );
}
