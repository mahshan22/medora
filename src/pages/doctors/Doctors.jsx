import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  SlidersHorizontal,
  Star,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Stethoscope,
  X,
} from "lucide-react";

import { doctors } from "../../data/doctors";
import BookingModal from "../../components/doctors/BookingModal";

function Doctors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [sortBy, setSortBy] = useState("recommended");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Create the specialty options from our doctor data.
  const specialties = [
    "All Specialties",
    ...new Set(doctors.map((doctor) => doctor.specialty)),
  ];

  // Search, filter, and sort the doctors.
  const filteredDoctors = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    let results = doctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(query) ||
        doctor.specialty.toLowerCase().includes(query) ||
        doctor.qualification.toLowerCase().includes(query);

      const matchesSpecialty =
        selectedSpecialty === "All Specialties" ||
        doctor.specialty === selectedSpecialty;

      return matchesSearch && matchesSpecialty;
    });

    if (sortBy === "rating") {
      results.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "experience") {
      results.sort(
        (a, b) =>
          parseInt(b.experience, 10) - parseInt(a.experience, 10)
      );
    }

    if (sortBy === "fee-low") {
      results.sort((a, b) => a.fee - b.fee);
    }

    if (sortBy === "fee-high") {
      results.sort((a, b) => b.fee - a.fee);
    }

    return results;
  }, [searchTerm, selectedSpecialty, sortBy]);

  return (
    <div className="min-h-screen bg-[#F8F4EE]">

      {/* ===================================
          HERO SECTION
      =================================== */}
      <section className="border-b border-[#E8D8CC]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">

            <div>
              <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#A89589]">
                <span className="h-px w-8 bg-[#B99A67]" />
                Meet your specialists
              </div>

              <h1 className="font-display text-4xl leading-tight text-[#342A26] sm:text-5xl lg:text-7xl">
                Exceptional care.
                <br />
                <span className="italic">Personal connections.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-[#746B65] sm:text-base">
                Discover experienced specialists who put your wellbeing
                first. Explore their expertise and find a consultation
                that works for you.
              </p>
            </div>

            {/* Doctor count */}
            <div className="rounded-2xl border border-[#E8D8CC] bg-white/70 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFE5DA] text-[#806B5C]">
                  <Stethoscope size={23} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="font-display text-3xl text-[#342A26]">
                    {doctors.length.toString().padStart(2, "0")}
                  </p>

                  <p className="text-sm text-[#746B65]">
                    Featured specialists
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-[#E8D8CC] pt-4">
                <p className="text-xs leading-6 text-[#746B65]">
                  Explore specialties, compare consultation fees, and
                  review sample availability.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================
          SEARCH AND FILTERS
      =================================== */}
      <section className="px-5 pt-10 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-2xl border border-[#E8D8CC] bg-white p-4 sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_240px_240px]">

              {/* Search */}
              <div className="relative">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A89589]"
                />

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search doctor, specialty or qualification..."
                  aria-label="Search doctors"
                  className="h-12 w-full rounded-xl border border-[#E8D8CC] bg-[#FDFBF8] pl-11 pr-4 text-sm text-[#342A26] outline-none transition placeholder:text-[#A89589] focus:border-[#B99A67] focus:ring-2 focus:ring-[#B99A67]/15"
                />
              </div>

              {/* Specialty filter */}
              <div className="relative">
                <Stethoscope
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A89589]"
                />

                <select
                  value={selectedSpecialty}
                  onChange={(event) =>
                    setSelectedSpecialty(event.target.value)
                  }
                  aria-label="Filter by specialty"
                  className="h-12 w-full appearance-none rounded-xl border border-[#E8D8CC] bg-[#FDFBF8] pl-11 pr-4 text-sm text-[#342A26] outline-none focus:border-[#B99A67]"
                >
                  {specialties.map((specialty) => (
                    <option key={specialty} value={specialty}>
                      {specialty}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sorting */}
              <div className="relative">
                <SlidersHorizontal
                  size={17}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#A89589]"
                />

                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  aria-label="Sort doctors"
                  className="h-12 w-full appearance-none rounded-xl border border-[#E8D8CC] bg-[#FDFBF8] pl-11 pr-4 text-sm text-[#342A26] outline-none focus:border-[#B99A67]"
                >
                  <option value="recommended">Recommended order</option>
                  <option value="rating">Highest rated</option>
                  <option value="experience">Most experienced</option>
                  <option value="fee-low">Fee: Low to high</option>
                  <option value="fee-high">Fee: High to low</option>
                </select>
              </div>

            </div>
          </div>

          {/* Result count and clear filters */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[#746B65]" aria-live="polite">
              Showing{" "}
              <span className="font-semibold text-[#342A26]">
                {filteredDoctors.length}
              </span>{" "}
              of {doctors.length} featured specialists
            </p>

            {(searchTerm || selectedSpecialty !== "All Specialties" || sortBy !== "recommended") && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty("All Specialties");
                  setSortBy("recommended");
                }}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold text-[#806B5C] transition hover:bg-[#E8D8CC]"
              >
                <X size={14} />
                Clear filters
              </button>
            )}
          </div>

        </div>
      </section>

      {/* ===================================
          DOCTOR CARDS
      =================================== */}
      <section className="px-5 pb-20 pt-6 sm:px-8 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-7xl">

          {filteredDoctors.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

              {filteredDoctors.map((doctor) => (
                <article
                  key={doctor.id}
                  className="group overflow-hidden rounded-2xl border border-[#E8D8CC] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#D8C3B5] hover:shadow-[0_18px_45px_rgba(52,42,38,0.08)]"
                >
                  {/* Doctor image */}
                  <div className="relative h-64 overflow-hidden bg-[#EFE5DA]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                    />

                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-[#F8F4EE]/95 px-3 py-1.5 text-xs font-medium text-[#342A26]">
                      {doctor.specialty}
                    </span>

                    <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#342A26] shadow-sm">
                      <Star
                        size={14}
                        fill="#B99A67"
                        color="#B99A67"
                      />
                      {doctor.rating}
                      <span className="font-normal text-[#746B65]">
                        ({doctor.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Doctor information */}
                  <div className="p-5 sm:p-6">

                    <h2 className="font-display text-2xl text-[#342A26]">
                      {doctor.name}
                    </h2>

                    <p className="mt-2 text-sm text-[#806B5C]">
                      {doctor.qualification}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#F8F4EE] px-3 py-1.5 text-xs text-[#746B65]">
                        {doctor.experience} experience
                      </span>

                      <span className="rounded-full bg-[#F8F4EE] px-3 py-1.5 text-xs text-[#746B65]">
                        {doctor.hospital}
                      </span>
                    </div>

                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-[#746B65]">
                      {doctor.bio}
                    </p>

                    {/* Availability */}
                    <div className="mt-5 flex items-start gap-2 border-t border-[#E8D8CC] pt-4">
                      <Clock3
                        size={17}
                        className="mt-0.5 shrink-0 text-[#A89589]"
                      />

                      <div>
                        <p className="text-xs text-[#A89589]">
                          Sample availability
                        </p>

                        <p className="mt-1 text-sm font-medium text-[#342A26]">
                          {doctor.availability}
                        </p>
                      </div>
                    </div>

                    {/* Fee and actions */}
                    <div className="mt-5 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-xs text-[#A89589]">
                          Consultation fee
                        </p>

                        <p className="mt-1 font-display text-2xl text-[#342A26]">
                          ₹{doctor.fee.toLocaleString("en-IN")}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedDoctor(doctor)}
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#342A26] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#B99A67] hover:text-[#342A26] sm:px-5 sm:text-sm"
                      >
                        <CalendarDays size={15} />
                        Book
                      </button>
                    </div>

                    <Link
                      to={`/doctors/${doctor.id}`}
                      className="mt-4 flex items-center justify-between border-t border-[#E8D8CC] pt-4 text-sm font-medium text-[#806B5C] transition hover:text-[#342A26]"
                    >
                      View full profile

                      <ArrowUpRight
                        size={17}
                        className="transition group-hover:translate-x-0.5"
                      />
                    </Link>

                  </div>
                </article>
              ))}

            </div>
          ) : (
            /* Empty state */
            <div className="rounded-3xl border border-dashed border-[#D8C3B5] bg-white/60 px-5 py-16 text-center sm:px-10">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EFE5DA] text-[#806B5C]">
                <Search size={24} />
              </div>

              <h2 className="mt-5 font-display text-2xl text-[#342A26]">
                No specialists found
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#746B65]">
                We couldn't find a doctor matching your search. Try another
                name or choose a different specialty.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty("All Specialties");
                  setSortBy("recommended");
                }}
                className="mt-6 rounded-full bg-[#342A26] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#B99A67] hover:text-[#342A26]"
              >
                Show all doctors
              </button>

            </div>
          )}

        </div>
      </section>

      {/* ===================================
          BOOKING MODAL
      =================================== */}
      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}

    </div>
  );
}

export default Doctors;