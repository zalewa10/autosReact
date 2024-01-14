import { Card, CardTitle } from "@/components/ui/card";
import Container from "../ui/container";
import { mainInfo } from "@/constants";

const AboutCard = () => {
  return (
    <Container>
      {mainInfo.map((item, index) => (
        <Card key={index} className="mt-10 lg:h-[300px]">
          <div
            className={`flex flex-col lg:h-full ${
              index % 2 === 0
                ? "flex-col-reverse md:flex-row-reverse"
                : "flex-col md:flex-row"
            }`}
          >
            <div className="flex flex-col px-4 justify-center w-full md:w-2/3">
              <CardTitle>
                <p className="my-5 lg:mt-0 md:px-4 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.label}
                </p>
              </CardTitle>

              <p className="mb-5 mt-3 md:my-3 font-normal md:px-4 text-base md:text-lg text-gray-700 dark:text-gray-400">
                {item.text}
              </p>
            </div>

            <img
              className={` md:rounded-none ${
                index % 2 === 0
                  ? "rounded-t-lg md:rounded-s-lg"
                  : "rounded-b-lg md:rounded-e-lg"
              } object-cover w-full md:w-1/3`}
              src={item.imgURL}
              alt=""
            />
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default AboutCard;
