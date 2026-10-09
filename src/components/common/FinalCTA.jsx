import { ArrowRight, CalendarDays, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

function FinalCTA() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#342A26] px-6 py-16 text-center sm:px-12 sm:py-20 lg:px-20 lg:py-24">

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl">

          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#B99A67]/50 bg-white/5 text-[#D8C3B5]">
            <HeartPulse size={26} strokeWidth={1.4} />
          </div>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#D8C3B5]">
            Your wellbeing, our priority
          </p>

          <h2 className="font-display text-3xl leading-tight text-[#F8F4EE] sm:text-4xl md:text-5xl lg:text-6xl">
            Your health deserves
            <br />
            <span className="italic text-[#D8C3B5]">
              a better experience.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#E8D8CC]/75 sm:text-base">
            From expert consultations to personalised healthcare services,
            take the next step towards a healthier you with MÉDORA.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              to="/doctors"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D8C3B5] px-7 py-3.5 text-sm font-semibold text-[#342A26] transition duration-300 hover:bg-[#F8F4EE] sm:w-auto"
            >
              <CalendarDays size={18} />
              Book an Appointment
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/about"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-[#F8F4EE] transition duration-300 hover:border-[#D8C3B5] hover:bg-white/5 sm:w-auto"
            >
              Discover MÉDORA
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;