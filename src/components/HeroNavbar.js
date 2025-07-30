"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Image from "next/image";

export function HeroNavbar() {
  const navItems = [
    {
      name: "Internships",
      link: "#features",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="px-4 sm:px-6 md:px-12 max-w-screen-xl mx-auto w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody className="hidden md:flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="relative w-11 h-11">
              <Image src="/logo-only.png" alt="Logo" fill />
            </div>
            <div className="flex-col">
              <div className="font-medium text-2xl -mb-3">Better</div>
              <div className="font-semibold text-2xl">Internship</div>
            </div>
          </div>

          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="dark" className="bg-primary">
              Sign up
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="flex md:hidden">
          <MobileNavHeader className="flex items-center justify-between px-4 py-3 w-full rounded-xl">
            <div className="flex items-center gap-2">
              <div className="relative w-11 h-11">
                <Image src="/logo-only.png" alt="Logo" fill />
              </div>
              <div className="flex-col">
                <div className="font-medium text-xl -mb-2">Better</div>
                <div className="font-semibold text-xl">Internship</div>
              </div>
            </div>

            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 text-base py-2"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              <a
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded-full bg-gray-100 text-sm font-medium hover:bg-primary hover:text-white transition"
              >
                Login
              </a>
              <a
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-2 rounded-full bg-primary text-sm font-medium text-white hover:brightness-110 transition"
              >
                Sign up
              </a>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
