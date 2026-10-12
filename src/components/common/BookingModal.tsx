import React, { useState } from "react";
import { X, CheckCircle2, ChevronRight, ChevronLeft, Calendar, Car, User } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { VehicleSelector } from "./VehicleSelector";
import { Brand3MLogo } from "./Brand3MLogo";

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(initialService || "Ceramic Coating");
  const [vehicle, setVehicle] = useState({ brand: "", model: "", vehicleType: "Sedan" });
  const [bookingDate, setBookingDate] = useState<string>("");
  const [contact, setContact] = useState({ name: "", phone: "", whatsapp: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const services = [
    { id: "ceramic", name: "Ceramic Coating", desc: "9H SiO2 molecular ceramic paint protection" },
    { id: "ppf", name: "PPF (Paint Protection Film)", desc: "Self-healing TPU clear film defense" },
    { id: "graphene", name: "Graphene Coating", desc: "Advanced carbon matrix thermal & water protection" },
    { id: "detailing", name: "Precision Paint Correction", desc: "Multi-stage machine swirl & scratch elimination" },
    { id: "sunfilm", name: "Solar Sun Film", desc: "Infrared heat rejection window film" },
    { id: "antirust", name: "Underbody Anti-Rust", desc: "Coastal corrosion & undercarriage shielding" },
  ];

  const validateStep4 = () => {
    const errs: Record<string, string> = {};
    if (!contact.name.trim()) errs.name = "Name is required";
    if (!contact.phone.trim() || contact.phone.trim().length < 8) errs.phone = "Valid phone number required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !selectedService) return;
    if (step === 4) {
      if (!validateStep4()) return;

      // Direct lead ingestion via formatted WhatsApp message
      const vehicleName = vehicle.model ? `${vehicle.brand} ${vehicle.model}`.trim() : vehicle.brand;
      const vehicleInfo = vehicle.brand ? `${vehicleName} (${vehicle.vehicleType})` : "Not specified";
      const message = `New Inquiry from Website:\nName: ${contact.name}\nPhone: ${contact.phone}\nService: ${selectedService}\nVehicle: ${vehicleInfo}\nPreferred Date: ${bookingDate || "Flexible"}`;
      const waUrl = `https://wa.me/917601933555?text=${encodeURIComponent(message)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const resetForm = () => {
    setStep(1);
    setSelectedService("Ceramic Coating");
    setVehicle({ brand: "", model: "", vehicleType: "Sedan" });
    setBookingDate("");
    setContact({ name: "", phone: "", whatsapp: "" });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl animate-fade-in"
      onClick={resetForm}
      role="dialog"
      aria-modal="true"
      aria-label="Studio Booking Consultation Modal"
    >
      <div
        className="relative w-full max-w-2xl bg-dark-900 border border-white/15 rounded-sm p-6 sm:p-8 shadow-2xl text-white select-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-sm bg-brand-red flex items-center justify-center text-white font-bold p-1">
              <Brand3MLogo className="h-full w-auto object-contain" />
            </div>
            <div>
              <span className="font-mono text-[10px] text-brand-red tracking-super-wide uppercase block">
                STUDIO RESERVATION
              </span>
              <h3 className="font-cinematic text-xl font-bold uppercase tracking-tight text-white">
                Book Studio Consultation
              </h3>
            </div>
          </div>

          <button
            onClick={resetForm}
            className="p-2 rounded-full bg-white/5 hover:bg-brand-red text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 5 && (
          <div className="flex items-center justify-between mb-8 px-2 font-mono text-[11px] text-metallic-400 border-b border-white/5 pb-4">
            <span className={step >= 1 ? "text-brand-red font-semibold" : ""}>1. SERVICE</span>
            <span>→</span>
            <span className={step >= 2 ? "text-brand-red font-semibold" : ""}>2. VEHICLE</span>
            <span>→</span>
            <span className={step >= 3 ? "text-brand-red font-semibold" : ""}>3. DATE</span>
            <span>→</span>
            <span className={step >= 4 ? "text-brand-red font-semibold" : ""}>4. CONTACT</span>
          </div>
        )}

        {/* STEP 1: SERVICE SELECTION */}
        {step === 1 && (
          <div className="space-y-4">
            <div className="font-mono text-xs text-metallic-300 uppercase tracking-wider mb-2">
              Select Desired Automotive Service:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto pr-1">
              {services.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => setSelectedService(srv.name)}
                  className={`p-4 rounded-sm border cursor-pointer transition-all duration-200 ${
                    selectedService === srv.name
                      ? "bg-brand-red/15 border-brand-red text-white"
                      : "bg-dark-950/60 border-white/10 text-metallic-300 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  <div className="font-display font-semibold text-sm text-white flex items-center justify-between">
                    <span>{srv.name}</span>
                    {selectedService === srv.name && <CheckCircle2 className="w-4 h-4 text-brand-red" />}
                  </div>
                  <p className="mt-1 text-[11px] text-metallic-400 font-light">{srv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: VEHICLE DETAILS */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="font-mono text-xs text-metallic-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Car className="w-4 h-4 text-brand-red" />
              <span>Enter Vehicle Information:</span>
            </div>

            <VehicleSelector
              brand={vehicle.brand}
              model={vehicle.model}
              vehicleType={vehicle.vehicleType}
              onBrandChange={(b) => setVehicle((prev) => ({ ...prev, brand: b, model: "" }))}
              onModelChange={(m) => setVehicle((prev) => ({ ...prev, model: m }))}
              onVehicleTypeChange={(t) => setVehicle((prev) => ({ ...prev, vehicleType: t }))}
            />
          </div>
        )}

        {/* STEP 3: DATE SELECTION */}
        {step === 3 && (
          <div className="space-y-4">
            <div className="font-mono text-xs text-metallic-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-red" />
              <span>Select Preferred Studio Visit Date:</span>
            </div>

            <div>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-3 bg-dark-950 border border-white/15 rounded-sm text-white text-sm focus:border-brand-red focus:outline-none color-scheme-dark"
              />
            </div>

            <div className="p-4 rounded-sm bg-white/5 border border-white/10 text-xs text-metallic-300 font-mono">
              <div className="font-semibold text-white mb-1">STUDIO OPERATING HOURS:</div>
              <div>Monday – Sunday: 9:30 AM – 8:00 PM</div>
              <div className="text-metallic-500 mt-1">Location: Mettukuppam, OMR, Chennai</div>
            </div>
          </div>
        )}

        {/* STEP 4: CONTACT DETAILS */}
        {step === 4 && (
          <div className="space-y-4">
            <div className="font-mono text-xs text-metallic-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-brand-red" />
              <span>Your Contact Details:</span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="font-mono text-xs text-metallic-400 block mb-1">Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className={`w-full px-4 py-3 bg-dark-950 border rounded-sm text-white text-sm focus:outline-none ${
                    errors.name ? "border-brand-red" : "border-white/15 focus:border-brand-red"
                  }`}
                />
                {errors.name && <span className="font-mono text-[10px] text-brand-red mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="font-mono text-xs text-metallic-400 block mb-1">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+91 98400 00000"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className={`w-full px-4 py-3 bg-dark-950 border rounded-sm text-white text-sm focus:outline-none ${
                    errors.phone ? "border-brand-red" : "border-white/15 focus:border-brand-red"
                  }`}
                />
                {errors.phone && <span className="font-mono text-[10px] text-brand-red mt-1 block">{errors.phone}</span>}
              </div>

              <div>
                <label className="font-mono text-xs text-metallic-400 block mb-1">WhatsApp Number (Optional)</label>
                <input
                  type="tel"
                  placeholder="Same as phone or enter number"
                  value={contact.whatsapp}
                  onChange={(e) => setContact({ ...contact, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 bg-dark-950 border border-white/15 rounded-sm text-white text-sm focus:border-brand-red focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: SUCCESS STATE */}
        {step === 5 && (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-brand-red/20 border border-brand-red text-brand-red mx-auto flex items-center justify-center animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-cinematic text-2xl font-bold uppercase tracking-tight text-white">
              BOOKING REQUEST SENT ✓
            </h3>

            <p className="text-sm text-metallic-300 max-w-md mx-auto font-light leading-relaxed">
              Thank you, <span className="text-white font-semibold">{contact.name}</span>. Your studio consultation request for{" "}
              <span className="text-brand-red font-semibold">{selectedService}</span> has been registered for demo review.
            </p>

            {/* Summary Box */}
            <div className="p-4 rounded-sm bg-dark-950 border border-white/10 text-left max-w-md mx-auto font-mono text-xs space-y-1.5 text-metallic-300">
              <div><span className="text-white">Service:</span> {selectedService}</div>
              {vehicle.brand && <div><span className="text-white">Vehicle:</span> {vehicle.brand} ({vehicle.vehicleType})</div>}
              {bookingDate && <div><span className="text-white">Date:</span> {bookingDate}</div>}
              <div><span className="text-white">Contact:</span> {contact.phone}</div>
              <div><span className="text-white">Studio Location:</span> Mettukuppam, OMR, Chennai</div>
            </div>

            <p className="font-mono text-[10px] text-metallic-500 max-w-md mx-auto">
              [Note: This is a frontend demo flow. For immediate studio assistance call {BUSINESS.phone}]
            </p>

            <button
              onClick={resetForm}
              className="mt-4 px-8 py-3 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              Done
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 5 && (
          <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-6">
            {step > 1 ? (
              <button
                onClick={handleBack}
                className="flex items-center space-x-2 px-5 py-2.5 rounded-sm border border-white/15 text-white hover:bg-white/10 font-mono text-xs tracking-wider transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            <button
              onClick={handleNext}
              className="flex items-center space-x-2 px-6 py-2.5 rounded-sm bg-brand-red hover:bg-brand-crimson text-white font-mono text-xs uppercase tracking-wider transition-colors shadow-lg shadow-red-950/50"
            >
              <span>{step === 4 ? "Submit Request" : "Continue"}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
