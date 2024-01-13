import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Data from "@/components/Data";
import Footer from "@/components/Footer";
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
    <html lang="en">
      <body className={inter.className}>
        <Data />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
