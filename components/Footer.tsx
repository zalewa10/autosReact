import React from "react";
import { footerText } from "@/constants";
import { logoMobile } from "@/public/ikonki/index";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-tlo text-secondary-foreground px-8">
      <div className="mx-auto w-full  py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <Image
            src={logoMobile}
            className="h-9 w-auto mb-10 md:mb-0"
            alt="Logo"
          />

          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            {footerText.map((item, index) => (
              <div key={index} className="mb-8">
                <h2 className="mb-4 text-base lg:text-lg font-semibold text-slate-100 uppercase max-w-full">
                  {item.label}
                </h2>
                <ul className="text-slate-300  font-medium text-sm">
                  {item.opis.split("\n").map((line, lineIndex) => (
                    <li key={lineIndex} className="mb-2">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-secondary sm:text-center ">
            © 2024{" "}
            <a href="https://auto-s.pl/" className="hover:underline">
              OŚRODEK SZKOLENIA KIEROWCÓW AUTO-S
            </a>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-white hover:text-blue-400">
              <div className="flex gap-2">
                <p className="text-sm">Sprawdź naszego Facebooka</p>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="sr-only">Facebook page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
