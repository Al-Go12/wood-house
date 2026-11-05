"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { BRAND_CONFIG } from "@/lib/content";

interface EnquiryContextType {
  isOpen: boolean;
  initialSubject: string;
  openEnquiry: (subject?: string) => void;
  closeEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType>({
  isOpen: false,
  initialSubject: "",
  openEnquiry: () => {},
  closeEnquiry: () => {},
});

export function useEnquiry() {
  return useContext(EnquiryContext);
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email: string;
  arrivalDate: string;
  departureDate: string;
  guests: string;
  interest: string;
  message: string;
}

export function buildWhatsAppEnquiryUrl(data: Partial<EnquiryFormData>) {
  const lines = [
    `Hello WOODHOUSE Suryanelli,`,
    data.interest
      ? `I would like to enquire about: ${data.interest}.`
      : `I would like to enquire about a stay and mountain experiences at WOODHOUSE.`,
    data.name ? `Name: ${data.name}` : "",
    data.arrivalDate || data.departureDate
      ? `Preferred Dates: ${data.arrivalDate || "Flexible"} to ${data.departureDate || "Flexible"}`
      : "",
    data.guests ? `Guests: ${data.guests}` : "",
    data.message ? `Notes: ${data.message}` : "",
  ].filter(Boolean);

  const encoded = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${BRAND_CONFIG.contact.whatsappNumber}?text=${encoded}`;
}

export function EnquiryProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialSubject, setInitialSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    email: "",
    arrivalDate: "",
    departureDate: "",
    guests: "2 Guests",
    interest: "Stay & High-Range Experiences",
    message: "",
  });

  const openEnquiry = (subject?: string) => {
    if (subject) {
      setInitialSubject(subject);
      setFormData((prev) => ({ ...prev, interest: subject }));
    }
    setSubmitted(false);
    setIsOpen(true);
  };

  const closeEnquiry = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeEnquiry();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    /**
     * BACKEND / CRM INTEGRATION POINT:
     * Connect this handler to an API Route (`/api/enquiry`), Formspree, Resend, or a hospitality CRM webhook.
     * Currently records the enquiry state in the UI and offers direct WhatsApp or email dispatch.
     */
    setSubmitted(true);
  };

  return (
    <EnquiryContext.Provider
      value={{ isOpen, initialSubject, openEnquiry, closeEnquiry }}
    >
      {children}

      {/* Global Slide-Over Enquiry Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-[#18261E]/70 backdrop-blur-sm transition-opacity"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-drawer-title"
        >
          <div
            className="fixed inset-0"
            onClick={closeEnquiry}
            aria-hidden="true"
          />

          <div className="
            relative z-10 w-full max-w-xl bg-[#F7F5EF] text-[#282722]
            h-full overflow-y-auto shadow-2xl border-l border-[#282722]/15
            flex flex-col justify-between p-6 sm:p-10
          ">
            <div>
              {/* Drawer Header */}
              <div className="flex items-start justify-between border-b border-[#282722]/15 pb-6">
                <div>
                  <p className="text-[11px] tracking-[0.26em] uppercase text-[#24382D] font-medium mb-2">
                    WOODHOUSE · SURYANELLI, MUNNAR
                  </p>
                  <h2
                    id="enquiry-drawer-title"
                    className="font-editorial text-3xl sm:text-4xl text-[#282722] font-normal"
                  >
                    Enquire About Your Stay
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closeEnquiry}
                  className="
                    p-2 text-[#282722]/70 hover:text-[#282722]
                    border border-[#282722]/15 hover:border-[#282722]/40
                    transition-colors text-xs tracking-[0.2em] uppercase
                  "
                  aria-label="Close enquiry panel"
                >
                  Close ✕
                </button>
              </div>

              {/* Important Reservation Transparency Notice */}
              <div className="mt-5 bg-[#EDE7D9] border-l-2 border-[#24382D] p-4 text-xs leading-relaxed text-[#282722]/85">
                <strong className="uppercase tracking-[0.14em] text-[#24382D] block mb-1">
                  Personalised Availability & Bespoke Planning
                </strong>
                Submitting an enquiry initiates a direct conversation with our hosts in Suryanelli to check cottage availability, seasonal weather conditions, and local 4x4 or trekking arrangements.{" "}
                <span className="underline decoration-[#A18A6B]">
                  Please note that an online enquiry is a request for availability and not an instant confirmed reservation.
                </span>
              </div>

              {submitted ? (
                <div className="my-10 p-8 bg-[#24382D] text-[#EDE7D9] space-y-6">
                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#A18A6B]">
                    ENQUIRY PREPARED
                  </p>
                  <h3 className="font-editorial text-3xl text-[#F7F5EF]">
                    Thank you, {formData.name || "Traveller"}.
                  </h3>
                  <p className="text-sm leading-relaxed text-[#EDE7D9]/85">
                    Your stay and experience preferences have been formatted for our team in Suryanelli. Remember that this enquiry is a request for availability—our hosts will respond personally with cottage options and current high-range guidance.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={buildWhatsAppEnquiryUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center px-6 py-3.5
                        bg-[#EDE7D9] text-[#24382D] text-xs tracking-[0.2em] uppercase font-medium
                        hover:bg-[#A18A6B] hover:text-[#F7F5EF] transition-colors
                      "
                    >
                      Send Directly via WhatsApp →
                    </a>
                    <a
                      href={`mailto:${BRAND_CONFIG.contact.email}?subject=${encodeURIComponent(
                        `Stay Enquiry — ${formData.name}`
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nArrival: ${formData.arrivalDate}\nDeparture: ${formData.departureDate}\nGuests: ${formData.guests}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="
                        inline-flex items-center justify-center px-6 py-3.5
                        border border-[#EDE7D9]/35 text-[#EDE7D9] text-xs tracking-[0.2em] uppercase
                        hover:bg-[#EDE7D9]/10 transition-colors
                      "
                    >
                      Send via Email Client
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs tracking-[0.16em] uppercase text-[#EDE7D9]/65 underline"
                  >
                    Edit Enquiry Details
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/70 mb-1.5">
                      Enquiry Focus
                    </label>
                    <input
                      type="text"
                      value={formData.interest}
                      onChange={(e) =>
                        setFormData({ ...formData, interest: e.target.value })
                      }
                      placeholder="e.g., Cottage Stay + Kolukkumalai Sunrise Jeep Safari"
                      className="
                        w-full bg-[#EDE7D9]/60 border border-[#282722]/20 px-4 py-3 text-sm
                        focus:outline-none focus:border-[#24382D]
                      "
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/70 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your name"
                        className="
                          w-full bg-white border border-[#282722]/20 px-4 py-3 text-sm
                          focus:outline-none focus:border-[#24382D]
                        "
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/70 mb-1.5">
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
                        className="
                          w-full bg-white border border-[#282722]/20 px-4 py-3 text-sm
                          focus:outline-none focus:border-[#24382D]
                        "
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/70 mb-1.5">
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
                        className="
                          w-full bg-white border border-[#282722]/20 px-4 py-3 text-sm
                          focus:outline-none focus:border-[#24382D]
                        "
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/70 mb-1.5">
                        Number of Guests *
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) =>
                          setFormData({ ...formData, guests: e.target.value })
                        }
                        className="
                          w-full bg-white border border-[#282722]/20 px-4 py-3 text-sm
                          focus:outline-none focus:border-[#24382D]
                        "
                      >
                        <option value="1 Guest">1 Guest (Solo Retreat)</option>
                        <option value="2 Guests">2 Guests (Couple / Pair)</option>
                        <option value="3–4 Guests">3–4 Guests (Small Group / Family)</option>
                        <option value="5–8 Guests">5–8 Guests (Multi-Cottage Gathering)</option>
                        <option value="8+ Guests">8+ Guests (Bespoke Group Enquiry)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/70 mb-1.5">
                        Preferred Arrival Date
                      </label>
                      <input
                        type="date"
                        value={formData.arrivalDate}
                        onChange={(e) =>
                          setFormData({ ...formData, arrivalDate: e.target.value })
                        }
                        className="
                          w-full bg-white border border-[#282722]/20 px-4 py-3 text-sm
                          focus:outline-none focus:border-[#24382D]
                        "
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/70 mb-1.5">
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
                        className="
                          w-full bg-white border border-[#282722]/20 px-4 py-3 text-sm
                          focus:outline-none focus:border-[#24382D]
                        "
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-[#282722]/70 mb-1.5">
                      Your Message & Experience Interests
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your travel plans, preferred pace, or interest in Kolukkumalai sunrise jeeps, Anayirankal, trekking, or Marayoor..."
                      className="
                        w-full bg-white border border-[#282722]/20 px-4 py-3 text-sm
                        focus:outline-none focus:border-[#24382D]
                      "
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="
                        flex-1 bg-[#24382D] text-[#EDE7D9] py-4 px-6
                        text-xs tracking-[0.22em] uppercase font-medium
                        hover:bg-[#282722] transition-colors cursor-pointer
                      "
                    >
                      Check Availability
                    </button>
                    <a
                      href={buildWhatsAppEnquiryUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center py-4 px-6
                        border border-[#24382D] text-[#24382D]
                        text-xs tracking-[0.2em] uppercase font-medium
                        hover:bg-[#EDE7D9] transition-colors
                      "
                    >
                      WhatsApp Direct
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Footer Contact Strip */}
            <div className="mt-8 pt-6 border-t border-[#282722]/15 flex flex-wrap items-center justify-between gap-4 text-xs text-[#282722]/75">
              <div>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#929B83]">
                  Direct Line & Location
                </span>
                <span>{BRAND_CONFIG.contact.phoneDisplay} · Suryanelli, Munnar</span>
              </div>
              <a
                href={BRAND_CONFIG.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] tracking-[0.2em] uppercase text-[#24382D] underline hover:text-[#A18A6B]"
              >
                Get Directions ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </EnquiryContext.Provider>
  );
}

