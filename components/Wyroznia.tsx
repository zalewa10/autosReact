import React from "react";
import Container from "./ui/container";
import AboutCard from "./elements/AboutCard";

export const Wyroznia = () => {
  return (
    <main className="py-8 px-8 bg-tlo">
      <Container>
        <div className="flex flex-col md:flex-row items-center w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="scroll-m-20 text-left text-3xl font-extrabold tracking-tight lg:text-5xl w-full text-muted">
              Co nas wyróżnia:
            </h2>
            <AboutCard />
          </div>
        </div>
      </Container>
    </main>
  );
};
