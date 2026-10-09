import {
  Star,
  Clock3,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

function DoctorCard({ doctor, onBook }) {
  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-[#D8C3B5]/60 bg-white/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(52,42,38,0.10)]">

      {/* Doctor Image */}
      <div className="relative overflow-hidden">

        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-[330px] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Availability */}
        <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#F8F4EE]/90 px-3 py-2 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-medium text-[#342A26]">
            <span className="h-2 w-2 rounded-full bg-[#8D9B83]" />
            Available
          </div>
        </div>

      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-xs uppercase tracking-[0.18em] text-[#A89589]">
          {doctor.specialty}
        </p>

        <h3 className="mt-2 font-display text-2xl text-[#342A26]">
          {doctor.name}
        </h3>

        <p className="mt-2 text-sm text-[#6F625B]">
          {doctor.qualification}
        </p>

        {/* Doctor details */}
        <div className="mt-5 flex flex-wrap gap-3">

          <div className="flex items-center gap-1.5 text-xs text-[#6F625B]">
            <Clock3 size={14} />
            {doctor.experience}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#6F625B]">
            <Star
              size={14}
              className="fill-[#B99A67] text-[#B99A67]"
            />
            {doctor.rating}
            <span className="text-[#A89589]">
              ({doctor.reviews})
            </span>
          </div>

        </div>

        {/* Fee / availability */}
        <div className="mt-5 flex items-center justify-between border-y border-[#D8C3B5]/60 py-4">

          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#A89589]">
              Consultation
            </p>

            <p className="mt-1 text-sm font-medium text-[#342A26]">
              ₹{doctor.fee.toLocaleString("en-IN")}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#A89589]">
              Next available
            </p>

            <p className="mt-1 text-xs font-medium text-[#342A26]">
              {doctor.availability}
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-3">

          <a
            href={`/doctors/${doctor.id}`}
            className="flex items-center justify-center gap-1.5 rounded-full border border-[#A89589]/60 px-4 py-3 text-xs font-medium text-[#342A26] transition-all duration-300 hover:border-[#342A26] hover:bg-[#E8D8CC]"
          >
            View Profile
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={() => onBook(doctor)}
            className="flex items-center justify-center gap-1.5 rounded-full bg-[#342A26] px-4 py-3 text-xs font-medium text-[#F8F4EE] transition-all duration-300 hover:bg-[#B99A67]"
          >
            <CalendarDays size={14} />
            Book
          </button>

        </div>

      </div>
    </article>
  );
}

export default DoctorCard;