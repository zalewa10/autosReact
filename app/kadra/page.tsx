"use client";
import KadraCard from "@/components/elements/KadraCard";
import React from "react";
import ScrollToTop from "react-scroll-to-top";

const Kadra = () => {
  return (
    <div>
      <section className="bg-gray-50">
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
      <ScrollToTop
        smooth
        viewBox="0 0 1024 1024"
        svgPath="M877.763916 956.084191 510.975159 589.29441 144.186402 956.084191l-80.984453-80.983429 447.77321-447.769117 447.77321 447.769117L877.763916 956.084191zM877.763916 596.672448 510.975159 229.883691 144.186402 596.672448l-80.984453-80.989569 447.77321-447.768093 447.77321 447.768093L877.763916 596.672448zM877.763916 596.672448"
        className="flex items-center justify-center"
      />
    </div>
  );
};

export default Kadra;
