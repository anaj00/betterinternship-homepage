import './globals.css';
import { Providers } from './providers';

import { HeroNavbar } from "@/components/HeroNavbar";
import Image from "next/image";
import  Link  from "next/link";

export const metadata = {
  title: "BetterInternship",
  description: "Your one-stop internship platform in the Philippines",
  icons: {
    icon: "/logo-only.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-only.png" type="image/png" />
      </head>
      <body>
        <Providers>
          <HeroNavbar />
          <main className="pt-0 px-0 sm:px-6 sm:pt-4">{children}</main>
          <footer className="w-full text-gray-700 px-6 py-12 bg-white border border-gray-300">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-12">
              {/* Brand Info */}
              <div className="flex flex-col gap-4 max-w-md">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo-only.png"
                    alt="BetterInternship Logo"
                    className="w-10 h-10"
                  />
                  <span className="text-xl font-bold">BetterInternship</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Your one-stop platform for discovering internships,
                  streamlining your application process, and getting hired
                  faster in the Philippines.
                </p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-4 text-sm">
                <span className="font-semibold text-gray-700">Navigation</span>
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
            </div>

            {/* Bottom Note */}
            <div className="mt-10 text-xs text-white/60 text-center">
              © {new Date().getFullYear()} BetterInternship. All rights
              reserved.
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}

