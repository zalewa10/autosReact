import KadraCard from "@/components/elements/KadraCard";
import React from "react";

const Kadra = () => {
  return (
    <div>
      <section className="bg-secondary">
        <div className="py-8 px-8 mx-auto max-w-screen-xl lg:pt-16 lg:pb-2 lg:px-8">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Kadra AUTO-S{" "}
            </h2>
            <p className="mt-10 font-normal text-gray-500 sm:text-xl">
              Jesteśmy instruktorami dla których szkolenie jest nie tylko pracą
              ale również pasją. Stanowimy zgrany zespół fachowców który tworzył
              się przez lata i tworzy nadal. W opiniach kursanci nazywają nas
              profesjonalistami doceniając wiedzę, doświadczenie,
              odpowiedzialność, a także wyrozumiałość, cierpliwość i poczucie
              humoru.
            </p>
          </div>
        </div>
      </section>
      <KadraCard />
    </div>
  );
};

export default Kadra;
