import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Data from "@/components/Data";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

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
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Auto-S OSK - Szkoła jazdy w Skórzewie",
    description:
      "Profesjonalna szkoła nauki jazdy w Skórzewie, Plewiskach, Przeźmierowie, Poznaniu i okolicach. Badania lekarskie w cenie, elastyczny grafik, własny plac manewrowy.",
    url: "https://auto-s.pl",
    telephone: "+48 668 987 001",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Jesienna 18",
      addressLocality: "Skórzewo",
      postalCode: "60-185",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.4005484,
      longitude: 16.7843809,
    },
    openingHours: "Mo-Fr 08:00-16:00",
    image: "https://auto-s.pl/_next/static/media/logo.e1128418.svg",
    priceRange: "$$",
  };

  return (
    <html lang="en" className="max-w-[1920px] mx-auto">
      <head>
        <meta
          name="author"
          content="Ośrodek Szkolenia Kierowców AUTO-S - Sławomir Pługowski"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          property="og:title"
          content="Auto-S OSK - Szkoła Nauki Jazdy w Skórzewie, Plewiskach, Przeźmierowie, Poznaniu i innych miejscowościach"
        />
        <meta
          property="og:description"
          content="Profesjonalna szkoła nauki jazdy w Skórzewie, Plewiskach, Przeźmierowie, Poznaniu i okolicach. Badania lekarskie w cenie, elastyczny grafik, własny plac manewrowy. Zapisz się już dziś!"
        />
        <meta
          name="keywords"
          content="nauka jazdy, prawo jazdy,szkola jazdy, szkoła jazdy poznań, Skórzewo, Plewiska, Przeźmierowo, Poznań, Szkoła Nauki Jazdy, kurs prawa jazdy, badania lekarskie, plac manewrowy"
        />
        <meta
          name="google-site-verification"
          content="NZmaj2wkohJ7x56Fx_cDSSreflUnEtJT5Al2nT9locE"
        />
        {/* Add JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={inter.className}>
        <Data />
        <Navbar />
        {/* <Breadcrumbs /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
