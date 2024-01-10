import Cennik from "@/components/Cennik";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Kursy prawa jazdy kategorii B
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl">
              Kandydat na kierowcę może rozpocząć kurs mając 17 lat i 9 m-cy za
              zgodą rodziców lub opiekunów oraz samodzielnie po ukończonym 18
              roku życia.
            </p>
            <p className="mb-5 font-light text-gray-500 sm:text-xl">
              <b>Sprawdź ofertę, informacje dodatkowe oraz ważne informacje</b>
            </p>
          </div>
        </div>
      </section>
      <Cennik />
    </div>
  );
};

export default page;
