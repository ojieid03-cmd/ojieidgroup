import type { Metadata } from "next";
import "./globals.css";

import TopBar from "@/components/TopBar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OJIEID GROUP",
  description: "Smart Digital Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
    >
      <body>

        <TopBar />

        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}