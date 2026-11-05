import type { Metadata } from "next";
import React from "react";
import { IMAGE_ASSETS } from "@/lib/images";
import { EditorialImage } from "@/components/EditorialImage";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { HeroEnquiryActions } from "@/components/HeroEnquiryActions";

export const metadata: Metadata = {
  title: "Mountain Experiences & Expeditions",
  description:
    "Discover off-road jeep safaris to Kolukkumalai, Western Ghats trekking, boating at Anayirankal, cycling through tea estates, and sunrise cloud-sea experiences from WOODHOUSE Suryanelli.",
};

export default function ExperiencesPage() {
  return (
    <div className="bg-[#24382D] text-[#EDE7D9]">
      {/* Page Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-[#18261E] text-[#F7F5EF] pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <EditorialImage
            asset={IMAGE_ASSETS.expJeepSafari}
            className="w-full h-full"
            priority={true}
            overlayGradient="hero"
            zoomOnHover={false}
          />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-5">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#A18A6B]">
            EXPERIENCES · HIGH-RANGE EXPEDITIONS & SLOW TRAILS
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal max-w-4xl leading-[1.06]">
            The mountains are calling.
          </h1>
          <p className="text-base sm:text-lg text-[#EDE7D9]/85 max-w-2xl font-light leading-relaxed">
            Whether ascending rugged tea-estate tracks by 4x4 before dawn or walking quietly beneath cardamom and silver-oak shade, discover the Western Ghats at your own rhythm.
          </p>
          <div className="pt-2">
            <HeroEnquiryActions
              subject="Bespoke Experience & Stay Planning"
              label="Plan Your Mountain Itinerary"
            />
          </div>
        </div>
      </section>

      {/* Operator & Permit Transparency Strip */}
      <section className="py-16 bg-[#18261E] border-b border-[#EDE7D9]/12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#A18A6B]">
              01 · PROPERTY SURROUNDINGS
            </span>
            <h2 className="font-editorial text-2xl text-[#F7F5EF]">
              Doorstep Nature Walks
            </h2>
            <p className="text-xs text-[#EDE7D9]/75 leading-relaxed font-light">
              Quiet morning and evening walks along public tea footpaths and spice-shaded lanes around Suryanelli begin right outside WOODHOUSE.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#A18A6B]">
              02 · LOCAL 4X4 & GUIDE PARTNERS
            </span>
            <h2 className="font-editorial text-2xl text-[#F7F5EF]">
              Jeep Safaris & Ridge Treks
            </h2>
            <p className="text-xs text-[#EDE7D9]/75 leading-relaxed font-light">
              Off-road ascents to Kolukkumalai and guided ridge walks are operated by registered local Suryanelli 4x4 associations and experienced regional guides.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.24em] uppercase text-[#A18A6B]">
              03 · FOREST & RESERVOIR AUTHORITIES
            </span>
            <h2 className="font-editorial text-2xl text-[#F7F5EF]">
              Permitted Summits & Boating
            </h2>
            <p className="text-xs text-[#EDE7D9]/75 leading-relaxed font-light">
              Meesapulimala treks require advance KFDC bookings, Chinnar treks are led by the Kerala Forest Department, and reservoir boating is managed by DTPC/hydel authorities.
            </p>
          </div>
        </div>
      </section>

      {/* All 6 Experiences Showcase */}
      <ExperiencesSection />
    </div>
  );
}

