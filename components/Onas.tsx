import { OnasCard } from "./elements/OnasCard";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React, { Suspense } from "react";
import { Separator } from "./ui/separator";

export const Onas = () => {
  return (
    <main className=" bg-gray-50">
      {/* <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex flex-col items-start gap-6 w-full">
          <h2 className="scroll-m-20 text-left text-3xl font-extrabold tracking-tight lg:text-xl w-full">
            Trochę o nas:
          </h2>
          <OnasCard />
        </div>
      </div> */}

      <div className="flex flex-col-reverse md:flex-row gap-10 justify-between relative md:max-w-screen-xl mx-auto px-10 py-20">
        <div className="block md:min-w-[300px] md:min-h-[300px] aspect-video relative rounded-lg bg-gray-100">
          <Image
            src="./galeria/plac2.jpg"
            alt="Właściciel"
            width={100}
            height={100}
            className="absolute w-full h-full bottom-0 right-0 left-0 top-0 object-cover rounded-lg"
          />
        </div>

        <div className="block w-auto md:max-w-lg">
          <Badge>O nas</Badge>
          <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Doświadczenie w nauce jazdy od 2004 roku
          </h2>
          <p>
            Szkoła jazdy Auto-S działa na rynku szkoleń od ponad 20 lat oferując
            profesjonalne przyugotowanie do jazd.
          </p>
          <ul className="pl-4 pt-2">
            <li className="list-disc">
              Należymy do szkół o najwyższej zdawalności
            </li>
            <li className="list-disc">Stawiamy na jakość, nie na ilość</li>
            <li className="list-disc">
              Oferujemy profesjonalną kadrę instruktorów
            </li>
            <li className="list-disc">Elastyczne i szybkie terminy jazd</li>
            <li className="list-disc">
              Pracujemy dla Was przez 7 dni w tygodniu
            </li>
          </ul>
        </div>
      </div>

      <Separator className="max-w-screen-xl mx-auto" />

      <div className="flex flex-col-reverse md:flex-row-reverse gap-10 justify-between relative py-20 md:max-w-screen-xl mx-auto px-10">
        <div className="rounded-lg">
          <Suspense
            fallback={
              <p className="aspect-video bg-red-600">Loading feed...</p>
            }
          >
            <iframe
              className="aspect-video min-h-40 md:min-h-72 rounded-lg w-full md:w-auto"
              src="https://www.youtube.com/embed/NI-zikl2jQg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </Suspense>
        </div>

        <div className="block w-auto md:max-w-lg">
          <Badge>Zobacz jak działamy</Badge>
          <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Autorska ścieżka zadań
          </h2>
          <p>
            W Auto-S solidna praktyka to podstawa, dlatego chcielibysmy Was
            zaproisć do zapoznania się z naszą autorską ścieżką zadań dzięki
            której żadna sytuacja na drodze czy placu manewrowym was nie
            zaskoczy.
          </p>
        </div>
      </div>
    </main>
  );
};
