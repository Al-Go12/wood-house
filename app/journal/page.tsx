import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { IMAGE_ASSETS } from "@/lib/images";
import { JOURNAL_ARTICLES } from "@/lib/content";
import { EditorialImage } from "@/components/EditorialImage";
import { VisualJournalGallery } from "@/components/VisualJournalGallery";

export const metadata: Metadata = {
  title: "Journal — Stories from the Hills",
  description:
    "Editorial dispatches, seasonal travel notes, and visual stories from Suryanelli, Kolukkumalai, Anayirankal, and Marayoor in the Western Ghats.",
};

export default function JournalIndexPage() {
  return (
    <div className="bg-[#F7F5EF] text-[#282722]">
      {/* Page Hero */}
      <section className="relative min-h-[62vh] flex items-end bg-[#18261E] text-[#F7F5EF] pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <EditorialImage
            asset={IMAGE_ASSETS.introMountainValley}
            className="w-full h-full"
            priority={true}
            overlayGradient="hero"
            zoomOnHover={false}
          />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-4">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#A18A6B]">
            WOODHOUSE JOURNAL · STORIES FROM THE HILLS
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal max-w-4xl leading-[1.06]">
            Field notes from Suryanelli & the High Range.
          </h1>
          <p className="text-base sm:text-lg text-[#EDE7D9]/85 max-w-2xl font-light leading-relaxed">
            Long-form essays on mountain mornings, high-altitude tea trails, forest waters, and regional conservation heritage.
          </p>
        </div>
      </section>

      {/* Editorial Dispatches List */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-20">
        {JOURNAL_ARTICLES.map((article, idx) => (
          <article
            key={article.slug}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 border-b border-[#282722]/12"
          >
            <Link
              href={`/journal/${article.slug}`}
              className={`lg:col-span-7 block ${
                idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <EditorialImage
                asset={article.heroImage}
                className="w-full aspect-[16/10]"
                showCaptionOverlay={true}
              />
            </Link>

            <div
              className={`lg:col-span-5 space-y-5 ${
                idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-[#24382D]">
                <span className="px-2.5 py-1 bg-[#EDE7D9]">
                  {article.category}
                </span>
                <span>{article.readingTime}</span>
                <span className="text-[#929B83]">{article.locationTag}</span>
              </div>

              <Link href={`/journal/${article.slug}`} className="block group">
                <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#282722] group-hover:text-[#24382D] transition-colors font-normal leading-tight">
                  {article.title}
                </h2>
              </Link>

              <p className="font-editorial italic text-xl text-[#24382D]">
                {article.subtitle}
              </p>

              <p className="text-sm sm:text-base text-[#282722]/80 leading-relaxed font-light">
                {article.excerpt}
              </p>

              <div className="pt-2">
                <Link
                  href={`/journal/${article.slug}`}
                  className="
                    inline-flex items-center px-6 py-3.5 bg-[#24382D] text-[#EDE7D9]
                    text-xs tracking-[0.22em] uppercase hover:bg-[#282722] transition-colors
                  "
                >
                  Read Full Essay →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Complete Visual Journal / Gallery */}
      <VisualJournalGallery />
    </div>
  );
}

