import { ArrowUpRight, CalendarDays, Stethoscope } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F4EE]">

      {/* Decorative background shape */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E8D8CC]/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

          {/* LEFT SIDE */}
          <div>

            {/* Small label */}
            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-10 bg-[#B99A67]" />

              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#A89589]">
                MÉDORA Healthcare
              </span>

            </div>

            {/* Main heading */}
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-[-0.02em] text-[#342A26] sm:text-6xl lg:text-7xl">

              Advanced Healthcare.

              <br />

              <span className="text-[#A89589]">
                Beautifully Personal.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-[#6F625B] sm:text-lg">
              Exceptional medical care, trusted specialists and clinically
              tested wellness solutions — thoughtfully brought together in
              one healthcare experience.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <a
                href="/doctors"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#342A26] px-7 py-4 text-sm font-medium text-[#F8F4EE] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B99A67]"
              >
                <CalendarDays
                  size={17}
                  strokeWidth={1.7}
                />

                Book an Appointment

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/pharmacy"
                className="inline-flex items-center justify-center rounded-full border border-[#A89589]/60 px-7 py-4 text-sm font-medium text-[#342A26] transition-all duration-300 hover:-translate-y-1 hover:border-[#342A26] hover:bg-[#E8D8CC]"
              >
                Explore Pharmacy
              </a>

            </div>

            {/* Trust statement */}
            <div className="mt-10 flex items-center gap-4">

              <div className="flex -space-x-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8F4EE] bg-[#D8C3B5] text-xs font-medium text-[#342A26]">
                  DR
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8F4EE] bg-[#A89589] text-xs font-medium text-white">
                  +
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#F8F4EE] bg-[#342A26] text-xs font-medium text-white">
                  50K
                </div>

              </div>

              <p className="text-sm leading-5 text-[#6F625B]">
                Trusted by
                <span className="font-medium text-[#342A26]">
                  {" "}50,000+ patients
                </span>
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#E8D8CC]">

              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85"
                alt="MÉDORA healthcare specialist"
                className="h-[520px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[600px]"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#342A26]/35 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs font-medium text-white">
                  <span className="h-2 w-2 rounded-full bg-[#D8C3B5]" />
                  Specialist Care
                </div>
              </div>

            </div>

            {/* Floating appointment card */}
            <div className="absolute -bottom-7 left-5 right-5 rounded-2xl border border-white/70 bg-[#F8F4EE]/95 p-5 shadow-[0_20px_60px_rgba(52,42,38,0.15)] backdrop-blur-md sm:left-auto sm:w-[330px]">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26]">
                  <Stethoscope
                    size={20}
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#A89589]">
                    Need medical attention?
                  </p>

                  <h3 className="mt-1 font-display text-xl text-[#342A26]">
                    Find a specialist
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-[#6F625B]">
                    Find the right doctor for your healthcare needs.
                  </p>
                </div>

              </div>

              <a
                href="/doctors"
                className="mt-4 flex items-center justify-between border-t border-[#E8D8CC] pt-4 text-sm font-medium text-[#342A26]"
              >
                Find a Doctor

                <ArrowUpRight size={17} />

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;