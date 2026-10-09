import { departments } from "../../data/departments";
import DepartmentCard from "./DepartmentCard";

function DepartmentSection() {
  return (
    <section className="bg-[#F8F4EE]">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#A89589]">
              Specialist Departments
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
              Expert care,
              <br />
              thoughtfully connected.
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-[#6F625B] lg:pb-1">
            From everyday healthcare to specialist treatment, our
            multidisciplinary teams work together to create a more
            connected patient experience.
          </p>

        </div>

        {/* Department Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default DepartmentSection;