"use client";

import { Countdown } from "@/components/countdown/countdown";
import Link from "next/link";

export default function CustomerHeaderTop() {
  const now = new Date();
  const endDateTime = new Date("2025-08-28T23:59:59Z");
  if (now > endDateTime) {
    return null;
  }
  return (
    <div className="w-full bg-gray-800 text-white overflow-hidden">
      <div className="container mx-auto overflow-hidden">
        <nav className="flex flex-col items-center justify-center gap-1 p-2 sm:flex-row sm:gap-2 sm:justify-center text-xs sm:text-sm md:text-base">
          <Link
            href={"/"}
            className="hover:underline whitespace-nowrap text-center sm:text-left"
          >
            Until the end of the sale:
          </Link>

          <div className="w-full sm:w-auto overflow-hidden flex justify-center">
            <Countdown
              endDateTime={endDateTime.toDateString()}
              numberClassName="text-[10px] xs:text-xs sm:text-sm font-semibold"
              labelClassName="text-[8px] xs:text-[9px] sm:text-[10px] text-gray-300"
              unitClassName="flex items-center text-[8px] xs:text-[9px] sm:text-[10px] text-white"
              className="flex-wrap justify-center"
              hideZeroValues={true}
              showSeparators={true}
              showCard={false}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
