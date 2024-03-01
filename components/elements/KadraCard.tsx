import React from "react";
import { kadra } from "@/constants/kadra";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const KadraCard = () => {
  return (
    <div className="px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-secondary pb-20">
      {kadra.map((value, key) => (
        <Card key={key}>
          <CardHeader>
            <img src={value.imgURL} alt={value.imie} />
          </CardHeader>
          <CardContent>
            {value.rola ? "Właściciel" : <br />}
            <CardTitle>
              <p className="text-2xl">{value.imie}</p>
              <p className="text-base font-light mt-2">{value.podpis}</p>
            </CardTitle>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KadraCard;
