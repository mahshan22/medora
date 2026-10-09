import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { skincareProducts } from "../../data/skincare";
import ProductCard from "./ProductCard";

function SkincareFeature() {
  const [bagMessage, setBagMessage] = useState("");

  const handleAdd = (product) => {
    setBagMessage(`${product.name} added to your bag.`);

    setTimeout(() => {
      setBagMessage("");
    }, 2500);
  };

  return (
    <section className="bg-[#F8F4EE]">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">

        {/* Header */}
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#A89589]">
              MÉDORA Dermatology
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
              Clinically considered
              <br />
              skincare.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6F625B] sm:text-base">
              Formulated with dermatologists and thoughtfully developed
              with skin compatibility, efficacy and everyday comfort in mind.
            </p>

          </div>

          <a
            href="/skincare"
            className="group flex w-fit items-center gap-2 text-sm font-medium text-[#342A26]"
          >
            Explore all skincare

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8C3B5] transition-all duration-300 group-hover:border-[#B99A67] group-hover:bg-[#B99A67] group-hover:text-[#F8F4EE]">
              <ArrowUpRight size={15} />
            </span>

          </a>

        </div>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap gap-2">

          {["Cleanse", "Treat", "Hydrate", "Protect"].map(
            (category) => (
              <span
                key={category}
                className="rounded-full border border-[#D8C3B5] px-5 py-2.5 text-xs font-medium text-[#6F625B]"
              >
                {category}
              </span>
            )
          )}

        </div>

        {/* Products */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {skincareProducts.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={handleAdd}
            />
          ))}

        </div>

        {/* Message */}
        {bagMessage && (
          <div className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full bg-[#342A26] px-5 py-3 text-sm text-[#F8F4EE] shadow-2xl">

            <CheckCircle2 size={17} />

            {bagMessage}

          </div>
        )}

      </div>

    </section>
  );
}

export default SkincareFeature;