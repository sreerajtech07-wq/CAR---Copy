import React, { useState, useEffect } from "react";
import { X, Phone, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export const CallbackModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    // Trigger modal shortly after load (e.g. 1.8 seconds)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setSubmitted(false);
        setPhoneNumber("");
      }, 2500);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative w-full max-w-lg rounded-sm bg-dark-900 border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/80 text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Vignette */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 bg-brand-red/20 rounded-full blur-[80px]" />
        
        {/* Close Icon Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-metallic-400 hover:text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-white">Call-back Request Received</h3>
            <p className="text-xs text-metallic-300">
              Thank you! Our detailing specialist will reach out to you shortly.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Header */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                Looking for something specific?
              </h2>
              <p className="mt-1 font-mono text-sm sm:text-base font-semibold text-brand-amber">
                We're just a call away.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-metallic-300">
                Share your number to get a call-back.
              </p>
            </div>

            {/* Form Input Group */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex rounded-sm overflow-hidden border border-white/20 focus-within:border-brand-red transition-colors">
                <div className="flex items-center gap-1.5 px-3 bg-white/[0.05] border-r border-white/10 text-xs font-mono text-metallic-200">
                  <span className="text-base">🇮🇳</span>
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  required
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 bg-dark-950 px-3.5 py-3 text-sm text-white placeholder-metallic-500 outline-none font-mono"
                />
                <button
                  type="submit"
                  className="px-4 sm:px-5 bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <span>Call me back</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Trust Note */}
              <div className="flex items-center gap-1.5 text-[11px] text-metallic-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Rest assured, your details are secure with us.</span>
              </div>
            </form>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-metallic-300 font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-red shrink-0" />
                <a
                  href="mailto:3mcarcare.chennai.omr@gmail.com"
                  className="hover:text-white transition-colors underline decoration-white/20"
                >
                  Have a custom requirement? Write to us
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-amber shrink-0" />
                <span>In a hurry? Call us now </span>
                <a
                  href="tel:+917904506926"
                  className="text-white font-bold hover:text-brand-amber transition-colors underline"
                >
                  +917904506926
                </a>
              </div>

              <p className="text-[10px] text-metallic-500 pt-1">
                *Please keep 0 or +91 before the number you dial.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
