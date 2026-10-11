import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Clock3,
  Microscope,
  BedDouble,
  Activity,
  UsersRound,
  CheckCircle2,
  CalendarDays,
  Sparkles,
} from "lucide-react";

function Hospital() {
  const facilities = [
    {
      number: "01",
      title: "Advanced Diagnostics",
      description:
        "Explore diagnostic services designed to support informed healthcare decisions.",
      icon: Microscope,
    },
    {
      number: "02",
      title: "Comfortable Patient Rooms",
      description:
        "A welcoming environment designed around patient comfort, privacy and peace of mind.",
      icon: BedDouble,
    },
    {
      number: "03",
      title: "Emergency & Critical Care",
      description:
        "Discover our emergency-care concept and the importance of timely medical attention.",
      icon: Activity,
    },
    {
      number: "04",
      title: "Specialist Consultations",
      description:
        "Find experienced specialists across a range of medical disciplines.",
      icon: Stethoscope,
    },
  ];

  const departments = [
    {
      name: "Cardiology",
      description: "Heart health and cardiovascular care.",
      number: "01",
    },
    {
      name: "Dermatology",
      description: "Skin health and personalised dermatological care.",
      number: "02",
    },
    {
      name: "Neurology",
      description: "Brain, nerve and neurological health.",
      number: "03",
    },
    {
      name: "Orthopedics",
      description: "Bone, joint and musculoskeletal care.",
      number: "04",
    },
    {
      name: "Pediatrics",
      description: "Healthcare focused on children and young patients.",
      number: "05",
    },
    {
      name: "General Medicine",
      description: "General health consultations and assessments.",
      number: "06",
    },
  ];

  const benefits = [
    {
      title: "Personalised Attention",
      description:
        "A patient-first approach that recognises individual healthcare needs.",
      icon: HeartPulse,
    },
    {
      title: "Specialist Expertise",
      description:
        "Explore specialists across multiple medical disciplines.",
      icon: UsersRound,
    },
    {
      title: "Thoughtful Technology",
      description:
        "A modern digital experience for discovering doctors and services.",
      icon: ShieldCheck,
    },
    {
      title: "Convenient Access",
      description:
        "Explore services and arrange demo appointments through one interface.",
      icon: Clock3,
    },
  ];

  return (
    <main className="overflow-hidden bg-[#F8F4EE]">
      {/* HERO SECTION */}
      <section className="medora-container py-8 sm:py-12">
        <div className="grid overflow-hidden rounded-[28px] bg-[#E8D8CC]/50 lg:grid-cols-2 lg:rounded-[36px]">
          {/* Hero content */}
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-16">
            <p className="medora-eyebrow">
              The MÉDORA experience
            </p>

            <h1 className="mt-5 font-display text-4xl leading-[1.15] text-[#342A26] sm:text-5xl lg:text-6xl xl:text-7xl">
              Healthcare,
              <br />
              with a more
              <br />
              <span className="italic">human touch.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#6F625B] sm:text-lg">
              Discover a thoughtful approach to healthcare where
              specialist expertise, modern technology and patient
              comfort come together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/doctors"
                className="medora-button medora-button-primary"
              >
                Find a Specialist
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/departments"
                className="medora-button medora-button-secondary"
              >
                Explore Departments
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-[#D8C3B5] pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F4EE] text-[#342A26]">
                <HeartPulse size={21} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#342A26]">
                  Care centred around you
                </p>

                <p className="mt-1 text-xs text-[#746B65]">
                  Thoughtful care. A seamless experience.
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative min-h-[360px] sm:min-h-[480px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85"
              alt="Contemporary healthcare interior"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#342A26]/50 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-[#F8F4EE]/90 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-6">
              <p className="medora-eyebrow">
                Our philosophy
              </p>

              <p className="mt-2 font-display text-2xl leading-snug text-[#342A26] sm:text-3xl">
                Exceptional care begins with understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="medora-section">
        <div className="medora-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
            <div>
              <p className="medora-eyebrow">
                About MÉDORA
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
                More than healthcare.
                <br />
                <span className="italic">A human connection.</span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[#746B65] sm:text-lg">
                Healthcare should feel clear, considered and
                personal. MÉDORA brings doctors, healthcare
                departments and supporting services into one
                thoughtfully designed digital experience.
              </p>

              <p className="mt-5 leading-8 text-[#746B65]">
                From exploring medical specialities to arranging
                a consultation, our platform is designed to help
                patients navigate their healthcare journey with
                greater clarity and convenience.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#342A26] transition hover:text-[#A89589]"
              >
                Discover our philosophy
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section className="border-y border-[#E8D8CC]/70 bg-[#FDFBF8]">
        <div className="medora-container medora-section">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="medora-eyebrow">
                Facilities & services
              </p>

              <h2 className="mt-3 font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
                Thoughtfully designed
                <br className="hidden sm:block" />
                for better care.
              </h2>

              <p className="mt-5 leading-7 text-[#746B65]">
                Explore the different areas of care represented
                in the MÉDORA experience.
              </p>
            </div>

            <Link
              to="/laboratory"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#342A26] transition hover:text-[#A89589]"
            >
              Explore diagnostics
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.number}
                  className="medora-card group flex flex-col p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8D8CC]/60 text-[#342A26] transition group-hover:bg-[#342A26] group-hover:text-[#F8F4EE]">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>

                    <span className="font-display text-sm text-[#A89589]">
                      {facility.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl text-[#342A26]">
                    {facility.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#746B65]">
                    {facility.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-[#E8D8CC]" />

                  <span className="mt-4 text-xs font-medium uppercase tracking-wider text-[#A89589]">
                    Discover MÉDORA
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS SECTION */}
      <section className="medora-section">
        <div className="medora-container">
          <div className="text-center">
            <p className="medora-eyebrow">
              Medical specialities
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
              The right specialist can make a difference.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#746B65]">
              Explore our featured medical departments and discover
              specialists based on your healthcare needs.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <Link
                key={department.number}
                to="/departments"
                className="medora-card group flex items-center gap-4 p-5 sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8D8CC]/60 font-display text-lg text-[#342A26] transition group-hover:bg-[#342A26] group-hover:text-[#F8F4EE]">
                  {department.number}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl text-[#342A26]">
                    {department.name}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#746B65]">
                    {department.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#A89589] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/departments"
              className="medora-button medora-button-secondary"
            >
              View All Departments
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE MÉDORA */}
      <section className="bg-[#E8D8CC]/40">
        <div className="medora-container medora-section">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <p className="medora-eyebrow">
                The MÉDORA difference
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
                Healthcare that puts people first.
              </h2>

              <p className="mt-5 leading-8 text-[#746B65]">
                We believe that a better healthcare experience
                starts with clear information, thoughtful design
                and easier access to the services people need.
              </p>

              <Link
                to="/doctors"
                className="medora-button medora-button-primary mt-8"
              >
                Meet Our Doctors
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="rounded-2xl border border-[#D8C3B5]/70 bg-[#F8F4EE] p-5 sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#342A26]">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>

                    <h3 className="mt-5 font-display text-xl text-[#342A26]">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#746B65]">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="medora-container py-16 sm:py-24">
        <div className="relative overflow-hidden rounded-[28px] bg-[#342A26] px-6 py-12 text-center sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#D8C3B5]/20">
            <div className="absolute inset-8 rounded-full border border-[#D8C3B5]/20" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F4EE]/10 text-[#D8C3B5]">
              <Sparkles size={25} strokeWidth={1.5} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D8C3B5]">
              Your wellbeing matters
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#F8F4EE] sm:text-5xl lg:text-6xl">
              Take the first step towards thoughtful care.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#E8D8CC]">
              Explore our doctors and discover a more personal
              approach to navigating your healthcare journey.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/doctors"
                className="medora-button bg-[#F8F4EE] text-[#342A26] hover:bg-[#E8D8CC]"
              >
                <CalendarDays size={17} />
                Book an Appointment
              </Link>

              <Link
                to="/departments"
                className="medora-button border border-[#D8C3B5]/60 text-[#F8F4EE] hover:bg-white/10"
              >
                Explore Departments
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hospital;