export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  priceZwg?: number; // Optional ZWG price
  category: 'clothes' | 'shoes' | 'caps';
  sizes: string[];
  images: string[];
  inStock: boolean;
  stock: number;
  isBestSeller: boolean;
  isNew: boolean;
  createdAt: Date;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ContactFormData {
  name: string;
  contact: string; // WhatsApp or Email
  message: string;
}
