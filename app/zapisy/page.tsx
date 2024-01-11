import { CustomForm } from "@/components/ProfileForm";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Zapisy = () => {
  return (
    <section className="bg-secondary">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Formularz zgłoszeniowy
          </h2>
        </div>
        <CustomForm />
        <Toaster />
      </div>
    </section>
  );
};

export default Zapisy;
