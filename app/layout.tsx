import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Data from "@/components/Data";
import Footer from "@/components/Footer";
import Ukraina from "@/components/Ukraina";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto-S OSK",
  description: "Szkoła jazdy Poznań, Skórzewo, Dopiewo, Plewiska i okolice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="max-w-[1440px] mx-auto">
      <meta
        name="google-site-verification"
        content="lChrf4R4smlYnl2HUIpK_azfQoVLO3ts4bzBtBrEGAw"
      />
      <body className={inter.className}>
        <Ukraina />
        <Data />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
``;
