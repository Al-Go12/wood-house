"use client";

import React from "react";
import Link from "next/link";
import { EXPERIENCES_LIST } from "@/lib/content";
import { EditorialImage } from "./EditorialImage";
import { useEnquiry } from "./EnquiryProvider";

export function ExperiencesSection() {
  const { openEnquiry } = useEnquiry();

  return (
    <section
      id="experiences"
      className="py-24 sm:py-32 bg-[#24382D] text-[#EDE7D9] border-t border-[#EDE7D9]/12"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 border-b border-[#EDE7D9]/15">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#A18A6B]">
              SECTION 04 · EXPERIENCES · THE MOUNTAINS ARE CALLING
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F7F5EF] leading-[1.08]">
              Find your way into the wild.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#EDE7D9]/80 leading-relaxed font-light">
              From pre-dawn 4x4 ascents up the boulder trails of Kolukkumalai to quiet walks beneath cardamom shade and afternoons on the still waters of Anayirankal, Suryanelli is built for exploration.
            </p>
            <p className="text-[11px] tracking-[0.14em] uppercase text-[#929B83]">
              Transparency Note: Property-side walks are clearly distinguished below from expeditions operated by licensed local 4x4 unions, DTPC, or Forest Authorities.
            </p>
          </div>
        </div>

        {/* Alternating Asymmetric Editorial Showcases for All 6 Experiences */}
        <div className="divide-y divide-[#EDE7D9]/12">
          {EXPERIENCES_LIST.map((exp, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={exp.id}
                className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Oversized Photograph Column */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <EditorialImage
                    asset={exp.image}
                    className={`w-full ${
                      index % 3 === 0 ? "aspect-[16/10]" : "aspect-[16/11]"
                    }`}
                    showCaptionOverlay={true}
                  />
                </div>

                {/* Editorial Narrative Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-editorial text-3xl sm:text-4xl text-[#A18A6B]">
                      {exp.number}
                    </span>
                    <span
                      className={`
                        px-3 py-1 text-[10px] tracking-[0.18em] uppercase border
                        ${
                          exp.operatorType === "property-surroundings"
                            ? "bg-[#EDE7D9]/15 border-[#EDE7D9]/35 text-[#F7F5EF]"
                            : "bg-[#18261E]/80 border-[#A18A6B]/45 text-[#EDE7D9]/90"
                        }
                      `}
                    >
                      {exp.operatorBadge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#F7F5EF] font-normal">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm tracking-[0.16em] uppercase text-[#A18A6B]">
                      {exp.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#EDE7D9]/85 leading-relaxed font-light">
                    {exp.editorialStory}
                  </p>

                  <div className="p-4 bg-[#18261E]/70 border-l-2 border-[#A18A6B] space-y-1.5">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#A18A6B]">
                      Terrain, Timing & Operator Note
                    </p>
                    <p className="text-xs text-[#EDE7D9]/90">
                      {exp.terrainAndTiming}
                    </p>
                    <p className="text-[11px] text-[#929B83] leading-relaxed">
                      {exp.operatorClarification}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#EDE7D9]/80">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#A18A6B]">—</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() =>
                        openEnquiry(`Experience Enquiry: ${exp.title} (${exp.subtitle})`)
                      }
                      className="
                        px-6 py-3.5 bg-[#EDE7D9] text-[#24382D]
                        text-xs tracking-[0.22em] uppercase font-medium
                        hover:bg-[#A18A6B] hover:text-[#F7F5EF] transition-colors cursor-pointer
                      "
                    >
                      Enquire About {exp.title}
                    </button>
                    <Link
                      href="/experiences"
                      className="text-xs tracking-[0.2em] uppercase text-[#EDE7D9]/80 hover:text-[#F7F5EF] underline underline-offset-8"
                    >
                      Full Expedition Notes →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

