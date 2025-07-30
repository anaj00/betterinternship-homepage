import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center sm:items-start">
        <HeroSection />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
