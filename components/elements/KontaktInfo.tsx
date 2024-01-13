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
          <p>
            <b>Kontakt telefoniczny</b>
          </p>
          <p>
            pn-pt w godzinach 8:00 - 16:00 <br />
            tel. 668 987 001
          </p>
        </div>
        <div>
          <p>
            <b>Mail</b>
          </p>
          <p>kontakt@auto-s.pl</p>
        </div>
        <div>
          <p>
            <b>Osobiście</b>
          </p>
          <p>
            ul. Jesienna 18 <br />
            60-185 Skórzewo
          </p>
        </div>
      </CardContent>
      <CardHeader>
        <p className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 ">
          Właściciel
        </p>
      </CardHeader>
      <CardContent>
        <p>
          <b>Sławomir Pługowski</b>
        </p>
        <p>tel. 509 211 676</p>
      </CardContent>
    </Card>
  );
};

export default KontaktInfo;
