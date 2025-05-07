import Aktualnosc from "@/components/Aktualnosc";
import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import { Onas } from "@/components/Onas";
import { Wyroznia } from "@/components/Wyroznia";
import PigeonMap from "@/components/elements/Mapa";
import { Separator } from "@/components/ui/separator";
import BlogSlider from "@/components/BlogSlider";
import { getArticles } from "@/blog/metadata";
import ScrollWrapper from "@/components/ScrollWrapper";
import ReviewsSlider from "@/components/ReviewsSlider";

export default async function Home() {
  const articles = getArticles();

  return (
    <div>
      <Hero />
      <Wyroznia />
      <Aktualnosc />
      <Separator className="max-w-screen-xl mx-auto opacity-50" />
      <Features />
      <PigeonMap />
      <ReviewsSlider />
      <Onas />
      {/* <BlogSlider articles={articles} /> */}
      <ScrollWrapper />
    </div>
  );
}
