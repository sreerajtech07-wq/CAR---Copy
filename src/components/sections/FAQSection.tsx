import React, { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is the difference between 3M Scotchgard™ PPF and Ceramic Coating?",
    answer: "Paint Protection Film (PPF) is an 8-mil thick, self-healing urethane barrier that physically absorbs stone chips, scratches, and door dings. Ceramic coating is a chemical nanolayer that provides high-gloss mirror reflections, intense water beading, and UV protection, but cannot stop flying gravel. Most clients opt for PPF on high-impact front zones and ceramic coating on the remaining panels."
  },
  {
    question: "How does the official 3M electronic warranty work?",
    answer: "Upon job completion, your vehicle's chassis and treatment details are registered directly onto the official 3M India digital warranty portal. You receive an electronic warranty card via SMS/Email covering delamination, bubbling, yellowing, and cracking for up to 10 years, honored across authorized 3M studios."
  },
  {
    question: "Does 3M™ Crystalline CR70 sunfilm comply with traffic and RTO norms?",
    answer: "Yes. 3M Crystalline CR70 maintains 70% visible light transmission (VLT), keeping it optically clear and compliant with vehicle glass transparency standards while actively rejecting up to 97% of heat-causing infrared rays and 99.9% of harmful UV radiation."
  },
  {
    question: "How long does a complete PPF or Graphene application take?",
    answer: "A full PPF wrap or multi-stage graphene coating typically requires 48 to 72 hours. This turnaround ensures meticulous multi-stage decontamination, dual-action machine paint correction, dust-isolated application, and mandatory post-application infrared heat curing before vehicle handover."
  },
  {
    question: "Do you use blades directly on the car body during installation?",
    answer: "No. We utilize precision computerized plotter templates cut to your car's exact panel dimensions before installation. Where edge-wrapping is requested, cuts are made with pre-masked knifeless tape, ensuring razor blades never touch your factory clearcoat."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-black py-20 px-4 sm:px-6 overflow-hidden border-t border-neutral-900">
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-950/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Lockup */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-red-500 block mb-2 font-mono">
            CLARITY & CONFIDENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-neutral-400 mt-2 font-sans">
            Clear answers regarding warranty, application protocols, and maintenance before reserving your studio slot.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-neutral-800 rounded-lg bg-neutral-950/80 backdrop-blur-sm overflow-hidden transition-colors duration-200 hover:border-neutral-700"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-1 focus:ring-red-500/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {item.question}
                  </span>
                  <span className="shrink-0 p-1 rounded-full bg-neutral-900 text-red-500 border border-neutral-800">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base leading-relaxed text-neutral-300 border-t border-neutral-900 pt-4 bg-neutral-900/30">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom WhatsApp Direct Help Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base font-semibold text-white">
              Still have specific questions about your vehicle?
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Connect directly with our senior studio technician for custom recommendations.
            </p>
          </div>
          <a
            href="https://wa.me/917601933555?text=Hi%2C%20I%20have%20a%20question%20regarding%20detailing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm transition-all shadow-md shadow-emerald-950/40 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Studio Tech on WhatsApp →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
