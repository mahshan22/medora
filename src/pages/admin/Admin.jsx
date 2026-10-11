import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Activity,
  ArrowRight,
  CalendarDays,
  Clock3,
  ShoppingBag,
  Stethoscope,
  FlaskConical,
  CircleCheckBig,
  XCircle,
  UserRound,
} from "lucide-react";

import { doctors } from "../../data/doctors";

function readLocalData(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function formatDate(dateString) {
  if (!dateString) return "Date unavailable";

  const date = new Date(`${dateString}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getInitials(name = "") {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Admin() {
  const [appointments, setAppointments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [labBookings, setLabBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    setAppointments(readLocalData("medoraAppointments"));
    setOrders(readLocalData("medoraOrders"));
    setLabBookings(readLocalData("medoraLabBookings"));
  }, []);

  const activeAppointments = appointments.filter(
    (appointment) => appointment.status !== "Cancelled"
  );

  const cancelledAppointments = appointments.filter(
    (appointment) => appointment.status === "Cancelled"
  );

  const upcomingAppointments = activeAppointments.filter(
    (appointment) => {
      if (!appointment.date) return false;

      const appointmentDate = new Date(
        `${appointment.date}T${appointment.time || "23:59"}`
      );

      return appointmentDate >= new Date();
    }
  );

  const filteredAppointments = appointments
    .filter((appointment) => {
      if (activeTab === "Upcoming") {
        return upcomingAppointments.includes(appointment);
      }

      if (activeTab === "Cancelled") {
        return appointment.status === "Cancelled";
      }

      return true;
    })
    .slice()
    .sort((a, b) => {
      const dateA = new Date(
        `${a.date || "1970-01-01"}T${a.time || "00:00"}`
      );

      const dateB = new Date(
        `${b.date || "1970-01-01"}T${b.time || "00:00"}`
      );

      return dateB - dateA;
    })
    .slice(0, 6);

  const stats = [
    {
      title: "Total Appointments",
      value: appointments.length,
      description: `${upcomingAppointments.length} upcoming`,
      icon: CalendarDays,
      color: "bg-[#F2E7DE]",
      iconColor: "text-[#8C6650]",
    },
    {
      title: "Available Doctors",
      value: doctors.length,
      description: "Listed specialists",
      icon: Stethoscope,
      color: "bg-[#E8EDE5]",
      iconColor: "text-[#627A60]",
    },
    {
      title: "Pharmacy Orders",
      value: orders.length,
      description: "Demo orders recorded",
      icon: ShoppingBag,
      color: "bg-[#F0E8F1]",
      iconColor: "text-[#866A8B]",
    },
    {
      title: "Lab Bookings",
      value: labBookings.length,
      description: "Demo requests recorded",
      icon: FlaskConical,
      color: "bg-[#E5EBF0]",
      iconColor: "text-[#627C92]",
    },
  ];

  const quickActions = [
    {
      title: "Manage Doctors",
      description: "Explore specialist profiles",
      link: "/doctors",
      icon: Stethoscope,
    },
    {
      title: "Hospital Services",
      description: "View hospital facilities",
      link: "/hospital",
      icon: Activity,
    },
    {
      title: "Pharmacy",
      description: "Explore healthcare products",
      link: "/pharmacy",
      icon: ShoppingBag,
    },
    {
      title: "Laboratory",
      description: "Explore laboratory tests",
      link: "/laboratory",
      icon: FlaskConical,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      {/* Dashboard Header */}
      <section className="border-b border-[#E8D8CC] bg-[#FDFBF8]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#A89589]">
                MÉDORA Administration
              </p>

              <h1 className="font-display text-3xl text-[#342A26] sm:text-4xl lg:text-5xl">
                Management Dashboard
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#746B65] sm:text-base">
                Your overview of appointments, specialists, pharmacy orders,
                and laboratory requests.
              </p>
            </div>

            <Link
              to="/doctors"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#342A26] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#51413A]"
            >
              Explore Doctors
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Welcome Card */}
        <section className="relative overflow-hidden rounded-3xl bg-[#342A26] p-6 text-white sm:p-9 lg:p-10">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#D8C3B5]">
              Your workspace
            </p>

            <h2 className="mt-4 font-display text-2xl leading-tight sm:text-3xl lg:text-4xl">
              Thoughtful care begins with thoughtful management.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Monitor your healthcare platform's demo activity from one
              convenient dashboard.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/patient-portal"
                className="inline-flex items-center gap-2 rounded-full bg-[#D8C3B5] px-5 py-3 text-sm font-medium text-[#342A26] transition hover:bg-[#E8D8CC]"
              >
                Patient Portal
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/laboratory"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Laboratory
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -right-12 -top-16 h-64 w-64 rounded-full border border-white/10 sm:h-80 sm:w-80"
          />

          <div
            aria-hidden="true"
            className="absolute -right-4 -top-8 h-48 w-48 rounded-full border border-white/10 sm:h-64 sm:w-64"
          />
        </section>

        {/* Statistics */}
        <section>
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A89589]">
              At a glance
            </p>

            <h2 className="mt-2 font-display text-2xl text-[#342A26] sm:text-3xl">
              Platform Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.title}
                  className="rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm text-[#746B65]">
                        {stat.title}
                      </p>

                      <p className="mt-4 font-display text-4xl text-[#342A26]">
                        {stat.value}
                      </p>
                    </div>

                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${stat.color} ${stat.iconColor}`}
                    >
                      <Icon size={22} />
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-[#A89589]">
                    {stat.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Appointment Management */}
        <section className="overflow-hidden rounded-3xl border border-[#E8D8CC] bg-[#FDFBF8]">
          <div className="flex flex-col justify-between gap-5 border-b border-[#E8D8CC] p-5 sm:flex-row sm:items-center sm:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A89589]">
                Appointment records
              </p>

              <h2 className="mt-2 font-display text-2xl text-[#342A26] sm:text-3xl">
                Recent Appointments
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {["All", "Upcoming", "Cancelled"].map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                    activeTab === tab
                      ? "bg-[#342A26] text-white"
                      : "border border-[#E8D8CC] text-[#746B65] hover:bg-[#F8F4EE]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {filteredAppointments.length > 0 ? (
            <div className="divide-y divide-[#E8D8CC]">
              {filteredAppointments.map((appointment, index) => {
                const cancelled = appointment.status === "Cancelled";

                return (
                  <article
                    key={appointment.id || `${appointment.doctorId}-${index}`}
                    className="flex flex-col gap-4 p-5 transition hover:bg-[#FAF6F0] sm:flex-row sm:items-center sm:justify-between sm:p-6"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#E8D8CC] text-sm font-semibold text-[#342A26]">
                        {appointment.doctorImage ? (
                          <img
                            src={appointment.doctorImage}
                            alt={appointment.doctorName || "Doctor"}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          getInitials(appointment.doctorName || "Doctor")
                        )}
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate font-medium text-[#342A26]">
                          {appointment.doctorName || "Doctor"}
                        </h3>

                        <p className="mt-1 text-sm text-[#746B65]">
                          {appointment.specialty || "General consultation"}
                        </p>

                        <p className="mt-2 text-xs text-[#A89589]">
                          Reference: {appointment.id || "Unavailable"}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:justify-end">
                      <div className="text-sm text-[#746B65]">
                        <p className="flex items-center gap-2">
                          <CalendarDays size={15} />
                          {formatDate(appointment.date)}
                        </p>

                        <p className="mt-2 flex items-center gap-2">
                          <Clock3 size={15} />
                          {appointment.time || "Time unavailable"}
                        </p>
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ${
                          cancelled
                            ? "bg-red-50 text-red-700"
                            : "bg-green-50 text-green-700"
                        }`}
                      >
                        {cancelled ? (
                          <XCircle size={14} />
                        ) : (
                          <CircleCheckBig size={14} />
                        )}

                        {appointment.status || "Confirmed"}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="px-5 py-14 text-center sm:px-8">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F2E7DE] text-[#8C6650]">
                <CalendarDays size={25} />
              </div>

              <h3 className="mt-5 font-display text-xl text-[#342A26]">
                No appointments to display
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#746B65]">
                {activeTab === "Cancelled"
                  ? "There are no cancelled appointments in your demo records."
                  : activeTab === "Upcoming"
                    ? "There are no upcoming appointments in your demo records."
                    : "Appointments booked through MÉDORA will appear here."}
              </p>

              <Link
                to="/doctors"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#342A26] px-5 py-3 text-sm text-white transition hover:bg-[#51413A]"
              >
                Explore Doctors
                <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {appointments.length > 6 && (
            <div className="border-t border-[#E8D8CC] px-5 py-4 text-center text-xs text-[#746B65] sm:px-7">
              Showing the latest 6 records.
            </div>
          )}
        </section>

        {/* Secondary Overview */}
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Pharmacy Orders */}
          <article className="rounded-3xl border border-[#E8D8CC] bg-[#FDFBF8] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F0E8F1] text-[#866A8B]">
                <ShoppingBag size={23} />
              </div>

              <span className="rounded-full bg-[#F8F4EE] px-3 py-1 text-xs text-[#746B65]">
                Demo records
              </span>
            </div>

            <p className="mt-6 text-sm text-[#746B65]">
              Total Pharmacy Orders
            </p>

            <h3 className="mt-2 font-display text-4xl text-[#342A26]">
              {orders.length}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#746B65]">
              Orders saved through the MÉDORA checkout flow.
            </p>

            {orders.length > 0 && (
              <div className="mt-5 rounded-xl bg-[#F8F4EE] p-4">
                <p className="text-xs text-[#746B65]">
                  Most recent order
                </p>

                <p className="mt-1 font-medium text-[#342A26]">
                  {orders[orders.length - 1].id || "Order recorded"}
                </p>
              </div>
            )}

            <Link
              to="/pharmacy"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#342A26] transition hover:text-[#8C6650]"
            >
              Browse Pharmacy
              <ArrowRight size={16} />
            </Link>
          </article>

          {/* Laboratory Bookings */}
          <article className="rounded-3xl border border-[#E8D8CC] bg-[#FDFBF8] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5EBF0] text-[#627C92]">
                <FlaskConical size={23} />
              </div>

              <span className="rounded-full bg-[#F8F4EE] px-3 py-1 text-xs text-[#746B65]">
                Demo records
              </span>
            </div>

            <p className="mt-6 text-sm text-[#746B65]">
              Laboratory Requests
            </p>

            <h3 className="mt-2 font-display text-4xl text-[#342A26]">
              {labBookings.length}
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#746B65]">
              Laboratory booking requests saved in this browser.
            </p>

            {labBookings.length > 0 && (
              <div className="mt-5 rounded-xl bg-[#F8F4EE] p-4">
                <p className="text-xs text-[#746B65]">
                  Latest request
                </p>

                <p className="mt-1 font-medium text-[#342A26]">
                  {labBookings[labBookings.length - 1].testName ||
                    labBookings[labBookings.length - 1].test ||
                    labBookings[labBookings.length - 1].name ||
                    "Laboratory request recorded"}
                </p>
              </div>
            )}

            <Link
              to="/laboratory"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#342A26] transition hover:text-[#8C6650]"
            >
              Explore Laboratory
              <ArrowRight size={16} />
            </Link>
          </article>
        </section>

        {/* Quick Actions */}
        <section>
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A89589]">
              Quick navigation
            </p>

            <h2 className="mt-2 font-display text-2xl text-[#342A26] sm:text-3xl">
              Explore MÉDORA
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  to={action.link}
                  className="group flex items-center gap-4 rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D8C3B5] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F2E7DE] text-[#8C6650] transition group-hover:bg-[#342A26] group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium text-[#342A26]">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#746B65]">
                      {action.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="shrink-0 text-[#A89589] transition group-hover:translate-x-1 group-hover:text-[#342A26]"
                  />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Demo Notice */}
        <section className="flex flex-col gap-3 rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-5 sm:flex-row sm:items-start sm:p-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2E7DE] text-[#8C6650]">
            <UserRound size={20} />
          </div>

          <div>
            <h3 className="font-medium text-[#342A26]">
              Frontend demonstration
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#746B65]">
              This dashboard displays sample doctor information and records
              stored in your browser. It does not connect to a real hospital
              database, authenticate administrators, or manage records
              across multiple users or devices.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Admin;