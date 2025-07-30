"use client";
import CardSwap, { Card } from "@/blocks/Components/CardSwap/CardSwap";
import { Image } from "next/image";

const testimonials = [
  {
    name: "Anna Reyes",
    role: "UI/UX Intern at Jollibee",
    quote:
      "This internship opened so many doors for me. The mentorship was incredible, and I learned more in 3 months than I did in a year of school.",
    avatar: "/landing/student-1.png",
  },
  {
    name: "Miguel Santos",
    role: "Software Engineer Intern at Oracle",
    quote:
      "Working at Oracle gave me hands-on experience in cloud tech and backend systems. I felt like a real part of the engineering team.",
    avatar: "/landing/student-2.png",
  },
  {
    name: "Lara Villanueva",
    role: "Marketing Intern at Alaska",
    quote:
      "I was trusted with actual campaigns, not just errands. The team encouraged creativity and supported my growth every step of the way.",
    avatar: "/landing/student-3.png",
  },
];

export default function Testimonies() {
  return (
    <>
      {/* Mobile: Simple stacked cards */}
      <div className="sm:hidden px-4 py-8 space-y-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white border border-gray-300 rounded-xl shadow p-6 text-center"
          >
            <Image
              src={t.avatar}
              alt={`${t.name} avatar`}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-pink-600 font-semibold text-base">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
            <p className="mt-4 text-gray-700 text-sm">“{t.quote}”</p>
          </div>
        ))}
      </div>

      {/* Desktop: CardSwap animation */}
      <div className="hidden sm:flex relative w-full h-[480px] justify-center items-center">
        <CardSwap
          cardDistance={40}
          verticalDistance={50}
          delay={4000}
          pauseOnHover={true}
          className="w-full max-w-xl md:max-w-2xl"
        >
          {testimonials.map((t, i) => (
            <Card
              key={i}
              avatar={t.avatar}
              customClass="bg-white text-gray-800 border border-gray-300"
              header={
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.role}
                  </p>
                </div>
              }
              content={
                <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                  “{t.quote}”
                </p>
              }
            />
          ))}
        </CardSwap>
      </div>
    </>
  );
}
