"use client";

import React, { useState } from "react";
import { BRAND_CONFIG } from "@/lib/content";
import { IMAGE_ASSETS } from "@/lib/images";
import { EditorialImage } from "@/components/EditorialImage";
import {
  EnquiryFormData,
  buildWhatsAppEnquiryUrl,
} from "@/components/EnquiryProvider";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    email: "",
    arrivalDate: "",
    departureDate: "",
    guests: "2 Guests",
    interest: "Cottage Stay & Suryanelli / Kolukkumalai Exploration",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F7F5EF] text-[#282722]">
      {/* Page Hero */}
      <section className="relative min-h-[55vh] flex items-end bg-[#18261E] text-[#F7F5EF] pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <EditorialImage
            asset={IMAGE_ASSETS.heroMunnarMist}
            className="w-full h-full"
            priority={true}
            overlayGradient="hero"
            zoomOnHover={false}
          />
        </div>
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 space-y-4">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#A18A6B]">
            ENQUIRE & CONNECT · SURYANELLI, MUNNAR
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal max-w-4xl leading-[1.06]">
            Begin your conversation with the hills.
          </h1>
          <p className="text-base sm:text-lg text-[#EDE7D9]/85 max-w-2xl font-light leading-relaxed">
            Every stay at WOODHOUSE is arranged through personal enquiry so our hosts can guide you on cottage availability, weather in the High Range, and local 4x4 or trekking logistics.
          </p>
        </div>
      </section>

      {/* Main Enquiry Form & Location Details */}
      <section className="py-20 sm:py-28 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 7 Cols: Enquiry Form */}
          <div className="lg:col-span-7 bg-[#EDE7D9]/55 p-7 sm:p-12 border border-[#282722]/12 space-y-8">
            <div className="space-y-2 border-b border-[#282722]/12 pb-6">
              <p className="text-[11px] tracking-[0.24em] uppercase text-[#24382D] font-medium">
                AVAILABILITY & ITINERARY ENQUIRY
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#282722] font-normal">
                Check Availability at WOODHOUSE
              </h2>
              <p className="text-xs text-[#282722]/75 leading-relaxed pt-1">
                Please note: Submitting an enquiry is a request for availability and bespoke planning, not an instant confirmed reservation. No public room prices are listed online.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#24382D] text-[#EDE7D9] space-y-5">
                <p className="text-[11px] tracking-[0.24em] uppercase text-[#A18A6B]">
                  ENQUIRY READY FOR DISPATCH
                </p>
                <h3 className="font-editorial text-3xl text-[#F7F5EF]">
                  Thank you, {formData.name}.
                </h3>
                <p className="text-sm text-[#EDE7D9]/85 leading-relaxed font-light">
                  Your enquiry has been prepared. Connect directly with our Suryanelli host team via WhatsApp or email below to receive availability confirmation and custom tariffs for your dates.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={buildWhatsAppEnquiryUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 bg-[#EDE7D9] text-[#24382D] text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#A18A6B] hover:text-[#F7F5EF] transition-colors"
                  >
                    Send on WhatsApp →
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-4 border border-[#EDE7D9]/35 text-xs tracking-[0.2em] uppercase text-[#EDE7D9]"
                  >
                    Modify Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/75 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Full name"
                      className="w-full bg-[#F7F5EF] border border-[#282722]/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#24382D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/75 mb-2">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 ..."
                      className="w-full bg-[#F7F5EF] border border-[#282722]/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#24382D]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/75 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full bg-[#F7F5EF] border border-[#282722]/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#24382D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/75 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) =>
                        setFormData({ ...formData, guests: e.target.value })
                      }
                      className="w-full bg-[#F7F5EF] border border-[#282722]/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#24382D]"
                    >
                      <option value="1 Guest">1 Guest</option>
                      <option value="2 Guests">2 Guests</option>
                      <option value="3–4 Guests">3–4 Guests</option>
                      <option value="5–8 Guests">5–8 Guests</option>
                      <option value="8+ Guests">8+ Guests</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/75 mb-2">
                      Preferred Arrival Date
                    </label>
                    <input
                      type="date"
                      value={formData.arrivalDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          arrivalDate: e.target.value,
                        })
                      }
                      className="w-full bg-[#F7F5EF] border border-[#282722]/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#24382D]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/75 mb-2">
                      Preferred Departure Date
                    </label>
                    <input
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          departureDate: e.target.value,
                        })
                      }
                      className="w-full bg-[#F7F5EF] border border-[#282722]/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#24382D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/75 mb-2">
                    Message & Experience Interests
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share your preferred cottage style, interest in Kolukkumalai sunrise jeep safari, trekking, Anayirankal boating, or any special requests..."
                    className="w-full bg-[#F7F5EF] border border-[#282722]/20 px-4 py-3.5 text-sm focus:outline-none focus:border-[#24382D]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-4 px-8 bg-[#24382D] text-[#EDE7D9] text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#282722] transition-colors cursor-pointer"
                  >
                    Enquire Now / Check Availability
                  </button>
                  <a
                    href={buildWhatsAppEnquiryUrl(formData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-8 border border-[#24382D] text-[#24382D] text-xs tracking-[0.2em] uppercase font-medium text-center hover:bg-[#EDE7D9] transition-colors"
                  >
                    Contact on WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right 5 Cols: Direct Contact, Coordinates & Getting to Suryanelli */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#24382D] text-[#EDE7D9] space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.26em] uppercase text-[#A18A6B]">
                  DIRECT CONCIERGE & COORDINATES
                </p>
                <h3 className="font-editorial text-3xl text-[#F7F5EF] mt-1">
                  WOODHOUSE, Suryanelli
                </h3>
              </div>

              <div className="space-y-3 text-sm text-[#EDE7D9]/85 font-light">
                <p>
                  {BRAND_CONFIG.contact.addressLines.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="text-xs text-[#A18A6B] tracking-[0.18em] uppercase">
                  {BRAND_CONFIG.location.coordinates} · {BRAND_CONFIG.location.elevation}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDE7D9]/15 space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#929B83] uppercase tracking-[0.15em]">
                    WhatsApp / Phone:
                  </span>
                  <span>{BRAND_CONFIG.contact.phoneDisplay}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929B83] uppercase tracking-[0.15em]">
                    Email:
                  </span>
                  <span>{BRAND_CONFIG.contact.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#929B83] uppercase tracking-[0.15em]">
                    Instagram:
                  </span>
                  <span>{BRAND_CONFIG.contact.instagramHandle}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={BRAND_CONFIG.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3.5 bg-[#EDE7D9] text-[#24382D] text-center text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#A18A6B] hover:text-[#F7F5EF] transition-colors"
                >
                  Get Directions on Google Maps ↗
                </a>
              </div>
            </div>

            <div className="p-8 bg-[#EDE7D9] border border-[#282722]/12 space-y-4">
              <p className="text-[10px] tracking-[0.24em] uppercase text-[#24382D] font-medium">
                APPROACH NOTES · REACHING SURYANELLI
              </p>
              <h4 className="font-editorial text-2xl text-[#282722]">
                The High-Range Route
              </h4>
              <ul className="space-y-2.5 text-xs text-[#282722]/80 leading-relaxed">
                <li>
                  <strong>From Munnar Town:</strong> Follow the scenic Lockhart Gap / Chinnakkanal highway (SH-19) past estates and viewpoints toward Suryanelli.
                </li>
                <li>
                  <strong>From Cochin International Airport (COK) / Aluva:</strong> Ascend via Adimali and Munnar or via Pooppara–Chinnakkanal (verify current road conditions before departure).
                </li>
                <li>
                  <strong>From Madurai / Theni (Tamil Nadu):</strong> Climb the dramatic Bodi Mettu mountain ghat road through Pooppara and Chinnakkanal directly into Suryanelli.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

