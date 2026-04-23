import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { WHATSAPP_NUMBER } from "../../constants";

const CartSidebar: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    const cartSummary = cart
      .map(
        (item) =>
          `- ${item.name} (${item.selectedSize}) x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`,
      )
      .join("\n");

    const message = encodeURIComponent(
      `Hello Meech! I'd like to place an order from The Meech Experience:\n\n${cartSummary}\n\nTotal: $${totalPrice.toFixed(2)}\n\nDelivery Info:\nName: \nAddress: \nPreferred Payment: [EcoCash/InnBucks/Cash]`,
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full md:max-w-md bg-white z-[101] shadow-2xl flex flex-col rounded-l-modal"
          >
            {/* Header */}
            <div className="p-6 md:p-8 pb-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <h2 className="text-lg md:text-xl font-bold tracking-tight">
                  Your Bag
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-secondary-bg rounded-pill transition-colors"
              >
                <X className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto px-4 md:px-8 py-4 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-secondary-bg rounded-pill flex items-center justify-center">
                    <ShoppingBag className="w-6 h-6 text-text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Bag is empty</h3>
                    <p className="text-sm text-text-secondary">
                      Looks like you haven't added anything yet.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-3 bg-primary text-white rounded-pill font-bold text-sm"
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
                      className="flex gap-4 group"
                    >
                      <div className="w-20 h-24 rounded-card overflow-hidden flex-shrink-0 bg-secondary-bg">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-sm line-clamp-1">
                              {item.name}
                            </h4>
                            <p className="text-[11px] font-bold text-text-secondary tracking-tight mt-0.5">
                              {item.category} • Size {item.selectedSize}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(cartItemId)}
                            className="p-1 text-text-secondary hover:text-secondary"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex justify-between items-end">
                          <div className="flex items-center space-x-3 bg-secondary-bg rounded-pill px-2 py-1">
                            <button
                              onClick={() =>
                                updateQuantity(cartItemId, item.quantity - 1)
                              }
                              className="w-6 h-6 flex items-center justify-center hover:text-secondary transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold w-4 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(cartItemId, item.quantity + 1)
                              }
                              className="w-6 h-6 flex items-center justify-center hover:text-secondary transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <p className="font-bold text-sm">
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
              <div className="p-8 pt-0 space-y-6">
                <div className="border-t border-border pt-6 space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[16px] font-bold pt-2">
                    <span>Order Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div className="pb-8">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 bg-primary text-white rounded-pill font-bold text-[15px] flex items-center justify-center space-x-2 shadow-apple-card hover:bg-primary-dark transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Checkout via WhatsApp</span>
                  </button>
                  <button
                    onClick={clearCart}
                    className="w-full text-[11px] font-bold text-text-secondary tracking-tight mt-6 hover:text-secondary"
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
