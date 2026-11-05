"use client";

import React from "react";
import { useEnquiry } from "./EnquiryProvider";

export function HeroEnquiryActions({
  subject = "Stay & High-Range Experiences",
  label = "Enquire About Availability",
}: {
  subject?: string;
  label?: string;
}) {
  const { openEnquiry } = useEnquiry();

  return (
    <button
      type="button"
      onClick={() => openEnquiry(subject)}
      className="
        inline-flex items-center justify-center px-6 py-4
        text-xs tracking-[0.22em] uppercase text-[#EDE7D9]/85 hover:text-[#F7F5EF]
        underline underline-offset-8 decoration-[#A18A6B] transition-colors cursor-pointer
      "
    >
      {label} →
    </button>
  );
}

