import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const FloatingSocial = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919424094362"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl"
      >
        <FaWhatsapp size={26} />
      </motion.a>

      {/* Facebook Messenger Button */}
      <motion.a
        href="https://m.me/digitalpetclinic" // 🔥 replace with your page username
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl"
      >
        <FaFacebookMessenger size={26} />
      </motion.a>

    </div>
  );
};

export default FloatingSocial;