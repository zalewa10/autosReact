"use client";

import { usePathname } from "next/navigation";
import React, { useState, useRef } from "react";
import { routes } from "@/constants/index";
import { logoPc } from "@/public/ikonki/index";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

interface Route {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="sm:flex sm:justify-between py-1 border-b w-full px-8 md:px-10">
      <div className="relative flex h-16 items-center w-full">
        <Link href="/">
          <Image src={logoPc} className="h-7 md:h-9 w-auto" alt="Logo" />
        </Link>

        <nav className="space-x-4 lg:space-x-1 hidden lg:block ml-auto">
          {routes.map((route: Route, i: number) => (
            <Button asChild variant="ghost" size={"default"} key={i}>
              <Link
                href={route.href}
                className={`text-xl font-medium transition-colors ${
                  pathname === route.href ? "text-firma font-semibold " : ""
                }`}
              >
                {route.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center lg:hidden ml-auto">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-7 lg:hidden w-7" />
            </SheetTrigger>
            <SheetContent side="right" className={`w-[300px] sm:w-[400px]`}>
              <nav className="flex flex-col gap-4 pt-5">
                {routes.map((route: Route, i: number) => (
                  <a
                    key={i}
                    href={route.href}
                    className={`block px-2 py-1 text-lg ${
                      pathname === route.href ? "text-firma font-semibold " : ""
                    }`}
                  >
                    {route.label}
                    <DropdownMenuSeparator />
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
