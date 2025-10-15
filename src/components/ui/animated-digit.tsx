"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type AnimatedDigitProps = {
  value: number;
  className?: string;
  padStart?: number;
};

const digitsMotion = {
  initial: { y: -25, scale: 0.8 },
  animate: { y: 0, scale: 1 },
  exit: { y: 25, scale: 0.8 },
};

export function AnimatedDigit({
  value,
  className,
  padStart = 2,
}: AnimatedDigitProps) {
  const paddedValue = String(value).padStart(padStart, "0");

  return (
    <div
      className={cn("inline-block relative", className)}
      style={{ minWidth: "1.2em" }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={digitsMotion}
          transition={{
            type: "tween",
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="tabular-nums absolute inset-0 flex items-center justify-center"
        >
          {paddedValue}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
