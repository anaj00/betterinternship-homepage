import HeroIllustration from "./HeroIllustration.js";
import HeroHeadline from "./HeroHeadline";
import HeroTag from "./HeroTag";
import HeroSearch from "./HeroSearch";
import HeroCompanies from "./HeroCompanies";

export default function HeroSection() {
  return (
    <div className="relative w-full static-grid">
      {/* Radial fade overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0)_0%,_white_100%)]" />

      {/* Content */}
      <section className="min-h-[calc(100vh-200px)] flex flex-col items-center text-center relative z-10 mt-8">
        <HeroIllustration />
        <div className="relative">
          <HeroHeadline />
          <div className="absolute right-[-60px] -top-[-110px]">
            <HeroTag />
          </div>
        </div>

        <div className="mt-32 gap-8">
          <HeroSearch />
          <HeroCompanies />
        </div>

        {/* ↓ Scroll Down Indicator */}
        <div className="mt-20 animate-bounce text-gray-400">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
