"use client";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };

    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-16 w-full px-4 sm:px-0">
      <p className="text-center text-base sm:text-xl font-semibold text-gray-700 mb-4">
        The best are already here
      </p>

      {/* Mobile: Static 4 logos */}
      {isMobile ? (
        <div className="flex justify-center gap-4 flex-wrap">
          {companies.slice(0, 4).map((company) => (
            <div key={company.id} className="h-14 w-24 md:h-24 md:w-48">
              <Image
                src={company.src}
                alt={company.name}
                width={200}
                height={120}
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </div>
      ) : (
        // Desktop: Carousel
        <LogoCarousel logos={companies} columns={4} />
      )}
    </div>
  );
}
