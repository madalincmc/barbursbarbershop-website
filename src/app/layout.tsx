import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barbur's Barber Shop | Frizerie & Barber Shop Premium în Baia Mare",
  description: "Cauți un tuns bărbați, tuns copii sau aranjat barbă în Baia Mare? Barbur's Barber Shop îți oferă stil clasic și precizie modernă.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";
import Schema from "@/components/Schema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Schema />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
