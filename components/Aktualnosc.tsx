import React from "react";
import { Badge } from "./ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Aktualnosc = () => {
  return (
    <main className="p-10 md:p-20">
      {/* <div className="relative max-w-screen-lg mx-auto h-96">
        <Image
          src="galeria/plac1.jpg"
          alt="Banner"
          width={1920}
          height={1080}
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover rounded-xl"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40 rounded-xl"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="max-w-xl text-center">
            <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-100">
              Maturzysto! <br /> Zrób prawo jazdy przed maturą.
            </h2>
            <p className="text-white">
              Dzięki naszej elastycznej ofercie możesz pogodzić naukę z kursem
              jazdy, bez obawy o brak czasu. Z nami przygotujesz się do egzaminu
              szybko i sprawnie, nie rezygnując z przygotowań do matury.
            </p>
            <Link href="/cennik">
              <Button variant={"destructive"} className="mt-10">
                Sprawdź naszą ofertę
              </Button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col-reverse md:flex-row gap-10 justify-center relative md:max-w-screen-xl mx-auto md:px-10 md:pt-20">
        <div className="mt-20 md:mt-0 block min-w-[250px] min-h-[250px] md:min-w-[350px] md:min-h-[350px] aspect-square relative rounded-lg bg-gray-100">
          <Image
            src="./test/maturzysta.png"
            alt="Właściciel"
            width={200}
            height={200}
            className="absolute w-full bottom-0 right-0 left-0  md:max-h-[125%] object-cover rounded-lg"
          />
        </div>

        <div className="block w-auto md:max-w-lg">
          {/* <Badge variant={"destructive"}>Prawko + matura?</Badge> */}
          <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Maturzysto! <br /> Zrób prawo jazdy przed maturą!
          </h2>
          <p>
            Dzięki naszej elastycznej ofercie możesz pogodzić naukę z kursem
            jazdy, bez obawy o brak czasu. Z nami przygotujesz się do egzaminu
            szybko i sprawnie, nie rezygnując z przygotowań do matury.
          </p>
          <Link href="/cennik">
            <Button className="bg-firma  mt-5">Sprawdź naszą ofertę</Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Aktualnosc;
