"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatedDigit } from "./animated-digit";

type TimeUnitProps = {
  value: number;
  label: string;
  showCard?: boolean;
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
};

export function TimeUnit({
  value,
  label,
  showCard = true,
  className,
  numberClassName,
  labelClassName,
}: TimeUnitProps) {
  const content = (
    <div
      className={cn(
        className,
        "flex items-center justify-center min-w-[60px] gap-2",
        showCard && "p-3 flex-col"
      )}
    >
      <AnimatedDigit
        value={value}
        className={cn(
          "text-2xl font-bold leading-none tracking-tight",
          numberClassName
        )}
      />
      <div
        className={cn(
          "text-xs opacity-75 uppercase tracking-wider",
          labelClassName
        )}
      >
        {label}
      </div>
    </div>
  );

  if (showCard) {
    return (
      <Card className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border-white/10">
        {content}
      </Card>
    );
  }

  return content;
}
