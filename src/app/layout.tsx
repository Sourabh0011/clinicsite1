import type { Metadata } from "next";
import { Bricolage_Grotesque, Poppins } from "next/font/google";
import { site } from "@/lib/data";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${site.name} — Trusted Family Healthcare`,
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
