import type { MetadataRoute } from "next";
import { JOURNAL_ARTICLES } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://woodhousemunnar.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/stay`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/experiences`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/discover`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/journal`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const journalRoutes: MetadataRoute.Sitemap = JOURNAL_ARTICLES.map((a) => ({
    url: `${baseUrl}/journal/${a.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...journalRoutes];
}

