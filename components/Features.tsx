import React from "react";
import Container from "./ui/container";
import FeatureCard from "./elements/FeatureCard";

export const Features = () => {
  return (
    <main className="py-10 px-8">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex flex-col items-start gap-6 w-full">
          <FeatureCard />
        </div>
      </div>
    </main>
  );
};
