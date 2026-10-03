"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/526671313845"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Germán on WhatsApp (opens in a new tab)"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <MessageCircle size={28} aria-hidden="true" />
    </a>
  );
}
