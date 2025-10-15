// components/ProductCarousel.tsx
'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ProductCard } from './ProductCard';
import { Product, Tab } from '@/types/product';

export interface ProductCarouselProps {
  tabs?: Tab[];
  products?: Product[];
  slidesToShow?: number;
  gap?: number;
  showTabs?: boolean;
  showNavigation?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  loop?: boolean;
  onWishlist?: (productId: string) => void;
  onCompare?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
  className?: string;
}

export function ProductCarousel({
  tabs,
  products,
  slidesToShow = 4,
  gap = 16,
  showTabs = true,
  showNavigation = true,
  showDots = true,
  autoplay = false,
  autoplayDelay = 3000,
  loop = false,
  onWishlist,
  onCompare,
  onAddToCart,
  className = '',
}: ProductCarouselProps) {
  console.log('tabs prop:', tabs);
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.id || 'default');
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    loop,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, slidesToShow]);

  useEffect(() => {
    if (!autoplay || !emblaApi) return;

    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else if (loop) {
        emblaApi.scrollTo(0);
      }
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayDelay, loop]);

  const currentProducts = showTabs && tabs
    ? tabs.find((tab) => tab.id === activeTab)?.products || []
    : products || [];

  const slideWidth = `calc((100% - ${gap * (slidesToShow - 1)}px) / ${slidesToShow})`;

  return (
    <div className={`w-full ${className}`}>
      {showTabs && tabs && tabs.length > 0 && (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="border-b border-gray-200 bg-transparent h-auto p-0 rounded-none">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="data-[state=active]:border-b-2 data-[state=active]:border-yellow-400 rounded-none bg-transparent px-6 py-3"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      <div className="relative">
        {/* Navigation Buttons */}
        {showNavigation && (canScrollPrev || canScrollNext) && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-white shadow-lg disabled:opacity-50"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-white shadow-lg disabled:opacity-50"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex" style={{ gap: `${gap}px` }}>
            {currentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="flex-shrink-0"
                style={{ width: slideWidth }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard
                  product={product}
                  onWishlist={onWishlist}
                  onCompare={onCompare}
                  onAddToCart={onAddToCart}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dots */}
        {showDots && scrollSnaps.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-yellow-400 w-8'
                    : 'bg-gray-300 w-2'
                }`}
                onClick={() => scrollTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}