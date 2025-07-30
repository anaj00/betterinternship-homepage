"use client";
import { LogoCarousel } from "@/components/ui/logo-carousel";

export default function HeroCompanies() {
  const companies = [
    { id: 1, name: "Alaska", src: "/logos/alaska.png" },
    { id: 2, name: "Jollibee", src: "/logos/jollibee.png" },
    { id: 3, name: "Manulife", src: "/logos/manulife.png" },
    { id: 4, name: "Oracle", src: "/logos/oracle.png" },
    { id: 5, name: "Alaska", src: "/logos/alaska.png" },
    { id: 6, name: "Jollibee", src: "/logos/jollibee.png" },
    { id: 7, name: "Manulife", src: "/logos/manulife.png" },
    { id: 8, name: "Oracle", src: "/logos/oracle.png" },
  ];

  return (
    <div className="mt-22 w-full">
      <p className="text-center text-xl font-semibol">
        The best are already here
      </p>
      <LogoCarousel logos={companies} />
    </div>
  );
}
