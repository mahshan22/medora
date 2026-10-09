import {
  ArrowRight,
  CalendarDays,
  FileText,
  Pill,
  ClipboardList,
  ShoppingBag,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

const portalFeatures = [
  {
    title: "Upcoming Appointment",
    description: "View your next scheduled consultation.",
    icon: CalendarDays,
    status: "Next appointment",
  },
  {
    title: "Prescriptions",
    description: "Keep track of your prescription information.",
    icon: Pill,
    status: "Medication records",
  },
  {
    title: "Lab Reports",
    description: "Access your laboratory report records.",
    icon: FileText,
    status: "Diagnostic records",
  },
  {
    title: "Medical Records",
    description: "Keep important health information organised.",
    icon: ClipboardList,
    status: "Health information",
  },
  {
    title: "Orders",
    description: "Review your pharmacy order information.",
    icon: ShoppingBag,
    status: "Order history",
  },
];

function PatientPortalPreview() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left content */}
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#A89589]">
            Your personal health space
          </p>

          <h2 className="font-display text-3xl leading-tight text-[#342A26] sm:text-4xl lg:text-5xl">
            Your healthcare,
            <br />
            <span className="italic">all in one place.</span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#746B65] sm:text-base">
            A convenient place to preview appointments, prescriptions,
            laboratory reports, orders and medical records through the
            MÉDORA patient portal.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/patient-portal"
              className="inline-flex items-center gap-2 rounded-full bg-[#342A26] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#514139]"
            >
              Open Patient Portal
              <ArrowRight size={16} />
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#E8D8CC] px-5 py-3 text-sm text-[#746B65]">
              <ShieldCheck size={17} />
              Privacy-conscious design
            </div>
          </div>

          <div className="mt-8 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1E7DD] text-[#806B5C]">
              <Clock3 size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#342A26]">
                Convenient access
              </p>
              <p className="mt-1 text-sm leading-6 text-[#746B65]">
                Designed to make your healthcare information easier to
                organise and review.
              </p>
            </div>
          </div>
        </div>

        {/* Right dashboard preview */}
        <div className="rounded-3xl border border-[#E8D8CC] bg-[#F8F4EE] p-4 shadow-[0_20px_60px_rgba(52,42,38,0.08)] sm:p-7">
          {/* Dashboard header */}
          <div className="flex items-center justify-between border-b border-[#E8D8CC] pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A89589]">
                MÉDORA
              </p>

              <h3 className="mt-2 font-display text-2xl text-[#342A26]">
                Patient overview
              </h3>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26]">
              <ShieldCheck size={22} />
            </div>
          </div>

          {/* Dashboard cards */}
          <div className="mt-5 space-y-3">
            {portalFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 rounded-2xl border border-[#EDE3D9] bg-white p-4 transition hover:border-[#D8C3B5] hover:shadow-sm sm:p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F1E7DD] text-[#806B5C]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-[#342A26]">
                      {feature.title}
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-[#8A7E75]">
                      {feature.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="shrink-0 text-[#A89589]"
                  />
                </div>
              );
            })}
          </div>

          {/* Demo notice */}
          <p className="mt-5 rounded-xl bg-[#EFE7DE] px-4 py-3 text-xs leading-5 text-[#746B65]">
            Demonstration preview — these cards display sample interface
            content, not actual patient records.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PatientPortalPreview;