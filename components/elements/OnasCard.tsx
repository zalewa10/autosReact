import { onas } from "@/constants";

export const OnasCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-6 w-full">
      <div className="flex flex-col gap-3 md:gap-5">
        {onas.map((value, key) => (
          <div key={key} className="flex items-center">
            <img src={value.imgURL} className="mr-3 h-6 md:h-8" alt="" />
            <p className="text-lg md:text-xl text-left"> {value.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2 w-full md:w-2/5 mt-10 md:mt-0">
        <iframe
          className="h-56 lg:h-72 rounded-xl"
          src="https://www.youtube.com/embed/NI-zikl2jQg"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <p className="">Nasza autorska ścieżka zadań</p>
      </div>
    </div>
  );
};
