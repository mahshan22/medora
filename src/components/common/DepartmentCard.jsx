import { ArrowUpRight } from "lucide-react";

function DepartmentCard({ department }) {
  const Icon = department.icon;

  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] border border-[#D8C3B5]/60 bg-[#F8F4EE] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#B99A67]/60 hover:bg-[#E8D8CC]/40 hover:shadow-[0_20px_50px_rgba(52,42,38,0.08)]">

      {/* Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8D8CC] text-[#342A26] transition-all duration-500 group-hover:bg-[#342A26] group-hover:text-[#F8F4EE]">

        <Icon
          size={21}
          strokeWidth={1.5}
        />

      </div>

      {/* Content */}
      <div className="mt-7">

        <h3 className="font-display text-2xl text-[#342A26]">
          {department.name}
        </h3>

        <p className="mt-3 min-h-[84px] text-sm leading-6 text-[#6F625B]">
          {department.description}
        </p>

      </div>

      {/* Link */}
      <div className="mt-6 border-t border-[#D8C3B5]/70 pt-5">

        <a
          href={`/departments/${department.id}`}
          className="flex items-center justify-between text-sm font-medium text-[#342A26]"
        >

          <span className="transition-colors duration-300 group-hover:text-[#B99A67]">
            Explore Department
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8C3B5] transition-all duration-300 group-hover:border-[#B99A67] group-hover:bg-[#B99A67] group-hover:text-[#F8F4EE]">

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
            />

          </span>

        </a>

      </div>

    </article>
  );
}

export default DepartmentCard;