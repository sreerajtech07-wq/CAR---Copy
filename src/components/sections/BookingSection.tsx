import React, { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { BUSINESS } from "../../data/business";
import { VehicleSelector } from "../common/VehicleSelector";

export const BookingSection: React.FC = () => {
  // Client Identity & Contacts
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Priority Service Selection
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Paint Protection Film (3M Scotchgard™ PPF)",
  ]);
  const [showAddons, setShowAddons] = useState(false);

  // Slot / Contact Preference
  const [contactPreference, setContactPreference] = useState("WhatsApp Message");

  // Vehicle Specifications
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleType, setVehicleType] = useState("Sedan");

  const primaryServices = [
    "Paint Protection Film (3M Scotchgard™ PPF)",
    "Ceramic Coating (9H Multi-Stage Glass)",
    "Graphene Coating (Hyper-Gloss Hydrophobic Shield)",
    "Sunfilm (3M™ Crystalline Heat Shield)",
  ];

  const additionalServices = [
    "3M Antirust Coating",
    "3M Underbody Coating",
    "3M Interior Cleansing",
    "3M Germ Kleen Sterilization",
    "3M Polish & Paint Refinement",
    "3M Teflon Polish Sealant",
    "3M CR70 Solar Film",
    "3M XP70 Glare Shield",
    "3M IM70 Thermal Guard",
  ];

  const slotOptions = [
    "Morning Slot",
    "Afternoon Slot",
    "WhatsApp Message",
    "Phone Call",
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !phone || !vehicleMake) {
      alert("Please fill in your Name, Phone Number, and Vehicle Brand.");
      return;
    }

    const vehicleFormatted = vehicleModel ? `${vehicleMake} ${vehicleModel}`.trim() : vehicleMake;
    const payload = {
      timestamp: new Date().toISOString(),
      name: fullName,
      email: email || "N/A",
      phone: phone,
      vehicle: `${vehicleFormatted} (${vehicleType})`,
      services: selectedServices.join(", "),
      preference: contactPreference,
    };

    try {
      fetch("https://script.google.com/macros/s/AKfycbz_YOUR_APPS_SCRIPT_ID/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch {
      // Ignore background post errors
    }

    const scopeText = selectedServices.length > 0 ? selectedServices.map((s) => `• ${s}`).join("\n") : "• General Studio Consultation";
    const textMessage = `3M OMR STUDIO BOOKING DIRECTIVE:
• Name: ${fullName}
• Phone: ${phone}
• Email: ${email || "N/A"}
• Vehicle: ${vehicleFormatted} (${vehicleType})
• Services Requested:
${scopeText}
• Preference: ${contactPreference}`;

    const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="relative w-full bg-black py-10 md:py-16 px-4 sm:px-6 overflow-hidden border-t border-neutral-900 font-sans">
      <div className="max-w-3xl w-full mx-auto p-5 sm:p-6 rounded-xl bg-neutral-900/80 border border-neutral-800 shadow-2xl">
        {/* Header */}
        <div className="text-left mb-6 sm:mb-8 pb-4 border-b border-neutral-900">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-red-500 uppercase block mb-1">
            ONLINE RESERVATION
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight font-heading">
            STUDIO BOOKING FORM
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Fill in your vehicle and contact details to secure your slot at <span className="text-3m-red">3M</span> Car Care Studio OMR.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 1. Client Identity & Contacts */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              CONTACT DETAILS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 block">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 sm:h-12 px-3.5 text-sm sm:text-base rounded-lg bg-[#141414] border border-neutral-800 text-white focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 block">
                  PHONE / WHATSAPP NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 76019 33555"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 sm:h-12 px-3.5 text-sm sm:text-base rounded-lg bg-[#141414] border border-neutral-800 text-white focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 block">
                  EMAIL ADDRESS (OPTIONAL)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 sm:h-12 px-3.5 text-sm sm:text-base rounded-lg bg-[#141414] border border-neutral-800 text-white focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* 2. Priority Service Selection */}
          <div className="space-y-3 pt-2 border-t border-neutral-900">
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              SELECT TREATMENTS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {primaryServices.map((service, idx) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`w-full min-h-[44px] flex items-center justify-between px-4 py-3 rounded-lg border text-left text-xs font-medium transition-all ${
                      isSelected
                        ? "bg-red-950/20 border-red-600 text-white"
                        : "bg-[#141414] border-neutral-800 text-neutral-300 hover:border-neutral-700"
                    }`}
                  >
                    <span className="pr-2">{service}</span>
                    <div
                      className={`w-4 h-4 rounded border shrink-0 flex items-center justify-center transition-colors ${
                        isSelected ? "border-red-500 bg-red-600 text-white" : "border-neutral-700 bg-black"
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Expandable Add-ons */}
            <div>
              <button
                type="button"
                onClick={() => setShowAddons(!showAddons)}
                className="w-full min-h-[44px] flex items-center justify-between px-4 py-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-300 hover:text-white text-xs font-semibold uppercase transition-colors"
              >
                <span>[+] More Specialized Treatments</span>
                {showAddons ? <ChevronUp className="w-4 h-4 text-red-500" /> : <ChevronDown className="w-4 h-4 text-red-500" />}
              </button>

              {showAddons && (
                <div className="mt-3 space-y-2.5 pl-2 border-l-2 border-red-900/40">
                  {additionalServices.map((service, idx) => {
                    const isSelected = selectedServices.includes(service);
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`w-full min-h-[44px] flex items-center justify-between px-4 py-3 rounded-lg border text-left text-xs font-medium transition-all ${
                          isSelected
                            ? "bg-red-950/20 border-red-600 text-white"
                            : "bg-[#141414] border-neutral-800 text-neutral-400 hover:border-neutral-700"
                        }`}
                      >
                        <span className="pr-2">{service}</span>
                        <div
                          className={`w-4 h-4 rounded border shrink-0 flex items-center justify-center transition-colors ${
                            isSelected ? "border-red-500 bg-red-600 text-white" : "border-neutral-700 bg-black"
                          }`}
                        >
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* 3. Slot / Contact Preference */}
          <div className="space-y-3 pt-2 border-t border-neutral-900">
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              SLOT / CONTACT PREFERENCE
            </h3>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {slotOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setContactPreference(option)}
                  className={`min-h-[44px] px-4 py-2.5 rounded-lg border text-xs font-medium transition-all ${
                    contactPreference === option
                      ? "bg-red-600 border-red-500 text-white font-bold shadow-md shadow-red-950/40"
                      : "bg-[#141414] border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* 4. Vehicle Specifications */}
          <div className="space-y-4 pt-2 border-t border-neutral-900">
            <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              VEHICLE SPECIFICATIONS
            </h3>
            <VehicleSelector
              brand={vehicleMake}
              model={vehicleModel}
              vehicleType={vehicleType}
              onBrandChange={(b) => { setVehicleMake(b); setVehicleModel(""); }}
              onModelChange={setVehicleModel}
              onVehicleTypeChange={setVehicleType}
            />
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full min-h-[44px] mt-6 py-3.5 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-[#25D366]/20 cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5 shrink-0 fill-current" />
            <span>GET MY QUOTE ON WHATSAPP</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;

