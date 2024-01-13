import React from "react";
import { data } from "@/constants";

const Data = () => {
  return (
    <div className="bg-firma py-2 text-lg md:text-xl">
      <div className="text-center text-white font-lg">
        {data.map((value, i) => (
          <p key={i}>
            Najbliższy kurs - <b>{value.data}r</b>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Data;
