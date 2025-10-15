"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

type CountdownProps = {
  fontSize?: number;
  fontFamily?: string;
  fontColor?: string;
  fontWeight?: string | number;
  displayDays?: boolean;
  displayHours?: boolean;
  displayMinutes?: boolean;
  displaySeconds?: boolean;
  endDate?: string; // YYYY-MM-DD (optional)
  endTime?: string; // HH:MM:SS (optional)
  endMessage?: string;
  showCard?: boolean;
};

type TimeLeft = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

import { AnimationGeneratorType } from "framer-motion";

const digitsMotion = {
  initial: { y: -8, opacity: 0, scale: 0.98 },
  animate: { y: 0, opacity: 1, scale: 1 },
  exit: { y: 8, opacity: 0, scale: 0.98 },
  transition: {
    type: "spring" as AnimationGeneratorType,
    stiffness: 400,
    damping: 28,
  },
};

export default function Countdown(props: CountdownProps) {
  const {
    fontSize = 24,
    fontFamily = '"Inter", system-ui, -apple-system, "Segoe UI", Roboto',
    fontColor = "white",
    fontWeight = 800,
    displayDays = true,
    displayHours = true,
    displayMinutes = true,
    displaySeconds = true,
    endDate = "",
    endTime = "",
    endMessage = "Time's up!",
    showCard = true,
  } = props;

  // default target: now + 10d 12h 5m 30s
  const target = useMemo(() => {
    if (endDate && endTime) {
      const parsed = new Date(`${endDate}T${endTime}`);
      if (!isNaN(parsed.getTime())) return parsed.getTime();
    }
    const now = Date.now();
    const defaultMs =
      10 * 24 * 60 * 60 * 1000 +
      12 * 60 * 60 * 1000 +
      5 * 60 * 1000 +
      30 * 1000;
    return now + defaultMs;
  }, [endDate, endTime]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calcTimeLeft(target)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(calcTimeLeft(target));
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  function calcTimeLeft(targetMs: number): TimeLeft {
    const total = Math.max(0, targetMs - Date.now());
    const secondsTotal = Math.floor(total / 1000);
    const days = Math.floor(secondsTotal / (24 * 3600));
    const hours = Math.floor((secondsTotal % (24 * 3600)) / 3600);
    const minutes = Math.floor((secondsTotal % 3600) / 60);
    const seconds = Math.floor(secondsTotal % 60);
    return { total, days, hours, minutes, seconds };
  }

  const parts = [
    {
      key: "days",
      value: timeLeft.days,
      show: displayDays,
      label: timeLeft.days === 1 ? "Day" : "Days",
    },
    {
      key: "hours",
      value: timeLeft.hours,
      show: displayHours,
      label: timeLeft.hours === 1 ? "Hour" : "Hours",
    },
    {
      key: "minutes",
      value: timeLeft.minutes,
      show: displayMinutes,
      label: timeLeft.minutes === 1 ? "Min" : "Mins",
    },
    {
      key: "seconds",
      value: timeLeft.seconds,
      show: displaySeconds,
      label: timeLeft.seconds === 1 ? "Sec" : "Secs",
    },
  ].filter((p) => p.show);

  const containerStyle: React.CSSProperties = {
    display: "flex",
    gap: 12,
    alignItems: "center",
    fontFamily,
    color: fontColor,
  };

  const cardStyle: React.CSSProperties = {
    minWidth: 30,
    padding: "12px 14px",
    borderRadius: 12,
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
    backdropFilter: "blur(6px)",
    boxShadow: "0 6px 18px rgba(2,6,23,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const numberStyle: React.CSSProperties = {
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: 1,
    letterSpacing: "-0.02em",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: Math.max(10, fontSize / 6),
    opacity: 0.75,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  };

  if (timeLeft.total <= 0) {
    return (
      <div style={{ ...containerStyle }}>
        <div style={{ ...(showCard && { ...cardStyle }) }}>
          <span style={{ ...numberStyle }}>{endMessage}</span>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle} aria-live="polite">
      {parts.map((p) => {
        if (["days", "hours", "minutes"].includes(p.key) && p.value === 0)
          return null;
        return (
          <div
            className="flex items-center gap-1"
            key={p.key}
            style={{ ...(showCard && cardStyle) }}
            aria-label={`${p.value} ${p.label}`}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={`${p.key}-${p.value}`}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={digitsMotion}
                transition={digitsMotion.transition}
                style={numberStyle}
              >
                {String(p.value).padStart(2, "0")}
              </motion.div>
            </AnimatePresence>

            <div style={labelStyle}>{p.label}</div>
          </div>
        );
      })}
    </div>
  );
}
