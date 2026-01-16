import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      href="https://wa.me/94771234567" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} fill="white" className="text-white" />
    </motion.a>
  );
}
