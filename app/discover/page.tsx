import type { Metadata } from "next";
import React from "react";
import { IMAGE_ASSETS } from "@/lib/images";
import { SANDALWOOD_HERITAGE_CONTENT } from "@/lib/content";
import { EditorialImage } from "@/components/EditorialImage";
import { DestinationExplorerSection } from "@/components/DestinationExplorerSection";
import { HeroEnquiryActions } from "@/components/HeroEnquiryActions";

export const metadata: Metadata = {
  title: "Discover Suryanelli, Kolukkumalai & Munnar",
  description:
    "An editorial field atlas to ten iconic destinations around WOODHOUSE: Suryanelli, Kolukkumalai, Phantom Hills, Anayirankal Dam, Chokramudi, Meesapulimala, Mattupetty, Kundala Lake, Marayoor, and Chinnar Wildlife Sanctuary.",
};

export default function DiscoverPage() {
  return (
    <div className="bg-[#F7F5EF] text-[#282722]">
      {/* Page Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-[#18261E] text-[#F7F5EF] pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <EditorialImage
            asset={IMAGE_ASSETS.destKolukkumalai}
            className="w-full h-full"
            priority={true}
            overlayGradient="hero"
            zoomOnHover={false}
          />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-5">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#A18A6B]">
            DISCOVER THE DESTINATION · WESTERN GHATS FIELD ATLAS
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal max-w-4xl leading-[1.06]">
            More than a stay. A world waiting to be discovered.
          </h1>
          <p className="text-base sm:text-lg text-[#EDE7D9]/85 max-w-2xl font-light leading-relaxed">
            From the high-altitude tea ridges of Suryanelli and Kolukkumalai to the forest reservoirs of Anayirankal and the natural sandalwood valleys of Marayoor.
          </p>
          <div className="pt-2">
            <HeroEnquiryActions
              subject="Destination Circuit & Stay Enquiry"
              label="Enquire About Multi-Day Exploration"
            />
          </div>
        </div>
      </section>

      {/* Complete 10-Destination Explorer (A through J) */}
      <DestinationExplorerSection />

      {/* Sandalwood Heritage Reference Section */}
      <section className="py-24 bg-[#282722] text-[#EDE7D9]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <EditorialImage
              asset={IMAGE_ASSETS.destMarayoor}
              className="w-full aspect-[16/10]"
              showCaptionOverlay={true}
            />
          </div>
          <div className="lg:col-span-6 space-y-5">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#A18A6B]">
              {SANDALWOOD_HERITAGE_CONTENT.eyebrow}
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F5EF] font-normal">
              {SANDALWOOD_HERITAGE_CONTENT.headline}
            </h2>
            <p className="text-sm sm:text-base text-[#EDE7D9]/80 font-light leading-relaxed">
              {SANDALWOOD_HERITAGE_CONTENT.chapters[0].body}
            </p>
            <p className="text-sm sm:text-base text-[#EDE7D9]/80 font-light leading-relaxed">
              {SANDALWOOD_HERITAGE_CONTENT.chapters[1].body}
            </p>
            <div className="p-4 bg-[#18261E] border border-[#A18A6B]/40 text-xs text-[#EDE7D9]/80">
              {SANDALWOOD_HERITAGE_CONTENT.verificationDisclaimer}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

