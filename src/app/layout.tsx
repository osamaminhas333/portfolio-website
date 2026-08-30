import type { Metadata } from "next";
import { Montserrat, Bebas_Neue, Allura } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { SmoothScroll } from "@/components/ui/SmoothScroll";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-allura",
});

export const metadata: Metadata = {
  title: "Mohammad Osama Minhas | AI Agent Engineer",
  description: "AI Agent Engineer & CA Finalist (ICAP) — LLM Orchestration, Automation, & Assurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          montserrat.variable,
          bebasNeue.variable,
          allura.variable,
          "bg-black text-[#E8DFD8] antialiased selection:bg-[#cbb59d] selection:text-black overflow-x-hidden"
        )}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
