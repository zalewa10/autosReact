import React from "react";
import FeatureCard from "./elements/FeatureCard";

export const Features = () => {
  return (
    <main className="pt-10 px-8 w-full mt-3 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="flex flex-col items-start gap-6 w-full">
          <FeatureCard />
        </div>
      </div>
    </main>
  );
};
