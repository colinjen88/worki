import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://let.gowork.run"),
  title: { default: "WANG｜前端工程 × UI/UX 設計", template: "%s｜WANG Portfolio" },
  description: "結合網頁設計與 UX 思維的前端工程師，將複雜需求轉化為清楚、細緻且能落地的數位體驗。",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    title: "WANG｜前端工程 × UI/UX 設計",
    description: "從需求理解、介面設計到前端實作，完整呈現可被驗證的作品與思考。",
    images: [{ url: "/images/zyfloral.webp", width: 1200, height: 630, alt: "WANG 作品集精選案例" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
