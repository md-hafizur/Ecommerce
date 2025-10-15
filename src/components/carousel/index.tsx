"use client";

import { products } from "@/data/sliderConfig";
import CarouselContainer from "./CarouselContainer";

export default function BigOfferCarousel() {
  return (
    <div className="w-full mx-auto pb-4">
      <CarouselContainer
        slides={products}
        autoPlay
        interval={5000}
        showArrow={false}
        showDot={true}
        contentPosition="start"
        className="rounded-md"
      />
    </div>
  );
}
