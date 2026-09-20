import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { COMPREHENSIVE_VEHICLES } from "../../data/vehicles";

const POPULAR_BRANDS = COMPREHENSIVE_VEHICLES.map((v) => v.make);

interface VehicleSelectorProps {
  brand: string;
  model?: string;
  vehicleType: string;
  onBrandChange: (brand: string) => void;
  onModelChange?: (model: string) => void;
  onVehicleTypeChange: (type: string) => void;
}

export const VehicleSelector: React.FC<VehicleSelectorProps> = ({
  brand,
  model = "",
  vehicleType,
  onBrandChange,
  onModelChange,
  onVehicleTypeChange,
}) => {
  const [brandQuery, setBrandQuery] = useState(brand);
  const [brandSuggestions, setBrandSuggestions] = useState<string[]>(POPULAR_BRANDS);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);

  const [modelQuery, setModelQuery] = useState(model);
  const [modelSuggestions, setModelSuggestions] = useState<string[]>([]);
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  const brandRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);

  // Sync external props if updated from parent
  useEffect(() => {
    setBrandQuery(brand);
  }, [brand]);

  useEffect(() => {
    setModelQuery(model);
  }, [model]);

  // Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (brandRef.current && !brandRef.current.contains(event.target as Node)) {
        setShowBrandDropdown(false);
      }
      if (modelRef.current && !modelRef.current.contains(event.target as Node)) {
        setShowModelDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter Brand suggestions
  useEffect(() => {
    const normalizedQuery = brandQuery.toLowerCase().trim();
    if (!normalizedQuery) {
      setBrandSuggestions(POPULAR_BRANDS);
      return;
    }
    const matches = POPULAR_BRANDS.filter((b) =>
      b.toLowerCase().includes(normalizedQuery)
    );
    setBrandSuggestions(matches);
  }, [brandQuery]);

  // Derive model list based on selected brand
  const currentBrandData = COMPREHENSIVE_VEHICLES.find(
    (v) => v.make.toLowerCase() === brandQuery.toLowerCase().trim()
  );
  const availableModels = currentBrandData ? currentBrandData.models : [];

  // Filter Model suggestions
  useEffect(() => {
    const normalizedQuery = modelQuery.toLowerCase().trim();
    if (!normalizedQuery) {
      setModelSuggestions(availableModels);
      return;
    }
    const matches = availableModels.filter((m) =>
      m.toLowerCase().includes(normalizedQuery)
    );
    setModelSuggestions(matches);
  }, [modelQuery, availableModels]);

  const handleSelectBrand = (selected: string) => {
    setBrandQuery(selected);
    onBrandChange(selected);
    setShowBrandDropdown(false);

    // Reset model on brand change if model callback exists
    if (onModelChange) {
      setModelQuery("");
      onModelChange("");
    }
  };

  const handleSelectModel = (selected: string) => {
    setModelQuery(selected);
    if (onModelChange) {
      onModelChange(selected);
    }
    setShowModelDropdown(false);
  };

  const vehicleTypes = ["Hatchback", "Sedan", "SUV"];

  return (
    <div className="space-y-4">
      {/* BRAND & MODEL INPUT ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* 1. VEHICLE BRAND */}
        <div className="relative" ref={brandRef}>
          <label className="block text-xs font-mono font-bold text-metallic-400 mb-1.5 uppercase tracking-wider">
            VEHICLE BRAND *
          </label>
          <div className="relative">
            <input
              type="text"
              required
              placeholder="Select/Type Brand (e.g. BMW, Maruti...)"
              value={brandQuery}
              onChange={(e) => {
                setBrandQuery(e.target.value);
                onBrandChange(e.target.value);
                setShowBrandDropdown(true);
              }}
              onFocus={() => setShowBrandDropdown(true)}
              className="w-full min-h-[44px] bg-[#141414] border border-white/15 text-sm text-white px-4 py-3 rounded-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none transition-colors font-sans"
            />
            <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-3.5 pointer-events-none" />
          </div>

          {/* Brand Floating Dropdown */}
          {showBrandDropdown && (
            <div className="absolute left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-sm shadow-2xl backdrop-blur-md max-h-48 overflow-y-auto z-50 py-1">
              {brandSuggestions.length > 0 ? (
                brandSuggestions.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectBrand(item)}
                    className="hover:bg-brand-red/20 hover:text-white cursor-pointer px-4 py-2.5 text-xs text-neutral-200 font-medium transition font-mono"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div
                  onClick={() => setShowBrandDropdown(false)}
                  className="px-4 py-2.5 text-xs text-neutral-400 italic font-mono cursor-pointer"
                >
                  Use custom brand "{brandQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* 2. VEHICLE NAME / MODEL */}
        <div className="relative" ref={modelRef}>
          <label className="block text-xs font-mono font-bold text-metallic-400 mb-1.5 uppercase tracking-wider">
            VEHICLE NAME / MODEL *
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder={
                availableModels.length > 0
                  ? `e.g. ${availableModels.slice(0, 2).join(", ")}...`
                  : "e.g. Swift, 3 Series..."
              }
              value={modelQuery}
              onChange={(e) => {
                setModelQuery(e.target.value);
                if (onModelChange) onModelChange(e.target.value);
                setShowModelDropdown(true);
              }}
              onFocus={() => setShowModelDropdown(true)}
              className="w-full min-h-[44px] bg-[#141414] border border-white/15 text-sm text-white px-4 py-3 rounded-sm focus:border-brand-red focus:ring-1 focus:ring-brand-red focus:outline-none transition-colors font-sans"
            />
            <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-3.5 pointer-events-none" />
          </div>

          {/* Model Floating Dropdown */}
          {showModelDropdown && (
            <div className="absolute left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-sm shadow-2xl backdrop-blur-md max-h-48 overflow-y-auto z-50 py-1">
              {modelSuggestions.length > 0 ? (
                modelSuggestions.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectModel(item)}
                    className="hover:bg-brand-red/20 hover:text-white cursor-pointer px-4 py-2.5 text-xs text-neutral-200 font-medium transition font-mono"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div
                  onClick={() => setShowModelDropdown(false)}
                  className="px-4 py-2.5 text-xs text-neutral-400 italic font-mono cursor-pointer"
                >
                  {modelQuery
                    ? `Use model "${modelQuery}"`
                    : brandQuery
                    ? "Type vehicle model name..."
                    : "Select a brand first or type model"}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 3. VEHICLE TYPE SELECTOR */}
      <div>
        <label className="block text-xs font-mono font-bold text-metallic-400 mb-1.5 uppercase tracking-wider">
          VEHICLE TYPE *
        </label>
        <div className="grid grid-cols-3 gap-2">
          {vehicleTypes.map((type) => {
            const isSelected = vehicleType.toLowerCase() === type.toLowerCase();
            return (
              <button
                key={type}
                type="button"
                onClick={() => onVehicleTypeChange(type)}
                className={`py-3 px-2 text-center rounded-sm font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-brand-red text-white border-brand-red shadow-[0_0_15px_rgba(220,38,38,0.5)] scale-[1.02]"
                    : "bg-[#141414] text-metallic-300 border-white/15 hover:border-white/30 hover:text-white"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
