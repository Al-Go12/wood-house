import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JOURNAL_ARTICLES, DESTINATIONS_LIST } from "@/lib/content";
import { EditorialImage } from "@/components/EditorialImage";
import { HeroEnquiryActions } from "@/components/HeroEnquiryActions";

export function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    return { title: "Journal Story" };
  }
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedDestItems = DESTINATIONS_LIST.filter((d) =>
    article.relatedDestinations.includes(d.id)
  );

  const otherArticles = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug);

  return (
    <article className="bg-[#F7F5EF] text-[#282722]">
      {/* Article Hero */}
      <header className="relative min-h-[68vh] flex items-end bg-[#18261E] text-[#F7F5EF] pt-32 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <EditorialImage
            asset={article.heroImage}
            className="w-full h-full"
            priority={true}
            overlayGradient="hero"
            zoomOnHover={false}
          />
        </div>
        <div className="relative z-20 max-w-4xl w-full mx-auto px-6 sm:px-10 space-y-5">
          <div className="flex flex-wrap items-center gap-3 text-[11px] tracking-[0.26em] uppercase text-[#A18A6B]">
            <Link href="/journal" className="hover:text-[#F7F5EF] underline">
              ← Journal
            </Link>
            <span>·</span>
            <span>{article.category}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
            <span>·</span>
            <span>{article.locationTag}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#F7F5EF]">
            {article.title}
          </h1>

          <p className="font-editorial italic text-xl sm:text-2xl text-[#EDE7D9]/90">
            {article.subtitle}
          </p>
        </div>
      </header>

      {/* Editorial Body */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-12">
        {article.isPlaceholderArticle && (
          <div className="p-4 bg-[#EDE7D9] border-l-2 border-[#24382D] text-xs text-[#282722]/85">
            <strong className="uppercase tracking-[0.16em] text-[#24382D] block mb-0.5">
              Editorial Template Dispatch
            </strong>
            This story is structured as an editorial placeholder in <code>lib/content.ts</code> until verified first-person property essays are published.
          </div>
        )}

        <blockquote className="font-editorial italic text-2xl sm:text-4xl text-[#24382D] leading-snug border-l-2 border-[#A18A6B] pl-6 py-2">
          &ldquo;{article.pullQuote}&rdquo;
        </blockquote>

        {article.sections.map((sec, idx) => (
          <section key={idx} className="space-y-5">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#282722] font-normal">
              {sec.heading}
            </h2>
            {sec.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-base sm:text-lg text-[#282722]/85 leading-relaxed font-light"
              >
                {p}
              </p>
            ))}
          </section>
        ))}

        {/* Secondary Plate */}
        <div className="py-4">
          <EditorialImage
            asset={article.secondaryImage}
            className="w-full aspect-[16/10]"
            showCaptionOverlay={true}
          />
        </div>

        {/* Related Destinations in This Story */}
        {relatedDestItems.length > 0 && (
          <div className="pt-10 border-t border-[#282722]/15 space-y-6">
            <h3 className="text-xs tracking-[0.24em] uppercase text-[#24382D]">
              Landscapes Featured in This Story
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedDestItems.map((dest) => (
                <Link
                  key={dest.id}
                  href={`/discover#${dest.id}`}
                  className="p-5 bg-[#EDE7D9]/70 border border-[#282722]/12 hover:border-[#24382D] transition-colors block space-y-1.5"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#A18A6B]">
                    Destination {dest.code} · {dest.elevation}
                  </span>
                  <h4 className="font-editorial text-2xl text-[#282722]">
                    {dest.name}
                  </h4>
                  <p className="text-xs text-[#282722]/75 line-clamp-2">
                    {dest.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Enquiry CTA Box */}
        <div className="p-8 sm:p-10 bg-[#24382D] text-[#EDE7D9] space-y-4">
          <p className="text-[10px] tracking-[0.26em] uppercase text-[#A18A6B]">
            EXPERIENCE THIS LANDSCAPE
          </p>
          <h3 className="font-editorial text-3xl text-[#F7F5EF]">
            Begin your journey from WOODHOUSE, Suryanelli.
          </h3>
          <p className="text-sm text-[#EDE7D9]/80 font-light leading-relaxed">
            Speak with our hosts to plan a stay in our wooden cottages alongside local 4x4 safaris, nature walks, and high-range excursions.
          </p>
          <div className="pt-2">
            <HeroEnquiryActions
              subject={`Stay Enquiry inspired by: ${article.title}`}
              label="Enquire About Your Stay"
            />
          </div>
        </div>
      </div>

      {/* More Stories */}
      <section className="py-20 bg-[#EDE7D9] border-t border-[#282722]/12">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#282722]">
              Continue Reading
            </h2>
            <Link
              href="/journal"
              className="text-xs tracking-[0.2em] uppercase text-[#24382D] underline"
            >
              All Stories →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/journal/${item.slug}`}
                className="group block space-y-3"
              >
                <EditorialImage
                  asset={item.heroImage}
                  className="w-full aspect-[4/3]"
                />
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#24382D]">
                  {item.category} · {item.readingTime}
                </p>
                <h3 className="font-editorial text-2xl text-[#282722] group-hover:text-[#24382D]">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

