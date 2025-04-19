import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Qatoto", // Default title, can be overridden by pages
  description: "Wholesale live marketplace and video sharing website.",
  keywords: ["Qatoto", "Anime", "Shop", "lifestyle", "Research","Product development", "Find cofounder", "Find teammates"],
  authors: [{ name: "Qatoto" }],
  openGraph: {
    title: "Qatoto",
    type: "website",
    url: "https://qatoto.com/",
    images: [
      {
        url: "/website_logo.svg",
        width: 107,
        height: 40,
        alt: "Qatoto Logo",
      },
    ],
    locale: "en_US",
    siteName: "Qatoto",
    description: "Wholesale live marketplace and video sharing website.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
