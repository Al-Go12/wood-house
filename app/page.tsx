import React from "react";
import Link from "next/link";
import { IMAGE_ASSETS } from "@/lib/images";
import {
  BRAND_CONFIG,
  BEYOND_THE_STAY_PROJECTS,
  SANDALWOOD_HERITAGE_CONTENT,
  JOURNAL_ARTICLES,
} from "@/lib/content";
import { EditorialImage } from "@/components/EditorialImage";
import { CottageShowcaseSection } from "@/components/CottageShowcaseSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { DestinationExplorerSection } from "@/components/DestinationExplorerSection";
import { VisualJournalGallery } from "@/components/VisualJournalGallery";
import { HeroEnquiryActions } from "@/components/HeroEnquiryActions";

export default function HomePage() {
  return (
    <div className="bg-[#F7F5EF] text-[#282722]">
      {/* =====================================================================
          SECTION 01 — CINEMATIC HERO
         ===================================================================== */}
      <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#18261E] text-[#F7F5EF]">
        {/* Full-Viewport Background with Slow Cinematic Scale */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-full h-full animate-hero-scale">
            <EditorialImage
              asset={IMAGE_ASSETS.heroMunnarMist}
              className="w-full h-full"
              priority={true}
              overlayGradient="hero"
              zoomOnHover={false}
            />
          </div>
        </div>

        {/* Top Spacer for Fixed Navigation */}
        <div className="relative z-20 h-24" />

        {/* Center Editorial Hero Typography */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 my-auto py-16">
          <div className="max-w-4xl space-y-6">
            <div className="animate-fade-up-1 flex flex-wrap items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-[#EDE7D9]/85">
              <span>WOODHOUSE</span>
              <span className="text-[#A18A6B]">·</span>
              <span>SURYANELLI, MUNNAR</span>
              <span className="hidden sm:inline text-[#A18A6B]">·</span>
              <span className="hidden sm:inline text-[#EDE7D9]/70">
                {BRAND_CONFIG.location.coordinates}
              </span>
            </div>

            <h1 className="animate-fade-up-2 font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-normal leading-[1.04] tracking-[-0.01em] text-[#F7F5EF]">
              Somewhere between the mountains and the clouds.
            </h1>

            <p className="animate-fade-up-3 font-body text-base sm:text-lg md:text-xl text-[#EDE7D9]/90 max-w-2xl leading-relaxed font-light">
              An intimate mountain escape in the heart of Suryanelli, where nature, adventure and slow living come together.
            </p>

            <div className="animate-fade-up-4 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#introducing-woodhouse"
                className="
                  inline-flex items-center justify-center px-8 py-4
                  bg-[#EDE7D9] text-[#24382D] text-xs tracking-[0.24em] uppercase font-medium
                  hover:bg-[#A18A6B] hover:text-[#F7F5EF] transition-colors
                "
              >
                Explore Woodhouse
              </a>
              <a
                href="#experiences"
                className="
                  inline-flex items-center justify-center px-8 py-4
                  border border-[#F7F5EF]/60 text-[#F7F5EF] text-xs tracking-[0.24em] uppercase font-medium
                  hover:bg-[#F7F5EF]/15 transition-colors
                "
              >
                Discover The Experience
              </a>
              <HeroEnquiryActions />
            </div>
          </div>
        </div>

        {/* Bottom Telemetry & Scroll Indicator */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 pb-8 flex items-end justify-between gap-6 border-t border-[#EDE7D9]/15 pt-5">
          <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.2em] uppercase text-[#EDE7D9]/75">
            <div>
              <span className="block text-[9px] text-[#A18A6B]">ELEVATION</span>
              <span>1,500M — 2,400M ASL</span>
            </div>
            <div>
              <span className="block text-[9px] text-[#A18A6B]">REGION</span>
              <span>WESTERN GHATS · IDUKKI, KERALA</span>
            </div>
            <div>
              <span className="block text-[9px] text-[#A18A6B]">ETHOS</span>
              <span>STAY · EXPLORE · CONSERVE</span>
            </div>
          </div>

          <a
            href="#introducing-woodhouse"
            className="flex items-center gap-3 text-[10px] tracking-[0.28em] uppercase text-[#EDE7D9]/85 hover:text-[#F7F5EF] ml-auto"
          >
            <span>Scroll to Begin</span>
            <span className="w-[1px] h-8 bg-[#A18A6B] inline-block animate-scroll-line" />
          </a>
        </div>
      </section>

      {/* =====================================================================
          SECTION 02 — INTRODUCING WOODHOUSE
         ===================================================================== */}
      <section
        id="introducing-woodhouse"
        className="py-24 sm:py-36 bg-[#F7F5EF] text-[#282722]"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Split Editorial Narrative */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#EDE7D9] border border-[#282722]/12 text-[10px] tracking-[0.24em] uppercase text-[#24382D]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#24382D]" />
                <span>SURYANELLI · MUNNAR HIGH RANGE · KERALA</span>
              </div>

              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[62px] font-normal text-[#282722] leading-[1.06]">
                Not just a place to stay. A place to reconnect.
              </h2>

              <div className="space-y-5 text-base sm:text-lg text-[#282722]/85 leading-relaxed font-light">
                <p>
                  High above the lowland plains, where the road past Munnar climbs into the quieter ridges of Suryanelli, the rhythm of the day is governed by the mountain weather. Morning arrives in ribbons of white mist drifting across emerald tea estates; dusk settles in deep cedar-scented stillness beneath a canopy of stars.
                </p>
                <p>
                  <strong className="font-medium text-[#24382D]">WOODHOUSE</strong> was envisioned as an intimate mountain sanctuary within this landscape—a collection of warm wooden cottages that honour the surrounding terrain rather than competing with it.
                </p>
                <p>
                  Yet our story does not end at the veranda rail. Here, accommodation is the threshold to a much larger world: pre-dawn 4x4 trails climbing toward the cloud sea of Kolukkumalai, quiet afternoons by the forest waters of Anayirankal, and journeys northward into the ancient sandalwood heritage of Marayoor.
                </p>
              </div>

              {/* Three Pillars Strip */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#282722]/15">
                <div>
                  <span className="text-[10px] tracking-[0.24em] uppercase text-[#A18A6B] block mb-1">
                    01 · THE STAY
                  </span>
                  <p className="font-editorial text-xl text-[#282722]">
                    Wooden cottages & mountain stillness
                  </p>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.24em] uppercase text-[#A18A6B] block mb-1">
                    02 · THE ADVENTURE
                  </span>
                  <p className="font-editorial text-xl text-[#282722]">
                    Jeep safaris, high ridges & quiet lakes
                  </p>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.24em] uppercase text-[#A18A6B] block mb-1">
                    03 · THE GATEWAY
                  </span>
                  <p className="font-editorial text-xl text-[#282722]">
                    Ten destinations & living forest heritage
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Asymmetric Layered Photography Composition */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-5 items-end">
              <div className="col-span-12 sm:col-span-8">
                <EditorialImage
                  asset={IMAGE_ASSETS.introMountainValley}
                  className="w-full aspect-[4/5]"
                  showCaptionOverlay={true}
                />
              </div>
              <div className="col-span-12 sm:col-span-4 space-y-5">
                <EditorialImage
                  asset={IMAGE_ASSETS.introTimberDetail}
                  className="w-full aspect-square"
                />
                <div className="p-5 bg-[#24382D] text-[#EDE7D9] space-y-2">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[#A18A6B]">
                    A SLOWER KIND OF ESCAPE
                  </p>
                  <p className="font-editorial italic text-lg leading-snug">
                    &ldquo;Stay close to nature. Discover beyond the ordinary.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 03 — THE STAY / OUR COTTAGES
         ===================================================================== */}
      <CottageShowcaseSection />

      {/* =====================================================================
          SECTION 04 — EXPERIENCES / THE MOUNTAINS ARE CALLING
         ===================================================================== */}
      <ExperiencesSection />

      {/* =====================================================================
          SECTION 05 — DISCOVER THE DESTINATION (A—J)
         ===================================================================== */}
      <DestinationExplorerSection />

      {/* =====================================================================
          SECTION 06 — BEYOND THE STAY
         ===================================================================== */}
      <section
        id="beyond-the-stay"
        className="py-24 sm:py-32 bg-[#EDE7D9] text-[#282722] border-t border-[#282722]/12"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14 border-b border-[#282722]/15">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#24382D] font-medium">
                SECTION 06 · BROADER VISION & INITIATIVES
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#282722] leading-[1.08]">
                Beyond the Stay
              </h2>
              <p className="font-editorial italic text-2xl sm:text-3xl text-[#24382D]">
                &ldquo;Our story doesn&apos;t end at the doorstep.&rdquo;
              </p>
            </div>
            <div className="lg:col-span-5 space-y-3">
              <p className="text-sm sm:text-base text-[#282722]/80 leading-relaxed font-light">
                WOODHOUSE is part of a wider commitment to nature, local community connections, environmental stewardship, and regional initiatives across the Idukki hills.
              </p>
              <p className="text-[11px] tracking-[0.14em] uppercase text-[#24382D]/80">
                CMS-Ready Structure: Cards below use editable placeholders until verified project names & milestones are supplied.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
            {BEYOND_THE_STAY_PROJECTS.map((project, index) => (
              <article
                key={project.id}
                className={`${
                  index === 0 ? "lg:col-span-12" : "lg:col-span-6"
                } bg-[#F7F5EF] border border-[#282722]/12 overflow-hidden grid grid-cols-1 ${
                  index === 0 ? "lg:grid-cols-12" : ""
                }`}
              >
                <div className={index === 0 ? "lg:col-span-7" : ""}>
                  <EditorialImage
                    asset={project.image}
                    className={`w-full ${
                      index === 0 ? "aspect-[16/9]" : "aspect-[16/10]"
                    }`}
                  />
                </div>
                <div
                  className={`${
                    index === 0 ? "lg:col-span-5" : ""
                  } p-7 sm:p-10 flex flex-col justify-between space-y-5`}
                >
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10px] tracking-[0.22em] uppercase text-[#24382D] font-medium">
                        {project.tag}
                      </span>
                      <span className="px-2.5 py-0.5 bg-[#EDE7D9] text-[#282722] text-[10px] tracking-[0.15em] uppercase">
                        {project.statusBadge}
                      </span>
                    </div>
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#282722] font-normal leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#282722]/85 leading-relaxed font-light">
                      {project.description}
                    </p>
                    <p className="text-xs text-[#282722]/65 bg-[#EDE7D9]/50 p-3.5 border-l-2 border-[#A18A6B]">
                      {project.editorialDetail}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/about"
                      className="text-xs tracking-[0.2em] uppercase text-[#24382D] hover:text-[#A18A6B] underline underline-offset-8"
                    >
                      Read About Our Stewardship →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 07 — SANDALWOOD HERITAGE / CHANDANAM
         ===================================================================== */}
      <section
        id="sandalwood-heritage"
        className="py-24 sm:py-32 bg-[#282722] text-[#EDE7D9] border-t border-[#EDE7D9]/12"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          {/* Top Editorial Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-14 border-b border-[#EDE7D9]/15">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#A18A6B]">
                SECTION 07 · {SANDALWOOD_HERITAGE_CONTENT.eyebrow}
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#F7F5EF] leading-[1.08]">
                {SANDALWOOD_HERITAGE_CONTENT.headline}
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm text-[#EDE7D9]/80 leading-relaxed font-light">
                {SANDALWOOD_HERITAGE_CONTENT.subheadline}
              </p>
            </div>
          </div>

          {/* Main Conservation Feature Split */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 6 Cols: Large Sandalwood Forest & Botanical Plates */}
            <div className="lg:col-span-6 space-y-6">
              <EditorialImage
                asset={IMAGE_ASSETS.destMarayoor}
                className="w-full aspect-[16/10]"
                showCaptionOverlay={true}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <EditorialImage
                  asset={IMAGE_ASSETS.sandalwoodBotanical}
                  className="w-full aspect-[4/5]"
                />
                <div className="bg-[#24382D] p-6 flex flex-col justify-between border border-[#EDE7D9]/15">
                  <div className="space-y-3">
                    <p className="text-[10px] tracking-[0.24em] uppercase text-[#A18A6B]">
                      BOTANICAL MONOGRAPH
                    </p>
                    <h3 className="font-editorial italic text-2xl text-[#F7F5EF]">
                      Santalum album (Chandanam)
                    </h3>
                    <p className="text-xs text-[#EDE7D9]/80 leading-relaxed font-light">
                      Prized across centuries for its fragrant heartwood and ecological symbiosis within the dry-deciduous rain-shadow slopes of the Western Ghats.
                    </p>
                  </div>

                  <dl className="pt-6 space-y-2.5 border-t border-[#EDE7D9]/15 text-xs">
                    {SANDALWOOD_HERITAGE_CONTENT.botanicalFacts.map((fact, i) => (
                      <div key={i} className="flex justify-between gap-2">
                        <dt className="text-[#929B83]">{fact.label}:</dt>
                        <dd className="text-[#F7F5EF] text-right font-medium">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Three Editorial Chapters & Explicit Swargamedu Verification Notice */}
            <div className="lg:col-span-6 space-y-8">
              {SANDALWOOD_HERITAGE_CONTENT.chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="pb-7 border-b border-[#EDE7D9]/15 space-y-3"
                >
                  <span className="font-editorial text-2xl text-[#A18A6B]">
                    Chapter {chapter.number}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F5EF] font-normal">
                    {chapter.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#EDE7D9]/80 leading-relaxed font-light">
                    {chapter.body}
                  </p>
                </div>
              ))}

              {/* Verification Box for Swargamedu / Chandana Research Centre Reference */}
              <div className="p-6 bg-[#18261E] border border-[#A18A6B]/40 space-y-2">
                <p className="text-[10px] tracking-[0.24em] uppercase text-[#A18A6B] font-medium">
                  INSTITUTIONAL & VISITOR ACCESS VERIFICATION NOTICE
                </p>
                <p className="text-xs text-[#EDE7D9]/85 leading-relaxed">
                  {SANDALWOOD_HERITAGE_CONTENT.verificationDisclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 08 — THE VISUAL JOURNAL / GALLERY
         ===================================================================== */}
      <VisualJournalGallery />

      {/* =====================================================================
          SECTION 09 — JOURNAL / STORIES FROM THE HILLS
         ===================================================================== */}
      <section
        id="journal"
        className="py-24 sm:py-32 bg-[#F7F5EF] text-[#282722] border-t border-[#282722]/12"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-14 border-b border-[#282722]/15">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#24382D] font-medium">
                SECTION 09 · JOURNAL · STORIES FROM THE HILLS
              </p>
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#282722] leading-[1.08]">
                Dispatches from the High Range.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col justify-between gap-4">
              <p className="text-sm sm:text-base text-[#282722]/80 leading-relaxed font-light">
                Field notes on early-morning mist in Suryanelli, the 4x4 climb to Kolukkumalai, quiet afternoons at Anayirankal, and the sandalwood trails of Marayoor.
              </p>
              <Link
                href="/journal"
                className="text-xs tracking-[0.22em] uppercase text-[#24382D] hover:text-[#A18A6B] underline underline-offset-8 self-start"
              >
                Explore All Journal Editions →
              </Link>
            </div>
          </div>

          {/* Editorial Blog Listing: 1 Featured Lead Essay + 3 Secondary Dispatches */}
          <div className="mt-14 space-y-16">
            {JOURNAL_ARTICLES.slice(0, 1).map((lead) => (
              <article
                key={lead.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-14 border-b border-[#282722]/12"
              >
                <Link
                  href={`/journal/${lead.slug}`}
                  className="lg:col-span-7 block"
                >
                  <EditorialImage
                    asset={lead.heroImage}
                    className="w-full aspect-[16/10]"
                    showCaptionOverlay={true}
                  />
                </Link>
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex flex-wrap items-center gap-3 text-[10px] tracking-[0.22em] uppercase text-[#24382D]">
                    <span className="px-2.5 py-1 bg-[#EDE7D9]">
                      {lead.category}
                    </span>
                    <span>{lead.readingTime}</span>
                    <span className="text-[#929B83]">{lead.dateLabel}</span>
                  </div>
                  <Link href={`/journal/${lead.slug}`} className="block group">
                    <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#282722] group-hover:text-[#24382D] transition-colors font-normal leading-tight">
                      {lead.title}
                    </h3>
                  </Link>
                  <p className="text-sm sm:text-base text-[#282722]/80 leading-relaxed font-light">
                    {lead.excerpt}
                  </p>
                  <blockquote className="font-editorial italic text-xl text-[#24382D] border-l-2 border-[#A18A6B] pl-4">
                    &ldquo;{lead.pullQuote}&rdquo;
                  </blockquote>
                  <div className="pt-2">
                    <Link
                      href={`/journal/${lead.slug}`}
                      className="
                        inline-flex items-center px-6 py-3 bg-[#24382D] text-[#EDE7D9]
                        text-xs tracking-[0.2em] uppercase hover:bg-[#282722] transition-colors
                      "
                    >
                      Read Full Story →
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {JOURNAL_ARTICLES.slice(1).map((article, i) => (
                <article
                  key={article.slug}
                  className={`${
                    i === 0 ? "md:col-span-5" : i === 1 ? "md:col-span-4" : "md:col-span-3"
                  } flex flex-col justify-between space-y-4`}
                >
                  <div className="space-y-4">
                    <Link href={`/journal/${article.slug}`} className="block">
                      <EditorialImage
                        asset={article.heroImage}
                        className="w-full aspect-[4/3]"
                      />
                    </Link>
                    <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#24382D]">
                      <span>{article.category}</span>
                      <span className="text-[#282722]/55">{article.readingTime}</span>
                    </div>
                    <Link
                      href={`/journal/${article.slug}`}
                      className="block group"
                    >
                      <h3 className="font-editorial text-2xl sm:text-3xl text-[#282722] group-hover:text-[#24382D] transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm text-[#282722]/75 leading-relaxed font-light">
                      {article.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/journal/${article.slug}`}
                    className="text-xs tracking-[0.2em] uppercase text-[#24382D] hover:text-[#A18A6B] underline underline-offset-8 pt-2 inline-block"
                  >
                    Read Dispatch →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
