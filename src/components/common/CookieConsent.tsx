import React, { useState } from "react";
import { Cookie, X } from "lucide-react";

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(() => {
    return !localStorage.getItem("3m_cookie_consent");
  });

  const handleAccept = () => {
    localStorage.setItem("3m_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("3m_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Data Privacy Banner"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 p-4 sm:p-5 rounded-lg bg-dark-900/95 backdrop-blur-xl border border-white/15 text-white shadow-2xl animate-fade-in"
    >
      <div className="flex items-start space-x-3">
        <Cookie className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
        <div className="space-y-1.5 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
              Cookie &amp; Privacy Transparency
            </h4>
            <button
              onClick={handleDecline}
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Close cookie banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
            We use essential cookies and local state to optimize your studio booking experience and ensure secure inquiry routing.
          </p>
          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Accept Essential
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 rounded-sm bg-white/10 hover:bg-white/15 text-neutral-300 font-mono text-[11px] uppercase tracking-wider transition-all"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
