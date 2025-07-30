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
        <div className="flex flex-col md:flex-row gap-6 p-8 w-full">
          <div className="flex-1">
            <Newsletter />
          </div>
          <div className="flex-1">
            <Testimonies />
          </div>
        </div>
      </main>

      {/* <footer className="">
        <Footer />
      </footer> */}
    </div>
  );
}
