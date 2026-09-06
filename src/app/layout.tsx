import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/SkipLink";
import { DynamicBackground } from "@/components/DynamicBackground";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "WANG 前端設計工程師作品集",
  url: "https://let.gowork.run/",
  inLanguage: "zh-TW",
  mainEntity: {
    "@type": "Person",
    name: "WANG",
    url: "https://let.gowork.run/",
    jobTitle: "前端設計工程師",
    knowsAbout: [
      "Frontend Engineering",
      "UI/UX Design",
      "Responsive Web Design",
      "Motion Design",
      "Search Engine Optimization",
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://let.gowork.run"),
  title: {
    default: "前端工程師／前端設計師｜WANG 作品集",
    template: "%s｜WANG 作品集",
  },
  description:
    "WANG 的前端工程與設計作品集，收錄 UI/UX、RWD、動效與網站實作案例。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    title: "前端工程師／前端設計師｜WANG 作品集",
    description:
      "收錄 UI/UX、RWD、動效與網站實作案例。",
    images: [
      {
        url: "/assets/goodeats_preview.webp",
        width: 1200,
        height: 630,
        alt: "WANG Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "前端工程師／前端設計師｜WANG 作品集",
    description:
      "收錄 UI/UX、RWD、動效與網站實作案例。",
    images: ["/assets/goodeats_preview.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafbfc" },
    { media: "(prefers-color-scheme: dark)", color: "#080c14" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${inter.variable} ${notoSansTC.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <SkipLink />
          <DynamicBackground />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
