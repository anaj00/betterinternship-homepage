"use client";
import CardSwap, { Card } from "@/blocks/Components/CardSwap/CardSwap";

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
    <div className="relative w-full h-[420px] flex justify-center items-center">
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={6000}
        pauseOnHover={true}
        className="w-full max-w-2xl"
      >
        {testimonials.map((t, i) => (
          <Card
            key={i}
            avatar={t.avatar}
            customClass="bg-white text-gray-800 dark:bg-[#1d1d1f] dark:text-gray-100"
            header={
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400">
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
  );
}
