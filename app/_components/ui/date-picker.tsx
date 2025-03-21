"use client";

import * as React from "react";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";

import { Button } from "./button";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { cn } from "@/app/_lib/utils";
import { SelectSingleEventHandler } from "react-day-picker";

interface DatePickerProps {
  value?: Date;
  onChange?: SelectSingleEventHandler;
}

export const DatePicker = ({ value, onChange }: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground",
          )}
        >
          <CalendarIcon />
          {value ? (
            new Date(value).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
          ) : (
            <span>Seleciona uma data...</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
          locale={ptBR}
          disabled={{
            before: new Date(
              new Date().setFullYear(new Date().getFullYear() - 5),
            ),
            after: new Date(
              new Date().setFullYear(new Date().getFullYear() + 5),
            ),
          }}
        />
      </PopoverContent>
    </Popover>
  );
};
