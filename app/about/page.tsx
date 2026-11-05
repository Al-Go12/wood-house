import type { Metadata } from "next";
import React from "react";
import { IMAGE_ASSETS } from "@/lib/images";
import {
  BEYOND_THE_STAY_PROJECTS,
  SANDALWOOD_HERITAGE_CONTENT,
} from "@/lib/content";
import { EditorialImage } from "@/components/EditorialImage";
import { HeroEnquiryActions } from "@/components/HeroEnquiryActions";

export const metadata: Metadata = {
  title: "About WOODHOUSE & Beyond the Stay",
  description:
    "The story of WOODHOUSE in Suryanelli, Munnar—our philosophy of mountain living, regional stewardship, Beyond the Stay initiatives, and the sandalwood heritage of Idukki.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F5EF] text-[#282722]">
      {/* Page Hero */}
      <section className="relative min-h-[65vh] flex items-end bg-[#18261E] text-[#F7F5EF] pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <EditorialImage
            asset={IMAGE_ASSETS.sandalwoodBotanical}
            className="w-full h-full"
            priority={true}
            overlayGradient="hero"
            zoomOnHover={false}
          />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-5">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#A18A6B]">
            ABOUT WOODHOUSE · STEWARDSHIP & HERITAGE
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal max-w-4xl leading-[1.06]">
            Stay close to nature. Discover beyond the ordinary.
          </h1>
          <p className="text-base sm:text-lg text-[#EDE7D9]/85 max-w-2xl font-light leading-relaxed">
            A place to stay, a destination to explore, and a gateway to the ecology, mountain trails, and living forest heritage of the Western Ghats.
          </p>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#24382D]">
              OUR ETHOS IN SURYANELLI
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#282722] font-normal leading-tight">
              Accommodation is only the beginning of the story.
            </h2>
            <p className="text-base text-[#282722]/85 leading-relaxed font-light">
              Set in Suryanelli—the high-range threshold to Kolukkumalai and the southern Munnar ridges—WOODHOUSE brings together warm timber cottages, authentic regional exploration, and a deep respect for the surrounding hills.
            </p>
            <p className="text-base text-[#282722]/85 leading-relaxed font-light">
              Rather than isolating travellers inside a conventional resort perimeter, we encourage guests to step into the landscape: to meet the local 4x4 drivers who navigate the dawn trails, to walk the spice-scented footpaths, and to understand the delicate ecosystems of the Idukki highlands.
            </p>
            <div className="pt-2">
              <HeroEnquiryActions
                subject="General Brand & Stay Enquiry"
                label="Connect With WOODHOUSE"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <EditorialImage
              asset={IMAGE_ASSETS.heroMunnarMist}
              className="w-full aspect-[4/3]"
              showCaptionOverlay={true}
            />
          </div>
        </div>
      </section>

      {/* Beyond the Stay Initiatives */}
      <section className="py-24 bg-[#EDE7D9] border-t border-[#282722]/12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#24382D]">
              BEYOND THE STAY
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#282722] font-normal">
              Our story doesn&apos;t end at the doorstep.
            </h2>
            <p className="text-sm text-[#282722]/75 font-light">
              Editable placeholder slots reserved for verified conservation projects, community initiatives, and associated ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BEYOND_THE_STAY_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-[#F7F5EF] border border-[#282722]/12 flex flex-col justify-between"
              >
                <EditorialImage
                  asset={proj.image}
                  className="w-full aspect-[4/3]"
                />
                <div className="p-7 space-y-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#24382D] block">
                    {proj.tag}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#282722]">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-[#282722]/80 font-light leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-xs text-[#282722]/65 bg-[#EDE7D9]/60 p-3 border-l-2 border-[#A18A6B]">
                    {proj.editorialDetail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sandalwood Heritage / Chandanam Section */}
      <section className="py-24 bg-[#282722] text-[#EDE7D9]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#A18A6B]">
              {SANDALWOOD_HERITAGE_CONTENT.eyebrow}
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#F7F5EF] font-normal">
              {SANDALWOOD_HERITAGE_CONTENT.headline}
            </h2>
            <p className="text-base text-[#EDE7D9]/80 font-light leading-relaxed">
              {SANDALWOOD_HERITAGE_CONTENT.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SANDALWOOD_HERITAGE_CONTENT.chapters.map((ch) => (
              <div
                key={ch.number}
                className="p-7 bg-[#18261E] border border-[#EDE7D9]/12 space-y-3"
              >
                <span className="font-editorial text-2xl text-[#A18A6B]">
                  Chapter {ch.number}
                </span>
                <h3 className="font-editorial text-2xl text-[#F7F5EF]">
                  {ch.title}
                </h3>
                <p className="text-sm text-[#EDE7D9]/80 font-light leading-relaxed">
                  {ch.body}
                </p>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#24382D] border border-[#A18A6B]/40 text-xs text-[#EDE7D9]/85 leading-relaxed">
            {SANDALWOOD_HERITAGE_CONTENT.verificationDisclaimer}
          </div>
        </div>
      </section>
    </div>
  );
}

