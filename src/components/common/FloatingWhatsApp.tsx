import React from "react";
import { MessageSquare } from "lucide-react";
import { BUSINESS } from "../../data/business";

export const FloatingWhatsApp: React.FC = () => {
  // Clean phone number format for WhatsApp URL (digits only, e.g. 919167048826)
  const cleanNumber = BUSINESS.phoneClean.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=Hello%203M%20Car%20Care%20Studio%20OMR,%20I%20would%20like%20to%20inquire%20about%20your%20detailing%20and%20protection%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-mono text-xs font-semibold tracking-wider uppercase shadow-2xl transition-all duration-300 hover:scale-105 group border border-white/20 select-none"
      aria-label="Chat on WhatsApp with 3M Car Care Studio OMR"
    >
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping" />
        <MessageSquare className="w-4 h-4 fill-current text-white relative z-10" />
      </div>
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
};
