import { useState } from "react";

import {
  X,
  CalendarDays,
  Clock3,
  CheckCircle2,
  UserRound,
  Mail,
  Phone,
  IndianRupee,
  FileText,
  Copy,
} from "lucide-react";

function BookingModal({ doctor, onClose }) {
  const today = new Date();
  const minimumDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");

  const [selectedDate, setSelectedDate] = useState(minimumDate);
  const [selectedTime, setSelectedTime] = useState("");

  const [patient, setPatient] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});
  const [booking, setBooking] = useState(null);
  const [storageError, setStorageError] = useState("");

  const timeSlots = [
    "10:30 AM",
    "11:30 AM",
    "2:00 PM",
    "4:30 PM",
  ];

  if (!doctor) {
    return null;
  }

  const updatePatient = (event) => {
    const { name, value } = event.target;

    setPatient((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
      form: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!patient.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!patient.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patient.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!patient.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+]?[\d\s()-]{7,20}$/.test(patient.phone.trim())) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!selectedDate || selectedDate < minimumDate) {
      newErrors.date = "Please select today or a future date.";
    }

    if (!selectedTime) {
      newErrors.time = "Please select an appointment time.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = (event) => {
    event.preventDefault();
    setStorageError("");

    if (!validateForm()) {
      return;
    }

    const appointment = {
      id: `MED-${Date.now().toString(36).toUpperCase()}`,
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      doctorImage: doctor.image,
      consultationFee: doctor.fee,
      date: selectedDate,
      time: selectedTime,
      patient: {
        name: patient.name.trim(),
        email: patient.email.trim(),
        phone: patient.phone.trim(),
        reason: patient.reason.trim(),
      },
      status: "Confirmed",
      createdAt: new Date().toISOString(),
    };

    try {
      const existingAppointments = JSON.parse(
        localStorage.getItem("medoraAppointments") || "[]"
      );

      if (!Array.isArray(existingAppointments)) {
        throw new Error("Invalid appointment storage.");
      }

      existingAppointments.push(appointment);

      localStorage.setItem(
        "medoraAppointments",
        JSON.stringify(existingAppointments)
      );

      setBooking(appointment);
    } catch {
      setStorageError(
        "We couldn't save this booking in your browser. Please check your browser storage settings and try again."
      );
    }
  };

  const formatDate = (dateString) => {
    return new Date(`${dateString}T12:00:00`).toLocaleDateString(
      "en-IN",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#D8C3B5] bg-white px-4 py-3 text-sm text-[#342A26] outline-none transition placeholder:text-[#A89589] focus:border-[#342A26] focus:ring-2 focus:ring-[#D8C3B5]/40";

  const labelClass =
    "flex items-center gap-2 text-sm font-medium text-[#342A26]";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#342A26]/60 px-3 py-4 backdrop-blur-sm sm:px-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] bg-[#F8F4EE] shadow-2xl"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26] transition hover:bg-[#D8C3B5]"
          aria-label="Close booking modal"
        >
          <X size={19} />
        </button>

        {!booking ? (
          <div className="p-5 sm:p-8">
            <p className="medora-eyebrow">MÉDORA appointments</p>

            <h2
              id="booking-title"
              className="mt-3 pr-10 font-display text-3xl text-[#342A26] sm:text-4xl"
            >
              Book your consultation
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#746B65]">
              Choose a convenient date and time, then enter your details
              to complete this demo booking.
            </p>

            {/* Doctor information */}
            <div className="mt-6 flex items-center gap-4 rounded-2xl border border-[#E8D8CC] bg-white p-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-16 w-16 shrink-0 rounded-xl object-cover object-top"
              />

              <div className="min-w-0 flex-1">
                <p className="font-display text-lg text-[#342A26] sm:text-xl">
                  {doctor.name}
                </p>

                <p className="mt-1 text-sm text-[#746B65]">
                  {doctor.specialty}
                </p>

                <p className="mt-1 text-sm font-semibold text-[#342A26]">
                  ₹{doctor.fee.toLocaleString("en-IN")} consultation fee
                </p>
              </div>
            </div>

            <form onSubmit={handleBooking} noValidate>
              {/* Date */}
              <div className="mt-7">
                <label htmlFor="appointment-date" className={labelClass}>
                  <CalendarDays size={17} />
                  Appointment date
                </label>

                <input
                  id="appointment-date"
                  type="date"
                  min={minimumDate}
                  value={selectedDate}
                  onChange={(event) => {
                    setSelectedDate(event.target.value);
                    setErrors((previous) => ({
                      ...previous,
                      date: "",
                      form: "",
                    }));
                  }}
                  className={inputClass}
                />

                {errors.date && (
                  <p className="mt-2 text-sm text-red-700">
                    {errors.date}
                  </p>
                )}
              </div>

              {/* Time slots */}
              <div className="mt-6">
                <p className={labelClass}>
                  <Clock3 size={17} />
                  Choose a time slot
                </p>

                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => {
                        setSelectedTime(time);
                        setErrors((previous) => ({
                          ...previous,
                          time: "",
                          form: "",
                        }));
                      }}
                      aria-pressed={selectedTime === time}
                      className={`rounded-xl border px-2 py-3 text-sm transition ${
                        selectedTime === time
                          ? "border-[#342A26] bg-[#342A26] text-white"
                          : "border-[#D8C3B5] bg-white text-[#342A26] hover:border-[#A89589]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {errors.time && (
                  <p className="mt-2 text-sm text-red-700">
                    {errors.time}
                  </p>
                )}
              </div>

              {/* Patient information */}
              <div className="mt-8 border-t border-[#E8D8CC] pt-6">
                <p className="medora-eyebrow">Patient information</p>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {/* Full name */}
                  <div className="sm:col-span-2">
                    <label htmlFor="patient-name" className={labelClass}>
                      <UserRound size={17} />
                      Full name *
                    </label>

                    <input
                      id="patient-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={100}
                      value={patient.name}
                      onChange={updatePatient}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />

                    {errors.name && (
                      <p className="mt-2 text-sm text-red-700">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="patient-email" className={labelClass}>
                      <Mail size={17} />
                      Email address *
                    </label>

                    <input
                      id="patient-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      value={patient.email}
                      onChange={updatePatient}
                      placeholder="you@example.com"
                      className={inputClass}
                    />

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="patient-phone" className={labelClass}>
                      <Phone size={17} />
                      Phone number *
                    </label>

                    <input
                      id="patient-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={20}
                      value={patient.phone}
                      onChange={updatePatient}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />

                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-700">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Consultation reason */}
                  <div className="sm:col-span-2">
                    <label htmlFor="patient-reason" className={labelClass}>
                      <FileText size={17} />
                      Reason for consultation
                    </label>

                    <textarea
                      id="patient-reason"
                      name="reason"
                      rows={3}
                      maxLength={500}
                      value={patient.reason}
                      onChange={updatePatient}
                      placeholder="Briefly describe what you'd like to discuss (optional)"
                      className={`${inputClass} resize-y`}
                    />

                    <p className="mt-1 text-right text-xs text-[#A89589]">
                      {patient.reason.length}/500
                    </p>
                  </div>
                </div>
              </div>

              {/* Save error */}
              {storageError && (
                <p
                  role="alert"
                  className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800"
                >
                  {storageError}
                </p>
              )}

              {errors.form && (
                <p role="alert" className="mt-3 text-sm text-red-700">
                  {errors.form}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="medora-button medora-button-primary mt-7 w-full"
              >
                Confirm Appointment
                <CalendarDays size={17} />
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[#A89589]">
                Frontend demo only. No real appointment is created, and
                no hospital is notified.
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation screen */
          <div className="p-6 text-center sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE5D8] text-[#5C7252]">
              <CheckCircle2 size={32} />
            </div>

            <p className="medora-eyebrow mt-6">
              Demo booking complete
            </p>

            <h2
              id="booking-title"
              className="mt-3 font-display text-3xl text-[#342A26] sm:text-4xl"
            >
              Thank you, {booking.patient.name.split(" ")[0]}.
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#746B65]">
              Your demo appointment details have been saved in this
              browser.
            </p>

            {/* Booking reference */}
            <div className="mt-7 rounded-2xl border border-[#D8C3B5] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-[#A89589]">
                Booking reference
              </p>

              <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                <p className="font-semibold tracking-wider text-[#342A26]">
                  {booking.id}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    if (navigator.clipboard?.writeText) {
                      navigator.clipboard.writeText(booking.id).catch(() => {});
                    }
                  }}
                  className="rounded-full p-2 text-[#746B65] transition hover:bg-[#F8F4EE]"
                  aria-label="Copy booking reference"
                  title="Copy booking reference"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>

            {/* Appointment summary */}
            <div className="mt-5 space-y-4 rounded-2xl bg-[#E8D8CC]/40 p-5 text-left">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#A89589]">
                  Doctor
                </p>

                <p className="mt-1 font-medium text-[#342A26]">
                  {booking.doctorName}
                </p>

                <p className="text-sm text-[#746B65]">
                  {booking.specialty}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#A89589]">
                    Date
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#342A26]">
                    {formatDate(booking.date)}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-[#A89589]">
                    Time
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#342A26]">
                    {booking.time}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#D8C3B5] pt-4">
                <p className="text-xs uppercase tracking-wider text-[#A89589]">
                  Consultation fee
                </p>

                <p className="mt-1 flex items-center gap-1 font-display text-2xl text-[#342A26]">
                  <IndianRupee size={20} />
                  {booking.consultationFee.toLocaleString("en-IN")}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="medora-button medora-button-primary mt-7 w-full"
            >
              Done
              <CheckCircle2 size={17} />
            </button>

            <p className="mt-4 text-xs leading-5 text-[#A89589]">
              This is a demonstration only, not a real medical appointment
              confirmation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;