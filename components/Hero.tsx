import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <main className="bg-gray-50 py-16 md:py-28 px-8 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start justify-between gap-10 md:max-w-md lg:max-w-xl">
          <div>
            <Badge className="mb-2 bg-firma ">Szkoła nauki jazdy</Badge>
            <h1 className="scroll-m-20 text-left text-[34px] leading-tight font-extrabold tracking-tight lg:text-6xl">
              Nie Masz Prawka?
              <br />
              Przyjdź Do Sławka!
            </h1>
          </div>
          <p className="text-base leading-6 text-gray-800 text-left">
            Jako szkoła jazdy jesteśmy tutaj po to, aby przeprowadzić
            profesjonalne szkolenie z zakresu prawa jazdy kategorii B. Razem
            przejdziemy przez każdy etap kursu, co doprowadzi Cię do pozytywnego
            wyniku egzaminu oraz da poczucie bezpieczeństwa za kierownicą.
          </p>
          <div className="flex flex-row items-center justify-start w-full gap-4">
            <Link href={"/zapisy"} className="w-full md:w-auto">
              <Button size={"lg"} className="bg-firma text-lg">
                Zapisz się
              </Button>
            </Link>
            <Link
              href={"https://www.facebook.com/SlawekPlugowski"}
              target="_blank"
              className="w-auto"
            >
              <Button
                size={"icon"}
                className="text-white focus:ring-4 focus:outline-none bg-[#3b5998] font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
              >
                <svg
                  className="min-w-5 min-h-5 w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.464.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.591l-.467 3.622h-3.124V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </Button>
            </Link>
            <Link
              href={"https://www.instagram.com/osk_autos"}
              target="_blank"
              className="w-auto"
            >
              <Button
                size={"icon"}
                className="text-white focus:ring-4 focus:outline-none bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  className="min-w-6 min-h-6 w-6 h-6 invert"
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2.5 2.5 0 0 0 34.5 13.5 A 2.5 2.5 0 0 0 37 16 A 2.5 2.5 0 0 0 39.5 13.5 A 2.5 2.5 0 0 0 37 11 z M 25 14 C 18.5 14 14 18.5 14 25 C 14 31.5 18.5 36 25 36 C 31.5 36 36 31.5 36 25 C 36 18.5 31.5 14 25 14 z M 25 16 C 30.5 16 34 20.5 34 25 C 34 30.5 30.5 34 25 34 C 20.5 34 16 30.5 16 25 C 16 20.5 20.5 16 25 16 z"></path>
                </svg>
              </Button>
            </Link>
          </div>
        </div>

        <iframe
          className="w-full mt-10 md:mt-0 md:w-2/5 lg:w-2/5 aspect-video rounded-xl"
          src="https://www.youtube.com/embed/6vzhI7H7xgg?si=-FY1J8OAGBKFbpDg&autoplay=1&mute=1&rel=0"
          title="Film promocyjny AUTO-S"
          allowFullScreen={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </main>
  );
};

export default Hero;
