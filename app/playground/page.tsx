"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect, useRef, Suspense } from "react";

const boxesData = [
  {
    img: "./test/car-icon.png",
    number: 20,
    label: "Lat doświadczenia",
  },
  {
    img: "./test/car-icon.png",
    number: 7,
    label: "dni w tygodniu",
  },
  {
    img: "./test/car-icon.png",
    number: 10,
    label: "Wykwalifikowanych instruktorów",
  },
  {
    img: "./test/car-icon.png",
    number: 5,
    label: "Samochodów szkoleniowych",
  },
];

const Test = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState(
    boxesData.map(() => 0)
  );
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // Stop observing once the animation starts
        }
      },
      { threshold: 0.3 } // Adjust this threshold to control when the animation should start (0.3 = 30% visible)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!startAnimation) return;

    const duration = 1500; // Total animation duration in milliseconds
    const frameRate = 60; // How often to update the numbers (ms)
    const totalFrames = duration / frameRate;

    const interval = setInterval(() => {
      setAnimatedNumbers((prevNumbers) =>
        prevNumbers.map((num, index) => {
          const target = boxesData[index].number;
          const increment = target / totalFrames;
          return Math.min(num + increment, target);
        })
      );
    }, frameRate);

    // Clear interval after animation is done
    setTimeout(() => clearInterval(interval), duration);

    return () => clearInterval(interval);
  }, [startAnimation]);

  return (
    <div className="min-h-screen">
      <div className="flex gap-10 justify-between relative pt-40 max-w-screen-lg mx-auto">
        <div className="block min-w-[350px] min-h-[350px] aspect-square relative rounded-lg bg-gray-200">
          <Image
            src="./test/woman-keys.png"
            alt="Woman"
            width={100}
            height={100}
            className="absolute w-full bottom-0 right-0 left-0 max-h-[120%] object-cover rounded-lg"
          />
        </div>

        <div className="block w-auto max-w-lg pl-10">
          <Badge>O nas</Badge>
          <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Doświadczenie w nauce jazdy od 2004 roku
          </h2>
          <p>
            Szkoła jazdy Auto-S jest liderem na rynku nauki jazdy w okolicach
            Poznania. Od ponad 20 lat starannie i profesjonalnie szkolimy
            przyszłych kierowców. Stawiamy przede wszystkim na jakość, nie
            ilość.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-10 justify-between relative pt-40 max-w-screen-lg mx-auto">
        <div className="rounded-lg">
          <Suspense
            fallback={
              <p className="aspect-video bg-red-600">Loading feed...</p>
            }
          >
            <iframe
              className="aspect-video min-h-72 rounded-xl"
              src="https://www.youtube.com/embed/NI-zikl2jQg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </Suspense>
        </div>

        <div className="block w-auto max-w-lg">
          <Badge>Zobacz jak działamy</Badge>
          <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Autorska ścieżka zadań
          </h2>
          <p>
            W Auto-S solidna praktyka to podstawa, dlatego chcielibysmy Was
            zaproisć do zapoznania się z naszą autorską ścieżką zadań dzięki
            której żadna sytuacja na drodze czy placu manewrowym was nie
            zaskoczy.
          </p>
        </div>
      </div>

      <div className="relative py-20 max-w-screen-xl mx-auto" ref={sectionRef}>
        <h2 className="my-4 pb-10 text-4xl tracking-tight font-extrabold text-gray-900 text-center">
          Dlaczego my?
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {boxesData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg min-h-[250px] w-full relative p-5"
            >
              <div className="absolute top-5 left-5 w-16 h-16 bg-white rounded-full"></div>

              <Image
                src={item.img}
                alt="icon"
                width={55}
                height={55}
                className="absolute top-9 left-6"
              />
              <div className="h-full flex flex-col justify-end">
                <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900">
                  {Math.round(animatedNumbers[index])}
                </h2>
                <p className="tracking-tight font-semibold text-gray-900">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
