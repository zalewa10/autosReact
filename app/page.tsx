"use client";
import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import { Onas } from "@/components/Onas";
import { Wyroznia } from "@/components/Wyroznia";
import PigeonMap from "@/components/elements/Mapa";
import ScrollToTop from "react-scroll-to-top";

export default function Home() {
  return (
    <div>
      <Hero />
      <Wyroznia />
      <Features />
      <PigeonMap />
      <Onas />

      <ScrollToTop
        smooth
        viewBox="0 0 1024 1024"
        svgPath="M877.763916 956.084191 510.975159 589.29441 144.186402 956.084191l-80.984453-80.983429 447.77321-447.769117 447.77321 447.769117L877.763916 956.084191zM877.763916 596.672448 510.975159 229.883691 144.186402 596.672448l-80.984453-80.989569 447.77321-447.768093 447.77321 447.768093L877.763916 596.672448zM877.763916 596.672448"
        className="flex items-center justify-center"
      />
    </div>
  );
}
