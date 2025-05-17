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
import { reviews } from "@/constants/reviews";
import { Button } from "./ui/button";

const ReviewsSlider = () => {
  return (
    <main className="  bg-cover bg-no-repeat bg-center">
      <div className="py-6 lg:py-8 max-w-screen-xl mx-auto px-10">
        <h2 className="scroll-m-20 mb-10 text-center text-3xl font-extrabold text-gray-900 tracking-tight lg:text-5xl">
          Zobacz co mówią o nas kursanci:
        </h2>
        <div className="w-full py-10 px-5">
          <Carousel
            plugins={[Autoplay({ delay: 3000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem
                  key={review.name}
                  className="pl-4  md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="w-full h-full bg-[rgba(255,255,255,0.9)]">
                    <CardHeader>
                      {" "}
                      <div className="flex items-center mb-2">
                        {Array.from({ length: 5 }, (_, index) => (
                          <Image
                            key={index}
                            src="/ikonki/star.svg"
                            alt="Star"
                            width={20}
                            height={20}
                          />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardTitle className="mb-2">{review.name}</CardTitle>
                      <CardDescription className="max-md:line-clamp-[8] max-md:h-[12rem] max-md:overflow-hidden max-md:text-ellipsis">
                        {review.opinia}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <Link
            href={
              "https://www.google.com/search?biw=1398&bih=1351&q=AUTO-S%20O%C5%9ARODEK%20SZKOLENIA%20KIEROWC%C3%93W%20Opinie&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxtDAwMDQyNbE0MDQ2NTK0MDezNNjAyPiKUdsxNMRfN1jB_-isIH8XV2-F4Chvfx9XP09HBW9P1yD_cOfDk8MV_Asy8zJTF7GSohoAHmh733cAAAA&rldimm=18001254901352187690&tbm=lcl&cs=1&hl=pl&sa=X&ved=0CBsQ9fQKKABqFwoTCOjmsqWJko0DFQAAAAAdAAAAABAG#lkt=LocalPoiReviews"
            }
            className="w-max"
          >
            <Button size={"lg"} variant={"outline"} className="text-lg">
              Sprawdź nasze opinie
            </Button>
          </Link>
          <Link
            href={"https://g.page/r/CSpHW0L1TdH5EBM/review"}
            className="w-max"
          >
            <Button size={"lg"} className=" bg-firma  text-lg">
              Zostaw opinię
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ReviewsSlider;
