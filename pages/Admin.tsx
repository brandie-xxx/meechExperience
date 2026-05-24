import React, { useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import { Product } from '../types';

const Admin: React.FC = () => {
  const { products, addProduct, removeProduct } = useProducts();

  // Authentication State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem('meech-auth-state') === 'true';
  });
  const [authError, setAuthError] = useState('');

  // Form states
  const [name, setName] = useState('');
  const [category, setCategory] = useState<'clothes' | 'shoes' | 'caps'>('clothes');
  const [price, setPrice] = useState<number>(30);
  const [stock, setStock] = useState<number>(10);
  const [isBestSeller, setIsBestSeller] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [inStock, setInStock] = useState(true);

  // Image states (URLs or Base64)
  const [imageUrl, setImageUrl] = useState('');
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isCompressing, setIsCompressing] = useState(false);

  // Success feedback state
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Auth Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'meechtadiwa' && password === 'themeechchindeka123') {
      setIsLoggedIn(true);
      setAuthError('');
      sessionStorage.setItem('meech-auth-state', 'true');
    } else {
      setAuthError('Incorrect username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('meech-auth-state');
  };

  // Compress & convert file uploads to base64 beautifully to save storage space
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsCompressing(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 480;
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          const base64 = canvas.toDataURL('image/jpeg', 0.7);
          setImagePreview(base64);
          setImageUrl(''); // Clear text input link if file uploaded
        }
        setIsCompressing(false);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const finalImage = imagePreview || imageUrl || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200';

    // Set reasonable size defaults for categories under-the-hood to ensure client details stay high-grade
    const categorySizes: Record<'clothes' | 'shoes' | 'caps', string[]> = {
      clothes: ['S', 'M', 'L', 'XL'],
      shoes: ['8', '9', '10'],
      caps: ['Adjustable']
    };

    const newProductData: Omit<Product, 'id' | 'slug' | 'createdAt'> = {
      name: name.trim(),
      description: name.trim(), // Keep description under-the-hood equivalent to name
      category,
      price: Number(price),
      sizes: categorySizes[category],
      images: [finalImage],
      inStock,
      stock: Number(stock),
      isBestSeller,
      isNew
    };

    addProduct(newProductData);

    // Reset Form
    setName('');
    setPrice(30);
    setStock(10);
    setIsBestSeller(false);
    setIsNew(true);
    setInStock(true);
    setImagePreview('');
    setImageUrl('');

    // Trigger Success
    setShowSuccessToast(true);
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  // --- LOGIN PANEL VIEW ---
  if (!isLoggedIn) {
    return (
      <div className="bg-white min-h-screen pb-24 pt-36 px-4 flex items-center justify-center">
        <div className="w-full max-w-sm bg-neutral-50 p-8 rounded-3xl border border-black/5 space-y-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tighter text-primary">
              Meech login.
            </h1>
            <p className="text-xs text-text-secondary font-medium">
              Enter credentials to access admin dashboard.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-text-secondary block ml-1">Username</label>
              <input
                required
                type="text"
                placeholder="meechtadiwa"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-black/5 rounded-2xl outline-none focus:border-secondary transition-all font-semibold text-xs text-primary shadow-sm"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-text-secondary block">Password</label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-[9px] text-text-secondary hover:text-primary font-bold transition-colors"
                >
                  {showPassword ? 'hide' : 'show'}
                </button>
              </div>
              <input
                required
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-black/5 rounded-2xl outline-none focus:border-secondary transition-all font-semibold text-xs text-primary shadow-sm"
              />
            </div>

            {authError && (
              <p className="text-[11px] text-[#FF3B30] font-bold ml-1">{authError}</p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-full font-bold text-xs shadow-md hover:bg-secondary hover:text-white transition-all"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- DASHBOARD VIEW ---
  return (
    <div className="bg-white min-h-screen pb-24 pt-28 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Simplified Header Block */}
        <div className="mb-10 border-b border-black/5 pb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-primary">
              Meech admin.
            </h1>
            <p className="text-xs text-text-secondary font-medium">
              Control listings shown across the store.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="px-5 py-2 bg-neutral-100 hover:bg-neutral-200 text-primary font-bold text-xs rounded-full transition-all text-center self-start sm:self-auto"
          >
            Logout
          </button>
        </div>

        {/* Simplified Dashboard Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Add Drop - Left Form */}
          <div className="lg:col-span-5 bg-neutral-50/50 p-6 rounded-3xl border border-black/5 space-y-5">
            <h3 className="text-xs font-black text-primary border-b border-black/5 pb-2">
              Add Drop
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Identity */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-text-secondary block ml-1">Drop Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Vintage Crewneck"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-black/5 rounded-2xl outline-none focus:border-secondary transition-all font-semibold text-xs text-primary shadow-sm"
                />
              </div>

              {/* Category & Pricing Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-text-secondary block ml-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3 py-2.5 bg-white border border-black/5 rounded-2xl outline-none focus:border-secondary transition-all font-bold text-xs text-primary shadow-sm"
                  >
                    <option value="clothes">Clothes</option>
                    <option value="shoes">Shoes</option>
                    <option value="caps">Caps</option>
                  </select>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-text-secondary block ml-1">Price ($)</label>
                  <input
                    required
                    type="number"
                    min={0}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-3 py-2.5 bg-white border border-black/5 rounded-2xl outline-none focus:border-secondary transition-all font-bold text-xs text-primary shadow-sm"
                  />
                </div>
              </div>

              {/* Simplified Drop Visual */}
              <div className="space-y-2 bg-white p-4 rounded-2xl border border-black/5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-primary">Drop Visual</span>
                  <label className="text-[10px] font-bold text-secondary cursor-pointer bg-secondary/15 px-2 py-0.5 rounded-full hover:bg-secondary hover:text-white transition-all">
                    Upload image file
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>

                {!imagePreview && (
                  <input
                    type="text"
                    placeholder="Or paste direct image URL link..."
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full px-3 py-2 bg-neutral-50 border border-black/5 rounded-xl outline-none text-[10px] text-primary"
                  />
                )}

                {(imagePreview || imageUrl) && (
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-neutral-50 border border-black/5 group">
                    <img
                      src={imagePreview || imageUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview('');
                        setImageUrl('');
                      }}
                      className="absolute top-2 right-2 px-2 py-1 bg-black/70 hover:bg-[#FF3B30] text-white text-[9px] font-bold rounded-full transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                )}

                {isCompressing && (
                  <p className="text-[9px] font-bold text-secondary animate-pulse text-center">
                    Compressing asset...
                  </p>
                )}
              </div>

              {/* Toggles Panel */}
              <div className="grid grid-cols-3 gap-2">
                <label className="flex items-center gap-1.5 bg-white px-3 py-2.5 rounded-2xl border border-black/5 shadow-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isNew}
                    onChange={(e) => setIsNew(e.target.checked)}
                    className="rounded border-black/10 text-secondary focus:ring-0"
                  />
                  <span className="text-[10px] font-semibold text-primary">New</span>
                </label>
                
                <label className="flex items-center gap-1.5 bg-white px-3 py-2.5 rounded-2xl border border-black/5 shadow-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isBestSeller}
                    onChange={(e) => setIsBestSeller(e.target.checked)}
                    className="rounded border-black/10 text-secondary focus:ring-0"
                  />
                  <span className="text-[10px] font-semibold text-primary">Popular</span>
                </label>

                <label className="flex items-center gap-1.5 bg-white px-3 py-2.5 rounded-2xl border border-black/5 shadow-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                    className="rounded border-black/10 text-secondary focus:ring-0"
                  />
                  <span className="text-[10px] font-semibold text-primary">In stock</span>
                </label>
              </div>

              {/* Launch Drop Button */}
              <button
                type="submit"
                disabled={isCompressing}
                className="w-full py-4 bg-primary text-white rounded-full font-bold text-xs shadow-md hover:bg-secondary hover:text-white transition-all disabled:opacity-50"
              >
                Launch drop
              </button>
            </form>
          </div>

          {/* Active Inventory - Right Panel */}
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-black/5 space-y-5">
            <h3 className="text-xs font-black text-primary border-b border-black/5 pb-2">
              Catalog
            </h3>

            <div className="space-y-3 max-h-[1100px] overflow-y-auto pr-1">
              {products.length === 0 ? (
                <div className="text-center py-20 bg-neutral-50 rounded-2xl border border-black/5">
                  <p className="text-xs text-text-secondary">All drops cleared.</p>
                </div>
              ) : (
                products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-neutral-50 p-3.5 rounded-2xl border border-black/5 flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-black/5 bg-white">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-primary">{product.name}</h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#FF7A00]">${product.price}</span>
                          {product.isBestSeller && (
                            <span className="text-[8px] font-semibold text-[#FF7A00] bg-secondary/15 px-1.5 py-0.2 rounded">
                              Popular
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => removeProduct(product.id)}
                      className="px-3 py-1.5 text-[10px] text-text-secondary hover:text-[#FF3B30] hover:bg-[#FF3B30]/5 rounded-full transition-all"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Notification Toast */}
      {showSuccessToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-primary border border-secondary/20 px-6 py-3 rounded-full text-white shadow-xl flex items-center space-x-2 font-bold text-xs">
          <span>Drop published successfully</span>
        </div>
      )}
    </div>
  );
};

export default Admin;
