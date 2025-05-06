import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { Outfit } from "next/font/google";

export const metadata: Metadata = {
  title: "Shoeb's Portfolio",
  description: "A portfolio website showcasing my work and skills.",
  icons: {
    icon: "/favicon.ico",
  }
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
