export default function Newsletter() {
  return (
    <div className="w-full p-12 backdrop-blur-md rounded-2xl text-white bg-primary transition-shadow duration-300 shadow-[0_0_30px_var(--color-primary)]">
      <h2 className="text-5xl font-bold text-white mb-2">
        Stay ahead of your internship hunt
      </h2>
      <p className="text-white mb-6 ">
        Subscribe to our newsletter for the latest internship openings, career
        tips, and application hacks—delivered weekly.
      </p>

      <div className="flex gap-4">
        {/* Input */}
        <div className="relative w-full">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <input
            type="email"
            id="email"
            className="block w-full py-3 pl-12 pr-4 text-base rounded-2xl border border-gray-300 bg-gray-50 shadow-sm focus:ring-[var(--color-green)] focus:border-[var(--color-green)] placeholder-gray-500"
            placeholder="Enter your email to get internship updates"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-white text-primary font-semibold px-6 py-3 rounded-xl hover:brightness-105 active:scale-95 transition-all shadow-sm min-w-[110px]"
        >
          Let’s go
        </button>
      </div>
    </div>
  );
}
