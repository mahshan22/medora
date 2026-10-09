import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { doctors } from "../../data/doctors";
import DoctorCard from "./DoctorCard";
import BookingModal from "./BookingModal";

function FeaturedDoctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <section className="bg-[#F8F4EE]">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#A89589]">
              Featured Specialists
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
              Meet the people
              <br />
              behind your care.
            </h2>

          </div>

          <a
            href="/doctors"
            className="group flex items-center gap-2 text-sm font-medium text-[#342A26]"
          >
            Explore all doctors

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8C3B5] transition-all duration-300 group-hover:border-[#B99A67] group-hover:bg-[#B99A67] group-hover:text-[#F8F4EE]">
              <ArrowUpRight size={15} />
            </span>
          </a>

        </div>

        {/* Doctors */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBook={setSelectedDoctor}
            />
          ))}

        </div>

      </div>

      {/* Booking Modal */}
      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}

    </section>
  );
}

export default FeaturedDoctors;