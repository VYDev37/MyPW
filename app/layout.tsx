import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core';

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

export const metadata: Metadata = {
  title: "Vincent Yu | Full-stack Web Developer",
  description: "My portfolio website page.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="scroll-smooth bg-slate-950">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-300 selection:bg-sky-500/30 selection:text-sky-200`}>
        <main className="overflow-x-hidden w-full flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}