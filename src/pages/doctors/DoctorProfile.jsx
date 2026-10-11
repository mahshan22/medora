import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Star,
  Stethoscope,
} from "lucide-react";

import { doctors } from "../../data/doctors";
import BookingModal from "../../components/doctors/BookingModal";

function DoctorProfile() {
  const { id } = useParams();

  const [bookingOpen, setBookingOpen] = useState(false);

  // Find the doctor using the ID in the URL
  const doctor = doctors.find((item) => item.id === id);

  // Show a fallback if the doctor doesn't exist
  if (!doctor) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-5 py-20">
        <div className="max-w-lg text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26]">
            <Stethoscope size={34} strokeWidth={1.5} />
          </div>

          <p className="medora-eyebrow">Doctor profile</p>

          <h1 className="mt-4 font-display text-4xl text-[#342A26] sm:text-5xl">
            Doctor not found
          </h1>

          <p className="mt-4 leading-7 text-[#746B65]">
            We couldn't find this doctor. Please explore our specialists
            and choose a profile to learn more.
          </p>

          <Link
            to="/doctors"
            className="medora-button medora-button-primary mt-8"
          >
            <ArrowLeft size={17} />
            Explore Our Doctors
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F8F4EE]">
      {/* Breadcrumb */}
      <section className="border-b border-[#E8D8CC]/70">
        <div className="medora-container py-5">
          <Link
            to="/doctors"
            className="inline-flex items-center gap-2 text-sm text-[#746B65] transition hover:text-[#342A26]"
          >
            <ArrowLeft size={16} />
            Back to all doctors
          </Link>
        </div>
      </section>

      {/* Doctor profile hero */}
      <section className="medora-container py-10 sm:py-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* Doctor image */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -left-3 -top-3 h-28 w-28 rounded-tl-[32px] border-l border-t border-[#B99A67] sm:-left-5 sm:-top-5" />

            <div className="relative overflow-hidden rounded-[28px] bg-[#E8D8CC]">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="aspect-[4/4.5] w-full object-cover object-top"
              />

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-[#F8F4EE]/95 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26]">
                    <ShieldCheck size={22} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="font-semibold text-[#342A26]">
                      Personalised patient care
                    </p>

                    <p className="mt-0.5 text-xs text-[#746B65] sm:text-sm">
                      Thoughtful care, tailored to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-[32px] border-b border-r border-[#B99A67] sm:-bottom-5 sm:-right-5" />
          </div>

          {/* Doctor information */}
          <div className="pt-2 lg:pt-0">
            <p className="medora-eyebrow">Meet your specialist</p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E8D8CC] bg-white px-3 py-1.5 text-sm text-[#746B65]">
              <Stethoscope size={15} />
              {doctor.specialty}
            </div>

            <h1 className="mt-5 font-display text-4xl leading-tight text-[#342A26] sm:text-5xl lg:text-6xl">
              {doctor.name}
            </h1>

            <p className="mt-4 text-base text-[#746B65] sm:text-lg">
              {doctor.qualification}
            </p>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="flex items-center gap-2">
                <Star
                  size={18}
                  fill="#B99A67"
                  stroke="#B99A67"
                />

                <span className="font-semibold text-[#342A26]">
                  {doctor.rating}
                </span>

                <span className="text-sm text-[#746B65]">
                  ({doctor.reviews} reviews)
                </span>
              </div>

              <span className="hidden h-5 w-px bg-[#D8C3B5] sm:block" />

              <div className="flex items-center gap-2 text-sm text-[#746B65]">
                <CheckCircle2 size={17} className="text-[#8A9A78]" />
                {doctor.experience} experience
              </div>
            </div>

            <p className="mt-7 max-w-xl leading-8 text-[#746B65]">
              {doctor.bio}
            </p>

            {/* Hospital information */}
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E8D8CC] bg-white p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8F4EE] text-[#342A26]">
                <MapPin size={20} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A89589]">
                  Hospital
                </p>

                <p className="mt-1 font-medium text-[#342A26]">
                  {doctor.hospital}
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#E8D8CC] bg-white p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8F4EE] text-[#342A26]">
                <Clock3 size={20} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#A89589]">
                  Next available appointment
                </p>

                <p className="mt-1 font-medium text-[#342A26]">
                  {doctor.availability}
                </p>
              </div>
            </div>

            {/* Appointment fee and button */}
            <div className="mt-7 flex flex-col gap-5 border-t border-[#E8D8CC] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-[#746B65]">
                  Consultation fee
                </p>

                <p className="mt-1 font-display text-3xl text-[#342A26]">
                  ₹{doctor.fee.toLocaleString("en-IN")}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="medora-button medora-button-primary w-full sm:w-auto"
              >
                <CalendarDays size={17} />
                Book an Appointment
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="border-t border-[#E8D8CC]/70 bg-[#FDFBF8]">
        <div className="medora-container py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="medora-eyebrow">Areas of expertise</p>

            <h2 className="mt-3 font-display text-3xl text-[#342A26] sm:text-4xl">
              Specialised care, centred on you.
            </h2>

            <p className="mt-4 leading-7 text-[#746B65]">
              Explore the areas of healthcare this specialist focuses on.
              Our goal is to make finding the right care feel simple and
              personal.
            </p>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {doctor.specializations.map((specialization, index) => (
              <div
                key={specialization}
                className="medora-card flex min-h-36 flex-col justify-between p-5 sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EE] text-[#A89589]">
                  {index === 0 ? (
                    <Stethoscope size={19} strokeWidth={1.6} />
                  ) : index === 1 ? (
                    <HeartIcon />
                  ) : index === 2 ? (
                    <GraduationCap size={19} strokeWidth={1.6} />
                  ) : (
                    <CheckCircle2 size={19} strokeWidth={1.6} />
                  )}
                </div>

                <h3 className="mt-6 text-base font-medium text-[#342A26]">
                  {specialization}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="medora-container py-12 sm:py-16">
        <div className="flex flex-col gap-5 rounded-[28px] bg-[#342A26] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <p className="medora-eyebrow !text-[#D8C3B5]">
              Your wellbeing comes first
            </p>

            <h2 className="mt-3 font-display text-3xl leading-tight text-[#F8F4EE] sm:text-4xl">
              Ready to take the next step in your care?
            </h2>

            <p className="mt-3 leading-7 text-[#E8D8CC]">
              Schedule a consultation and begin your personalised
              healthcare journey with MÉDORA.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="medora-button shrink-0 bg-[#F8F4EE] text-[#342A26] hover:bg-[#E8D8CC]"
          >
            <CalendarDays size={17} />
            Book Consultation
            <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* Booking modal */}
      {bookingOpen && (
        <BookingModal
          doctor={doctor}
          onClose={() => setBookingOpen(false)}
        />
      )}
    </main>
  );
}

// Small reusable icon for a heart-inspired expertise card
function HeartIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    </svg>
  );
}

export default DoctorProfile;