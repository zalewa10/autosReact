import React from "react";
import Manual from "./elements/kategoriecennika/manual";
import Automat from "./elements/kategoriecennika/automat";
import B1 from "./elements/kategoriecennika/b1";
import Dodatki from "./elements/kategoriecennika/dodatki";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { pkk, przelew } from "@/public/ikonki";
import { Separator } from "./ui/separator";
const Cennik = () => {
  return (
    <main>
      <Tabs defaultValue="manual" className="w-ful">
        <TabsList className="w-full h-full flex md:justify-center md:py-4">
          <TabsTrigger value="manual">Skrzynia Manualna</TabsTrigger>
          <TabsTrigger value="automat">Skrzynia Automat</TabsTrigger>
          <TabsTrigger value="b1">Posiadacze kat. B1</TabsTrigger>
          <TabsTrigger value="dodatki">Szkolenia Uzupełniające</TabsTrigger>
        </TabsList>

        <TabsContent value="manual">
          <Manual />
        </TabsContent>
        <TabsContent value="automat">
          <Automat />
        </TabsContent>
        <TabsContent value="b1">
          <B1 />
        </TabsContent>
        <TabsContent value="dodatki">
          <Dodatki />
        </TabsContent>
      </Tabs>

      <div>
        <div className="w-full flex justify-between items-center gap-5 bg-tlo px-8 lg:mb-12 py-9">
          <div className="md:w-2/3">
            <h2 className="mb-5 text-3xl md:text-4xl py-4 tracking-tight font-extrabold text-gray-100">
              Płatność i raty
            </h2>
            <p className="mb-5 font-light text-gray-300 sm:text-xl">
              Płatności za wybrany rodzaj kursu można dokonać za pośrednictwem
              przelewu tradycyjnego, poprzez BLIK bądź bezpośrednio w biurze. W
              tytule przelewu proszę podać: imię, nazwisko oraz wybrany kurs.
              Możliwość opłaty w ratach. Dodatkowych informacji odnośnie rat
              udzielamy telefonicznie.
            </p>

            <p className="mb-5 font-bold text-gray-300 sm:text-xl">
              W przypadku płatności ratalnej do ceny każdego rodzaju kursu
              doliczamy 100 zł.
            </p>
            <div>
              <div className="mb-5 font-light text-gray-300 sm:text-xl">
                <span className="font-bold">
                  Płatność przelewem - numer rachunku bankowego:
                </span>
                <br />
                Bank Pekao nr 05 1240 6540 1111 0011 2212 8760
                <br />
                <br />
                <span className="font-bold">
                  Płatność BLIK - numer telefonu:
                </span>{" "}
                <br />
                509 211 676
              </div>
            </div>
          </div>

          <div className="hidden w-1/3 md:flex justify-end">
            <Image
              src={przelew}
              className="h-auto w-auto"
              alt="Zdjęcie przykładowego przelewu"
            />
          </div>
        </div>

        <section className="bg-white">
          <div className="w-full flex md:text-end flex-row-reverse justify-between items-center gap-5 px-8 lg:mb-12 py-9">
            <div className="md:w-2/3">
              <h2 className="mb-5 text-3xl md:text-4xl py-4 tracking-tight font-extrabold ">
                Profil Kandydata na Kierowcę (PKK)
              </h2>
              <p className="mb-5  font-light text-gray-600 sm:text-xl">
                Oferujemy możliwość utworzenia za Ciebie profilu kandydata na
                kierowcę w Starostwie Powiatowym – Poznań. <br /> <br />
                Opłata skarbowa za pełnomocnictwo wynosi<b> 17 zł.</b> <br />
                Przy samodzielnym otwarciu profilu – bez kosztów pełnomocnictwa.
              </p>
              <p className="mb-5 font-light text-gray-600 sm:text-xl">
                Jeżeli posiadasz PKK / badania lekarskie to {""}
                <span className="font-bold">
                  cena kursu zostaje obniżona o 100zł!
                </span>
              </p>
            </div>
            <div className="hidden w-1/3 md:flex justify-start">
              <Image
                src={pkk}
                alt="Samochód szkoleniowy AUTO-S"
                className="w-auto h-auto rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="bg-firma">
          <div className="w-full md:text-center px-8  py-9">
            <h2 className="mb-5 text-3xl md:text-4xl py-4 tracking-tight font-extrabold text-gray-100">
              WAŻNE INFORMACJE
            </h2>
            <div className="md:px-5">
              <p className="mb-5 font-light  text-white sm:text-xl">
                Za niestawienie się w danym dniu na jazdy w OSK Auto-S,
                <span className="font-bold">
                  {" "}
                  obowiązuje dodatkowa opłata – 100 zł{" "}
                </span>{" "}
                za każdą zaplanowaną godzinę jazdy. Szkolony może odwołać lub
                przełożyć jazdy bez ponoszenia opłaty, po poinformowaniu dzień
                wcześniej do godziny 18:00 o nie pojawieniu się na jazdach.
                <br />
              </p>
              <span className="font-bold py-5 text-white sm:text-xl">
                SZANUJMY WSPÓLNY CZAS.
              </span>
              <Separator className="my-5" />
              <p className="mb-5 font-light text-white sm:text-xl">
                Osoby szkolone które wniosły pełną lub ratalną opłatę za kurs w
                przypadku nie przystąpienia lub przerwania szkolenia przez okres
                2 m-cy, po powrocie i wznowieniu podlegają cenie kursu jaka
                obowiązuje w dniu wznowienia. <br />
                Wówczas szkolony obowiązany jest pokryć różnicę wynikającą ze
                zmiany ceny jeżeli taka nastąpiła.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cennik;
