import React, { useState } from "react";
import { MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { VehicleSelector } from "./VehicleSelector";

interface ServiceQuoteWidgetProps {
  serviceName: string;
}

export const ServiceQuoteWidget: React.FC<ServiceQuoteWidgetProps> = ({ serviceName }) => {
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleType, setVehicleType] = useState("Sedan");

  const handleWhatsAppQuote = () => {
    const carDetails = vehicleBrand
      ? `${vehicleBrand} ${vehicleModel}`.trim() + ` (${vehicleType})`
      : "my car";

    const text = `Hi 3M Car Care Studio OMR, I'm interested in ${serviceName} for ${carDetails}. Please share the package estimate and availability. Thank you.`;
    const waUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="service-quote" className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-sm bg-[#0e0e0e]/95 border border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.1)] relative overflow-hidden">
          {/* Subtle Accent Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Widget Header */}
            <div className="flex items-center space-x-2 text-brand-amber mb-2">
              <Sparkles className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">
                ESTIMATE & AVAILABILITY CONSULTATION
              </span>
            </div>

            <h3 className="font-cinematic text-2xl sm:text-4xl font-bold text-white uppercase tracking-tight">
              Get a Quote for Your Car
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-metallic-300 font-light leading-relaxed max-w-2xl">
              Select your vehicle details below to receive an accurate, transparent quote and custom studio slot recommendation for <span className="text-white font-semibold">{serviceName}</span>.
            </p>

            {/* Dynamic Vehicle Selector (Brand + Model + Type) */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <VehicleSelector
                brand={vehicleBrand}
                model={vehicleModel}
                vehicleType={vehicleType}
                onBrandChange={(b) => {
                  setVehicleBrand(b);
                  setVehicleModel("");
                }}
                onModelChange={setVehicleModel}
                onVehicleTypeChange={setVehicleType}
              />
            </div>

            {/* WhatsApp Quote Action Button */}
            <div className="mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-metallic-400 text-xs font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Obligations • Instant Studio Estimate via WhatsApp</span>
              </div>

              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-3.5 sm:py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-black font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-950/40 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Get My Quote on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
