import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  CalendarDays,
  Clock3,
  UserRound,
  Stethoscope,
  ArrowRight,
  CalendarCheck,
  XCircle,
  ClipboardList,
  CheckCircle2,
  Plus,
} from "lucide-react";

function PatientPortal() {
  const [appointments, setAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  // Load saved appointments when the page opens
  useEffect(() => {
    try {
      const savedAppointments = JSON.parse(
        localStorage.getItem("medoraAppointments") || "[]"
      );

      if (Array.isArray(savedAppointments)) {
        setAppointments(savedAppointments);
      }
    } catch {
      setAppointments([]);
    }
  }, []);

  // Cancel a demo appointment
  const cancelAppointment = (appointmentId) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this demo appointment?"
    );

    if (!confirmed) {
      return;
    }

    const updatedAppointments = appointments.map((appointment) =>
      appointment.id === appointmentId
        ? { ...appointment, status: "Cancelled" }
        : appointment
    );

    try {
      localStorage.setItem(
        "medoraAppointments",
        JSON.stringify(updatedAppointments)
      );

      setAppointments(updatedAppointments);
    } catch {
      window.alert(
        "Unable to update browser storage. Please try again."
      );
    }
  };

  // Sort appointments by date and time
  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(`${a.date}T${convertTime(a.time)}`);
    const dateB = new Date(`${b.date}T${convertTime(b.time)}`);

    return dateA - dateB;
  });

  const activeAppointments = sortedAppointments.filter(
    (appointment) => appointment.status !== "Cancelled"
  );

  const cancelledAppointments = sortedAppointments.filter(
    (appointment) => appointment.status === "Cancelled"
  );

  const upcomingAppointments = activeAppointments.filter(
    (appointment) =>
      new Date(`${appointment.date}T${convertTime(appointment.time)}`) >=
      new Date()
  );

  const displayedAppointments =
    activeTab === "upcoming"
      ? upcomingAppointments
      : activeTab === "cancelled"
        ? cancelledAppointments
        : sortedAppointments;

  const formatDate = (dateString) => {
    return new Date(`${dateString}T12:00:00`).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "short",
        year: "numeric",
      }
    );
  };

  const formatFullDate = (dateString) => {
    return new Date(`${dateString}T12:00:00`).toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  const getStatusStyle = (status) => {
    if (status === "Cancelled") {
      return "bg-red-50 text-red-700";
    }

    return "bg-[#DDE5D8] text-[#526747]";
  };

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      {/* Dashboard header */}
      <section className="border-b border-[#E8D8CC] bg-[#FDFBF8]">
        <div className="medora-container py-12 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="medora-eyebrow">Your personal healthcare space</p>

              <h1 className="mt-3 font-display text-4xl text-[#342A26] sm:text-5xl lg:text-6xl">
                Patient Portal
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-[#746B65]">
                Keep track of your appointments and manage your
                healthcare journey with MÉDORA.
              </p>
            </div>

            <Link
              to="/doctors"
              className="medora-button medora-button-primary shrink-0"
            >
              <Plus size={18} />
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <div className="medora-container py-10 sm:py-14">
        {/* Welcome card */}
        <section className="relative overflow-hidden rounded-[28px] bg-[#342A26] p-6 sm:p-9 lg:p-10">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8C3B5]">
              Welcome to MÉDORA
            </p>

            <h2 className="mt-3 font-display text-3xl leading-tight text-[#F8F4EE] sm:text-4xl">
              Your health deserves thoughtful care.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#E8D8CC] sm:text-base">
              View your demo appointments, check their details, and
              manage your upcoming visits from one place.
            </p>
          </div>

          <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border border-[#D8C3B5]/20 sm:right-10">
            <div className="absolute inset-8 rounded-full border border-[#D8C3B5]/20" />
          </div>
        </section>

        {/* Overview cards */}
        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <OverviewCard
            icon={<CalendarCheck size={21} />}
            label="Total appointments"
            value={appointments.length}
            description="All saved demo bookings"
          />

          <OverviewCard
            icon={<Clock3 size={21} />}
            label="Upcoming visits"
            value={upcomingAppointments.length}
            description="Scheduled for today or later"
          />

          <OverviewCard
            icon={<XCircle size={21} />}
            label="Cancelled"
            value={cancelledAppointments.length}
            description="Cancelled demo appointments"
          />
        </section>

        {/* Appointments */}
        <section className="mt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="medora-eyebrow">Your schedule</p>

              <h2 className="mt-2 font-display text-3xl text-[#342A26] sm:text-4xl">
                My Appointments
              </h2>
            </div>

            <p className="text-sm text-[#746B65]">
              {appointments.length} saved{" "}
              {appointments.length === 1 ? "appointment" : "appointments"}
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-7 flex flex-wrap gap-2">
            {[
              { id: "all", label: "All appointments" },
              { id: "upcoming", label: "Upcoming" },
              { id: "cancelled", label: "Cancelled" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full border px-5 py-2.5 text-sm transition ${
                  activeTab === tab.id
                    ? "border-[#342A26] bg-[#342A26] text-[#F8F4EE]"
                    : "border-[#D8C3B5] bg-transparent text-[#6F625B] hover:bg-[#E8D8CC]/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Appointment list */}
          <div className="mt-6 space-y-4">
            {displayedAppointments.length === 0 ? (
              <EmptyAppointments activeTab={activeTab} />
            ) : (
              displayedAppointments.map((appointment) => (
                <article
                  key={appointment.id}
                  className="medora-card p-5 sm:p-7"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    {/* Doctor information */}
                    <div className="flex items-start gap-4">
                      {appointment.doctorImage ? (
                        <img
                          src={appointment.doctorImage}
                          alt={appointment.doctorName}
                          className="h-16 w-16 shrink-0 rounded-2xl object-cover object-top sm:h-20 sm:w-20"
                        />
                      ) : (
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#E8D8CC] text-[#342A26] sm:h-20 sm:w-20">
                          <Stethoscope size={26} />
                        </div>
                      )}

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-xl text-[#342A26] sm:text-2xl">
                            {appointment.doctorName}
                          </h3>

                          <span
                            className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusStyle(appointment.status)}`}
                          >
                            {appointment.status || "Confirmed"}
                          </span>
                        </div>

                        <p className="mt-1 text-sm text-[#746B65]">
                          {appointment.specialty}
                        </p>

                        <p className="mt-3 text-xs text-[#A89589]">
                          Reference: {appointment.id}
                        </p>
                      </div>
                    </div>

                    {/* Date and time */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:min-w-[290px]">
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F4EE] text-[#342A26]">
                          <CalendarDays size={18} />
                        </div>

                        <div>
                          <p className="text-xs text-[#A89589]">
                            Appointment date
                          </p>

                          <p className="mt-1 text-sm font-medium text-[#342A26]">
                            {formatDate(appointment.date)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F4EE] text-[#342A26]">
                          <Clock3 size={18} />
                        </div>

                        <div>
                          <p className="text-xs text-[#A89589]">
                            Appointment time
                          </p>

                          <p className="mt-1 text-sm font-medium text-[#342A26]">
                            {appointment.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Appointment footer */}
                  <div className="mt-6 flex flex-col gap-4 border-t border-[#E8D8CC] pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs text-[#A89589]">
                        Consultation fee
                      </p>

                      <p className="mt-1 font-display text-2xl text-[#342A26]">
                        ₹
                        {Number(
                          appointment.consultationFee || 0
                        ).toLocaleString("en-IN")}
                      </p>
                    </div>

                    {appointment.status !== "Cancelled" ? (
                      <button
                        type="button"
                        onClick={() =>
                          cancelAppointment(appointment.id)
                        }
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#D8C3B5] px-5 py-2.5 text-sm text-[#6F625B] transition hover:border-red-200 hover:bg-red-50 hover:text-red-700"
                      >
                        <XCircle size={16} />
                        Cancel demo appointment
                      </button>
                    ) : (
                      <p className="text-sm text-[#746B65]">
                        This demo appointment has been cancelled.
                      </p>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* Additional portal cards */}
        <section className="mt-14">
          <div>
            <p className="medora-eyebrow">More for your wellbeing</p>

            <h2 className="mt-2 font-display text-3xl text-[#342A26] sm:text-4xl">
              Your healthcare, organised.
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#746B65]">
              Explore other areas of the MÉDORA experience.
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <PortalFeatureCard
              icon={<ClipboardList size={22} />}
              title="Laboratory Services"
              description="Explore available diagnostic services and laboratory testing."
              link="/laboratory"
              linkText="Explore services"
            />

            <PortalFeatureCard
              icon={<UserRound size={22} />}
              title="Find a Specialist"
              description="Discover doctors and choose a specialist for your healthcare needs."
              link="/doctors"
              linkText="Browse doctors"
            />
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-10 rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-5">
          <p className="text-sm leading-6 text-[#746B65]">
            <strong className="text-[#342A26]">
              Demo environment:
            </strong>{" "}
            Appointments are stored in this browser only. This portal
            does not provide real medical records, prescriptions, test
            results, patient authentication, or hospital booking services.
          </p>
        </div>
      </div>
    </main>
  );
}

/* Reusable dashboard overview card */
function OverviewCard({ icon, label, value, description }) {
  return (
    <div className="medora-card p-5 sm:p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#746B65]">{label}</p>

          <p className="mt-3 font-display text-4xl text-[#342A26]">
            {value}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8D8CC]/60 text-[#342A26]">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-xs text-[#A89589]">{description}</p>
    </div>
  );
}

/* Empty state for appointment filters */
function EmptyAppointments({ activeTab }) {
  const messages = {
    all: {
      title: "Your journey starts here.",
      description:
        "You haven't booked a demo appointment yet. Explore our specialists to get started.",
    },
    upcoming: {
      title: "No upcoming appointments.",
      description:
        "You don't have any future demo appointments. You can book a consultation whenever you're ready.",
    },
    cancelled: {
      title: "No cancelled appointments.",
      description:
        "Cancelled demo appointments will appear here.",
    },
  };

  const message = messages[activeTab];

  return (
    <div className="rounded-[24px] border border-dashed border-[#D8C3B5] bg-[#FDFBF8] px-6 py-12 text-center sm:py-16">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8D8CC]/60 text-[#342A26]">
        <CalendarDays size={28} strokeWidth={1.5} />
      </div>

      <h3 className="mt-5 font-display text-2xl text-[#342A26]">
        {message.title}
      </h3>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#746B65]">
        {message.description}
      </p>

      {activeTab !== "cancelled" && (
        <Link
          to="/doctors"
          className="medora-button medora-button-primary mt-6"
        >
          Find a Doctor
          <ArrowRight size={17} />
        </Link>
      )}
    </div>
  );
}

/* Reusable portal navigation card */
function PortalFeatureCard({
  icon,
  title,
  description,
  link,
  linkText,
}) {
  return (
    <article className="medora-card flex flex-col p-6 sm:p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8D8CC]/60 text-[#342A26]">
        {icon}
      </div>

      <h3 className="mt-5 font-display text-2xl text-[#342A26]">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-[#746B65]">
        {description}
      </p>

      <Link
        to={link}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#342A26] transition hover:text-[#A89589]"
      >
        {linkText}
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}

// Convert a time such as "2:00 PM" into "14:00:00"
function convertTime(time = "12:00 AM") {
  const [clock, period] = time.split(" ");
  let [hours, minutes] = clock.split(":").map(Number);

  if (period === "PM" && hours !== 12) {
    hours += 12;
  }

  if (period === "AM" && hours === 12) {
    hours = 0;
  }

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;
}

export default PatientPortal;