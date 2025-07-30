import { Gloria_Hallelujah } from "next/font/google";

const gloria = Gloria_Hallelujah({ subsets: ["latin"], weight: "400" });

export default function HeroTag() {
  return (
    <div
      className={`
        relative inline-block 
        text-white 
        px-4 py-1.5 text-xl shadow 
        sm:px-6 sm:py-2 sm:text-2xl sm:shadow-md
        md:px-10 md:py-2.5 md:text-[2.25rem] md:shadow-lg
        lg:px-12 lg:py-3 lg:text-[3rem]
        rounded-full 
        bg-[var(--color-blue)] 
        overflow-hidden 
        group 
        rotate-[-6deg]
      `}
    >
      <span
        className={`
          ${gloria.className} 
          text-white 
          text-xl
          sm:text-2xl
          md:text-[2.25rem]
          lg:text-[3rem]
        `}
      >
        10x faster 🚀
      </span>
      <span className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </div>
  );
}
