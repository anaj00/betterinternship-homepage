"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HeroSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    const url = trimmed
      ? `https://www.betterinternship.com/search?q=${encodeURIComponent(
          trimmed
        )}`
      : `https://www.betterinternship.com/search`;
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row gap-4 items-center w-full"
    >
      {/* Input */}
      <div className="relative w-full">
        <label htmlFor="search" className="sr-only">
          Search internships
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-full py-3 pl-12 pr-4 text-base rounded-2xl border border-gray-300 bg-gray-50 shadow-sm focus:ring-[var(--color-green)] focus:border-[var(--color-green)] placeholder-gray-500"
          placeholder="Try “UI/UX Designer”, “Remote internships”, or “Marketing”"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full sm:w-auto bg-[var(--color-green)] text-white font-semibold px-6 py-3 rounded-xl hover:brightness-105 active:scale-95 transition-all shadow-sm min-w-[110px]"
      >
        Let’s go
      </button>
    </form>
  );
}
