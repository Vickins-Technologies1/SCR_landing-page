"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappHref("Hi Sorana team — I’d like help managing my property in Kenya.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 shadow-[0_18px_35px_-22px_rgba(66,199,117,0.85)]"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp</span>
      <span className="sr-only">{site.contact.whatsapp}</span>
    </motion.a>
  );
}

