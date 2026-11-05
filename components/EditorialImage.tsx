"use client";

import React, { useState } from "react";
import { ImageAsset } from "@/lib/images";

interface EditorialImageProps {
  asset: ImageAsset;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  showCaptionOverlay?: boolean;
  showPlaceholderBadge?: boolean;
  zoomOnHover?: boolean;
  overlayGradient?: "none" | "subtle" | "hero" | "bottom";
}

export function EditorialImage({
  asset,
  className = "",
  imgClassName = "",
  priority = false,
  showCaptionOverlay = false,
  showPlaceholderBadge = true,
  zoomOnHover = true,
  overlayGradient = "subtle",
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const gradientClass =
    overlayGradient === "hero"
      ? "bg-gradient-to-b from-[#18261E]/70 via-[#282722]/35 to-[#18261E]/85"
      : overlayGradient === "bottom"
      ? "bg-gradient-to-t from-[#282722]/85 via-[#282722]/20 to-transparent"
      : overlayGradient === "subtle"
      ? "bg-gradient-to-t from-[#282722]/35 via-transparent to-[#282722]/10"
      : "";

  return (
    <div
      className={`relative overflow-hidden bg-[#24382D] select-none group ${className}`}
      style={{
        backgroundColor: asset.palette.primary,
      }}
    >
      {/* Bespoke Western Ghats Topographic & Mountain Layer (Always present as base + offline fallback) */}
      <div
        className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 75% 20%, ${asset.palette.accent}28 0%, transparent 55%), linear-gradient(160deg, ${asset.palette.primary} 0%, ${asset.palette.secondary} 60%, #18261E 100%)`,
        }}
      >
        {/* Topographic SVG ridge lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,420 Q180,340 340,390 T680,330 T800,370 L800,600 L0,600 Z"
            fill={asset.palette.secondary}
            opacity="0.5"
          />
          <path
            d="M0,480 Q220,390 420,440 T800,400 L800,600 L0,600 Z"
            fill={asset.palette.primary}
            opacity="0.8"
          />
          <path
            d="M-50,260 C150,200 280,310 480,230 C640,170 720,250 850,210"
            fill="none"
            stroke="#EDE7D9"
            strokeWidth="0.75"
            strokeDasharray="4 6"
            opacity="0.4"
          />
          <path
            d="M-50,310 C180,240 310,350 510,280 C660,220 740,290 850,260"
            fill="none"
            stroke="#EDE7D9"
            strokeWidth="0.6"
            opacity="0.3"
          />
          <circle cx="620" cy="140" r="48" fill={asset.palette.accent} opacity="0.18" />
        </svg>

        <div className="relative z-10 flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-[#EDE7D9]/50 font-body">
          <span>{asset.location}</span>
          {asset.elevation && <span>{asset.elevation}</span>}
        </div>

        <div className="relative z-10 my-auto text-center px-4 opacity-40">
          <p className="font-editorial italic text-lg md:text-xl text-[#EDE7D9]">
            {asset.title}
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between text-[10px] tracking-[0.18em] uppercase text-[#EDE7D9]/40 font-body">
          <span>WOODHOUSE ARCHIVE</span>
          {asset.coordinates && <span>{asset.coordinates}</span>}
        </div>
      </div>

      {/* High-Resolution Photograph */}
      {!hasError && (
        <img
          src={asset.src}
          alt={asset.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`relative z-10 w-full h-full object-cover transition-all duration-[1200ms] ease-out ${
            zoomOnHover ? "group-hover:scale-[1.04]" : ""
          } ${isLoaded ? "opacity-100" : "opacity-90"} ${imgClassName}`}
        />
      )}

      {/* Atmospheric Color-Grading Overlay */}
      {overlayGradient !== "none" && (
        <div className={`
          pointer-events-none absolute inset-0 z-20 ${gradientClass}
        `} />
      )}

      {/* Explicit Property Placeholder Transparency Badge (Per Section 4 requirement: never present another property as WOODHOUSE without clear temporary placeholder notice) */}
      {showPlaceholderBadge && asset.isPropertyPlaceholder && (
        <div className="
          absolute top-3 left-3 z-30 max-w-[90%]
          bg-[#282722]/80 backdrop-blur-md border border-[#EDE7D9]/20
          px-3 py-1.5 text-[10px] tracking-[0.16em] uppercase text-[#EDE7D9]/90
        ">
          <span>Architectural Mood Placeholder · Replace with WOODHOUSE Photo</span>
        </div>
      )}

      {/* Optional Editorial Caption Overlay */}
      {showCaptionOverlay && (
        <div className="
          pointer-events-none absolute bottom-0 inset-x-0 z-30 p-4 md:p-6
          flex items-end justify-between gap-4
          text-[#EDE7D9]
        ">
          <div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-[#EDE7D9]/75 mb-1">
              {asset.location} {asset.elevation ? `· ${asset.elevation}` : ""}
            </p>
            <p className="font-editorial text-lg md:text-xl leading-snug text-[#F7F5EF]">
              {asset.title}
            </p>
          </div>
          {asset.coordinates && (
            <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] uppercase text-[#EDE7D9]/65 shrink-0">
              {asset.coordinates}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

