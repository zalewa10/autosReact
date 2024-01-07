import React from "react";
import Container from "./ui/container";
import { OnasCard } from "./elements/OnasCard";

export const Onas = () => {
  return (
    <main className="py-20 px-8  bg-secondary">
      <Container>
        <div className="sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="scroll-m-20 text-center md:text-left text-4xl font-extrabold tracking-tight lg:text-6xl w-full">
              O nas
            </h1>
            <OnasCard />
          </div>
        </div>
      </Container>
    </main>
  );
};
