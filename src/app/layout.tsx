import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seen This One | AI vs DeFi Index Comparison",
  description: "Compare the growth trajectories of AI and DeFi sectors through interactive index charts. Analyze historical patterns and market trends.",
  keywords: ["AI index", "DeFi index", "market comparison", "cryptocurrency", "artificial intelligence", "decentralized finance"],
  authors: [{ name: "Seen This One" }],
  creator: "Seen This One",
  publisher: "Seen This One",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.seenthis.one",
    siteName: "Seen This One",
    title: "AI vs DeFi Index Comparison | Seen This One",
    description: "Compare the growth trajectories of AI and DeFi sectors through interactive index charts. Analyze historical patterns and market trends.",
    images: [
      {
        url: "https://www.seenthis.one/logo.png",
        width: 1200,
        height: 630,
        alt: "Seen This One Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI vs DeFi Index Comparison | Seen This One",
    description: "Compare the growth trajectories of AI and DeFi sectors through interactive index charts. Analyze historical patterns and market trends.",
    images: ["https://www.seenthis.one/logo.png"],
    creator: "@seenthisone",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
