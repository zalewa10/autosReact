import React from "react";
import { ceny } from "@/constants/cennik";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Manual = () => {
  return (
    <div className="flex gap-10 flex-col md:flex-row">
      {ceny["Skrzynia Manualna"].map((value, key) => (
        <Card>
          <div key={key}>
            <CardHeader>
              <CardTitle>
                <p className="mb-4 text-2xl font-semibold">{value.name}</p>
              </CardTitle>

              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Egzamin państwowy na pojeździe WORD!
              </p>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <b> KIA RIO</b>
              </p>
            </CardHeader>

            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">
                {value.price}
              </span>
            </div>
            <CardContent>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <p className="font-light text-black-400 sm:text-lg mt-3">
                  W cenie kursu:
                </p>
                {value.features.map((value, key) => (
                  <li className="flex items-center space-x-3" key={key}>
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{value}</span>
                  </li>
                ))}
                {value.express.map((value, key) => (
                  <div key={key}>
                    <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                      <b>{value}</b>
                    </p>
                  </div>
                ))}
              </ul>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Manual;