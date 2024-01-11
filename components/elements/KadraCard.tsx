import React from "react";
import { kadra } from "@/constants/kadra";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

const KadraCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-secondary">
      {kadra.map((value, key) => (
        <Card key={key}>
          <CardHeader>
            <Image src={value.imgURL} alt={value.imie} />
          </CardHeader>
          <CardContent>
            <CardDescription>{value.rola}</CardDescription>
            <CardTitle>{value.imie}</CardTitle>
          </CardContent>
          <CardFooter>
            <p>{value.podpis}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default KadraCard;
