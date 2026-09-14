import React, { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
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
  const [regYear, setRegYear] = useState("");

  const primaryServices = [
    "Paint Protection Film (3M Scotchgard™ PPF)",
    "Ceramic Coating (9H Multi-Stage Glass)",
    "Graphene Coating (Hyper-Gloss Hydrophobic Shield)",
    "Borophene Coating (Extreme Thermal & Scratch Defense)",
    "Sunfilm (3M™ Crystalline Heat Shield)",
  ];

  const additionalServices = [
    "Interior Deep Detailing & GermKleen Sanitization",
    "Multi-Stage Paint Correction & Swirl Removal",
    "Windshield Hydrophobic Rain Repellent",
    "Underbody Anti-Rust Treatment",
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

    if (!fullName || !phone || !vehicleMake || !vehicleModel) {
      alert("Please fill in your Name, Phone Number, Vehicle Make, and Vehicle Model.");
      return;
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name: fullName,
      email: email || "N/A",
      phone: phone,
      vehicle: `${vehicleMake} ${vehicleModel}`,
      year: regYear,
      services: selectedServices.join(", "),
      preference: contactPreference,
    };

    // Asynchronous POST request to Google Apps Script Web App (silent no-cors)
    try {
      fetch("https://script.google.com/macros/s/AKfycbz_YOUR_APPS_SCRIPT_ID/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    } catch (err) {
      // Ignore background post errors
    }

    // Direct WhatsApp redirect
    const scopeText = selectedServices.length > 0 ? selectedServices.map((s) => `• ${s}`).join("\n") : "• General Studio Consultation";
    const textMessage = `3M OMR STUDIO BOOKING DIRECTIVE:
• Name: ${fullName}
• Phone: ${phone}
• Email: ${email || "N/A"}
• Vehicle: ${vehicleMake} ${vehicleModel} (${regYear})
• Services Requested:
${scopeText}
• Preference: ${contactPreference}`;

    const whatsappUrl = `https://wa.me/${BUSINESS.phoneClean}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="booking" className="relative w-full bg-black py-10 md:py-16 px-4 sm:px-6 overflow-hidden border-t border-neutral-900 font-sans">
      <div className="max-w-3xl w-full mx-auto p-5 sm:p-8 md:p-10 my-4 md:my-8 bg-[#0d0d0d] border border-neutral-800/90 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="text-left mb-6 sm:mb-8 pb-4 border-b border-neutral-900">
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-red-500 uppercase block mb-1">
            ONLINE RESERVATION
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight font-heading">
            STUDIO BOOKING FORM
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Fill in your vehicle and contact details to secure your slot at 3M Car Care OMR.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. Client Identity & Contacts */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase">
              CONTACT DETAILS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-neutral-400 mb-1">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full min-h-[44px] bg-[#141414] border border-neutral-800 text-sm text-white px-4 py-3 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">
                  PHONE / WHATSAPP NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 76019 33555"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full min-h-[44px] bg-[#141414] border border-neutral-800 text-sm text-white px-4 py-3 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">
                  EMAIL ADDRESS (OPTIONAL)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-[44px] bg-[#141414] border border-neutral-800 text-sm text-white px-4 py-3 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* 2. Priority Service Selection */}
          <div className="space-y-4 pt-2 border-t border-neutral-900">
            <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase">
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
            <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase">
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
            <h3 className="text-xs font-mono font-bold tracking-widest text-neutral-300 uppercase">
              VEHICLE SPECIFICATIONS
            </h3>
            <VehicleSelector
              brand={vehicleMake}
              model={vehicleModel}
              year={regYear}
              onBrandChange={setVehicleMake}
              onModelChange={setVehicleModel}
              onYearChange={setRegYear}
            />
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full min-h-[48px] mt-6 py-4 bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-red-600/20 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>CONFIRM BOOKING VIA WHATSAPP →</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;

