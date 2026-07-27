import "./globals.css";
import type { ReactNode } from "react";
import { Manrope, Chakra_Petch, JetBrains_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Redheaded Stepchild Tech — Mission Control",
  description:
    "A Montana software lab building dignity-first, high-technology tools for people the world overlooked. Clean systems. Real impact.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable} ${mono.variable}`}
    >
      <body>
        <div className="space-bg" />
        <div className="starfield" />
        <div className="grid-overlay" />
        <NavBar />
        <main data-testid="page-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
