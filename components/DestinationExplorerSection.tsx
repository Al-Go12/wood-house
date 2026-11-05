"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DESTINATIONS_LIST, DestinationItem } from "@/lib/content";
import { EditorialImage } from "./EditorialImage";
import { useEnquiry } from "./EnquiryProvider";

const CORRIDORS = [
  "All Destinations (A–J)",
  "Immediate High Range",
  "Peaks & Reservoirs",
  "Rain-Shadow & Heritage",
] as const;

export function DestinationExplorerSection() {
  const [selectedCorridor, setSelectedCorridor] = useState<string>(
    "All Destinations (A–J)"
  );
  const [activeModalDest, setActiveModalDest] =
    useState<DestinationItem | null>(null);
  const { openEnquiry } = useEnquiry();

  const filteredDestinations =
    selectedCorridor === "All Destinations (A–J)"
      ? DESTINATIONS_LIST
      : DESTINATIONS_LIST.filter((d) => d.corridor === selectedCorridor);

  return (
    <section
      id="discover"
      className="py-24 sm:py-32 bg-[#F7F5EF] text-[#282722] border-t border-[#282722]/10"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-[#282722]/15">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#24382D] font-medium">
              SECTION 05 · DISCOVER THE DESTINATION · FIELD ATLAS (A—J)
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#282722] leading-[1.08]">
              A gateway to Suryanelli and the wider Munnar high range.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#282722]/80 leading-relaxed font-light">
              WOODHOUSE is the starting point of a much larger landscape. From the 7,900-foot cloud cliffs of Kolukkumalai and the elephant waters of Anayirankal to the natural sandalwood groves of Marayoor, explore ten defining landscapes of the Western Ghats.
            </p>
            <p className="text-[11px] tracking-[0.14em] uppercase text-[#24382D]/75">
              Important: Road distances, forest permits & seasonal access hours are marked for verification prior to departure.
            </p>
          </div>
        </div>

        {/* Corridor Filter Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CORRIDORS.map((corridor) => {
              const active = selectedCorridor === corridor;
              return (
                <button
                  key={corridor}
                  type="button"
                  onClick={() => setSelectedCorridor(corridor)}
                  className={`
                    px-4 py-2.5 text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer border
                    ${
                      active
                        ? "bg-[#24382D] text-[#EDE7D9] border-[#24382D]"
                        : "bg-[#EDE7D9]/55 text-[#282722] border-[#282722]/15 hover:border-[#24382D]"
                    }
                  `}
                >
                  {corridor}
                </button>
              );
            })}
          </div>

          <Link
            href="/discover"
            className="text-xs tracking-[0.2em] uppercase text-[#24382D] hover:text-[#A18A6B] underline underline-offset-8"
          >
            Open Complete Regional Field Guide →
          </Link>
        </div>

        {/* Asymmetric Editorial Magazine Grid (Avoids repetitive 3-column SaaS cards) */}
        <div className="mt-14 space-y-20">
          {filteredDestinations.map((dest, idx) => {
            const isFeature = idx % 3 === 0;
            const isReverseSplit = idx % 3 === 2;

            if (isFeature) {
              return (
                <article
                  key={dest.id}
                  id={dest.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#282722]/12"
                >
                  <div className="lg:col-span-8">
                    <EditorialImage
                      asset={dest.image}
                      className="w-full aspect-[16/10]"
                      showCaptionOverlay={true}
                    />
                  </div>
                  <div className="lg:col-span-4 space-y-5">
                    <div className="flex items-center justify-between border-b border-[#282722]/12 pb-3">
                      <span className="font-editorial text-3xl text-[#A18A6B]">
                        {dest.code}.
                      </span>
                      <span className="text-[10px] tracking-[0.22em] uppercase text-[#24382D] bg-[#EDE7D9] px-3 py-1">
                        {dest.corridor}
                      </span>
                    </div>

                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase text-[#282722]/65 mb-1">
                        {dest.locationLabel} · {dest.elevation}
                      </p>
                      <h3 className="font-editorial text-4xl sm:text-5xl text-[#282722] font-normal">
                        {dest.name}
                      </h3>
                      <p className="font-editorial italic text-xl text-[#24382D] mt-1">
                        {dest.tagline}
                      </p>
                    </div>

                    <p className="text-sm text-[#282722]/85 leading-relaxed font-light">
                      {dest.editorialDescription}
                    </p>

                    <div className="p-3.5 bg-[#EDE7D9]/65 border-l-2 border-[#A18A6B] text-xs space-y-1">
                      <p className="font-medium text-[#282722]">
                        Distance Placeholder: {dest.distancePlaceholder}
                      </p>
                      <p className="text-[#282722]/75 text-[11px]">
                        {dest.accessNote}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() => setActiveModalDest(dest)}
                        className="
                          px-5 py-3 bg-[#24382D] text-[#EDE7D9]
                          text-xs tracking-[0.2em] uppercase font-medium
                          hover:bg-[#282722] transition-colors cursor-pointer
                        "
                      >
                        Discover More
                      </button>
                      <a
                        href={dest.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs tracking-[0.18em] uppercase text-[#24382D] hover:text-[#A18A6B] underline underline-offset-4"
                      >
                        Directions ↗
                      </a>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={dest.id}
                id={dest.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-16 border-b border-[#282722]/12"
              >
                <div
                  className={`lg:col-span-6 ${
                    isReverseSplit ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <EditorialImage
                    asset={dest.image}
                    className="w-full aspect-[4/3]"
                    showCaptionOverlay={true}
                  />
                </div>
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReverseSplit ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#282722]/12 pb-3">
                    <span className="font-editorial text-3xl text-[#A18A6B]">
                      {dest.code}.
                    </span>
                    <span className="text-[10px] tracking-[0.22em] uppercase text-[#24382D] bg-[#EDE7D9] px-3 py-1">
                      {dest.corridor}
                    </span>
                  </div>

                  <div>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#282722]/65 mb-1">
                      {dest.locationLabel} · {dest.elevation}
                    </p>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-[#282722] font-normal">
                      {dest.name}
                    </h3>
                    <p className="font-editorial italic text-lg sm:text-xl text-[#24382D] mt-1">
                      {dest.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#282722]/85 leading-relaxed font-light">
                    {dest.editorialDescription}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#282722]/80">
                    {dest.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#A18A6B]">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="p-3.5 bg-[#EDE7D9]/65 border-l-2 border-[#24382D] text-xs space-y-1">
                    <p className="font-medium text-[#282722]">
                      Distance Placeholder: {dest.distancePlaceholder}
                    </p>
                    <p className="text-[#282722]/75 text-[11px]">
                      {dest.accessNote}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveModalDest(dest)}
                      className="
                        px-5 py-3 bg-[#24382D] text-[#EDE7D9]
                        text-xs tracking-[0.2em] uppercase font-medium
                        hover:bg-[#282722] transition-colors cursor-pointer
                      "
                    >
                      Discover More
                    </button>
                    <a
                      href={dest.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-[0.18em] uppercase text-[#24382D] hover:text-[#A18A6B] underline underline-offset-4"
                    >
                      Map & Directions ↗
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Interactive "Discover More" Destination Field-Notes Modal */}
      {activeModalDest && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#18261E]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dest-modal-title"
        >
          <div
            className="fixed inset-0"
            onClick={() => setActiveModalDest(null)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#F7F5EF] text-[#282722] border border-[#282722]/20 shadow-2xl">
            <div className="relative h-64 sm:h-80">
              <EditorialImage
                asset={activeModalDest.image}
                className="w-full h-full"
                overlayGradient="bottom"
                zoomOnHover={false}
              />
              <button
                type="button"
                onClick={() => setActiveModalDest(null)}
                className="
                  absolute top-4 right-4 z-30 bg-[#18261E]/85 text-[#EDE7D9]
                  px-4 py-2 text-xs tracking-[0.2em] uppercase border border-[#EDE7D9]/25
                  hover:bg-[#282722] cursor-pointer
                "
              >
                Close ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6 z-30 text-[#F7F5EF]">
                <p className="text-[11px] tracking-[0.26em] uppercase text-[#EDE7D9]/80">
                  DESTINATION {activeModalDest.code} · {activeModalDest.corridor}
                </p>
                <h3
                  id="dest-modal-title"
                  className="font-editorial text-3xl sm:text-5xl font-normal mt-1"
                >
                  {activeModalDest.name}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#282722]/12 text-xs">
                <div>
                  <span className="text-[#929B83] uppercase tracking-[0.18em] block">
                    Location & Altitude
                  </span>
                  <span className="font-medium text-[#282722]">
                    {activeModalDest.locationLabel} · {activeModalDest.elevation}
                  </span>
                </div>
                <div>
                  <span className="text-[#929B83] uppercase tracking-[0.18em] block">
                    Distance from Suryanelli (Verify)
                  </span>
                  <span className="font-medium text-[#24382D]">
                    {activeModalDest.distancePlaceholder}
                  </span>
                </div>
              </div>

              <p className="font-editorial italic text-2xl text-[#24382D]">
                &ldquo;{activeModalDest.tagline}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[#282722]/85 leading-relaxed font-light">
                {activeModalDest.longFieldNotes}
              </p>

              <div className="space-y-2">
                <h4 className="text-[11px] tracking-[0.22em] uppercase text-[#282722]/70">
                  Field Highlights
                </h4>
                <ul className="space-y-2 text-sm text-[#282722]/85">
                  {activeModalDest.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-[#A18A6B]">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#EDE7D9] border-l-2 border-[#24382D] text-xs text-[#282722]/85 space-y-1">
                <strong className="uppercase tracking-[0.16em] text-[#24382D] block">
                  Access, Permits & Verification Notice
                </strong>
                <p>{activeModalDest.accessNote}</p>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#282722]/12">
                <button
                  type="button"
                  onClick={() => {
                    const name = activeModalDest.name;
                    setActiveModalDest(null);
                    openEnquiry(`Stay + Excursion to ${name}`);
                  }}
                  className="
                    px-6 py-3.5 bg-[#24382D] text-[#EDE7D9]
                    text-xs tracking-[0.22em] uppercase font-medium
                    hover:bg-[#282722] transition-colors cursor-pointer
                  "
                >
                  Plan This Excursion With Your Stay
                </button>
                <a
                  href={activeModalDest.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-5 py-3.5 border border-[#282722]/25 text-xs tracking-[0.2em] uppercase
                    text-[#282722] hover:bg-[#EDE7D9] transition-colors
                  "
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

