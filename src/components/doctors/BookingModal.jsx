import { useState } from "react";
import { X, CalendarDays, Clock3, CheckCircle2 } from "lucide-react";

function BookingModal({ doctor, onClose }) {
  const [selectedTime, setSelectedTime] = useState("");
  const [booked, setBooked] = useState(false);

  const timeSlots = [
    "10:30 AM",
    "11:30 AM",
    "2:00 PM",
    "4:30 PM",
  ];

  if (!doctor) {
    return null;
  }

  const handleBooking = () => {
    if (!selectedTime) {
      return;
    }

    setBooked(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#342A26]/50 px-5 backdrop-blur-sm">

      <div className="relative w-full max-w-lg overflow-hidden rounded-[1.75rem] bg-[#F8F4EE] shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26] transition hover:bg-[#D8C3B5]"
          aria-label="Close booking modal"
        >
          <X size={18} />
        </button>

        {!booked ? (
          <div className="p-7 sm:p-9">

            <p className="text-xs uppercase tracking-[0.25em] text-[#A89589]">
              Appointment
            </p>

            <h2 className="mt-2 font-display text-3xl text-[#342A26]">
              Book your consultation
            </h2>

            {/* Doctor */}
            <div className="mt-7 flex items-center gap-4 rounded-2xl bg-[#E8D8CC]/50 p-4">

              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-16 w-16 rounded-xl object-cover object-top"
              />

              <div>
                <p className="font-display text-xl text-[#342A26]">
                  {doctor.name}
                </p>

                <p className="mt-1 text-sm text-[#6F625B]">
                  {doctor.specialty}
                </p>
              </div>

            </div>

            {/* Date */}
            <div className="mt-7">

              <label className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#A89589]">
                <CalendarDays size={14} />
                Select date
              </label>

              <div className="mt-3 rounded-xl border border-[#D8C3B5] bg-white/40 px-4 py-3 text-sm text-[#342A26]">
                Today
              </div>

            </div>

            {/* Time */}
            <div className="mt-6">

              <label className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[#A89589]">
                <Clock3 size={14} />
                Select time
              </label>

              <div className="mt-3 grid grid-cols-2 gap-2">

                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-xl border px-4 py-3 text-sm transition-all duration-200 ${
                      selectedTime === time
                        ? "border-[#342A26] bg-[#342A26] text-[#F8F4EE]"
                        : "border-[#D8C3B5] text-[#342A26] hover:border-[#A89589] hover:bg-[#E8D8CC]/50"
                    }`}
                  >
                    {time}
                  </button>
                ))}

              </div>

            </div>

            {/* Book */}
            <button
              onClick={handleBooking}
              disabled={!selectedTime}
              className="mt-7 w-full rounded-full bg-[#342A26] px-6 py-4 text-sm font-medium text-[#F8F4EE] transition-all duration-300 hover:bg-[#B99A67] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Confirm Appointment
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-[#A89589]">
              Demo booking only. No real appointment will be created.
            </p>

          </div>
        ) : (
          <div className="p-10 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DDE5D8] text-[#5C7252]">
              <CheckCircle2 size={30} />
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[#A89589]">
              Appointment Confirmed
            </p>

            <h2 className="mt-3 font-display text-3xl text-[#342A26]">
              You're booked.
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[#6F625B]">
              Your demo appointment with {doctor.name} is scheduled for{" "}
              <strong>{selectedTime}</strong>.
            </p>

            <button
              onClick={onClose}
              className="mt-7 rounded-full bg-[#342A26] px-8 py-3 text-sm text-[#F8F4EE] transition hover:bg-[#B99A67]"
            >
              Done
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default BookingModal;