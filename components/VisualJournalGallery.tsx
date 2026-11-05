"use client";

import React, { useState, useEffect } from "react";
import { GALLERY_COLLECTION, ImageAsset } from "@/lib/images";
import { EditorialImage } from "./EditorialImage";

const GALLERY_FILTERS = [
  { id: "all", label: "All Plates" },
  { id: "cottages-interiors", label: "Cottages & Interiors" },
  { id: "mountains-tea", label: "Mist & Tea Estates" },
  { id: "adventures", label: "Jeep, Trails & Waters" },
  { id: "heritage-culture", label: "Sandalwood & Culture" },
] as const;

export function VisualJournalGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages: ImageAsset[] = GALLERY_COLLECTION.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "cottages-interiors") {
      return item.category === "cottages" || item.category === "interiors";
    }
    if (activeFilter === "mountains-tea") {
      return (
        item.category === "hero" ||
        item.category === "tea-plantations" ||
        item.category === "mist-mountains" ||
        item.category === "sunrise-sunset"
      );
    }
    if (activeFilter === "adventures") {
      return (
        item.category === "kolukkumalai-jeep" ||
        item.category === "trekking" ||
        item.category === "boating" ||
        item.category === "destinations" ||
        item.category === "forests-waterfalls"
      );
    }
    if (activeFilter === "heritage-culture") {
      return (
        item.category === "sandalwood" || item.category === "culture-food"
      );
    }
    return true;
  });

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredImages.length
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredImages.length) % filteredImages.length
        );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, filteredImages.length]);

  const currentLightboxAsset =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-[#EDE7D9] text-[#282722] border-t border-[#282722]/12"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-[#282722]/15">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#24382D] font-medium">
              SECTION 08 · THE VISUAL JOURNAL
            </p>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#282722] leading-[1.08]">
              Moments That Stay With You.
            </h2>
          </div>
          <div className="lg:col-span-5 space-y-3">
            <p className="text-sm sm:text-base text-[#282722]/80 leading-relaxed font-light">
              A collection of landscapes, little adventures and moments from life around Woodhouse.
            </p>
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#24382D]/75">
              Select any photographic plate to open full-screen archival view.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {GALLERY_FILTERS.map((f) => {
            const isSelected = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setLightboxIndex(null);
                  setActiveFilter(f.id);
                }}
                className={`
                  px-4 py-2 text-xs tracking-[0.18em] uppercase transition-colors cursor-pointer border
                  ${
                    isSelected
                      ? "bg-[#24382D] text-[#EDE7D9] border-[#24382D]"
                      : "bg-[#F7F5EF]/75 text-[#282722] border-[#282722]/15 hover:border-[#24382D]"
                  }
                `}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Masonry Composition */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          {filteredImages.map((asset, index) => {
            // Vary column spans asymmetrically across a 12-column editorial grid
            const patternIndex = index % 6;
            const colSpanClass =
              patternIndex === 0
                ? "md:col-span-7"
                : patternIndex === 1
                ? "md:col-span-5"
                : patternIndex === 2
                ? "md:col-span-4"
                : patternIndex === 3
                ? "md:col-span-8"
                : patternIndex === 4
                ? "md:col-span-6"
                : "md:col-span-6";

            const aspectClass =
              patternIndex === 0
                ? "aspect-[16/10]"
                : patternIndex === 1
                ? "aspect-[4/5]"
                : patternIndex === 2
                ? "aspect-[3/4]"
                : patternIndex === 3
                ? "aspect-[16/9]"
                : "aspect-[4/3]";

            return (
              <figure
                key={asset.id}
                className={`${colSpanClass} group cursor-pointer space-y-2.5`}
                onClick={() => setLightboxIndex(index)}
              >
                <div className="relative overflow-hidden">
                  <EditorialImage
                    asset={asset}
                    className={`w-full ${aspectClass}`}
                    showCaptionOverlay={false}
                  />
                  <div className="
                    absolute inset-0 z-30 bg-[#18261E]/0 group-hover:bg-[#18261E]/35
                    transition-colors duration-500 flex items-end justify-between p-5
                  ">
                    <span className="
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      px-3 py-1.5 bg-[#F7F5EF] text-[#282722] text-[10px] tracking-[0.2em] uppercase
                    ">
                      Expand Plate +
                    </span>
                  </div>
                </div>
                <figcaption className="flex items-baseline justify-between gap-4 text-xs pt-1">
                  <span className="font-editorial text-lg text-[#282722] group-hover:text-[#24382D] transition-colors">
                    {asset.title}
                  </span>
                  <span className="text-[10px] tracking-[0.18em] uppercase text-[#282722]/60 shrink-0">
                    {asset.location}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Lightbox Viewer */}
      {currentLightboxAsset && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#18261E]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 text-[#EDE7D9]"
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image viewer"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-[#EDE7D9]/15 pb-4">
            <div className="text-xs tracking-[0.22em] uppercase text-[#A18A6B]">
              PLATE {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredImages.length).padStart(2, "0")} ·{" "}
              {currentLightboxAsset.location}
            </div>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="px-4 py-2 border border-[#EDE7D9]/30 text-xs tracking-[0.2em] uppercase hover:bg-[#EDE7D9] hover:text-[#24382D] transition-colors cursor-pointer"
            >
              Close (ESC) ✕
            </button>
          </div>

          {/* Center Image Stage */}
          <div className="my-auto py-6 max-w-5xl w-full mx-auto">
            <EditorialImage
              asset={currentLightboxAsset}
              className="w-full max-h-[70vh] aspect-[16/10]"
              zoomOnHover={false}
              overlayGradient="none"
            />
          </div>

          {/* Bottom Caption & Prev/Next Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#EDE7D9]/15 pt-4">
            <div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F5EF]">
                {currentLightboxAsset.title}
              </h3>
              <p className="text-xs text-[#929B83] mt-0.5">
                {currentLightboxAsset.alt} · {currentLightboxAsset.credit}
              </p>
            </div>
            <div className="flex items-center gap-3 self-end sm:self-auto">
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + filteredImages.length) %
                      filteredImages.length
                  )
                }
                className="px-5 py-2.5 border border-[#EDE7D9]/30 text-xs tracking-[0.2em] uppercase hover:bg-[#EDE7D9] hover:text-[#24382D] transition-colors cursor-pointer"
              >
                ← Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % filteredImages.length)
                }
                className="px-5 py-2.5 border border-[#EDE7D9]/30 text-xs tracking-[0.2em] uppercase hover:bg-[#EDE7D9] hover:text-[#24382D] transition-colors cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

