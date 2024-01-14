"use client";
import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import { Onas } from "@/components/Onas";
import { Wyroznia } from "@/components/Wyroznia";
import PigeonMap from "@/components/elements/Mapa";

export default function Home() {
  return (
    <div>
      <Hero />
      <Wyroznia />
      <Features />
      <PigeonMap />
      <Onas />
    </div>
  );
}
