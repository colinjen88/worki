import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://let.gowork.run"),
  title: {
    default: "UI/UX Designer & Motion Specialist | WANG's Portfolio",
    template: "%s | WANG Portfolio",
  },
  description:
    "前端工程師/設計師作品集 | 專精於動效設計 (Lottie/SVGA)、RWD 響應式網頁設計與前端開發，有獨立規劃設計及架站能力。致力於創造美感與實用兼具的數位體驗。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    title: "UI/UX Designer & Motion Specialist | WANG's Portfolio",
    description:
      "前端工程師/設計師作品集 | 專精於動效設計 (Lottie/SVGA)、RWD 響應式網頁設計與前端開發，有獨立規劃設計及架站能力。",
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
    title: "UI/UX Designer & Motion Specialist | WANG's Portfolio",
    description:
      "前端工程師/設計師作品集 | 專精於動效設計、RWD 響應式網頁設計與前端開發。",
    images: ["/assets/goodeats_preview.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
