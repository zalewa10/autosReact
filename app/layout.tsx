import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Data from "@/components/Data";
import Footer from "@/components/Footer";
import Ukraina from "@/components/Ukraina";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auto-S OSK - Szkoła jazdy w Skórzewie",
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
        name="author"
        content="Ośrodek Szkolenia Kierowców AUTO-S - Sławomir Pługowski"
      ></meta>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta
        property="og:title"
        content="Auto-S OSK - Szkoła Nauki Jazdy w Skórzewie, Plewiskach, Przeźmierowie, Poznaniu i innych miejscowościach"
      ></meta>
      <meta
        property="og:description"
        content="Profesjonalna szkoła nauki jazdy w Skórzewie, Plewiskach, Przeźmierowie, Poznaniu i okolicach. Badania lekarskie w cenie, elastyczny grafik, własny plac manewrowy. Zapisz się już dziś!"
      ></meta>
      <meta
        name="keywords"
        content="nauka jazdy, prawo jazdy,szkola jazdy, szkoła jazdy poznań, Skórzewo, Plewiska, Przeźmierowo, Poznań, Szkoła Nauki Jazdy, kurs prawa jazdy, badania lekarskie, plac manewrowy"
      ></meta>
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
