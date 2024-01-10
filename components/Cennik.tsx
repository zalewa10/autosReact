import React from "react";
import Manual from "./elements/kategoriecennika/manual";
import Automat from "./elements/kategoriecennika/automat";
import B1 from "./elements/kategoriecennika/b1";
import Dodatki from "./elements/kategoriecennika/dodatki";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Cennik = () => {
  return (
    <main>
      <Tabs defaultValue="manual" className="w-full">
        <TabsList className="w-full h-full flex-col md:flex-row md:py-4">
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
        <div className="mx-auto text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Płatność i raty
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            Płatności za wybrany rodzaj kursu można dokonać za pośrednictwem
            przelewu tradycyjnego, poprzez BLIK bądź bezpośrednio w biurze.
            Możliwość opłaty w ratach.
            <b>
              W przypadku płatności ratalnej do ceny każdego rodzaju kursu
              doliczamy 100 zł.
            </b>
            Dodatkowych informacji odnośnie rat udzielamy telefonicznie.
          </p>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            <b>Płatność przelewem - numer rachunku bankowego:</b> <br />
            Bank Pekao nr 05 1240 6540 1111 0011 2212 8760 <br />
            <br />W tytule proszę podać imię i nazwisko kandydata na kierowcę
            oraz rodzaj wybranego kursu (np. Jan Kowalski Podstawowy Automat)
          </p>
          <p className="mb-5 font-light text-gray-500 sm:text-xl">
            <b>Płatność BLIK - numer telefonu:</b> <br />
            509 211 676
          </p>
        </div>
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto text-center mb-8 lg:mb">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Profil Kandydata na Kierowcę (PKK)
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl">
                Możliwość utworzenia za Ciebie profilu kandydata w Starostwie
                Powiatowym – Poznań. <br />
                Opłata skarbowa za pełnomocnictwo 17 zł. <br />
                Przy samodzielnym otwarciu profilu – bez kosztów pełnomocnictwa.
              </p>
              <p className="mb-5 font-light text-gray-500 sm:text-xl">
                Jeżeli posiadasz PKK (profil kandydata) / badania lekarskie -
                <b>to cena kursu zostaje obniżona o 100zł!</b>
              </p>
            </div>
          </div>
        </section>
        <section className="bg-destructive">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto text-center mb-8 lg:mb-12 ">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                ! WAŻNE INFORMACJE !
              </h2>
              <p className="mb-5 font-light text-white sm:text-xl">
                Za niestawienie się w danym dniu na jazdy w OSK Auto-S,
                <b> obowiązuje dodatkowa opłata – 100 zł </b> za każdą
                zaplanowaną godzinę jazdy. <br />
                Szkolony może odwołać lub przełożyć jazdy bez ponoszenia opłaty,
                po poinformowaniu dzień wcześniej do godziny 18:00 o nie
                pojawieniu się na jazdach. <br />
                <b> SZANUJMY WSPÓLNY CZAS.</b>
              </p>

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
