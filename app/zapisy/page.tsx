import { CustomForm } from "@/components/ProfileForm";
import { Card, CardHeader } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { szefito } from "@/public/galeria";
import Image from "next/image";
import React from "react";

const Zapisy = () => {
  return (
    <section className="bg-secondary">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Card>
          <CardHeader>
            <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 ">
              Formularz zgłoszeniowy
            </h2>
          </CardHeader>

          <div className="flex flex-col md:flex-row justify-between gap-5 p-5">
            <div className="md:w-1/2">
              <CustomForm />
            </div>
            <div className="md:w-1/2">
              <Image
                src={szefito}
                alt="Szef AUTO-S - Sławomir Pługowski"
                className="hidden md:block w-auto ml-auto rounded-xl"
              />
            </div>
          </div>
        </Card>
        <Toaster />
      </div>
    </section>
  );
};

export default Zapisy;
