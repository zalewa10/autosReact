import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Container from "../ui/container";
import { mainInfo } from "@/constants";

const AboutCard = () => {
  return (
    <Container>
      {mainInfo.map((item, index) => (
        <Card className="mt-10 lg:h-[300px]">
          <div
            className={`flex flex-col lg:h-full ${
              index % 2 === 0
                ? "flex-col-reverse md:flex-row-reverse"
                : "flex-col md:flex-row"
            }`}
          >
            <div className="flex flex-col px-4 justify-center w-full md:w-2/3">
              <h5 className="mt-5 lg:mt-0 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.label}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.text}
              </p>
            </div>

            <img
              className={`rounded-t-lg md:rounded-none ${
                index % 2 === 0 ? "md:rounded-s-lg" : "md:rounded-e-lg  "
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
