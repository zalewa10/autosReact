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
    <div className="flex gap-10 flex-col md:flex-row">
      {ceny["Szkolenia uzupełniające"].map((value, key) => (
        <Card>
          <div key={key}>
            <CardHeader>
              <CardTitle>
                <h3 className="mb-4 text-2xl font-semibold">{value.name}</h3>
              </CardTitle>
            </CardHeader>

            <div className="flex justify-center items-baseline my-8">
              <CardContent>
                <span className="mr-2 text-5xl font-extrabold">
                  {value.price}
                </span>
                <span className="mr-2 text-5xl font-extrabold">
                  {value.czas}
                </span>
              </CardContent>{" "}
            </div>
            <CardFooter>
              <p>{value.features}</p>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Dodatki;
