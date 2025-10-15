"use client";

import { CountdownSeparator } from "@/components/ui/countdown-separator";
import { TimeUnit } from "@/components/ui/time-unit";
import { TimeLeft } from "@/hooks/useCountdown";
import { cn } from "@/lib/utils";

type CountdownDisplayProps = {
  timeLeft: TimeLeft;
  displayConfig: {
    days?: boolean;
    hours?: boolean;
    minutes?: boolean;
    seconds?: boolean;
  };
  showCard?: boolean;
  hideZeroValues?: boolean;
  showSeparators?: boolean;
  className?: string;
  unitClassName?: string;
  numberClassName?: string;
  labelClassName?: string;
};

export function CountdownDisplay({
  timeLeft,
  displayConfig,
  showCard = true,
  hideZeroValues = true,
  showSeparators = false,
  className,
  unitClassName,
  numberClassName,
  labelClassName,
}: CountdownDisplayProps) {
  const units = [
    {
      key: "days",
      value: timeLeft.days,
      show: displayConfig.days,
      label: timeLeft.days === 1 ? "Day\u00A0" : "Days",
    },
    {
      key: "hours",
      value: timeLeft.hours,
      show: displayConfig.hours,
      label: timeLeft.hours === 1 ? "Hour\u00A0" : "Hours",
    },
    {
      key: "minutes",
      value: timeLeft.minutes,
      show: displayConfig.minutes,
      label: timeLeft.minutes === 1 ? "Min\u00A0" : "Mins",
    },
    {
      key: "seconds",
      value: timeLeft.seconds,
      show: displayConfig.seconds,
      label: timeLeft.seconds === 1 ? "Sec\u00A0" : "Secs",
    },
  ];

  const visibleUnits = units.filter((unit) => {
    if (!unit.show) return false;
    if (
      hideZeroValues &&
      ["days", "hours", "minutes"].includes(unit.key) &&
      unit.value === 0
    ) {
      return false;
    }
    return true;
  });

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-live="polite"
    >
      {visibleUnits.map((unit, index) => (
        <div key={unit.key} className="flex items-center gap-1">
          <TimeUnit
            value={unit.value}
            label={unit.label}
            showCard={showCard}
            className={unitClassName}
            numberClassName={numberClassName}
            labelClassName={labelClassName}
            aria-label={`${unit.value} ${unit.label}`}
          />
          {showSeparators && index < visibleUnits.length - 1 && (
            <CountdownSeparator />
          )}
        </div>
      ))}
    </div>
  );
}
