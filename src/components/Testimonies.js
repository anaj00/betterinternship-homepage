"use client";
import CardSwap, { Card } from "@/blocks/Components/CardSwap/CardSwap";

const jobCards = [
  {
    title: "Senior Art Director",
    type: "Full-time · On-site",
    location: "Sydney, Australia",
    salary: null,
  },
  {
    title: "Staff Product Designer",
    type: "Remote",
    location: "San Francisco, California",
    salary: "$134K/year",
  },
  {
    title: "UX Researcher",
    type: "Remote",
    location: "Tokyo, Japan",
    salary: "$94K/year",
  },
];

export default function Testimonies() {
  return (
    <div className="relative w-full h-[360px] flex justify-center items-center">
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
        className="w-full max-w-md"
      >
        {jobCards.map((card, i) => (
          <Card
            key={i}
            header={
              <>
                <h3 className="text-pink-600 font-semibold text-sm">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-500">{card.type}</p>
              </>
            }
            content={
              <>
                <p className="text-sm font-medium">{card.location}</p>
                {card.salary && (
                  <p className="text-green-600 font-semibold">{card.salary}</p>
                )}
              </>
            }
          />
        ))}
      </CardSwap>
    </div>
  );
}
