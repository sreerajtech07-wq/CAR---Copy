import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import { COMPREHENSIVE_VEHICLES } from "../../data/vehicles";

const POPULAR_BRANDS = COMPREHENSIVE_VEHICLES.map((v) => v.make);

const RECENT_YEARS = Array.from({ length: 12 }, (_, i) => String(2026 - i));

interface VehicleSelectorProps {
  brand: string;
  model: string;
  year: string;
  onBrandChange: (brand: string) => void;
  onModelChange: (model: string) => void;
  onYearChange: (year: string) => void;
}

export const VehicleSelector: React.FC<VehicleSelectorProps> = ({
  brand,
  model,
  year,
  onBrandChange,
  onModelChange,
  onYearChange,
}) => {
  // Full Cached Makes Dataset
  const [allMakes, setAllMakes] = useState<string[]>(POPULAR_BRANDS);

  // Brand Autocomplete state
  const [brandQuery, setBrandQuery] = useState(brand);
  const [brandSuggestions, setBrandSuggestions] = useState<string[]>([]);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [isFetchingBrands, setIsFetchingBrands] = useState(false);

  // Model Autocomplete state
  const [modelQuery, setModelQuery] = useState(model);
  const [modelSuggestions, setModelSuggestions] = useState<string[]>([]);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [isFetchingModels, setIsFetchingModels] = useState(false);

  // Year state
  const [showYearDropdown, setShowYearDropdown] = useState(false);

  const brandRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  // Pre-fetch API makes in background to complement local database
  useEffect(() => {
    let isMounted = true;
    const fetchAllMakes = async () => {
      setIsFetchingBrands(true);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      try {
        const res = await fetch("https://fleetcatalog.disturbingbyte.pt/api/makes?limit=1000", {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        if (res.ok) {
          const data = await res.json();
          const list = Array.isArray(data) ? data : data.makes || data.results || [];
          if (list.length > 0) {
            const formatted = list.map((m: any) => (typeof m === "string" ? m : m.name || m.make));
            const combined = Array.from(new Set([...POPULAR_BRANDS, ...formatted]));
            if (isMounted) {
              setAllMakes(combined);
            }
          }
        }
      } catch (err) {
        // Silent fallback
      } finally {
        if (isMounted) setIsFetchingBrands(false);
      }
    };

    fetchAllMakes();
    return () => {
      isMounted = false;
    };
  }, []);

  // Keep internal states in sync with external props
  useEffect(() => {
    setBrandQuery(brand);
  }, [brand]);

  useEffect(() => {
    setModelQuery(model);
  }, [model]);

  // Click outside listener to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (brandRef.current && !brandRef.current.contains(e.target as Node)) {
        setShowBrandDropdown(false);
      }
      if (modelRef.current && !modelRef.current.contains(e.target as Node)) {
        setShowModelDropdown(false);
      }
      if (yearRef.current && !yearRef.current.contains(e.target as Node)) {
        setShowYearDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter Makes instantly via Case-Insensitive Fuzzy Search (.toLowerCase().trim())
  useEffect(() => {
    const normalizedQuery = brandQuery.toLowerCase().trim();
    if (!normalizedQuery) {
      setBrandSuggestions(allMakes);
      return;
    }

    const matches = allMakes.filter((b) =>
      b.toLowerCase().includes(normalizedQuery)
    );

    setBrandSuggestions(matches.length > 0 ? matches : [brandQuery]);
  }, [brandQuery, allMakes]);

  // Fetch / Filter Models when brand or modelQuery changes
  useEffect(() => {
    const activeBrand = brandQuery.trim();
    if (!activeBrand) {
      setModelSuggestions([]);
      return;
    }

    const normalizedModelQuery = modelQuery.toLowerCase().trim();

    // 1. Instantly check local dataset first
    const foundLocal = COMPREHENSIVE_VEHICLES.find(
      (v) => v.make.toLowerCase() === activeBrand.toLowerCase()
    );
    const localModels = foundLocal ? foundLocal.models : [];

    const localMatches = normalizedModelQuery
      ? localModels.filter((m) => m.toLowerCase().includes(normalizedModelQuery))
      : localModels;

    if (localMatches.length > 0) {
      setModelSuggestions(localMatches);
    }

    // 2. Fetch API in background if needed
    const handler = setTimeout(async () => {
      setIsFetchingModels(true);
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);

      try {
        const response = await fetch(
          `https://fleetcatalog.disturbingbyte.pt/api/models?make=${encodeURIComponent(activeBrand)}&limit=500`,
          { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          const results = Array.isArray(data) ? data : data.models || data.results || [];
          if (results.length > 0) {
            const formatted = results.map((m: any) => (typeof m === "string" ? m : m.name || m.model));
            const merged = Array.from(new Set([...localModels, ...formatted]));
            const filtered = normalizedModelQuery
              ? merged.filter((m: string) => m.toLowerCase().includes(normalizedModelQuery))
              : merged;
            setModelSuggestions(filtered);
            setIsFetchingModels(false);
            return;
          }
        }
      } catch (err) {
        // Silent catch fallback
      }

      setModelSuggestions(localMatches);
      setIsFetchingModels(false);
    }, 100);

    return () => clearTimeout(handler);
  }, [brandQuery, modelQuery]);

  const handleSelectBrand = (selected: string) => {
    setBrandQuery(selected);
    onBrandChange(selected);
    setShowBrandDropdown(false);
    // Reset model if brand changes
    setModelQuery("");
    onModelChange("");
  };

  const handleSelectModel = (selected: string) => {
    setModelQuery(selected);
    onModelChange(selected);
    setShowModelDropdown(false);
  };

  const handleSelectYear = (selected: string) => {
    onYearChange(selected);
    setShowYearDropdown(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
      {/* 1. VEHICLE BRAND */}
      <div ref={brandRef} className="relative">
        <label className="block text-xs font-mono font-bold text-neutral-400 mb-1 uppercase tracking-wider">
          VEHICLE BRAND *
        </label>
        <div className="relative">
          <input
            type="text"
            required
            placeholder="e.g. BMW, Land Rover..."
            value={brandQuery}
            onChange={(e) => {
              setBrandQuery(e.target.value);
              onBrandChange(e.target.value);
              setShowBrandDropdown(true);
            }}
            onFocus={() => setShowBrandDropdown(true)}
            className="w-full min-h-[44px] bg-[#141414] border border-white/10 text-sm text-white px-4 py-3 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-colors"
          />
          {isFetchingBrands ? (
            <Loader2 className="w-4 h-4 text-red-500 animate-spin absolute right-3 top-3.5" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-3.5 pointer-events-none" />
          )}
        </div>

        {/* Brand Floating Dropdown */}
        {showBrandDropdown && (
          <div className="absolute left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-xl shadow-2xl backdrop-blur-md max-h-56 overflow-y-auto z-50 py-1">
            {brandSuggestions.length > 0 ? (
              brandSuggestions.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectBrand(item)}
                  className="hover:bg-red-600/20 hover:text-red-400 cursor-pointer px-4 py-2.5 text-xs text-neutral-200 font-medium transition"
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="px-4 py-2.5 text-xs text-neutral-400 italic">
                Type custom brand "{brandQuery}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* 2. VEHICLE MODEL */}
      <div ref={modelRef} className="relative">
        <label className="block text-xs font-mono font-bold text-neutral-400 mb-1 uppercase tracking-wider">
          VEHICLE MODEL *
        </label>
        <div className="relative">
          <input
            type="text"
            required
            placeholder="e.g. Defender, 3 Series..."
            value={modelQuery}
            onChange={(e) => {
              setModelQuery(e.target.value);
              onModelChange(e.target.value);
              setShowModelDropdown(true);
            }}
            onFocus={() => setShowModelDropdown(true)}
            className="w-full min-h-[44px] bg-[#141414] border border-white/10 text-sm text-white px-4 py-3 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-colors"
          />
          {isFetchingModels ? (
            <Loader2 className="w-4 h-4 text-red-500 animate-spin absolute right-3 top-3.5" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-3.5 pointer-events-none" />
          )}
        </div>

        {/* Model Floating Dropdown */}
        {showModelDropdown && (
          <div className="absolute left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-xl shadow-2xl backdrop-blur-md max-h-56 overflow-y-auto z-50 py-1">
            {modelSuggestions.length > 0 ? (
              modelSuggestions.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectModel(item)}
                  className="hover:bg-red-600/20 hover:text-red-400 cursor-pointer px-4 py-2.5 text-xs text-neutral-200 font-medium transition"
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="px-4 py-2.5 text-xs text-neutral-400 italic">
                {modelQuery ? `Use custom model "${modelQuery}"` : "Type or select a model..."}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. MANUFACTURING YEAR */}
      <div ref={yearRef} className="relative">
        <label className="block text-xs font-mono font-bold text-neutral-400 mb-1 uppercase tracking-wider">
          YEAR (OPTIONAL)
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="e.g. 2024"
            value={year}
            onChange={(e) => {
              onYearChange(e.target.value);
              setShowYearDropdown(true);
            }}
            onFocus={() => setShowYearDropdown(true)}
            className="w-full min-h-[44px] bg-[#141414] border border-white/10 text-sm text-white px-4 py-3 rounded-xl focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none transition-colors"
          />
          <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-3.5 pointer-events-none" />
        </div>

        {/* Year Dropdown */}
        {showYearDropdown && (
          <div className="absolute left-0 right-0 mt-1.5 bg-[#181818] border border-white/15 rounded-xl shadow-2xl backdrop-blur-md max-h-56 overflow-y-auto z-50 py-1">
            <div
              onClick={() => handleSelectYear("Brand New Delivery")}
              className="hover:bg-red-600/20 hover:text-red-400 cursor-pointer px-4 py-2 text-xs text-red-400 font-bold transition border-b border-white/10"
            >
              Brand New Delivery
            </div>
            {RECENT_YEARS.map((y) => (
              <div
                key={y}
                onClick={() => handleSelectYear(y)}
                className="hover:bg-red-600/20 hover:text-red-400 cursor-pointer px-4 py-2 text-xs text-neutral-200 font-medium transition"
              >
                {y}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
