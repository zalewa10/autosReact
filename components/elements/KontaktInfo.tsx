import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const KontaktInfo = () => {
  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle>
          <p className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 ">
            Biuro
          </p>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div>
          <p className="font-bold text-xl text-slate-700">
            Kontakt telefoniczny
          </p>
          <p className="text-lg font-light">
            pn-pt w godzinach 8:00 - 16:00 <br />
            tel. 668 987 001
          </p>
        </div>
        <div className="mt-3">
          <p className="font-bold text-xl text-slate-700">Mail</p>
          <a
            href="mailto:kontakt@auto-s.pl"
            className="text-firma underline font-light text-lg"
          >
            kontakt@auto-s.pl
          </a>
        </div>

        <div className="mt-3">
          <p className="font-bold text-xl text-slate-700">Osobiście</p>
          <p className="font-light text-lg ">
            ul. Jesienna 18 <br />
            60-185 Skórzewo
          </p>
        </div>
      </CardContent>
      <CardHeader>
        <CardTitle>
          <p className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 ">
            Właściciel
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold text-slate-700">Sławomir Pługowski</p>
        <p className="text-lg font-light">tel. 509 211 676</p>
      </CardContent>
    </Card>
  );
};

export default KontaktInfo;
