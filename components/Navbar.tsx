"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEnquiry, buildWhatsAppEnquiryUrl } from "./EnquiryProvider";

const NAV_ITEMS = [
  { label: "The Stay", href: "/stay" },
  { label: "Experiences", href: "/experiences" },
  { label: "Discover", href: "/discover" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const { openEnquiry } = useEnquiry();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpenPathname, setMenuOpenPathname] = useState<string | null>(null);

  const mobileMenuOpen = menuOpenPathname === pathname;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparentHero = !scrolled && !mobileMenuOpen;

  return (
    <>
      <header
        className={`
          fixed top-0 inset-x-0 z-40 transition-all duration-500
          ${
            isTransparentHero
              ? "bg-gradient-to-b from-[#18261E]/75 via-[#18261E]/30 to-transparent py-6 text-[#F7F5EF]"
              : "bg-[#24382D]/95 backdrop-blur-md py-4 text-[#EDE7D9] border-b border-[#EDE7D9]/12 shadow-sm"
          }
        `}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between">
          {/* Left: WOODHOUSE Brand Mark */}
          <Link
            href="/"
            onClick={() => setMenuOpenPathname(null)}
            className="group flex flex-col focus:outline-none"
            aria-label="WOODHOUSE — Suryanelli, Munnar Home"
          >
            <span className="font-editorial text-2xl sm:text-[28px] tracking-[0.24em] uppercase font-normal leading-none text-[#F7F5EF]">
              WOODHOUSE
            </span>
            <span className="text-[9px] tracking-[0.34em] uppercase text-[#EDE7D9]/70 mt-1">
              Suryanelli · Munnar
            </span>
          </Link>

          {/* Center: Editorial Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-9"
            aria-label="Primary Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative text-xs tracking-[0.22em] uppercase py-1 transition-colors
                    ${
                      isActive
                        ? "text-[#F7F5EF] font-medium"
                        : "text-[#EDE7D9]/80 hover:text-[#F7F5EF]"
                    }
                  `}
                >
                  {item.label}
                  <span
                    className={`
                      absolute left-0 right-0 -bottom-0.5 h-[1px] bg-[#A18A6B] transition-transform duration-300 origin-left
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right: Refined "Enquire Now" Action & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden xl:inline-block text-[11px] tracking-[0.2em] uppercase text-[#EDE7D9]/75 hover:text-[#F7F5EF] transition-colors mr-1"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => openEnquiry("Stay & High-Range Experiences")}
              className={`
                hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5
                text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-300 cursor-pointer
                ${
                  isTransparentHero
                    ? "border border-[#F7F5EF]/60 text-[#F7F5EF] hover:bg-[#F7F5EF] hover:text-[#24382D]"
                    : "bg-[#EDE7D9] text-[#24382D] hover:bg-[#A18A6B] hover:text-[#F7F5EF]"
                }
              `}
            >
              <span>Enquire Now</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() =>
                setMenuOpenPathname((prev) =>
                  prev === pathname ? null : pathname
                )
              }
              className="
                lg:hidden inline-flex items-center justify-center px-3.5 py-2
                border border-[#EDE7D9]/30 text-[11px] tracking-[0.22em] uppercase text-[#F7F5EF]
              "
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Dedicated Full-Screen Editorial Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#18261E] text-[#EDE7D9] z-50 flex flex-col justify-between p-6 sm:p-10 overflow-y-auto border-t border-[#EDE7D9]/15">
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#A18A6B]">
                NAVIGATION · 10°03&apos;24&quot;N 77°11&apos;42&quot;E
              </p>
              <nav className="flex flex-col divide-y divide-[#EDE7D9]/12">
                <Link
                  href="/"
                  onClick={() => setMenuOpenPathname(null)}
                  className="py-4 font-editorial text-3xl text-[#F7F5EF] hover:text-[#A18A6B] transition-colors flex items-center justify-between"
                >
                  <span>Home</span>
                  <span className="text-xs font-body tracking-[0.2em] text-[#929B83]">00</span>
                </Link>
                {NAV_ITEMS.map((item, idx) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpenPathname(null)}
                    className="py-4 font-editorial text-3xl text-[#F7F5EF] hover:text-[#A18A6B] transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-body tracking-[0.2em] text-[#929B83]">
                      0{idx + 1}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMenuOpenPathname(null)}
                  className="py-4 font-editorial text-3xl text-[#F7F5EF] hover:text-[#A18A6B] transition-colors flex items-center justify-between"
                >
                  <span>Contact & Directions</span>
                  <span className="text-xs font-body tracking-[0.2em] text-[#929B83]">06</span>
                </Link>
              </nav>
            </div>

            <div className="pt-8 border-t border-[#EDE7D9]/15 space-y-4">
              <p className="font-editorial italic text-xl text-[#EDE7D9]/85">
                &ldquo;Stay close to nature. Discover beyond the ordinary.&rdquo;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpenPathname(null);
                    openEnquiry("Stay & Experience Enquiry");
                  }}
                  className="w-full py-3.5 bg-[#EDE7D9] text-[#24382D] text-xs tracking-[0.22em] uppercase font-medium"
                >
                  Enquire About Your Stay
                </button>
                <a
                  href={buildWhatsAppEnquiryUrl({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 border border-[#EDE7D9]/40 text-center text-[#EDE7D9] text-xs tracking-[0.22em] uppercase"
                >
                  WhatsApp Concierge
                </a>
              </div>
              <p className="text-[11px] text-[#929B83] tracking-[0.15em] uppercase">
                Suryanelli · Munnar · Idukki · Kerala
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Fixed Bottom Enquiry & WhatsApp Bar (Section 6 Mobile Spec) */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-30 bg-[#18261E]/95 backdrop-blur-md border-t border-[#EDE7D9]/15 px-4 py-2.5 flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => openEnquiry("Mobile Quick Enquiry")}
          className="flex-1 py-3 bg-[#EDE7D9] text-[#24382D] text-[11px] tracking-[0.2em] uppercase font-medium text-center"
        >
          Enquire Now
        </button>
        <a
          href={buildWhatsAppEnquiryUrl({})}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-3 border border-[#EDE7D9]/35 text-[#EDE7D9] text-[11px] tracking-[0.18em] uppercase text-center"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
