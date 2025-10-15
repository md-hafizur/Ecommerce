// import { useEffect, useMemo, useState } from 'react'

// export type TimeLeft = {
//   total: number
//   days: number
//   hours: number
//   minutes: number
//   seconds: number
// }

// export type CountdownConfig = {
//   endDate?: string // YYYY-MM-DD
//   endTime?: string // HH:MM:SS
//   defaultDuration?: {
//     days?: number
//     hours?: number
//     minutes?: number
//     seconds?: number
//   }
// }

// export function useCountdown(config: CountdownConfig) {
//   const target = useMemo(() => {
//     if (config.endDate && config.endTime) {
//       const parsed = new Date(`${config.endDate}T${config.endTime}`)
//       if (!isNaN(parsed.getTime())) return parsed.getTime()
//     }

//     const now = Date.now()
//     const {
//       days = 10,
//       hours = 12,
//       minutes = 5,
//       seconds = 30
//     } = config.defaultDuration || {}

//     const defaultMs =
//       days * 24 * 60 * 60 * 1000 +
//       hours * 60 * 60 * 1000 +
//       minutes * 60 * 1000 +
//       seconds * 1000
//     return now + defaultMs
//   }, [config.endDate, config.endTime, config.defaultDuration])

//   const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
//     calcTimeLeft(target)
//   )

//   useEffect(() => {
//     const id = setInterval(() => {
//       setTimeLeft(calcTimeLeft(target))
//     }, 1000)

//     return () => clearInterval(id)
//   }, [target])

//   function calcTimeLeft(targetMs: number): TimeLeft {
//     const total = Math.max(0, targetMs - Date.now())
//     const secondsTotal = Math.floor(total / 1000)
//     const days = Math.floor(secondsTotal / (24 * 3600))
//     const hours = Math.floor((secondsTotal % (24 * 3600)) / 3600)
//     const minutes = Math.floor((secondsTotal % 3600) / 60)
//     const seconds = Math.floor(secondsTotal % 60)
//     return { total, days, hours, minutes, seconds }
//   }

//   return {
//     timeLeft,
//     isExpired: timeLeft.total <= 0,
//     target
//   }
// }

import { useEffect, useMemo, useState } from "react";

export type TimeLeft = {
  total: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type CountdownConfig = {
  endDateTime?: string; // Full ISO string like "2025-08-25T23:59:59Z"
  defaultDuration?: {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
};

export function useCountdown(config: CountdownConfig) {
  const target = useMemo(() => {
    // Handle endDateTime
    if (config.endDateTime) {
      const parsed = new Date(config.endDateTime);
      if (!isNaN(parsed.getTime())) {
        return parsed.getTime();
      }
    }

    // Fallback to defaultDuration
    const now = Date.now();
    const {
      days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0,
    } = config.defaultDuration || {};

    const defaultMs =
      days * 24 * 60 * 60 * 1000 +
      hours * 60 * 60 * 1000 +
      minutes * 60 * 1000 +
      seconds * 1000;

    return now + defaultMs;
  }, [config.endDateTime, config.defaultDuration]);

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

  return {
    timeLeft,
    isExpired: timeLeft.total <= 0,
    target,
  };
}
