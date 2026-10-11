import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Microscope,
  ShoppingBag,
  Heart,
  Target,
  Eye,
  Check,
} from "lucide-react";

function About() {
  const values = [
    {
      icon: Heart,
      number: "01",
      title: "Patient First",
      description:
        "Every experience begins with understanding people, their needs, and their individual healthcare journeys.",
    },
    {
      icon: ShieldCheck,
      number: "02",
      title: "Trust & Transparency",
      description:
        "We believe healthcare experiences should feel clear, comfortable, and thoughtfully designed.",
    },
    {
      icon: Sparkles,
      number: "03",
      title: "Thoughtful Innovation",
      description:
        "We bring healthcare services and modern digital experiences together in one convenient place.",
    },
  ];

  const services = [
    {
      icon: Stethoscope,
      number: "01",
      title: "Expert Doctors",
      description:
        "Explore specialist profiles and discover doctors across different medical departments.",
      link: "/doctors",
      linkText: "Meet our doctors",
    },
    {
      icon: HeartPulse,
      number: "02",
      title: "Hospital Care",
      description:
        "Discover hospital facilities, healthcare services, and the departments available through MÉDORA.",
      link: "/hospital",
      linkText: "Explore hospital",
    },
    {
      icon: ShoppingBag,
      number: "03",
      title: "Healthcare Pharmacy",
      description:
        "Browse healthcare essentials and skincare products through our pharmacy experience.",
      link: "/pharmacy",
      linkText: "Explore pharmacy",
    },
    {
      icon: Microscope,
      number: "04",
      title: "Laboratory Services",
      description:
        "Explore available laboratory tests and discover the test-booking experience.",
      link: "/laboratory",
      linkText: "Explore laboratory",
    },
  ];

  const highlights = [
    "Convenient access to healthcare information",
    "A carefully designed patient experience",
    "Multiple healthcare services in one platform",
    "A modern, accessible digital experience",
  ];

  return (
    <main className="overflow-hidden bg-[#F8F4EE]">
      {/* HERO SECTION */}
      <section className="relative border-b border-[#E8D8CC] bg-[#FDFBF8]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E8D8CC] bg-white px-4 py-2">
              <Sparkles size={15} className="text-[#B99A67]" />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#746B65]">
                The MÉDORA Story
              </span>
            </div>

            <h1 className="font-display text-4xl leading-[1.15] text-[#342A26] sm:text-5xl lg:text-6xl">
              Healthcare deserves a
              <span className="mt-1 block italic text-[#A89589]">
                more thoughtful
              </span>
              experience.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#746B65] sm:text-base">
              MÉDORA brings healthcare services together through a modern,
              patient-focused digital experience. Our vision is to make
              exploring healthcare simpler, more convenient, and more
              personal.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/doctors"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#342A26] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#51413A]"
              >
                Explore Our Doctors
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/hospital"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8C3B5] px-6 py-3.5 text-sm font-medium text-[#342A26] transition hover:bg-[#F2E7DE]"
              >
                Our Hospital
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-[#E8D8CC] pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26]">
                <HeartPulse size={21} />
              </div>

              <div>
                <p className="text-sm font-medium text-[#342A26]">
                  Care with intention
                </p>

                <p className="mt-1 text-xs text-[#746B65]">
                  Technology with a human touch.
                </p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full border border-[#D8C3B5] sm:-right-5 sm:-top-5 sm:h-36 sm:w-36" />

            <div className="relative overflow-hidden rounded-[2rem] rounded-tl-[7rem] border border-[#E8D8CC] bg-[#E8D8CC] p-2 sm:rounded-tl-[9rem]">
              <img
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85"
                alt="Modern healthcare consultation environment"
                className="h-[360px] w-full rounded-[1.6rem] rounded-tl-[6.5rem] object-cover sm:h-[480px] sm:rounded-tl-[8.5rem]"
              />
            </div>

            <div className="absolute -bottom-5 left-3 right-3 rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-5 shadow-xl sm:-bottom-6 sm:left-8 sm:right-8 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F2E7DE] text-[#8C6650]">
                  <HeartPulse size={24} />
                </div>

                <div>
                  <p className="font-display text-xl text-[#342A26]">
                    Thoughtfully connected.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#746B65] sm:text-sm">
                    Doctors, hospital care, pharmacy, and laboratory services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-1 bg-[#D8C3B5]" />
      </section>

      {/* OUR STORY */}
      <section className="medora-section">
        <div className="medora-container grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="medora-eyebrow">01 — Our Story</p>

            <h2 className="mt-5 font-display text-3xl leading-tight text-[#342A26] sm:text-4xl lg:text-5xl">
              A different way to experience healthcare.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-[#746B65] sm:text-base">
            <p>
              Healthcare can involve many different services, from finding
              the right specialist to exploring hospital facilities,
              laboratory tests, and everyday healthcare essentials.
            </p>

            <p>
              MÉDORA is designed to bring these experiences together in a
              single, thoughtfully organised digital platform. We combine
              elegant design with straightforward navigation to help people
              explore healthcare services with greater convenience.
            </p>

            <p>
              Our approach is built around a simple idea: digital healthcare
              experiences should be easy to understand, comfortable to use,
              and designed with people in mind.
            </p>

            <Link
              to="/departments"
              className="inline-flex items-center gap-2 border-b border-[#B99A67] pb-1 font-medium text-[#342A26] transition hover:text-[#8C6650]"
            >
              Discover our departments
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="border-y border-[#E8D8CC] bg-[#FDFBF8]">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <article className="rounded-3xl border border-[#E8D8CC] bg-[#F8F4EE] p-7 sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8D8CC] text-[#342A26]">
              <Target size={27} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#A89589]">
              Our Mission
            </p>

            <h2 className="mt-3 font-display text-3xl text-[#342A26] sm:text-4xl">
              Make healthcare easier to explore.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#746B65] sm:text-base">
              Our mission is to create a convenient digital destination
              where people can discover healthcare services, learn about
              available options, and navigate their healthcare journey
              more confidently.
            </p>
          </article>

          <article className="rounded-3xl bg-[#342A26] p-7 text-white sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#D8C3B5]">
              <Eye size={27} />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C3B5]">
              Our Vision
            </p>

            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              A more connected healthcare experience.
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/70 sm:text-base">
              We envision a healthcare experience in which thoughtfully
              designed technology helps connect people with the services
              and information they need, while keeping the human side of
              healthcare at the centre.
            </p>
          </article>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="medora-section">
        <div className="medora-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="medora-eyebrow">02 — What Guides Us</p>

            <h2 className="mt-4 font-display text-3xl text-[#342A26] sm:text-4xl lg:text-5xl">
              The values behind MÉDORA.
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#746B65] sm:text-base">
              Every part of our digital experience is guided by simplicity,
              trust, and thoughtful innovation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group rounded-3xl border border-[#E8D8CC] bg-[#FDFBF8] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F2E7DE] text-[#8C6650] transition group-hover:bg-[#342A26] group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <span className="font-display text-2xl text-[#D8C3B5]">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl text-[#342A26]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#746B65]">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="border-y border-[#E8D8CC] bg-[#FDFBF8]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A89589]">
                03 — What We Offer
              </p>

              <h2 className="mt-4 font-display text-3xl text-[#342A26] sm:text-4xl lg:text-5xl">
                Healthcare services, thoughtfully connected.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#746B65] sm:text-base">
                Explore the different areas available through the MÉDORA
                digital experience.
              </p>
            </div>

            <Link
              to="/"
              className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#342A26] transition hover:text-[#8C6650]"
            >
              Back to home
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex flex-col rounded-3xl border border-[#E8D8CC] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F2E7DE] text-[#8C6650]">
                      <Icon size={23} />
                    </div>

                    <span className="font-display text-xl text-[#D8C3B5]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl text-[#342A26]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#746B65]">
                    {service.description}
                  </p>

                  <Link
                    to={service.link}
                    className="mt-6 inline-flex items-center gap-2 border-t border-[#E8D8CC] pt-5 text-sm font-medium text-[#342A26] transition hover:text-[#8C6650]"
                  >
                    {service.linkText}
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY MEDORA */}
      <section className="medora-section">
        <div className="medora-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="medora-eyebrow">04 — Why MÉDORA</p>

            <h2 className="mt-5 font-display text-3xl leading-tight text-[#342A26] sm:text-4xl lg:text-5xl">
              Designed around your healthcare journey.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#746B65] sm:text-base">
              We believe that a good digital healthcare experience should
              help people find information easily, understand their
              available options, and navigate services without unnecessary
              complexity.
            </p>

            <div className="mt-8 space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26]">
                    <Check size={14} />
                  </div>

                  <p className="text-sm leading-6 text-[#51413A] sm:text-base">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/patient-portal"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#342A26] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#51413A]"
            >
              Explore Patient Portal
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-full border border-[#D8C3B5] sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

            <div className="relative rounded-3xl border border-[#E8D8CC] bg-[#E8D8CC] p-2">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
                alt="Healthcare professional providing patient care"
                loading="lazy"
                className="h-[320px] w-full rounded-[1.35rem] object-cover sm:h-[430px]"
              />
            </div>

            <div className="absolute -bottom-5 right-3 max-w-[270px] rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-5 shadow-xl sm:right-6 sm:p-6">
              <p className="font-display text-xl text-[#342A26]">
                People at the centre.
              </p>

              <p className="mt-2 text-xs leading-6 text-[#746B65] sm:text-sm">
                Thoughtful design. Clear information. A more personal
                digital experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#342A26] px-6 py-14 text-center text-white sm:px-12 sm:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-20 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-28 -right-12 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8C3B5]">
              Your journey starts here
            </p>

            <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
              A more thoughtful way to explore healthcare.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              Discover our doctors, explore healthcare services, and
              experience the MÉDORA digital platform.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/doctors"
                className="inline-flex items-center gap-2 rounded-full bg-[#D8C3B5] px-6 py-3.5 text-sm font-medium text-[#342A26] transition hover:bg-[#E8D8CC]"
              >
                Find a Doctor
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;