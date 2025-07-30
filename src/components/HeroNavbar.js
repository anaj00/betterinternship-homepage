"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
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
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="mt-2 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
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
            {/* Login Button - gray */}
            <button
              type="button"
              className="text-gray-500 hover:text-white border border-[var(--color-gray)] hover:bg-[var(--color-gray)] focus:ring-4 focus:outline-none focus:ring-[var(--color-gray)] font-medium rounded-lg text-sm px-5 py-2 text-center"
            >
              Login
            </button>

            {/* Sign Up Button - pink */}
            <button
              type="button"
              className="text-[var(--color-pink)] hover:text-white border border-[var(--color-pink)] hover:bg-[var(--color-pink)] focus:ring-4 focus:outline-none focus:ring-[var(--color-pink)] font-medium rounded-lg text-sm px-5 py-2 text-center"
            >
              Sign up
            </button>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
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
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
