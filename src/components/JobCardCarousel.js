"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const jobCards = [
  {
    company: "Alaska",
    logo: "/logos/alaska.png",
    role: "Marketing Intern",
    location: "Makati, PH",
    rating: 4.6,
    description:
      "Alaska Milk Corporation is a leading dairy company in the Philippines, committed to providing quality nutrition for Filipino families.",
    tags: ["Marketing", "Product Development", "Supply Chain"],
  },
  {
    company: "Jollibee",
    logo: "/logos/jollibee.png",
    role: "Brand Associate",
    location: "Ortigas, PH",
    rating: 4.8,
    description:
      "Jollibee is the largest fast-food chain in the Philippines, known for bringing joy through food and strong Filipino values.",
    tags: ["Operations", "Branding", "Customer Experience"],
  },
  {
    company: "Manulife",
    logo: "/logos/manulife.png",
    role: "Tech Intern",
    location: "Taguig, PH",
    rating: 4.5,
    description:
      "Manulife is a global financial services group helping people make decisions easier and lives better through insurance and investments.",
    tags: ["Finance", "Technology", "Customer Solutions"],
  },
  {
    company: "Oracle",
    logo: "/logos/oracle.png",
    role: "Software Engineering Intern",
    location: "Remote",
    rating: 4.7,
    description:
      "Oracle is a multinational technology company specializing in database software, cloud engineering, and enterprise solutions.",
    tags: ["Cloud", "AI/ML", "Database", "Software Engineering"],
  },
  {
    company: "Jollibee",
    logo: "/logos/jollibee.png",
    role: "Brand Associate",
    location: "Ortigas, PH",
    rating: 4.8,
    description:
      "Jollibee is the largest fast-food chain in the Philippines, known for bringing joy through food and strong Filipino values.",
    tags: ["Operations", "Branding", "Customer Experience"],
  },
  {
    company: "Manulife",
    logo: "/logos/manulife.png",
    role: "Tech Intern",
    location: "Taguig, PH",
    rating: 4.5,
    description:
      "Manulife is a global financial services group helping people make decisions easier and lives better through insurance and investments.",
    tags: ["Finance", "Technology", "Customer Solutions"],
  },
  {
    company: "Oracle",
    logo: "/logos/oracle.png",
    role: "Software Engineering Intern",
    location: "Remote",
    rating: 4.7,
    description:
      "Oracle is a multinational technology company specializing in database software, cloud engineering, and enterprise solutions.",
    tags: ["Cloud", "AI/ML", "Database", "Software Engineering"],
  },
];

function JobCard({ card }) {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[370px] md:max-w-[340px] lg:max-w-[320px] xl:max-w-[300px] bg-white text-gray-800 border border-gray-300 rounded-3xl p-8 backdrop-blur-md shadow-md transition duration-300 transform hover:scale-[1.02] hover:border-pink-300 hover:shadow-[0_0_20px_rgba(221,100,184,0.3)] mx-auto">
      {card.location === "Remote" && (
        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
          Remote
        </div>
      )}

      <img
        src={card.logo}
        alt={`${card.company} logo`}
        className="w-28 h-16 object-contain mb-4 mx-auto"
      />

      <h5 className="text-xl font-bold mb-1">{card.company}</h5>
      <p className="text-sm text-gray-500 mb-2">
        {card.role} • {card.location}
      </p>

      <p className="text-gray-600 text-sm text-justify mb-2">
        {card.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {card.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full font-medium bg-pink-100 text-pink-600 hover:brightness-110 transition"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1 text-yellow-500 text-sm mt-4">
        {"⭐".repeat(Math.floor(card.rating))}
        <span className="text-gray-500 ml-1">({card.rating})</span>
      </div>

      {/* View Job Button */}
      <div className="flex justify-end">
        <button className="mt-6 bg-black text-white font-semibold px-5 py-2 rounded-full hover:scale-105 transition">
          View Job
        </button>
      </div>
    </div>
  );
}

export default function JobCardCarousel() {
  return (
    <section className="py-16">
      <div className="rounded-[3rem] border border-gray-300 p-6 sm:p-8 md:p-10 w-full backdrop-blur-md shadow-[0_0_30px_rgba(221,100,184,0.3)] transition-shadow duration-300">
        <div className="text-center text-[2.2rem] sm:text-[3rem] font-bold mb-12 text-gray-700 drop-shadow-sm">
          Apply fast, <span className="text-primary">Get hired faster.</span>
        </div>

        {/* Desktop carousel: hidden on mobile */}
        <div className="hidden md:block">
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
                <JobCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile carousel: visible only on mobile */}
        <div className="block md:hidden">
          <Swiper
            className="mx-auto max-w-xs"
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 2600, disableOnInteraction: false }}
          >
            {jobCards.map((card, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <JobCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Show More Button */}
        <div className="mt-10 flex justify-center">
          <button className="text-gray-500 text-sm font-medium border border-gray-300 px-6 py-2 rounded-full hover:bg-primary hover:text-white transition duration-300 hover:scale-105">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
