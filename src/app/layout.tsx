import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roomly | 賃貸管理を、もっとシンプルに。",
  description:
    "賃貸管理会社向けSaaS。物件・入居者・契約・家賃・修繕・オーナー送金を一つの画面で一元管理。50区画まで無料。",
  openGraph: {
    title: "Roomly | 賃貸管理を、もっとシンプルに。",
    description:
      "物件・入居者・家賃・修繕——すべてを一つの画面で。賃貸管理会社向けSaaS。",
    url: "https://hp.roomly.jp",
    siteName: "Roomly",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
