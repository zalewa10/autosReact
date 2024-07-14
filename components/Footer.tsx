import React from "react";
import { footerText } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-tlo text-secondary-foreground px-8">
      <div className="mx-auto w-full py-6 lg:py-8">
        <div className="md:flex md:justify-start md:flex-wrap gap-20">
          {footerText.map((item, index) => (
            <div key={index} className="mb-8">
              <h2 className="mb-4 text-base lg:text-lg font-semibold text-gray-100 uppercase">
                {item.label}
              </h2>
              {item.href ? (
                <ul className="text-gray-300  font-base text-sm">
                  <li className="mb-2 hover:underline underline-offset-4">
                    <a href={item.href}>{item.opis}</a>
                  </li>
                </ul>
              ) : (
                <ul className="text-gray-300  font-base text-sm">
                  {item.opis.split("\n").map((line, lineIndex) => (
                    <li key={lineIndex} className="mb-2">
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-secondary sm:text-center ">
            © 2024 {""}
            <a href="https://auto-s.pl/" className="hover:underline">
              OŚRODEK SZKOLENIA KIEROWCÓW AUTO-S
            </a>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://kzalewski.vercel.app"
              target="_onBlank"
              className="text-white hover:text-blue-400"
            >
              <div className="flex gap-2">
                <p className="text-sm">
                  Projekt i wykonanie <b>KZALEWSKI</b>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
