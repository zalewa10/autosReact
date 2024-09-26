"use client";

import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { routes, routesmob } from "@/constants/index";
import { logoPc } from "@/public/ikonki/index";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface Route {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <header className="sm:flex sm:justify-between py-1 border-b w-full px-8 md:px-10">
      <div className="relative flex h-16 items-center w-full">
        <Link href="/">
          <Image src={logoPc} className="h-7 md:h-9 w-auto" alt="Logo" />
        </Link>

        <nav className="space-x-4 lg:space-x-1 hidden lg:block mx-auto">
          {routes.map((route: Route, i: number) => (
            <Button asChild variant="ghost" size={"default"} key={i}>
              <Link
                href={route.href}
                className={`text-xl font-medium transition-colors ${
                  activePath === route.href
                    ? "underline underline-offset-4 font-semibold"
                    : ""
                }`}
              >
                {route.label}
              </Link>
            </Button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="text-xl font-medium"
                variant="ghost"
                size={"default"}
              >
                Więcej
                <ChevronDownIcon
                  className="relative top-[1px] ml-1 h-4 w-4"
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  href="/voucher"
                  className={`text-xl font-medium transition-colors w-full h-full`}
                >
                  Voucher
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/praca"
                  className={`text-xl font-medium transition-colors w-full h-full`}
                >
                  Praca
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/ukraina"
                  className={`text-xl font-medium transition-colors w-full h-full`}
                >
                  Ukraina
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <Link href={"/zapisy"} className="hidden lg:block">
          <Button size={"lg"} className="bg-firma text-lg">
            Zapisz się
          </Button>
        </Link>

        <div className="flex items-center lg:hidden ml-auto">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-7 lg:hidden w-7" />
            </SheetTrigger>
            <SheetContent side="right" className={`w-[300px] sm:w-[400px]`}>
              <nav className="flex flex-col gap-4 pt-5">
                {routesmob.map((route: Route, i: number) => (
                  <a
                    key={i}
                    href={route.href}
                    className={`block px-2 py-1 text-lg ${
                      activePath === route.href
                        ? "text-firma font-semibold"
                        : ""
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
