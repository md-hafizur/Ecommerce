"use client";

import { CountdownConfig, useCountdown } from "@/hooks/useCountdown";
import React from "react";
import { CountdownDisplay } from "./countdown-display";
import { CountdownExpired } from "./countdown-expired";

export type CountdownProps = {
  // Countdown configuration
  endDateTime?: string; // Full ISO string like "2025-08-25T23:59:59Z"
  defaultDuration?: CountdownConfig["defaultDuration"];

  // Display options
  displayDays?: boolean;
  displayHours?: boolean;
  displayMinutes?: boolean;
  displaySeconds?: boolean;
  hideZeroValues?: boolean;
  showSeparators?: boolean;

  // Styling
  showCard?: boolean;
  className?: string;
  unitClassName?: string;
  numberClassName?: string;
  labelClassName?: string;

  // End state
  endMessage?: string;
  onExpired?: () => void;
};

export function Countdown({
  endDateTime,
  defaultDuration,
  displayDays = true,
  displayHours = true,
  displayMinutes = true,
  displaySeconds = true,
  hideZeroValues = true,
  showSeparators = false,
  showCard = true,
  className,
  unitClassName,
  numberClassName,
  labelClassName,
  endMessage = "Time's up!",
  onExpired,
}: CountdownProps) {
  const { timeLeft, isExpired } = useCountdown({
    endDateTime,
    defaultDuration,
  });

  console.log("Time left:", timeLeft);

  // Call onExpired callback when countdown expires
  React.useEffect(() => {
    if (isExpired && onExpired) {
      onExpired();
    }
  }, [isExpired, onExpired]);

  if (isExpired) {
    return (
      <CountdownExpired
        message={endMessage}
        showCard={showCard}
        className={className}
        messageClassName={numberClassName}
      />
    );
  }

  return (
    <CountdownDisplay
      timeLeft={timeLeft}
      displayConfig={{
        days: displayDays,
        hours: displayHours,
        minutes: displayMinutes,
        seconds: displaySeconds,
      }}
      showCard={showCard}
      hideZeroValues={hideZeroValues}
      showSeparators={showSeparators}
      className={className}
      unitClassName={unitClassName}
      numberClassName={numberClassName}
      labelClassName={labelClassName}
    />
  );
}
