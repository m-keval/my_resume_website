import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fontSans = localFont({ src: "./fonts/geist.woff2", variable: "--font-geist", display: "swap" });
const fontMono = localFont({ src: "./fonts/geist-mono.woff2", variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Keval Mangroliya | Digital Card",
  description: "Hi, I’m Keval — an independent Flutter developer in Surat. Explore my mobile app projects, how I work, and let’s build something useful.",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontMono.variable} h-full antialiased font-sans`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
