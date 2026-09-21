import React from "react";
import { ArrowRight, Shield, Sparkles, Sun, Layers } from "lucide-react";
import { renderWith3MLogo } from "./Brand3MLogo";

interface RelatedServicesNavProps {
  currentServiceId: string;
}

export const RelatedServicesNav: React.FC<RelatedServicesNavProps> = ({ currentServiceId }) => {
  const allServices = [
    {
      id: "ceramic",
      name: "3M Ceramic Coating",
      href: "/ceramic-coating.html",
      icon: Sparkles,
      desc: "9H SiO2 optical gloss & hydrophobic shield",
      price: "₹20,000",
    },
    {
      id: "graphene",
      name: "3M Graphene Coating",
      href: "/graphene-coating.html",
      icon: Layers,
      desc: "High thermal dissipation carbon matrix",
      price: "₹23,000",
    },
    {
      id: "10h",
      name: "3M 10H Coating",
      href: "/10h-coating.html",
      icon: Shield,
      desc: "Diamond-grade clearcoat hardness armor",
      price: "₹20,000",
    },
    {
      id: "ppf",
      name: "3M PPF (Paint Protection Film)",
      href: "/ppf.html",
      icon: Shield,
      desc: "Self-healing TPU physical stone-chip barrier",
      price: "₹600",
    },
    {
      id: "sunfilm",
      name: "3M Sunfilm",
      href: "/sun-film.html",
      icon: Sun,
      desc: "99% UV rejection & infrared heat shield",
      price: "₹4,500",
    },
    {
      id: "anti-glare",
      name: "3M Anti-Glare Film",
      href: "/anti-glare-film.html",
      icon: Sun,
      desc: "Night driving headlight glare diffusion",
      price: "₹4,500",
    },
  ];

  const filtered = allServices.filter((s) => s.id !== currentServiceId).slice(0, 3);

  return (
    <section className="py-10 sm:py-14 border-b border-white/10 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pb-4 border-b border-white/10">
          <span className="font-mono text-xs text-brand-red tracking-widest uppercase block mb-1">
            STUDIO PORTFOLIO EXPLORER
          </span>
          <h3 className="font-heading font-extrabold text-white text-2xl sm:text-3xl md:text-4xl tracking-wide uppercase leading-tight">
            EXPLORE RELATED <span className="text-3m-red">3M</span> SERVICES
          </h3>
          <p className="font-mono text-xs text-metallic-400 mt-1 uppercase tracking-wide">
            COMPLEMENTARY PROTECTIVE TREATMENTS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((service) => {
            const IconComp = service.icon;
            return (
              <a
                key={service.id}
                href={service.href}
                className="group p-6 rounded-sm bg-[#0e0e0e]/92 border border-white/10 hover:border-brand-red/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-sm bg-brand-red/10 text-brand-red border border-brand-red/20 group-hover:bg-brand-red group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-brand-amber font-bold">
                      Starting {service.price}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white group-hover:text-brand-red transition-colors flex items-center">
                    {renderWith3MLogo(service.name)}
                  </h4>
                  <p className="mt-2 text-xs text-metallic-400 font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-metallic-300 group-hover:text-white transition-colors">
                  <span>Explore Service Specs</span>
                  <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
