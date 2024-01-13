import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import { Onas } from "@/components/Onas";
import { Wyroznia } from "@/components/Wyroznia";

export default function Home() {
  return (
    <div>
      <Hero />
      <Wyroznia />
      <Features />
      <Onas />
    </div>
  );
}
