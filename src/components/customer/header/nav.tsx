"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function CustomerHeaderNav() {
  const [currency, setCurrency] = useState("bdt");
  const [language, setLanguage] = useState("en");
  const currencyOptions = [
    { value: "bdt", label: "BDT" },
    { value: "usd", label: "USD" },
  ];
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "bn", label: "বাংলা" },
    { value: "hi", label: "हिन्दी" },
  ];
  return (
    <div className="border-b w-full">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 w-full">
          <div className="flex justify-start items-center gap-4">
            <Button className="font-medium text-sm p-0" variant={"link"}>
              About Us
            </Button>
            <Button className="font-medium text-sm p-0" variant={"link"}>
              My Account
            </Button>
            <span className="h-6">
              <Separator orientation="vertical" />
            </span>
            <p className="text-sm">We are available 24/7</p>
          </div>
          <div className="flex items-center justify-end">
            <Select
              value={language}
              onValueChange={(value) => setLanguage(value)}
            >
              <SelectTrigger className="border-none shadow-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={currency}
              onValueChange={(value) => setCurrency(value)}
            >
              <SelectTrigger className="border-none shadow-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencyOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant={"link"} className="p-0">
              Track Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
