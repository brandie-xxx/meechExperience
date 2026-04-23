import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { WHATSAPP_NUMBER } from "../../constants";

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello Meech! I'd like to place an order.",
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-3xl shadow-2xl flex items-center space-x-3 group"
    >
      <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold">
        Order on WhatsApp
      </span>
    </motion.button>
  );
};

export default WhatsAppButton;
