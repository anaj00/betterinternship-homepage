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
        <div className="absolute right-[-60px] -top-[-120px]">
          <HeroTag />
        </div>
      </div>
      <HeroSearch />
      <HeroCompanies />
    </section>
  );
}
