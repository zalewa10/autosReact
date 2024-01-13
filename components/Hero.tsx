import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";

const Hero = () => {
  return (
    <main className="bg-secondary py-20 md:py-28 px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex flex-col items-start justify-between gap-10 md:max-w-md lg:max-w-xl">
          <div>
            <Badge className="mb-2 bg-firma ">Szkoła nauki jazdy</Badge>
            <h1 className="scroll-m-20 text-left text-[40px] leading-tight font-extrabold tracking-tight lg:text-6xl">
              Nie Masz Prawka?
              <br />
              Przyjdź Do Sławka!
            </h1>
          </div>
          <p className="text-base leading-6 text-gray-700 text-left">
            Jako szkoła jazdy jesteśmy tutaj po to, aby przeprowadzić
            profesjonalne szkolenie z zakresu prawa jazdy kategorii B. Razem
            przejdziemy przez każdy etap kursu, co doprowadzi Cię do pozytywnego
            wyniku egzaminu oraz da poczucie bezpieczeństwa za kierownicą.
          </p>
          <div className="flex flex-row items-center justify-start w-full gap-4">
            <Link href={"/zapisz"} className="w-full md:w-auto">
              <Button size={"lg"} className="bg-firma text-lg">
                Zapisz się
              </Button>
            </Link>
            <Link href={"/"} className="w-full md:w-auto">
              <Button
                size={"lg"}
                className="text-white focus:ring-4 focus:outline-none bg-[#3b5998] font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                Facebook
              </Button>
            </Link>
          </div>
        </div>

        <iframe
          className="w-full mt-10 md:mt-0 md:w-2/5 lg:w-2/5 aspect-video rounded-xl"
          src="https://www.youtube.com/embed/6vzhI7H7xgg?si=-FY1J8OAGBKFbpDg&autoplay=1"
          title="Film promocyjny AUTO-S"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </main>
  );
};

export default Hero;
