import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { product } from "@/constants/index";

const AboutCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
      {product.map((route, index) => (
        <Card className="bg-transparent border-gray-400" key={index}>
          <CardHeader>
            <Image src={route.imgURL} alt="Image" width={50} height={50} />
          </CardHeader>
          <CardContent>
            <CardTitle className="text-white text-base">{route.name}</CardTitle>
          </CardContent>

          <CardFooter>
            <CardDescription className="text-gray-300 text-base">
              {route.subtext}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AboutCard;
