import React from "react";
import ContactButtons from "@/components/elements/ContactButtons";

const Praca = () => {
  return (
    <section className="bg-gray-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Poszukujemy instruktorów nauki jazdy!
          </h2>
          <div className="w-full mx-auto">
            <p className="mt-10 font-normal text-gray-500 sm:text-xl lg:w-2/3 mx-auto">
              Niezależnie od tego, czy dopiero ukończyłeś/aś kurs, czy masz już
              doświadczenie, dołącz do naszego zespołu. Oferujemy dynamiczną
              pracę i możliwość rozwijania umiejętności w przyjaznym środowisku.
              <br /> <br />
              <span>
                <b>
                  Dołącz do nas i wspólnie pomóżmy innym zdobyć prawo jazdy!
                </b>
              </span>
            </p>
          </div>
          <ContactButtons />
        </div>
      </div>
    </section>
  );
};

export default Praca;
