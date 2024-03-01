"use client";
import { CustomForm } from "@/components/ProfileForm";
import { Card, CardHeader } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import React from "react";

const Zapisy = () => {
  return (
    <section className="bg-gray-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <Card>
          <CardHeader>
            <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 ">
              Formularz zgłoszeniowy
            </h2>
          </CardHeader>

          <div className="flex flex-col lg:flex-row justify-between gap-5 p-5 px-8">
            <div className="lg:w-1/2">
              <CustomForm />
            </div>
            <div className="lg:w-1/2">
              <img
                src="/galeria/szefito.jpg"
                alt="Szef AUTO-S - Sławomir Pługowski"
                className="hidden lg:block w-auto ml-auto rounded-xl"
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
