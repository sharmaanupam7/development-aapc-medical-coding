import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center" aria-label="Development AAPC Medical Coding Home">
      <Image
        src="/images/logo_aapc1.jpg"
        alt="AAPC Medical Coding"
        width={120}
        height={70}
        priority
        className="object-contain rounded animate-pulse w-auto h-auto"
        quality={100}
      />
    </Link>
  );
}
