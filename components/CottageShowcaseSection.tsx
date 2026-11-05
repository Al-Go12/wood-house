"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COTTAGE_SHOWCASE } from "@/lib/content";
import { EditorialImage } from "./EditorialImage";
import { useEnquiry } from "./EnquiryProvider";

export function CottageShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { openEnquiry } = useEnquiry();
  const activeCottage = COTTAGE_SHOWCASE[activeIndex];

  return (
    <section
      id="the-stay"
      className="py-24 sm:py-32 bg-[#EDE7D9] text-[#282722] border-t border-[#282722]/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14 border-b border-[#282722]/15">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#24382D] font-medium">
              SECTION 03 · THE STAY & ARCHITECTURAL STUDIES
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#282722] leading-[1.08]">
              Crafted in timber. Framed by the High Range.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#282722]/80 leading-relaxed font-light">
              Our cottages are conceived not as ordinary hotel rooms, but as quiet wooden vantage points overlooking the mist, tea slopes, and forest canopy of Suryanelli.
            </p>
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#24382D]/80">
              Note: Cottage names, exact inventory & amenities below include editable content placeholders pending final property verification.
            </p>
          </div>
        </div>

        {/* Architectural Study Selector Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 sm:gap-3" role="tablist" aria-label="Cottage Studies">
            {COTTAGE_SHOWCASE.map((cottage, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={cottage.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveIndex(idx)}
                  className={`
                    px-5 py-3 text-left transition-all cursor-pointer border
                    ${
                      isSelected
                        ? "bg-[#24382D] text-[#EDE7D9] border-[#24382D]"
                        : "bg-[#F7F5EF]/70 text-[#282722] border-[#282722]/15 hover:border-[#24382D]"
                    }
                  `}
                >
                  <span className="block text-[10px] tracking-[0.24em] uppercase opacity-70">
                    {cottage.code}
                  </span>
                  <span className="font-editorial text-lg sm:text-xl">
                    {cottage.name.replace(" [Editable Name Placeholder]", "")}
                  </span>
                </button>
              );
            })}
          </div>

          <Link
            href="/stay"
            className="text-xs tracking-[0.22em] uppercase text-[#24382D] hover:text-[#A18A6B] underline underline-offset-8 transition-colors"
          >
            Discover Your Stay (Full Architectural Guide) →
          </Link>
        </div>

        {/* Asymmetric Multi-Image Architectural Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 7 Cols: Large Landscape + Vertical & Detail Pair */}
          <div className="lg:col-span-7 space-y-6">
            <EditorialImage
              asset={activeCottage.primaryImage}
              className="w-full aspect-[16/10]"
              showCaptionOverlay={true}
            />
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
              <div className="sm:col-span-7">
                <EditorialImage
                  asset={activeCottage.secondaryImage}
                  className="w-full aspect-[4/3]"
                />
                <p className="mt-2 text-[11px] tracking-[0.16em] uppercase text-[#282722]/65">
                  Interior Study · {activeCottage.secondaryImage.title}
                </p>
              </div>
              <div className="sm:col-span-5">
                <EditorialImage
                  asset={activeCottage.detailImage}
                  className="w-full aspect-[4/5]"
                />
                <p className="mt-2 text-[11px] tracking-[0.16em] uppercase text-[#282722]/65">
                  Material & Veranda Detail
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Editorial Story, Spatial Notes, Editable Placeholders & Enquiry */}
          <div className="lg:col-span-5 bg-[#F7F5EF] p-7 sm:p-10 border border-[#282722]/12 space-y-7">
            <div className="space-y-2 border-b border-[#282722]/12 pb-6">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] tracking-[0.24em] uppercase text-[#A18A6B] font-medium">
                  {activeCottage.code}
                </span>
                {activeCottage.isPlaceholderName && (
                  <span className="px-2.5 py-0.5 bg-[#EDE7D9] text-[#24382D] text-[10px] tracking-[0.15em] uppercase">
                    Editable Placeholder
                  </span>
                )}
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#282722] font-normal leading-tight">
                {activeCottage.name}
              </h3>
              <p className="text-xs tracking-[0.15em] uppercase text-[#24382D]/80 pt-1">
                {activeCottage.architecturalSubtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#282722]/85 leading-relaxed font-light">
              {activeCottage.editorialDescription}
            </p>

            {/* Surrounding View & Environment */}
            <div className="p-4 bg-[#EDE7D9]/70 border-l-2 border-[#24382D]">
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#24382D] font-medium mb-1">
                Surrounding Environment & Outlook
              </p>
              <p className="text-xs sm:text-sm text-[#282722]/85 leading-relaxed">
                {activeCottage.viewEnvironment}
              </p>
            </div>

            {/* Spatial & Architectural Notes */}
            <div className="space-y-3">
              <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#282722]/70">
                Architectural & Spatial Character
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#282722]/85">
                {activeCottage.spatialNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#A18A6B] mt-0.5">—</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Editable Amenities Placeholders */}
            <div className="space-y-3 pt-2 border-t border-[#282722]/12">
              <div className="flex items-center justify-between">
                <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#282722]/70">
                  Accommodation Features (Verify Before Publication)
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeCottage.verifiedAmenitiesPlaceholder.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 bg-[#EDE7D9]/50 border border-[#282722]/10 text-[11px] text-[#282722]/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Enquiry Actions — Zero Public Pricing */}
            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={() =>
                  openEnquiry(`Cottage Enquiry: ${activeCottage.name}`)
                }
                className="
                  w-full py-4 px-6 bg-[#24382D] text-[#EDE7D9]
                  text-xs tracking-[0.24em] uppercase font-medium
                  hover:bg-[#282722] transition-colors cursor-pointer
                "
              >
                Enquire About This Cottage
              </button>
              <Link
                href="/stay"
                className="
                  block w-full py-3.5 px-6 border border-[#282722]/25 text-center
                  text-xs tracking-[0.22em] uppercase text-[#282722]
                  hover:bg-[#EDE7D9] transition-colors
                "
              >
                Discover Your Stay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

