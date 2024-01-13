"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Confetti from "react-confetti";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import styled from "styled-components";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";
import { Separator } from "./ui/separator";

const ConfettiContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Ensure the confetti doesn't interfere with user interactions */
  z-index: 999; /* Adjust the z-index to ensure the confetti is above other elements */
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

const customFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  surname: z
    .string()
    .min(2, { message: "Surname must be at least 2 characters." }),
  address: z.string(),
  city: z.string(),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .min(9, { message: "Phone number must be at least 9 characters." }),
  kurs: z.string(),
  message: z.string(),
});

type CustomFormValues = z.infer<typeof customFormSchema>;

const defaultCustomValues: Partial<CustomFormValues> = {
  name: "",
  surname: "",
  address: "",
  city: "",
  email: "",
  phoneNumber: "",
  kurs: "",
  message: "",
};

export function CustomForm() {
  const [showConfetti, setShowConfetti] = useState(false);
  const form = useForm<CustomFormValues>({
    resolver: zodResolver(customFormSchema),
    defaultValues: defaultCustomValues,
    mode: "onChange",
  });

  const onSubmit = async (data: CustomFormValues) => {
    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Form submitted successfully!",
          description: "Your form data has been sent.",
        });
        form.reset();
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: "An error occurred while submitting the form.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <ConfettiContainer>{showConfetti && <Confetti />}</ConfettiContainer>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwisko</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adres zamieszkania</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Miejscowość</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nr telefonu</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="kurs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wybrany kurs:</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Wybierz kurs" />
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
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wiadomość</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Wprowadź wiadomość"
                    className="resize-none"
                    rows={5}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Wyślij</Button>
        </form>
      </Form>
    </div>
  );
}
