import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';
import appConfig from "@/app.config";

import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseKeywords: string[] = [appConfig.ownerName, appConfig.ownerRole, "Portfolio", "Full-stack Web Developer"]
const keywords: string[] = [
  ...baseKeywords,
  ...appConfig.skills.config
    .filter(category => category.display === "card")
    .flatMap(category => category.items.map(item => item.title))
];

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.baseSite),
  title: {
    default: appConfig.webTitle,
    template: `%s | ${appConfig.ownerName}`,
  },
  description: appConfig.ownerDescription,
  keywords: keywords,
  authors: [{ name: appConfig.ownerName, url: appConfig.baseSite }],
  creator: appConfig.ownerName,
  openGraph: {
    title: appConfig.webTitle,
    description: appConfig.ownerDescription,
    url: appConfig.baseSite,
    siteName: `${appConfig.ownerName}'s Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: appConfig.webTitle,
    description: appConfig.ownerDescription,
    creator: `@${appConfig.githubUsername}`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: appConfig.ownerName,
    url: appConfig.baseSite,
    jobTitle: appConfig.ownerRole,
    sameAs: [
      appConfig.linkedinUrl,
      `https://github.com/${appConfig.githubUsername}`
    ],
    description: appConfig.ownerDescription
  };

  return (
    <html lang="en" className="scroll-smooth bg-slate-950">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-300 selection:bg-sky-500/30 selection:text-sky-200`}>
        <main className="overflow-x-hidden w-full flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}