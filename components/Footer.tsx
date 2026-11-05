"use client";

import React from "react";
import Link from "next/link";
import { BRAND_CONFIG } from "@/lib/content";
import { IMAGE_ASSETS } from "@/lib/images";
import { EditorialImage } from "./EditorialImage";
import { useEnquiry, buildWhatsAppEnquiryUrl } from "./EnquiryProvider";

export function Footer() {
  const { openEnquiry } = useEnquiry();

  return (
    <footer className="bg-[#18261E] text-[#EDE7D9] pb-16 sm:pb-0">
      {/* SECTION 10 — FINAL BRAND EXPERIENCE (Full-Width Cinematic Closing Banner) */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden border-t border-[#EDE7D9]/15">
        <div className="absolute inset-0">
          <EditorialImage
            asset={IMAGE_ASSETS.expSunrise}
            className="w-full h-full"
            overlayGradient="hero"
            zoomOnHover={false}
          />
        </div>

        <div className="relative z-20 max-w-4xl mx-auto px-6 py-24 text-center space-y-6">
          <p className="text-[11px] tracking-[0.34em] uppercase text-[#EDE7D9]/80">
            WOODHOUSE · SURYANELLI · MUNNAR · WESTERN GHATS
          </p>
          <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-[#F7F5EF] leading-[1.08]">
            Your next story begins in the hills.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#EDE7D9]/85 max-w-2xl mx-auto leading-relaxed font-light">
            Leave the ordinary behind. Discover a different side of Munnar.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openEnquiry("Stay & Bespoke Itinerary Enquiry")}
              className="
                w-full sm:w-auto px-9 py-4 bg-[#EDE7D9] text-[#24382D]
                text-xs tracking-[0.24em] uppercase font-medium
                hover:bg-[#A18A6B] hover:text-[#F7F5EF] transition-colors cursor-pointer
              "
            >
              Enquire About Your Stay
            </button>
            <Link
              href="/discover"
              className="
                w-full sm:w-auto px-9 py-4 border border-[#F7F5EF]/60 text-[#F7F5EF]
                text-xs tracking-[0.24em] uppercase font-medium
                hover:bg-[#F7F5EF]/15 transition-colors
              "
            >
              Explore The Location
            </Link>
          </div>
        </div>
      </section>

      {/* Architectural Colophon & Configurable Contact Grid */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#EDE7D9]/15">
          {/* Col 1: Brand Identity */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <Link
                href="/"
                className="font-editorial text-3xl tracking-[0.24em] uppercase text-[#F7F5EF] block"
              >
                WOODHOUSE
              </Link>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#A18A6B] mt-1">
                Suryanelli · Munnar · Idukki · Kerala
              </p>
            </div>
            <p className="text-sm text-[#EDE7D9]/75 leading-relaxed max-w-sm font-light">
              A place to stay, a destination to explore, and a gateway to discover the beauty, mountain trails, and living heritage of the Western Ghats.
            </p>
            <div className="pt-2 text-[11px] tracking-[0.2em] uppercase text-[#929B83]">
              {BRAND_CONFIG.location.coordinates} · {BRAND_CONFIG.location.elevation}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#A18A6B]">
              The Narrative
            </h3>
            <ul className="space-y-2.5 text-sm text-[#EDE7D9]/80">
              <li>
                <Link href="/stay" className="hover:text-[#F7F5EF] transition-colors">
                  The Stay & Cottages
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-[#F7F5EF] transition-colors">
                  Mountain Experiences
                </Link>
              </li>
              <li>
                <Link href="/discover" className="hover:text-[#F7F5EF] transition-colors">
                  Discover Munnar
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#F7F5EF] transition-colors">
                  Stories from the Hills
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F7F5EF] transition-colors">
                  Beyond the Stay & Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F7F5EF] transition-colors">
                  Enquire & Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Destinations */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#A18A6B]">
              Gateway Circuit
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs text-[#EDE7D9]/75">
              <li>
                <Link href="/discover#suryanelli" className="hover:text-[#F7F5EF]">
                  A. Suryanelli
                </Link>
              </li>
              <li>
                <Link href="/discover#kolukkumalai" className="hover:text-[#F7F5EF]">
                  B. Kolukkumalai
                </Link>
              </li>
              <li>
                <Link href="/discover#phantom-hills" className="hover:text-[#F7F5EF]">
                  C. Phantom Hills
                </Link>
              </li>
              <li>
                <Link href="/discover#anayirankal-dam" className="hover:text-[#F7F5EF]">
                  D. Anayirankal
                </Link>
              </li>
              <li>
                <Link href="/discover#chokramudi-peak" className="hover:text-[#F7F5EF]">
                  E. Chokramudi
                </Link>
              </li>
              <li>
                <Link href="/discover#meesapulimala" className="hover:text-[#F7F5EF]">
                  F. Meesapulimala
                </Link>
              </li>
              <li>
                <Link href="/discover#mattupetty-dam" className="hover:text-[#F7F5EF]">
                  G. Mattupetty
                </Link>
              </li>
              <li>
                <Link href="/discover#kundala-lake" className="hover:text-[#F7F5EF]">
                  H. Kundala Lake
                </Link>
              </li>
              <li>
                <Link href="/discover#marayoor" className="hover:text-[#F7F5EF]">
                  I. Marayoor
                </Link>
              </li>
              <li>
                <Link href="/discover#chinnar-wildlife-sanctuary" className="hover:text-[#F7F5EF]">
                  J. Chinnar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Configurable Contact & Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[11px] tracking-[0.25em] uppercase text-[#A18A6B]">
              Direct Contact & Location
            </h3>
            <div className="space-y-3 text-sm text-[#EDE7D9]/85 font-light">
              <p className="leading-relaxed">
                {BRAND_CONFIG.contact.addressLines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <div className="pt-1 space-y-1.5 text-xs">
                <p>
                  <span className="text-[#929B83] uppercase tracking-[0.15em] mr-2">
                    Phone:
                  </span>
                  <a
                    href={`tel:${BRAND_CONFIG.contact.whatsappNumber}`}
                    className="hover:text-[#A18A6B] transition-colors"
                  >
                    {BRAND_CONFIG.contact.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="text-[#929B83] uppercase tracking-[0.15em] mr-2">
                    WhatsApp:
                  </span>
                  <a
                    href={buildWhatsAppEnquiryUrl({})}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[#A18A6B] hover:text-[#A18A6B] transition-colors"
                  >
                    Message Host Concierge ↗
                  </a>
                </p>
                <p>
                  <span className="text-[#929B83] uppercase tracking-[0.15em] mr-2">
                    Email:
                  </span>
                  <a
                    href={`mailto:${BRAND_CONFIG.contact.email}`}
                    className="hover:text-[#A18A6B] transition-colors"
                  >
                    {BRAND_CONFIG.contact.email}
                  </a>
                </p>
              </div>
              <div className="pt-3 flex flex-wrap items-center gap-4 text-[11px] tracking-[0.2em] uppercase">
                <a
                  href={BRAND_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDE7D9] hover:text-[#A18A6B] underline"
                >
                  Google Maps ↗
                </a>
                <a
                  href={BRAND_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDE7D9] hover:text-[#A18A6B] underline"
                >
                  Instagram ({BRAND_CONFIG.contact.instagramHandle}) ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Transparency Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#929B83]">
          <p>
            © 2026 WOODHOUSE, Suryanelli, Munnar, Idukki, Kerala. All rights reserved.
          </p>
          <p className="text-[11px] text-[#929B83]/80 max-w-xl md:text-right">
            Stay enquiries are handled personally upon availability verification. Off-property jeep safaris, boating, and forest treks are subject to local operator and Kerala Forest Department regulations.
          </p>
        </div>
      </div>
    </footer>
  );
}
