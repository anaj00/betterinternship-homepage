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
          <main className="t-0 px-0 sm:px-6 sm:pt-4 flex items-center justify-center min-h-screen overflow-x-hidden">{children}</main>
          
        </Providers>
      </body>
    </html>
  );
}

