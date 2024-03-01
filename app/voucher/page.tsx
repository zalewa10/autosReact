import React from "react";

const Voucher = () => {
  return (
    <section className="bg-gray-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Nie masz pomysłu na prezent?
          </h2>
          <p className="mt-10 font-normal text-gray-500 sm:text-xl">
            Kurs na prawko rozwiąże problem. To super niespodzianka na każdą
            okazję. Zadzwoń – ustalimy szczegóły!
          </p>
        </div>
        <img
          src="/ikonki/voucher2.png"
          className="mx-auto text-center mb-8 lg:mb-12"
        />
      </div>
    </section>
  );
};

export default Voucher;
