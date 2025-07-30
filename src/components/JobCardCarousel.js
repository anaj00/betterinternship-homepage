"use client";

import { Card } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const jobCards = [
  {
    company: "Grab",
    description: "Grab is a Southeast Asian technology company...",
    tags: ["UX Design", "Tech Solutions", "Operations"],
  },
  {
    company: "Upwork",
    description: "Upwork connects freelancers with clients worldwide.",
    tags: ["Remote", "Freelance", "Marketing"],
  },
  {
    company: "Spotify",
    description: "Spotify provides audio streaming services globally.",
    tags: ["Audio", "Backend", "Growth"],
  },
  {
    company: "Spotify",
    description: "Spotify provides audio streaming services globally.",
    tags: ["Audio", "Backend", "Growth"],
  },
  {
    company: "Spotify",
    description: "Spotify provides audio streaming services globally.",
    tags: ["Audio", "Backend", "Growth"],
  },
];

export default function JobCardCarousel() {
  return (
    <div className="w-full overflow-hidden bg-[var(--color-blue)] rounded-xl p-5">
      <div className="flex align-center justify-center text-4xl">
        Empowering your growth
      </div>

      <Swiper
        className="w-full"
        spaceBetween={20}
        slidesPerView={1.1}
        grabCursor={true}
        touchRatio={1.5}
        loop={true}
        modules={[Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {jobCards.map((card, index) => (
          <SwiperSlide key={index} className="!w-auto py-5">
            <Card className="w-full max-w-sm !bg-white bg-opacity-80 backdrop-blur-lg shadow-lg rounded-2xl p-6">
              <h5 className="text-xl font-bold">{card.company}</h5>
              <p className=" mt-2">{card.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 ">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[var(--color-pink)] text-white font-medium px-2.5 py-0.5 rounded-xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-6 bg-black text-white px-4 py-2 rounded-full">
                View Job
              </button>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
