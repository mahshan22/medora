function TrustedStats() {
  const statistics = [
    {
      value: "150+",
      label: "Specialists",
    },
    {
      value: "25+",
      label: "Departments",
    },
    {
      value: "50K+",
      label: "Patients Served",
    },
    {
      value: "24/7",
      label: "Care",
    },
  ];

  return (
    <section className="border-y border-[#D8C3B5]/60 bg-[#F8F4EE]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#A89589]">
            Trusted Healthcare
          </p>

          <h2 className="mt-4 font-display text-3xl leading-tight text-[#342A26] sm:text-4xl lg:text-5xl">
            Expertise you can trust.
          </h2>

          <p className="mt-5 text-sm leading-7 text-[#6F625B] sm:text-base">
            Exceptional care brought together through experienced
            specialists, advanced facilities and a patient-first approach.
          </p>

        </div>

        {/* Statistics */}
        <div className="mt-14 grid grid-cols-2 border-t border-[#D8C3B5]/60 md:grid-cols-4">

          {statistics.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-8 text-center md:py-10 ${
                index !== 0
                  ? "border-[#D8C3B5]/60 md:border-l"
                  : ""
              }`}
            >

              <p className="font-display text-4xl text-[#342A26] sm:text-5xl">
                {stat.value}
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#A89589]">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustedStats;