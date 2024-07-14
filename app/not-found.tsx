import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center min-h-[60vh] bg-gray-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="py-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Nie znaleziono takiej strony
        </h2>
        <Link href="/">
          <Button className="mt-5">Powrót na stronę główną</Button>
        </Link>
      </div>
    </main>
  );
}
