"use client";

import Cennik from "@/components/Cennik";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

const page = () => {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Kursy prawa jazdy kategorii B
            </h2>
            <p className="mt-10 font-normal text-gray-500 sm:text-xl">
              Kandydat na kierowcę może rozpocząć kurs mając 17 lat i 9 m-cy za
              zgodą rodziców lub opiekunów oraz samodzielnie po ukończonym 18
              roku życia. <br />
              <b>Sprawdź ofertę, informacje dodatkowe oraz ważne informacje</b>
            </p>
          </div>
        </div>
      </section>
      <Cennik />
      <ScrollToTop
        smooth
        viewBox="0 0 1024 1024"
        svgPath="M877.763916 956.084191 510.975159 589.29441 144.186402 956.084191l-80.984453-80.983429 447.77321-447.769117 447.77321 447.769117L877.763916 956.084191zM877.763916 596.672448 510.975159 229.883691 144.186402 596.672448l-80.984453-80.989569 447.77321-447.768093 447.77321 447.768093L877.763916 596.672448zM877.763916 596.672448"
        className="flex items-center justify-center"
      />
    </div>
  );
};

export default page;
