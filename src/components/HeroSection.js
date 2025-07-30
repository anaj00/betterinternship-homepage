import HeroIllustration from "./HeroIllustration.js";
import HeroHeadline from "./HeroHeadline";
import HeroTag from "./HeroTag";
import HeroSearch from "./HeroSearch";
import HeroCompanies from "./HeroCompanies";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <HeroIllustration />
      <div className="relative">
        <HeroHeadline />
        <div className="absolute right-[-60px] -top-[-110px]">
          <HeroTag />
        </div>
      </div>

      <div className="flex flex-col mt-32 gap-8">
        <HeroSearch />
        <HeroCompanies />
      </div>
    </section>
  );
}
