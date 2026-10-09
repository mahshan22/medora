import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function PharmacyFeature() {
  const categories = [
    "Prescription Medicines",
    "Wellness",
    "Skincare",
    "Cosmetics",
    "Personal Care",
  ];

  return (
    <section className="overflow-hidden bg-[#F8F4EE]">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        <div className="grid overflow-hidden rounded-[2rem] bg-[#E8D8CC] lg:grid-cols-[0.9fr_1.1fr]">

          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[600px]">

            <img
              src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=85"
              alt="Premium healthcare wellness products"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#342A26]/50 via-transparent to-transparent" />

            {/* Image badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-[#F8F4EE]/90 p-4 backdrop-blur-md">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#342A26] text-[#F8F4EE]">
                  <ShieldCheck size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium text-[#342A26]">
                    Thoughtfully selected
                  </p>

                  <p className="mt-0.5 text-[11px] text-[#6F625B]">
                    Quality-first healthcare essentials
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F4EE] text-[#342A26]">
              <Sparkles size={19} strokeWidth={1.5} />
            </div>

            <p className="mt-7 text-xs font-medium uppercase tracking-[0.3em] text-[#A89589]">
              MÉDORA Pharmacy
            </p>

            <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
              Healthcare beyond
              <br />
              the consultation.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#6F625B] sm:text-base">
              Discover carefully selected healthcare, wellness and
              personal-care essentials designed to complement your
              everyday wellbeing.
            </p>

            {/* Categories */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {categories.map((category, index) => (
                <div
                  key={category}
                  className={`flex items-center gap-3 rounded-xl border border-[#F8F4EE]/70 bg-[#F8F4EE]/40 px-4 py-3 ${
                    index === categories.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >

                  <span className="h-1.5 w-1.5 rounded-full bg-[#B99A67]" />

                  <span className="text-sm text-[#342A26]">
                    {category}
                  </span>

                </div>
              ))}

            </div>

            {/* CTA */}
            <a
              href="/pharmacy"
              className="group mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-[#342A26] px-7 py-4 text-sm font-medium text-[#F8F4EE] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B99A67]"
            >
              Shop Wellness

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F8F4EE]/10">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>

            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default PharmacyFeature;