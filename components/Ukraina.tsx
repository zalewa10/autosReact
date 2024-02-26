import React from "react";
import Image from "next/image";
import { flaga } from "@/public/ikonki";
import Link from "next/link";

const Ukraina = () => {
  return (
    <div className="bg-yellow-300 py-2 text-lg md:text-xl">
      <div className="text-center text-white font-lg ">
        <div className="flex justify-center items-center gap-3">
          <Image src={flaga} className="w-5 border-black" alt="Flaga Ukrainy" />
          <Link href={"/ukraina"}>
            <p className="text-blue-700 underline underline-offset-4">
              Інформація для людей з <b>України</b>
            </p>
          </Link>
          <Image src={flaga} className="w-5 border-black" alt="Flaga Ukrainy" />
        </div>
      </div>
    </div>
  );
};

export default Ukraina;
