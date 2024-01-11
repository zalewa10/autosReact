"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { imgAuto, imgCaruzela, imgPlac, imgSala } from "@/constants/index";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

const Galeria = () => {
  return (
    <div className="bg-secondary">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Zobacz jak działamy
          </h2>
        </div>

        <div className="w-full px-10  flex justify-center pb-10">
          <Carousel
            className="w-full"
            plugins={[Autoplay({ delay: 3000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1">
              {imgCaruzela.map((value, key) => (
                <CarouselItem key={key} className="pl-1 md:basis-1/2 ">
                  <div className="p-1">
                    <Card className="w-full aspect-auto">
                      <CardContent className="flex aspect-auto items-center justify-center p-0">
                        <Image
                          src={value.imgURL}
                          alt={value.alt}
                          className="h-full rounded-lg"
                          placeholder="blur"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="mx-auto text-center my-8 lg:my-12 pt-6 md:w-2/3 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Sala wykładowa
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Posiadamy własną, klimatyzowaną i odpowiednio wyposażoną salę
            wykładową w Skórzewie. Prowadzimy zajęcia teoretyczne dla
            pojedynczych osób oraz zorganizowanych grup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {imgSala.map((img, key) => (
            <div key={key}>
              <Image
                className="h-auto max-w-full rounded-lg transition-opacity opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
                src={img.imgURL}
                alt={img.alt}
                placeholder="blur"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto text-center my-8 lg:my-12 pt-6 md:w-2/3 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Plac manewrowy
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Dysponujemy własnym, profesjonalnie urządzonym, wyposażonym i
            oświetlonym placem manewrowym w Skórzewie. Obiekt został
            przygotowany na wzór placu jaki znajduje się w Wojewódzkim Ośrodku
            Ruchu Drogowego-Poznań.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {imgPlac.map((img, key) => (
            <div key={key}>
              <Image
                className="h-auto max-w-full rounded-lg transition-opacity opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
                src={img.imgURL}
                alt={img.alt}
                placeholder="blur"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto text-center my-8 lg:my-12 pt-6 md:w-2/3 ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Pojazdy szkoleniowe
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Kia Rio 4 oraz Hyuandai i20 (wersje egzaminacyjne)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {imgAuto.map((img, key) => (
            <div key={key}>
              <Image
                className="h-auto max-w-full rounded-lg transition-opacity opacity-0 duration-[2s]"
                onLoadingComplete={(image) =>
                  image.classList.remove("opacity-0")
                }
                src={img.imgURL}
                alt={img.alt}
                placeholder="blur"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Galeria;
