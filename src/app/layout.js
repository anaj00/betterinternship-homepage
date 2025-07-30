import './globals.css';
import { Providers } from './providers';

import { HeroNavbar } from "@/components/HeroNavbar";

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
          <main className="pt-4 px-6">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

