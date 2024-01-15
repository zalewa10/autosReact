import React from "react";
import { ceny } from "@/constants/cennik";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dodatki = () => {
  return (
    <div className="grid py-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {ceny["Szkolenia uzupełniające"].map((value, key) => (
        <Card key={key} className={`max-w-[350px]`}>
          <CardHeader>
            <CardTitle>
              <p className="mb-4 text-xl font-semibold text-gray-700">
                {value.name}
              </p>
            </CardTitle>
            <div className="flex justify-start items-end my-8">
              <span className="mr-2 text-3xl font-extrabold">
                {value.price}
              </span>
              <span className="mr-2 text-xl font-normal">{value.czas}</span>
            </div>
          </CardHeader>
          <CardFooter>
            <p className="font-light">{value.features}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Dodatki;
