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
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);

  const [modelQuery, setModelQuery] = useState(model);
  const [showModelDropdown, setShowModelDropdown] = useState(false);

  const brandRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);

  const [prevBrandProp, setPrevBrandProp] = useState(brand);
  const [prevModelProp, setPrevModelProp] = useState(model);

  if (brand !== prevBrandProp) {
    setPrevBrandProp(brand);
    setBrandQuery(brand);
  }

  if (model !== prevModelProp) {
    setPrevModelProp(model);
    setModelQuery(model);
  }

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

  // Derive filtered brand suggestions during render
  const normalizedBrandQuery = brandQuery.toLowerCase().trim();
  const brandSuggestions = !normalizedBrandQuery
    ? POPULAR_BRANDS
    : POPULAR_BRANDS.filter((b) => b.toLowerCase().includes(normalizedBrandQuery));

  // Derive model list based on selected brand
  const currentBrandData = COMPREHENSIVE_VEHICLES.find(
    (v) => v.make.toLowerCase() === normalizedBrandQuery
  );
  const availableModels = currentBrandData ? currentBrandData.models : [];

  // Derive filtered model suggestions during render
  const normalizedModelQuery = modelQuery.toLowerCase().trim();
  const modelSuggestions = !normalizedModelQuery
    ? availableModels
    : availableModels.filter((m) => m.toLowerCase().includes(normalizedModelQuery));

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {/* 1. VEHICLE BRAND */}
        <div className="relative" ref={brandRef}>
          <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 block">
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
              className="w-full h-11 sm:h-12 px-3.5 text-sm sm:text-base rounded-lg bg-[#141414] border border-neutral-800 text-white focus:border-red-600 focus:outline-none transition-colors font-sans"
            />
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5 pointer-events-none" />
          </div>

          {/* Brand Floating Dropdown */}
          {showBrandDropdown && (
            <div className="absolute left-0 right-0 mt-1.5 bg-[#181818] border border-neutral-800 rounded-lg shadow-2xl backdrop-blur-md max-h-48 overflow-y-auto z-50 py-1">
              {brandSuggestions.length > 0 ? (
                brandSuggestions.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectBrand(item)}
                    className="hover:bg-red-600/20 hover:text-white cursor-pointer px-4 py-2.5 text-xs sm:text-sm text-neutral-200 font-medium transition"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div
                  onClick={() => setShowBrandDropdown(false)}
                  className="px-4 py-2.5 text-xs text-neutral-400 italic cursor-pointer"
                >
                  Use custom brand "{brandQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* 2. VEHICLE NAME / MODEL */}
        <div className="relative" ref={modelRef}>
          <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1.5 block">
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
              className="w-full h-11 sm:h-12 px-3.5 text-sm sm:text-base rounded-lg bg-[#141414] border border-neutral-800 text-white focus:border-red-600 focus:outline-none transition-colors font-sans"
            />
            <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5 pointer-events-none" />
          </div>

          {/* Model Floating Dropdown */}
          {showModelDropdown && (
            <div className="absolute left-0 right-0 mt-1.5 bg-[#181818] border border-neutral-800 rounded-lg shadow-2xl backdrop-blur-md max-h-48 overflow-y-auto z-50 py-1">
              {modelSuggestions.length > 0 ? (
                modelSuggestions.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSelectModel(item)}
                    className="hover:bg-red-600/20 hover:text-white cursor-pointer px-4 py-2.5 text-xs sm:text-sm text-neutral-200 font-medium transition"
                  >
                    {item}
                  </div>
                ))
              ) : (
                <div
                  onClick={() => setShowModelDropdown(false)}
                  className="px-4 py-2.5 text-xs text-neutral-400 italic cursor-pointer"
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
      <div className="w-full">
        <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 block">
          VEHICLE TYPE *
        </label>
        <div className="grid grid-cols-3 gap-2.5 w-full">
          {vehicleTypes.map((type) => {
            const isSelected = vehicleType.toLowerCase() === type.toLowerCase();
            return (
              <button
                key={type}
                type="button"
                onClick={() => onVehicleTypeChange(type)}
                className={`w-full py-2.5 px-2 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg border transition-colors duration-150 text-center truncate flex items-center justify-center cursor-pointer ${
                  isSelected
                    ? "bg-[#ED1C24] text-white border-[#ED1C24] shadow-sm"
                    : "bg-[#141414] text-neutral-300 border-neutral-800 hover:border-neutral-700"
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
