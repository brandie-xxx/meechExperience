import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod_001',
    name: 'Meech Classic Oversized Hoodie',
    slug: 'classic-oversized-hoodie',
    category: 'clothes',
    price: 35,
    priceZwg: 450,
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description: 'Heavyweight cotton blend. Oversized fit. Vintage washed black. The ultimate expression of Meech confidence.',
    isBestSeller: true,
    isNew: true,
    inStock: true,
    stock: 12,
    createdAt: new Date()
  },
  {
    id: 'prod_002',
    name: 'Urban Street Joggers',
    slug: 'urban-street-joggers',
    category: 'clothes',
    price: 25,
    priceZwg: 320,
    images: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['M', 'L', 'XL'],
    description: 'Comfort meets style. Reinforced stitching and high-quality elastic waist. Perfect for campus life.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    stock: 15,
    createdAt: new Date()
  },
  {
    id: 'prod_003',
    name: 'Retro High-Top Sneakers',
    slug: 'retro-high-top-sneakers',
    category: 'shoes',
    price: 65,
    priceZwg: 840,
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['7', '8', '9', '10', '11'],
    description: 'Authentic leather upper. High-traction rubber sole. Designed for maximum street presence.',
    isBestSeller: true,
    isNew: false,
    inStock: true,
    stock: 8,
    createdAt: new Date()
  },
  {
    id: 'prod_004',
    name: 'Signature Box Logo Cap',
    slug: 'signature-box-logo-cap',
    category: 'caps',
    price: 15,
    priceZwg: 195,
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['Adjustable'],
    description: 'Premium embroidered logo. 100% cotton twill. Essential urban headwear.',
    isBestSeller: true,
    isNew: false,
    inStock: true,
    stock: 25,
    createdAt: new Date()
  },
  {
    id: 'prod_005',
    name: 'Vintage Wash Graphic Tee',
    slug: 'vintage-wash-graphic-tee',
    category: 'clothes',
    price: 20,
    priceZwg: 260,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Premium heavyweight tee. Distressed graphic print. Streetwear at its core.',
    isBestSeller: false,
    isNew: true,
    inStock: true,
    stock: 20,
    createdAt: new Date()
  },
  {
    id: 'prod_006',
    name: 'Meech Essential Slides',
    slug: 'meech-essential-slides',
    category: 'shoes',
    price: 20,
    priceZwg: 260,
    images: [
      'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['6', '7', '8', '9', '10', '11'],
    description: 'Comfortable contoured footbed. Perfect for chilling or campus walks.',
    isBestSeller: false,
    isNew: false,
    inStock: true,
    stock: 30,
    createdAt: new Date()
  }
];

export const REVIEWS: Review[] = [
  { id: 'r1', user: 'Tinashe M.', rating: 5, comment: 'Best quality hoodie I have ever bought in Zim. Meech is the real deal.', date: '2024-03-15' },
  { id: 'r2', user: 'Sarah K.', rating: 5, comment: 'The sneakers fit perfectly and the delivery to CUT campus was so fast!', date: '2024-03-10' },
  { id: 'r3', user: 'Vinnie D.', rating: 4, comment: 'Clean vibes, authentic streetwear. Looking forward to the next drop.', date: '2024-03-01' }
];

export const WHATSAPP_NUMBER = '263774020356';
export const WHATSAPP_NUMBER_ALT = '263783706136';
export const CONTACT_EMAIL = 'tadiwanashechindeka1@gmail.com';
export const INSTAGRAM_HANDLE = '@e_meech24';
export const SHIPPING_INFO = {
  chinhoyi: 'Free delivery in Chinhoyi',
  other: 'Flat rate $3—$5 for other areas'
};

export const SITE_ASSETS = {
  hero: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=90&w=2400',
  categories: {
    apparel: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200',
    footwear: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800',
    accessories: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
  },
  qrCode: '', // Add URL for actual QR code image here
  about: {
    founder: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200'
  }
};
