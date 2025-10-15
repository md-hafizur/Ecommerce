// types/product.ts
export interface Product {
  id: string;
  name: string;
  categories: string[];
  image: string;
  price: number;
  originalPrice?: number;
  badge?: {
    text: string;
    variant: 'default' | 'sale' | 'new';
  };
}

export interface Tab {
  id: string;
  label: string;
  products: Product[];
}