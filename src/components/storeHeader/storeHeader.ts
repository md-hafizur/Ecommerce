import { MapPin, Package, ShoppingBag, User, Shirt, Heart } from "lucide-react";

// Electronics config
export const electronicsHeader = {
  title: "Welcome to Worldwide Electronics Store",
  actions: [
    { icon: MapPin, label: "Store Locator" },
    { icon: Package, label: "Track Order" },
    { icon: ShoppingBag, label: "Shop" },
    { icon: User, label: "My Account" },
  ],
};

// Fashion config
export const fashionHeader = {
  title: "Welcome to Trendy Fashion Store",
  actions: [
    { icon: Shirt, label: "Men's Wear" },
    { icon: Heart, label: "Wishlist" },
    { icon: ShoppingBag, label: "Shop Now" },
    { icon: User, label: "Profile" },
  ],
};
