// components/ProductCard.tsx
import Image from 'next/image';
import { ShoppingCart, Heart, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onWishlist?: (productId: string) => void;
  onCompare?: (productId: string) => void;
}

export function ProductCard({ 
  product, 
  onAddToCart,
  onWishlist,
  onCompare 
}: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
     className={`group relative overflow-hidden ${isHovered ? 'border rounded-md border-gray-250' : 'border-r-1 rounded-md'} hover:shadow-lg transition-all duration-300 h-full bg-white/80 dark:bg-gray-900/80`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        {/* Categories */}
        <div className="text-xs text-primary mb-1 min-h-[16px]">
          {product.categories.join(', ')}
        </div>

        {/* Product Name */}
        <h3 className="text-primary/90  font-medium text-base mb-6 min-h-[48px] line-clamp-2 hover:underline cursor-pointer">
          {product.name}
        </h3>

        {/* Product Image */}
        <div className="relative aspect-square mb-6 bg-white/80 dark:bg-gray-900/80 overflow-hidden flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Price and Cart Button */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-xs text-primary line-through mb-1">
                ${product.originalPrice?.toFixed(2)}
              </span>
            )}
            <span className={`font-bold text-xl ${hasDiscount ? 'text-red-500' : 'text-primary'}`}>
              ${product.price.toFixed(2)}
            </span>
          </div>

          {onAddToCart && (
            <Button
              size="icon"
              className="h-10 w-10 rounded-full bg-yellow-400 hover:bg-yellow-500 text-primary transition-colors shadow-md"
              onClick={() => onAddToCart(product.id)}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Hover Actions - Wishlist & Compare */}
        <div className="flex h-5 items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-4">
          {onWishlist && (
            <button
              onClick={() => onWishlist(product.id)}
              className="flex items-center gap-2 text-sm text-primary hover:text-blue-600 transition-colors"
            >
              <Heart className="h-4 w-4" />
              <span>Wishlist</span>
            </button>
          )}
          {onWishlist && onCompare && (
            <Separator orientation="vertical" className="h-1/2" />
          )}
          {onCompare && (
            <button
              onClick={() => onCompare(product.id)}
              className="flex items-center gap-2 text-sm text-primary hover:text-blue-600 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Compare</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
