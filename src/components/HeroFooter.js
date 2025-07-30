"use client"

import { Image } from "next/image";
import { Link } from "next/link";

export default function HeroFooter() {
  return (
    <footer className="w-full bg-primary text-white px-6 py-10 sm:px-12">
      <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20">
        {/* Brand Info */}
        <div className="flex flex-col gap-3 max-w-sm">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-only.png"
              alt="BetterInternship Logo"
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">BetterInternship</span>
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            Your one-stop platform for discovering internships, streamlining
            your application process, and getting hired faster in the
            Philippines.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-4 text-sm">
          <span className="font-semibold text-white">Navigation</span>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/jobs" className="hover:underline">
            Job Board
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4 text-sm">
          <span className="font-semibold text-white">Follow Us</span>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white hover:fill-gray-200 transition"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775..."></path>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white hover:fill-gray-200 transition"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245..."></path>
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 fill-white hover:fill-gray-200 transition"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l..."></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-xs text-white/60 text-center">
        © {new Date().getFullYear()} BetterInternship. All rights reserved.
      </div>
    </footer>
  );
}
