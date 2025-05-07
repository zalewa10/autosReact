"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Container from "./ui/container";
import { Button } from "./ui/button";

const BlogSlider = ({ articles }: { articles: any[] }) => {
  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="bg-gray-50">
      <div className="py-6 lg:py-8 max-w-screen-xl mx-auto px-10">
        <h2 className="scroll-m-20 mb-10 text-left text-3xl font-extrabold text-gray-900 tracking-tight lg:text-5xl">
          Najnowsze artykuły:
        </h2>
        <div className="w-full p-10">
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {sortedArticles.map((article) => (
                <CarouselItem
                  key={article.slug}
                  className="pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="w-full h-full">
                    <CardHeader>
                      <div className="block min-w-[200px] max-h-[300px] aspect-video relative rounded-lg bg-gray-100">
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={100}
                          height={100}
                          className="absolute w-full h-full bottom-0 right-0 left-0 top-0 object-cover rounded-lg"
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2 h-[2lh] overflow-hidden text-ellipsis">
                        {article.subtitle}
                      </CardDescription>
                      <Link
                        href={`/blog/${article.slug}`}
                        className="mt-2 block"
                      >
                        <Button variant="link" className="text-gray-500 p-0">
                          Czytaj więcej
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </main>
  );
};

export default BlogSlider;
