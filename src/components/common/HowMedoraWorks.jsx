import {
  Search,
  CalendarDays,
  Stethoscope,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

function HowMedoraWorks() {
  const steps = [
    {
      number: "01",
      title: "Find your specialist",
      description:
        "Discover trusted specialists based on your healthcare needs, specialty and preferred availability.",
      icon: Search,
    },
    {
      number: "02",
      title: "Choose your appointment",
      description:
        "Select a convenient date and time that works naturally with your schedule.",
      icon: CalendarDays,
    },
    {
      number: "03",
      title: "Meet your doctor",
      description:
        "Connect with your specialist and receive thoughtful, personalised medical care.",
      icon: Stethoscope,
    },
    {
      number: "04",
      title: "Continue your care",
      description:
        "Stay connected with your care journey through appointments, prescriptions and reports.",
      icon: HeartPulse,
    },
  ];

  return (
    <section className="bg-[#342A26] text-[#F8F4EE]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        {/* Heading */}
        <div className="max-w-2xl">

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#D8C3B5]">
            How MÉDORA Works
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Healthcare,
            <br />
            made beautifully simple.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#D8C3B5] sm:text-base">
            From finding the right specialist to continuing your care,
            MÉDORA brings every part of your healthcare journey together.
          </p>

        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-0 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative border-t border-[#A89589]/40 px-1 py-8 lg:border-l lg:border-t-0 lg:px-7"
              >

                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="font-display text-3xl text-[#A89589]">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#A89589]/40 text-[#D8C3B5] transition-all duration-300 group-hover:border-[#B99A67] group-hover:bg-[#B99A67] group-hover:text-[#342A26]">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                </div>

                {/* Content */}
                <h3 className="mt-8 font-display text-2xl">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#D8C3B5]">
                  {step.description}
                </p>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <ArrowRight
                    className="mt-7 hidden text-[#A89589] lg:block"
                    size={18}
                    strokeWidth={1.5}
                  />
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HowMedoraWorks;