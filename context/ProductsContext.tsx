import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ProductsContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'slug' | 'createdAt'>) => void;
  removeProduct: (id: string) => void;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const savedProducts = localStorage.getItem('meech-products');
      if (savedProducts) {
        const parsed = JSON.parse(savedProducts);
        // Map string dates back to Date objects if needed
        return parsed.map((p: any) => ({
          ...p,
          createdAt: p.createdAt ? new Date(p.createdAt) : new Date()
        }));
      }
    } catch (e) {
      console.error('Failed to parse saved products', e);
    }
    return PRODUCTS;
  });

  // Keep localStorage sync'd
  useEffect(() => {
    localStorage.setItem('meech-products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProductData: Omit<Product, 'id' | 'slug' | 'createdAt'>) => {
    const defaultSlug = newProductData.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const id = `prod_${Date.now()}`;
    const slug = `${defaultSlug}-${id.slice(-4)}`;

    const newProduct: Product = {
      ...newProductData,
      id,
      slug,
      createdAt: new Date()
    };

    setProducts(prev => [newProduct, ...prev]);
  };

  const removeProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
