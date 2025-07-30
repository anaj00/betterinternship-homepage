import HeroSection from "@/components/HeroSection";
import JobCardCarousel from "@/components/JobCardCarousel";
import Newsletter from "@/components/Newsletter";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="w-full flex flex-col items-center gap-8">
        <HeroSection />
        <JobCardCarousel />

        <div className="w-full bg-gradient-to-r from-[var(--color-pink)] to-white rounded-[3rem] p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between w-full">
            <div className="flex-1">
              <Newsletter />
            </div>
            <div className="flex-1 relative">
              <Testimonies />
            </div>
          </div>
        </div>
      </main>

      {/* <footer className="">
        <Footer />
      </footer> */}
    </div>
  );
}
