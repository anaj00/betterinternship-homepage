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

        <div className="w-full mt-30">
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full">
            <div className="">
              <Newsletter />
            </div>
            <div className="relative">
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
