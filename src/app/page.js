import HeroSection from "@/components/HeroSection";
import JobCardCarousel from "@/components/JobCardCarousel";
import Newsletter from "@/components/Newsletter";
import Testimonies from "@/components/Testimonies";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen grid place-items-center p-8 pb-20 gap-16 sm:p-20">
      <main className="w-full flex flex-col items-center gap-8 mt-20">
        <HeroSection />
        {/* <JobCardCarousel /> */}

        <div className="w-full mt-20 sm:mt-24 md:mt-30 sm:px-6">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center w-full">
            {/* Newsletter Section */}
            <div className="w-full md:w-auto">
              <Newsletter />
            </div>

            {/* Testimonies Section */}
            <div className="w-full md:w-auto relative">
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
