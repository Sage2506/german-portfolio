"use client";

import { WhatsAppIcon } from "@/components/BrandIcons";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/526671313845"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Germán on WhatsApp (opens in a new tab)"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-green-700 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
