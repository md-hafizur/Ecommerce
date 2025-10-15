"use client";

import { useEffect, useState } from "react";

export function useSmallMediumDevice() {
  const [isSmallMedium, setIsSmallMedium] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const checkDevice = () => {
      // Tailwind lg breakpoint = 1024px
      setIsSmallMedium(window.innerWidth < 1024);
    };

    checkDevice(); // initial check
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isSmallMedium;
}
