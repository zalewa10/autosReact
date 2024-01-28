import React from "react";
import { ceny } from "@/constants/cennik";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Manual = () => {
  return (
    <div className="grid pt-10 gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {ceny["Skrzynia Manualna"].map((value, key) => (
        <div key={key} className="relative pb-10">
          <div
            className={`${
              key === 1
                ? `block bg-firma rounded-t rounded-l absolute z-20 right-0`
                : `hidden`
            }`}
          >
            <p className="text-white text-center rounded-xl py-1 px-2 bg-firma">
              Najchętniej wybierany
            </p>
          </div>

          <Card
            key={key}
            className={`max-w-[350px] md:max-w-[400px] h-full${
              key === 1 ? ` border-firma mt-4` : ` mt-4`
            }`}
          >
            <CardHeader>
              <CardTitle className="flex justify between w-full flex-nowrap">
                <p className="mb-4 text-xl font-semibold text-gray-700">
                  {value.name}
                </p>
              </CardTitle>
              <div className="flex justify-start items-baseline my-8">
                <span className="mr-2 text-3xl font-extrabold">
                  {value.price}
                </span>
              </div>
            </CardHeader>

            <CardContent>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <p className="font-light text-black-400 sm:text-lg mt-3">
                  W cenie kursu:
                </p>
                {value.features.map((value, key) => (
                  <li className="flex items-start space-x-2" key={key}>
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
                    <p className="font-normal text-sm">{value}</p>
                  </li>
                ))}
                {value.express && (
                  <ul>
                    {value.express.map((item, key) => (
                      <li className="flex items-start space-x-2" key={key}>
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="20"
                            fontWeight="bold"
                            fill="currentColor"
                          >
                            !
                          </text>
                        </svg>
                        <p className="font-normal text-sm">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </ul>

              <span className="text-base  flex justify-center text-center font-light">
                {value.autoOpis} <br />
                {value.auto}
              </span>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Manual;
