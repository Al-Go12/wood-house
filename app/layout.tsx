import type { Metadata } from "next";
import "./globals.css";
import { EnquiryProvider } from "@/components/EnquiryProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BRAND_CONFIG } from "@/lib/content";

export const metadata: Metadata = {
  title: {
    default: "WOODHOUSE — Suryanelli, Munnar | Mountain Stay & Western Ghats Gateway",
    template: "%s | WOODHOUSE — Suryanelli, Munnar",
  },
  description:
    "An intimate mountain escape in the heart of Suryanelli, near Munnar, Kerala. Wooden cottages, Kolukkumalai sunrise jeep safaris, Anayirankal waters, Marayoor sandalwood heritage, and slow living in the Western Ghats.",
  keywords: [
    "Woodhouse Suryanelli",
    "Suryanelli homestay",
    "Munnar nature retreat",
    "Kolukkumalai sunrise stay",
    "Anayirankal Dam",
    "Western Ghats Kerala",
    "Suryanelli wooden cottages",
    "Marayoor sandalwood heritage",
  ],
  openGraph: {
    title: "WOODHOUSE — Somewhere between the mountains and the clouds",
    description:
      "An intimate mountain escape in the heart of Suryanelli, Munnar, where nature, adventure and slow living come together.",
    type: "website",
    locale: "en_IN",
    siteName: "WOODHOUSE Suryanelli",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: BRAND_CONFIG.name,
    description: BRAND_CONFIG.heroSupporting,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Suryanelli, Munnar",
      addressRegion: "Kerala",
      postalCode: "685618",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.0567,
      longitude: 77.195,
    },
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F5EF] text-[#282722]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <EnquiryProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </EnquiryProvider>
      </body>
    </html>
  );
}
