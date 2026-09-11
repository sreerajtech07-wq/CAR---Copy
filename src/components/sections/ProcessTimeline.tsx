import React from "react";
import { ClipboardCheck, Droplet, Sparkles, Shield, KeyRound } from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const processSteps = [
    {
      num: "01",
      icon: ClipboardCheck,
      title: "Intake & Digital Surface Assessment",
      subtitle: "Panel Inspection Under Studio Lighting",
      detail:
        "Every vehicle enters our dedicated inspection bay. We systematically audit paint thickness, swirl depth, rock chip damage, and interior conditions to formulate a customized care protocol.",
    },
    {
      num: "02",
      icon: Droplet,
      title: "Chemical & Mechanical Decontamination",
      subtitle: "Stripping Road Film & Embedded Particles",
      detail:
        "Multi-stage wash using pH-neutral foam, citrus degreasers, wheel iron fallout eliminators, and synthetic clay lubricants to extract bonded industrial contaminants and coastal salt residue.",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "Calibrated Paint Correction",
      subtitle: "Multi-Stage Defect Elimination",
      detail:
        "Dual-action machine polishers with graded diminishing micro-abrasives polish away oxidation, holograms, and surface scratches, restoring mirror optical reflectivity to the factory paint.",
    },
    {
      num: "04",
      icon: Shield,
      title: "Protective Application (Coating / PPF)",
      subtitle: "Controlled Cleanroom Application",
      detail:
        "Application of Ceramic, Graphene, Borophene liquid polymers or computer-cut Paint Protection Film (PPF) in our enclosed, dust-mitigated studio environment.",
    },
    {
      num: "05",
      icon: KeyRound,
      title: "Studio Inspection & Vehicle Handover",
      subtitle: "Final Optical Verification & Maintenance Brief",
      detail:
        "Comprehensive final check under multi-spectrum LED inspection lights. Complete review of cured surfaces with the vehicle owner alongside aftercare guidelines.",
    },
  ];

  return (
    <section id="process" className="relative w-full bg-transparent py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center space-x-2.5 mb-3">
          <span className="w-6 h-[1px] bg-brand-red" />
          <span className="font-mono text-xs text-metallic-400 tracking-super-wide uppercase">
            EXECUTION WORKFLOW
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white uppercase">
              STUDIO PROCESS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-metallic-400 max-w-md md:text-right tracking-wider">
            SYSTEMATIC 5-PHASE VEHICLE CARE PROTOCOL
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-sm bg-white border border-gray-200 flex flex-col justify-between group hover:border-brand-red/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                      {step.num}
                    </span>
                    <div className="p-2.5 rounded-sm bg-gray-100 border border-gray-200 text-gray-700">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="font-mono text-[10px] text-brand-red tracking-widest uppercase mb-1">
                    {step.subtitle}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 font-mono text-[10px] text-gray-600">
                  PHASE {step.num} // STUDIO MIGRATION
                </div>
              </div>
            );
          })}

          {/* Bay Scheduling Info Card */}
          <div className="p-6 sm:p-8 rounded-sm bg-white border border-gray-200 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-brand-red tracking-widest uppercase">
                STUDIO ADMISSION
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-gray-900 uppercase">
                Reserved Bay Detailing
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                To guarantee maximum attention to detail and unhurried clearcoat curing, all major coating and PPF treatments are allocated dedicated bay time.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="font-mono text-xs text-gray-600 mb-2">Operating 7 Days a Week</div>
              <div className="font-mono text-sm text-gray-900 font-semibold">9:30 AM – 8:00 PM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
