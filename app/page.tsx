import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import { Onas } from "@/components/Onas";
import { Wyroznia } from "@/components/Wyroznia";
import Container from "@/components/ui/container";

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
