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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 ">
      {product.map((route, index) => (
        <Card className="min-w-[225px] bg-secondary" key={index}>
          <CardHeader>
            <Image src={route.imgURL} alt="Image" width={40} height={40} />
          </CardHeader>
          <CardContent>
            <CardTitle>{route.name}</CardTitle>
          </CardContent>

          <CardFooter>
            <CardDescription>{route.subtext}</CardDescription>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default AboutCard;
