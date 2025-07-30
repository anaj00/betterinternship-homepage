"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const jobCards = [
  {
    company: "Grab",
    description:
      "Grab is a Southeast Asian technology company that offers a variety of services. Working at Grab has been an exhilarating journey.",
    tags: [
      "UX Strategy",
      "Technology Solutions",
      "Operations",
      "Advertising",
      "Business Development",
    ],
  },
  {
    company: "Upwork",
    description:
      "Upwork is one of the largest freelance platforms, connecting freelancers with businesses across the globe.",
    tags: ["Empowered Work", "Freelance Autonomy", "Remote Collaboration"],
  },
  {
    company: "Spotify",
    description:
      "Spotify is a global audio streaming service. It’s where creators and listeners connect, grow, and vibe.",
    tags: ["Audio", "Backend", "Growth", "Product Design"],
  },
  {
    company: "Tokopedia",
    description:
      "Tokopedia is a leading Indonesian e-commerce platform that enables individuals and businesses to open and manage online stores.",
    tags: ["UX Research", "Infra", "Growth", "Community"],
  },
  {
    company: "Tokopedia",
    description:
      "Tokopedia is a leading Indonesian e-commerce platform that enables individuals and businesses to open and manage online stores.",
    tags: ["UX Research", "Infra", "Growth", "Community"],
  },
  {
    company: "Tokopedia",
    description:
      "Tokopedia is a leading Indonesian e-commerce platform that enables individuals and businesses to open and manage online stores.",
    tags: ["UX Research", "Infra", "Growth", "Community"],
  },
];

const tagColors = [
  "bg-[#FF9AA2]",
  "bg-[#FFDAC1]",
  "bg-[#E2F0CB]",
  "bg-[#B5EAD7]",
  "bg-[#C7CEEA]",
  "bg-[#F3D1F4]",
  "bg-[#FFD6E0]",
];

export default function JobCardCarousel() {
  return (
    <section className="px-4 py-16">
      <div className="rounded-[3rem] bg-gradient-to-b from-[var(--color-primary)] to-white p-6 sm:p-12">
        <div className="text-center text-[2.2rem] sm:text-[3rem] font-bold mb-12 text-white drop-shadow-sm">
          Best Companies for Employees 2024
        </div>

        <Swiper
          className="w-full"
          spaceBetween={24}
          slidesPerView={1.1}
          grabCursor={true}
          touchRatio={1.5}
          loop={true}
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {jobCards.map((card, index) => (
            <SwiperSlide key={index} className="!w-auto py-5">
              <div className="w-full max-w-sm bg-white backdrop-blur-md rounded-3xl p-6 border border-gray-200 shadow-md transition duration-300 hover:shadow-xl">
                <h5 className="text-xl font-bold mb-2">{card.company}</h5>
                <p className="text-gray-700 text-sm">{card.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full text-black font-medium ${
                        tagColors[i % tagColors.length]
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="mt-6 bg-black text-white font-semibold px-5 py-2 rounded-full hover:scale-105 transition">
                  View Job
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex justify-center">
          <button className="text-black text-sm font-medium border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
