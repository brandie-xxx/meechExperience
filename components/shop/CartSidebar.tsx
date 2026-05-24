import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { WHATSAPP_NUMBER } from '../../constants';

const CartSidebar: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  // Stateful reservation timer for high-urgency impulse conversions
  useEffect(() => {
    if (!isCartOpen) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(interval);
  }, [isCartOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
    navigate('/shop');
  };

  const handleCheckout = () => {
    const cartSummary = cart
      .map((item) => `- ${item.name} (${item.selectedSize}) x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`)
      .join('\n');
    
    const message = encodeURIComponent(
      `Hello Meech! I'd like to place an order from The Meech Experience:\n\n${cartSummary}\n\nTotal: $${totalPrice.toFixed(2)}\n\nDelivery Info:\nName: \nAddress: \nPreferred Payment: [EcoCash/InnBucks/Cash]`
    );
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  // Up-selling progress toward Priority Dispatch
  const dispatchThreshold = 100;
  const progressPercent = Math.min((totalPrice / dispatchThreshold) * 100, 100);
  const leftToSpend = dispatchThreshold - totalPrice;

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-[101] shadow-2xl flex flex-col rounded-l-modal"
          >
            {/* Header */}
            <div className="p-4 sm:p-8 pb-3 flex items-center justify-between border-b border-black/5">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold tracking-tight">Your Bag</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-secondary-bg rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Urgency Reservation Banner if items exist */}
            {cart.length > 0 && (
              <div className="bg-[#FF7A00]/10 px-4 py-2 flex items-center justify-between text-[11px] font-bold text-[#FF7A00]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
                  Bag reserved for you
                </span>
                <span className="font-mono tracking-tight">{formatTime(timeLeft)}</span>
              </div>
            )}

            {/* Core Dispatch Upsell Meter */}
            {cart.length > 0 && (
              <div className="px-6 py-4 bg-neutral-50/50 border-b border-black/5 space-y-2">
                <div className="flex justify-between text-[11px] font-bold text-primary">
                  {leftToSpend > 0 ? (
                    <span>
                      Add <span className="text-[#FF7A00]">${leftToSpend.toFixed(0)}</span> more for Free Priority Dispatch
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-emerald-600">
                      <Sparkles className="w-3.5 h-3.5" />
                      Unlocked Free Priority Dispatch!
                    </span>
                  )}
                  <span className="text-text-secondary text-[10px]">Goal: $100</span>
                </div>
                <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#FF7A00] transition-all duration-500 rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto px-4 sm:px-8 py-4 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary-bg rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Bag is empty</h3>
                    <p className="text-sm text-text-secondary">Look like you haven't added anything yet.</p>
                  </div>
                  <button
                    onClick={handleContinueShopping}
                    className="mt-4 px-6 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary-dark transition-all active:scale-95"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => {
                  const cartItemId = `${item.id}-${item.selectedSize}`;
                  return (
                    <motion.div
                      key={cartItemId}
                      layout
                      className="group py-3 border-b border-black/5 last:border-0"
                    >
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-sm line-clamp-1 text-primary">{item.name}</h4>
                            <p className="text-[11px] font-bold text-text-secondary tracking-tight mt-0.5">
                              Size {item.selectedSize}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(cartItemId)}
                            className="p-1 text-text-secondary hover:text-[#FF3B30] text-right"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex justify-between items-end mt-2">
                          <div className="flex items-center space-x-3 bg-secondary-bg rounded-full px-2 py-1">
                            <button
                              onClick={() => updateQuantity(cartItemId, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center hover:text-secondary transition-colors text-primary"
                            >
                              <Minus className="w-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center text-primary">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(cartItemId, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center hover:text-secondary transition-colors text-primary"
                            >
                              <Plus className="w-3" />
                            </button>
                          </div>
                          <p className="font-black text-sm text-[#FF7A00]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-8 pt-0 space-y-6">
                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-[16px] font-bold pt-1">
                    <span className="text-primary">Order Total</span>
                    <span className="text-[#FF7A00]">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pb-4">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4.5 bg-primary text-white rounded-full font-bold text-[15px] flex items-center justify-center shadow-apple-card hover:bg-secondary transition-all active:scale-[0.98] cursor-pointer"
                  >
                    <span>Instant Checkout via WhatsApp</span>
                  </button>

                  {/* Trust Factors Badge Grid */}
                  <div className="mt-5 grid grid-cols-2 gap-3 text-center border-t border-black/5 pt-4">
                    <div className="flex flex-col items-center p-2 bg-neutral-50 rounded-2xl border border-black/5">
                      <Truck className="w-4 h-4 text-[#FF7A00] mb-1" />
                      <span className="text-[9px] font-bold text-primary">In-Stock Harare Dispatch</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-neutral-50 rounded-2xl border border-black/5">
                      <ShieldCheck className="w-4 h-4 text-[#FF7A00] mb-1" />
                      <span className="text-[9px] font-bold text-primary">EcoCash / InnBucks / Cash</span>
                    </div>
                  </div>

                  <button
                    onClick={clearCart}
                    className="w-full text-[10px] font-bold text-text-secondary tracking-tight mt-6 hover:text-secondary uppercase"
                  >
                    Clear all items
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
