"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

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
];



const tagColors = ["bg-pink", "bg-blue", "bg-green"];


export default function JobCardCarousel() {
  return (
    <section className="py-16">
      <div className="rounded-[3rem] border border-gray-300 p-10 sm:p-12">
        <div className="text-center text-[2.2rem] sm:text-[3rem] font-bold mb-12 text-gray-700 drop-shadow-sm">
          Apply fast, <span className="text-primary">Get hired faster.</span>
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
              <div className="w-full max-w-sm backdrop-blur-md rounded-3xl p-10 border border-gray-200 shadow-md transition duration-300 hover:shadow-xl">
                <img
                  src={card.logo}
                  alt={`${card.company} logo`}
                  className="w-25 h-25 object-contain mb-4"
                />
                <h5 className="text-2xl font-bold mb-2">{card.company}</h5>

                <p className="text-sm text-gray-500 mb-2">
                  {card.role} • {card.location}
                </p>

                <p className="text-gray-600 text-sm text-justify">
                  {card.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full text-white font-medium ${
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
          <button className="text-gray-700 text-sm font-medium border border border-gray-300 px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
            Show More
          </button>
        </div>
      </div>
    </section>
  );
}
