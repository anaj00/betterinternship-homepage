"use client";

export default function HeroSearch() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center w-full">
      {/* Search input with icon */}
      <div className="relative w-full ">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
          className="block w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-[var(--color-green)] focus:border-[var(--color-green)] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[var(--color-green)] dark:focus:border-[var(--color-green)]"
          placeholder="Search an internship"
          required
        />
      </div>

      {/* Search button outside */}
      <button
        type="submit"
        className="text-white bg-[var(--color-green)] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-2xl px-6 py-4 transition"
      >
        Search
      </button>
    </div>
  );
}
