import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  Search,
  ArrowRight,
  ArrowUpRight,
  Stethoscope,
  HeartPulse,
  Sparkles,
  Activity,
  CircleCheckBig
} from "lucide-react";

import { departments as departmentData } from "../../data/departments";

function Departments() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter departments based on the search input
  const filteredDepartments = useMemo(() => {
    return departmentData.filter((department) => {
      const searchText = searchTerm.toLowerCase();

      return (
        department.name.toLowerCase().includes(searchText) ||
        department.description.toLowerCase().includes(searchText)
      );
    });
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      {/* HERO SECTION */}
      <section className="medora-container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <p className="medora-eyebrow">
              Explore our specialities
            </p>

            <h1 className="mt-5 font-display text-4xl leading-tight text-[#342A26] sm:text-6xl lg:text-7xl">
              Care for every
              <br />
              <span className="italic">part of you.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#746B65] sm:text-lg">
              Discover medical specialities designed around your
              healthcare needs. Find a department, explore your
              options, and connect with the right specialist.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/doctors"
                className="medora-button medora-button-primary"
              >
                Find a Doctor
                <ArrowRight size={17} />
              </Link>

              <a
                href="#department-list"
                className="medora-button medora-button-secondary"
              >
                Explore Departments
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-[#E8D8CC] pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26]">
                <HeartPulse size={21} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#342A26]">
                  Your health, thoughtfully considered.
                </p>

                <p className="mt-1 text-xs text-[#746B65]">
                  Explore care with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-tr-[32px] border-r border-t border-[#B99A67] sm:-right-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-[28px] bg-[#E8D8CC]">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
                alt="Healthcare professional in a clinical environment"
                className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-4 shadow-lg sm:-left-5 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26]">
                  <Stethoscope size={20} />
                </div>

                <div>
                  <p className="font-display text-xl text-[#342A26]">
                    Specialist care
                  </p>

                  <p className="text-xs text-[#746B65]">
                    Across multiple disciplines
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-[28px] border-b border-r border-[#B99A67]" />
          </div>
        </div>
      </section>

      {/* DEPARTMENT SEARCH */}
      <section
        id="department-list"
        className="scroll-mt-24 border-y border-[#E8D8CC]/70 bg-[#FDFBF8]"
      >
        <div className="medora-container medora-section">
          <div className="mx-auto max-w-3xl text-center">
            <p className="medora-eyebrow">
              Find your speciality
            </p>

            <h2 className="mt-3 font-display text-3xl text-[#342A26] sm:text-5xl">
              Explore our departments
            </h2>

            <p className="mt-4 leading-7 text-[#746B65]">
              Search our medical specialities to find the department
              that best matches your healthcare needs.
            </p>
          </div>

          {/* Search input */}
          <div className="mx-auto mt-8 max-w-2xl">
            <label
              htmlFor="department-search"
              className="mb-2 block text-left text-sm font-medium text-[#342A26]"
            >
              Search medical departments
            </label>

            <div className="flex items-center gap-3 rounded-full border border-[#D8C3B5] bg-white px-5 py-4 transition focus-within:border-[#342A26]">
              <Search
                size={20}
                className="shrink-0 text-[#A89589]"
              />

              <input
                id="department-search"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Try cardiology, skin health, or neurology..."
                className="w-full bg-transparent text-sm text-[#342A26] outline-none placeholder:text-[#A89589]"
              />

              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="shrink-0 text-xs font-semibold text-[#746B65] hover:text-[#342A26]"
                >
                  Clear
                </button>
              )}
            </div>

            <p className="mt-3 text-center text-sm text-[#A89589]">
              {filteredDepartments.length}{" "}
              {filteredDepartments.length === 1
                ? "department"
                : "departments"}{" "}
              found
            </p>
          </div>

          {/* Department cards */}
          {filteredDepartments.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDepartments.map((department, index) => {
                const Icon = department.icon || Stethoscope;

                return (
                  <article
                    key={department.id || department.name}
                    className="medora-card group flex flex-col p-6 sm:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8D8CC]/60 text-[#342A26] transition duration-300 group-hover:bg-[#342A26] group-hover:text-[#F8F4EE]">
                        <Icon size={25} strokeWidth={1.5} />
                      </div>

                      <span className="font-display text-sm text-[#A89589]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-2xl text-[#342A26]">
                      {department.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-[#746B65]">
                      {department.description}
                    </p>

                    <div className="mt-6 border-t border-[#E8D8CC] pt-5">
                      <Link
                        to="/doctors"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#342A26] transition hover:text-[#A89589]"
                      >
                        Find a Specialist
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-[#D8C3B5] bg-white px-6 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8D8CC]/60 text-[#342A26]">
                <Search size={24} />
              </div>

              <h3 className="mt-5 font-display text-2xl text-[#342A26]">
                No departments found
              </h3>

              <p className="mt-3 text-sm text-[#746B65]">
                Try a different search term to explore our departments.
              </p>

              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="medora-button medora-button-primary mt-6"
              >
                Show All Departments
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CARE PHILOSOPHY */}
      <section className="medora-container medora-section">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[#E8D8CC]">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=85"
              alt="Medical professional providing patient care"
              className="aspect-[4/3] w-full object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-[#F8F4EE]/90 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <div className="flex items-center gap-3">
                <CircleCheckBig
                  size={22}
                  className="shrink-0 text-[#687D5B]"
                />

                <p className="font-medium text-[#342A26]">
                  A more thoughtful healthcare experience.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="medora-eyebrow">
              The MÉDORA philosophy
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
              Every patient deserves to feel understood.
            </h2>

            <p className="mt-5 leading-8 text-[#746B65]">
              Finding healthcare should feel straightforward.
              MÉDORA brings specialist information and healthcare
              navigation together in one carefully designed experience.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Explore specialists across medical disciplines.",
                "Discover departments in one convenient place.",
                "Arrange demo appointments through the platform.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CircleCheckBig
                    size={19}
                    className="mt-1 shrink-0 text-[#8A9A78]"
                  />

                  <p className="text-sm leading-7 text-[#746B65]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="medora-button medora-button-secondary mt-8"
            >
              Discover MÉDORA
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="medora-container pb-16 sm:pb-24">
        <div className="rounded-[28px] bg-[#342A26] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#D8C3B5]">
            <Sparkles size={25} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#D8C3B5]">
            Your next step
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-[#F8F4EE] sm:text-5xl">
            The right care begins with the right connection.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#E8D8CC]">
            Explore our doctors and find a specialist for your healthcare needs.
          </p>

          <Link
            to="/doctors"
            className="medora-button mt-8 bg-[#F8F4EE] text-[#342A26] hover:bg-[#E8D8CC]"
          >
            Explore Our Doctors
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Departments;