import { useState } from "react";
import {
  ArrowRight,
  Activity,
  HeartPulse,
  Droplet,
  Scan,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const laboratoryServices = [
  {
    id: 1,
    title: "Blood Tests",
    description:
      "Essential blood investigations to help you understand your health.",
    icon: Droplet,
  },
  {
    id: 2,
    title: "Health Screening",
    description:
      "Comprehensive health packages designed around your needs.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Hormone Testing",
    description:
      "Specialised testing to assess important hormonal markers.",
    icon: Activity,
  },
  {
    id: 4,
    title: "Allergy Testing",
    description:
      "Testing options to help identify potential allergens.",
    icon: Scan,
  },
  {
    id: 5,
    title: "Vitamin Testing",
    description:
      "Check important vitamin levels with laboratory investigations.",
    icon: FlaskConical,
  },
  {
    id: 6,
    title: "Diagnostic Services",
    description:
      "Reliable diagnostic services to support informed healthcare.",
    icon: HeartPulse,
  },
];

function LaboratoryFeature() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="bg-[#F8F4EE] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#A89589]">
              Precision diagnostics
            </p>

            <h2 className="font-display text-3xl leading-tight text-[#342A26] sm:text-4xl lg:text-5xl">
              Understand your health.
              <br />
              <span className="italic">With greater clarity.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#746B65] sm:text-base">
              Explore laboratory investigations and screening services
              designed to support your healthcare journey.
            </p>
          </div>

          <Link
            to="/laboratory"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#D8C3B5] px-6 py-3 text-sm font-medium text-[#342A26] transition hover:bg-[#342A26] hover:text-white"
          >
            Explore Laboratory
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Laboratory service cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {laboratoryServices.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() =>
                  setSelectedService(isSelected ? null : service.id)
                }
                aria-expanded={isSelected}
                className={`group rounded-2xl border p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
                  isSelected
                    ? "border-[#B99A67] bg-[#EFE5DA]"
                    : "border-[#E8D8CC] bg-white/70 hover:border-[#B99A67]"
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E7DD] text-[#806B5C]">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <ArrowRight
                    size={18}
                    className={`transition duration-300 ${
                      isSelected
                        ? "rotate-90 text-[#806B5C]"
                        : "text-[#A89589] group-hover:translate-x-1"
                    }`}
                  />
                </div>

                <h3 className="font-display text-xl text-[#342A26]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#746B65]">
                  {service.description}
                </p>

                {isSelected && (
                  <p className="mt-4 border-t border-[#D8C3B5] pt-4 text-xs leading-5 text-[#806B5C]">
                    Explore this service on the Laboratory page for more
                    information.
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex items-start gap-3 rounded-xl bg-[#EFE7DE] p-5">
          <ShieldCheck
            size={20}
            className="mt-0.5 shrink-0 text-[#806B5C]"
          />

          <p className="text-xs leading-6 text-[#746B65] sm:text-sm">
            Test availability and preparation requirements may vary.
            Consult a qualified healthcare professional when deciding which
            investigations are appropriate for you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LaboratoryFeature;