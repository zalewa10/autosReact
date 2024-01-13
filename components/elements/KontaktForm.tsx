"use client";

import React, { useRef, useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import emailjs from "@emailjs/browser";
import Confetti from "react-confetti";
import { useToast } from "../ui/use-toast";
import styled from "styled-components";
import { Card, CardHeader, CardTitle } from "../ui/card";

const ConfettiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Ensure the confetti doesn't interfere with user interactions */
  z-index: 999; /* Adjust the z-index to ensure the confetti is above other elements */
`;

const jeden = process.env.NEXT_PUBLIC_JEDEN;
const dwa = process.env.NEXT_PUBLIC_DWA;
const trzy = process.env.NEXT_PUBLIC_TRZY;

const KontaktForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    surname: "",
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
      <div className="md:flex  justify-end">
        <ConfettiContainer>{showConfetti && <Confetti />}</ConfettiContainer>
        <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-4 md:w-full">
          <CardHeader>
            <CardTitle>
              <p className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 ">
                Formularz kontaktowy
              </p>
            </CardTitle>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="md:flex md:flex-col md:justify-between"
              id="contact-form"
            >
              <div className="md:space-y-4 mt-3">
                <div className="md:flex md:flex-row md:items-center md:space-x-4">
                  <div>
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

                  <div className="mt-3 md:mt-0">
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
              </div>
              <Button
                type="submit"
                className="mt-6 w-full md:w-1/4 text-md"
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
