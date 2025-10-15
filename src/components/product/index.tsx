"use client";

import { ProductCarousel } from '@/components/product/ProductCarousel';
import { productsData } from "@/data/products_data";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSmallMediumDevice } from "@/hooks/use-small-medium-device";

export function ProductSection() {
  const isMobile = useIsMobile();
  const isSmallMedium = useSmallMediumDevice();

  const slidesToShow = isMobile ? 2 : isSmallMedium ? 3 : 5;

  return (
    <ProductCarousel
      tabs={productsData.tabs || []}
      autoplay={false}
      autoplayDelay={3000}
      slidesToShow={slidesToShow}
      gap={20}
      showTabs={true}
      showNavigation={true}
      showDots={false}
      loop={false}
      onWishlist={(id: number | string) => console.log('Wishlist:', id)}
      onCompare={(id: number | string) => console.log('Compare:', id)}
      onAddToCart={(id: number | string) => console.log('Add to cart:', id)}
    />
  );
}
