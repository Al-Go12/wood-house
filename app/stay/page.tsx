import type { Metadata } from "next";
import React from "react";
import { IMAGE_ASSETS } from "@/lib/images";
import { COTTAGE_SHOWCASE } from "@/lib/content";
import { EditorialImage } from "@/components/EditorialImage";
import { CottageShowcaseSection } from "@/components/CottageShowcaseSection";
import { HeroEnquiryActions } from "@/components/HeroEnquiryActions";

export const metadata: Metadata = {
  title: "The Stay & Wooden Cottages",
  description:
    "Explore the wooden cottages and architectural living spaces of WOODHOUSE in Suryanelli, Munnar. Designed for slow mountain living and panoramic Western Ghats views.",
};

export default function StayPage() {
  return (
    <div className="bg-[#F7F5EF] text-[#282722]">
      {/* Page Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-[#18261E] text-[#F7F5EF] pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <EditorialImage
            asset={IMAGE_ASSETS.cottageCanopyExterior}
            className="w-full h-full"
            priority={true}
            overlayGradient="hero"
            zoomOnHover={false}
          />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-5">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#A18A6B]">
            THE STAY · ARCHITECTURAL SANCTUARY IN SURYANELLI
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal max-w-4xl leading-[1.06]">
            Wooden cottages shaped for mountain stillness.
          </h1>
          <p className="text-base sm:text-lg text-[#EDE7D9]/85 max-w-2xl font-light leading-relaxed">
            Warm timber joinery, quiet verandas overlooking the morning mist, and interiors that frame the shifting sky of the Western Ghats.
          </p>
          <div className="pt-2">
            <HeroEnquiryActions
              subject="Cottage Stay Availability Enquiry"
              label="Enquire About Cottage Availability"
            />
          </div>
        </div>
      </section>

      {/* Architectural Philosophy Section */}
      <section className="py-20 sm:py-28 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#24382D]">
              SPATIAL PHILOSOPHY
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#282722] font-normal leading-tight">
              Built to listen to the mountain weather.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-base text-[#282722]/85 font-light leading-relaxed">
            <p>
              At 1,500 metres in Suryanelli, architecture has a distinct responsibility: to offer warmth when the evening mountain mist rolls down from Kolukkumalai, and to open generously when the morning sun illuminates the emerald tea slopes.
            </p>
            <p>
              Every space at WOODHOUSE privileges natural textures—warm timber surfaces, uncluttered bedrooms, and outdoor decks where you can sit with a cup of high-grown Munnar tea and watch clouds drift through the valley.
            </p>
            <div className="p-5 bg-[#EDE7D9] border-l-2 border-[#24382D] text-xs text-[#282722]/85">
              <strong className="uppercase tracking-[0.16em] text-[#24382D] block mb-1">
                Editorial & Inventory Verification Notice
              </strong>
              In accordance with our commitment to authenticity, no public room tariffs are displayed online, and specific room counts, occupancy numbers, and facility inventories are marked as editable placeholders until verified property specifications are finalized.
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Architectural Showcase */}
      <CottageShowcaseSection />

      {/* Detailed Study Breakdown */}
      <section className="py-24 bg-[#F7F5EF] border-t border-[#282722]/12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-20">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#24382D]">
              COMPLETE ACCOMMODATION STUDIES
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#282722] font-normal">
              Compare Our Spaces
            </h2>
          </div>

          <div className="space-y-16">
            {COTTAGE_SHOWCASE.map((cottage, idx) => (
              <div
                key={cottage.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#282722]/12 items-center"
              >
                <div className="lg:col-span-5">
                  <EditorialImage
                    asset={cottage.primaryImage}
                    className="w-full aspect-[4/3]"
                  />
                </div>
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.22em] uppercase text-[#A18A6B]">
                      {cottage.code} · 0{idx + 1}
                    </span>
                    <span className="text-[10px] tracking-[0.16em] uppercase px-2.5 py-1 bg-[#EDE7D9] text-[#24382D]">
                      Enquiry-Based Availability
                    </span>
                  </div>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#282722]">
                    {cottage.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#282722]/80 font-light leading-relaxed">
                    {cottage.editorialDescription}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {cottage.verifiedAmenitiesPlaceholder.map((am, i) => (
                      <div
                        key={i}
                        className="px-3.5 py-2.5 bg-[#EDE7D9]/60 text-xs text-[#282722]/85 border border-[#282722]/10"
                      >
                        {am}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

