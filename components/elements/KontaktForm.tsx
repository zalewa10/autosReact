"use client";

import React, { useRef, useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import Confetti from "react-confetti";
import styled from "styled-components";
import { Label } from "../ui/label";
import emailjs from "@emailjs/browser";
import { useToast } from "../ui/use-toast";
import { Card, CardHeader, CardTitle } from "../ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { Checkbox } from "../ui/checkbox";

const jeden = process.env.NEXT_PUBLIC_JEDEN;
const dwa = process.env.NEXT_PUBLIC_DWA;
const trzy = process.env.NEXT_PUBLIC_TRZY;

const ConfettiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
`;

const KontaktForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    surname: "",
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const [loading, setLoading] = useState(false);
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
            email: "",
            message: "",
            surname: "",
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
    <Card className="h-full w-full">
      <ConfettiContainer>{showConfetti && <Confetti />}</ConfettiContainer>

      <div className="md:flex justify-center w-full">
        <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-4 w-full">
          <CardHeader className="w-full">
            <CardTitle>
              <p className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900">
                Formularz kontaktowy
              </p>
            </CardTitle>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="md:flex md:flex-col md:justify-between "
              id="contact-form"
            >
              <div className="md:space-y-4 mt-3">
                <div className="md:flex md:flex-row md:items-center md:space-x-4">
                  <div className="md:w-full">
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

                  <div className="mt-3 md:mt-0 md:w-full">
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
                  <Label htmlFor="message">Wiadomość</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    placeholder="Wpisz swoją wiadmość"
                    onChange={handleChange}
                    rows={5}
                    required={true}
                  />
                </div>
                <Collapsible className="mt-3">
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
                      jazdy. Podanie danych jest dobrowolne jednak ułatwia
                      kontakt w procesie rekrutacji. Przysługuje Pani/Panu prawo
                      wglądu do treści swoich danych osobowych i ich poprawiania
                      oraz żądania zaprzestania ich przetwarzania.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              <Button
                type="submit"
                className="mt-6 w-full md:w-1/4 text-md bg-firma"
                size="lg"
              >
                {loading ? "Wysyłanie..." : "Wyślij"}
              </Button>
            </form>
          </CardHeader>
        </div>
      </div>
    </Card>
  );
};

export default KontaktForm;
