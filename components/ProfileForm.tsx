"use client";

import React, { useRef, useState, ChangeEvent } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Confetti from "react-confetti";
import styled from "styled-components";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { toast, useToast } from "./ui/use-toast";
import { Separator } from "./ui/separator";
import emailjs from "@emailjs/browser";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

const ConfettiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
`;

const options = [
  "Podstawowy - skrzynia manualna",
  "Rozszerzony - skrzynia manualna",
  "Express - skrzynia manualna",
  "",
  "Podstawowy - skrzynia automatyczna",
  "Express - skrzynia automatyczna",
  "",
  "Kurs dla posiadaczy B1 - skrzynia manualna",
  "Kurs dla posiadaczy B1 - skrzynia automatyczna",
];

const jeden = process.env.NEXT_PUBLIC_JEDEN;
const dwa = process.env.NEXT_PUBLIC_DWA;
const trzy = process.env.NEXT_PUBLIC_TRZY;

export function CustomForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    surname: "",
    adress: "",
    city: "",
    kurs: "",
    email: "",
    tel: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const showToast = (description: string, success: boolean) => {
    toast({
      description,
      variant: success ? "success" : "destructive",
    });

    if (success) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!jeden || !dwa || !trzy) {
      console.error("Variable 'jeden' is undefined.");
      setLoading(false);
      showToast("Coś poszło nie tak, spróbuj ponownie później.", false);
      return;
    }

    emailjs
      .send(
        jeden,
        dwa,
        {
          from_name: form.name,
          to_name: "Auto-S OSK",
          from_email: form.email,
          to_email: "zalewastriker10@gmail.com",
          message: form.message,
        },
        trzy
      )
      .then(
        () => {
          setLoading(false);
          showToast(
            "Dziękujemy za wiadomość, odezwiemy się jak najszybciej.",
            true
          );

          setForm({
            name: "",
            surname: "",
            adress: "",
            city: "",
            kurs: "",
            email: "",
            tel: "",
            message: "",
          });
        },

        (error) => {
          setLoading(false);
          console.error(error);

          showToast("Coś poszło nie tak, spróbuj ponownie później.", false);
        }
      );
  };

  return (
    <div>
      <ConfettiContainer>{showConfetti && <Confetti />}</ConfettiContainer>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="md:flex md:flex-col md:justify-between"
        id="contact-form"
      >
        <div className="md:space-y-4">
          <div className="md:flex md:flex-row md:items-center md:space-x-4">
            <div className="mt-3 md:mt-0 w-full">
              <Label htmlFor="name">Imię</Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required={true}
              />
            </div>

            <div className="mt-3 md:mt-0 w-full">
              <Label htmlFor="surname">Nazwisko</Label>
              <Input
                id="surname"
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>
          <div className="md:flex md:flex-row md:items-center md:space-x-4">
            <div className="mt-3 md:mt-0 w-full">
              <Label htmlFor="adress">Adres zamieszkania</Label>
              <Input
                id="adress"
                type="text"
                name="adress"
                value={form.adress}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="mt-3 md:mt-0 w-full">
              <Label htmlFor="city">Miasto</Label>
              <Input
                id="city"
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>

          <div className="w-full md:w-auto mt-3 md:mt-0">
            <Label htmlFor="email">Adres email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="w-full md:w-auto mt-3 md:mt-0">
            <Label htmlFor="tel">Numer telefonu</Label>
            <Input
              id="tel"
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              required={true}
            />
          </div>

          <div className="w-full md:w-auto mt-3 md:mt-0">
            <Label htmlFor="kurs">Wybrany kurs</Label>
            <Select required={true}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz kurs z listy" id="kurs" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option, index) =>
                  option && !option.includes("disabled") ? (
                    <SelectItem key={index} value={option}>
                      {option}
                    </SelectItem>
                  ) : (
                    <Separator className="my-3" key={index} />
                  )
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-auto mt-3 md:mt-0">
            <Label htmlFor="message">Wiadomość</Label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              placeholder="Wpisz swoją wiadmość"
              onChange={handleChange}
              rows={5}
            />
          </div>

          <div className="items-top flex mt-3 space-x-2">
            <Collapsible>
              <div className="flex items-center">
                <CollapsibleTrigger>
                  <Checkbox id="terms" required={true} />
                </CollapsibleTrigger>
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-2"
                >
                  Zaznacz, aby zaakceptować
                </label>
              </div>
              <CollapsibleContent>
                <p className="text-xs text-muted-foreground">
                  Wyrażam zgodę na przetwarzanie przez OSK Auto-S Sławomir
                  Pługowski z siedzibą w Skórzewie, ul. Jesienna 18, 60-185
                  Skórzewo, moich danych osobowych zawartych w formularzu
                  zgłoszenia w zakresie niezbędnym do zapisu na kurs prawa
                  jazdy. Podanie danych jest dobrowolne jednak ułatwia kontakt w
                  procesie rekrutacji. Przysługuje Pani/Panu prawo wglądu do
                  treści swoich danych osobowych i ich poprawiania oraz żądania
                  zaprzestania ich przetwarzania.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
        <Button
          type="submit"
          className="mt-6 w-full md:w-1/4 text-md bg-firma"
          size="lg"
        >
          {loading ? "Wysyłanie..." : "Wyślij"}
        </Button>
      </form>
    </div>
  );
}
