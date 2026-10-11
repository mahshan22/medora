import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Sparkles,
  Star,
  Droplets,
  ShieldCheck,
  Sun,
  Leaf,
} from "lucide-react";

import { skincareProducts } from "../../data/skincare";

const routines = [
  {
    number: "01",
    title: "Cleanse",
    description:
      "Begin with a gentle cleanse to remove everyday impurities.",
    category: "Cleanse",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Treat",
    description:
      "Explore targeted products designed for specific skincare concerns.",
    category: "Treat",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Hydrate",
    description:
      "Support your routine with moisturising and hydrating essentials.",
    category: "Hydrate",
    icon: Droplets,
  },
  {
    number: "04",
    title: "Protect",
    description:
      "Discover products designed to help protect your skin.",
    category: "Protect",
    icon: Sun,
  },
];

function Skincare() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(skincareProducts.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return skincareProducts.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search) ||
        product.skinType?.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      {/* HERO */}
      <section className="overflow-hidden">
        <div className="medora-container grid gap-12 py-14 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="medora-eyebrow">
              MÉDORA SKINCARE
            </p>

            <h1 className="mt-5 font-display text-5xl leading-tight text-[#342A26] md:text-7xl">
              Clinically
              <br />
              considered.
              <br />
              <span className="italic">Beautifully personal.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#746B65] md:text-lg">
              Discover a thoughtful collection of skincare essentials
              designed to bring simplicity, intention, and care to your
              everyday routine.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#skincare-collection"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#342A26] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#514039]"
              >
                Explore Collection
                <ArrowRight size={18} />
              </a>

              <a
                href="#skincare-routine"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#D8C3B5] px-7 py-4 text-sm font-medium text-[#342A26] transition hover:bg-white"
              >
                Discover Your Routine
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 border-t border-[#E8D8CC] pt-6">
              <div className="flex items-center gap-3">
                <Sparkles
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#A89589]"
                />

                <span className="text-sm text-[#746B65]">
                  Thoughtfully selected
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Leaf
                  size={20}
                  strokeWidth={1.5}
                  className="text-[#A89589]"
                />

                <span className="text-sm text-[#746B65]">
                  Personal care essentials
                </span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div className="aspect-[4/4.5] overflow-hidden rounded-[28px] bg-[#E8D8CC]">
              <img
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1100&q=85"
                alt="Skincare products arranged in a calm, minimalist setting"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-5 shadow-lg sm:-left-6 sm:right-8 sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A89589]">
                THE EVERYDAY EDIT
              </p>

              <h2 className="mt-2 font-display text-2xl text-[#342A26]">
                Care, without the complication.
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#746B65]">
                Build a routine that feels right for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mt-12 border-y border-[#E8D8CC] bg-[#FDFBF8] md:mt-16">
        <div className="medora-container grid gap-8 py-12 md:grid-cols-3 md:items-center md:py-16">
          <div>
            <p className="medora-eyebrow">
              OUR PHILOSOPHY
            </p>

            <h2 className="mt-3 font-display text-3xl leading-tight text-[#342A26]">
              Less noise. More intention.
            </h2>
          </div>

          <p className="text-sm leading-8 text-[#746B65] md:col-span-2 md:text-base">
            Skincare doesn't need to feel complicated. Explore products
            by their intended role in your routine, review their details,
            and choose essentials that suit your individual needs.
          </p>
        </div>
      </section>

      {/* ROUTINE */}
      <section
        id="skincare-routine"
        className="medora-container py-16 md:py-24"
      >
        <div className="max-w-2xl">
          <p className="medora-eyebrow">
            A CONSIDERED ROUTINE
          </p>

          <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] md:text-5xl">
            Four simple steps.
            <br />
            <span className="italic">Your own ritual.</span>
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#746B65] md:text-base">
            Explore different product categories and create a routine
            around your skin's needs and preferences.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {routines.map((routine) => {
            const Icon = routine.icon;

            return (
              <button
                key={routine.number}
                type="button"
                onClick={() => {
                  setSelectedCategory(routine.category);
                  document
                    .getElementById("skincare-collection")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-[20px] border border-[#E8D8CC] bg-[#FDFBF8] p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#A89589]">
                    {routine.number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.5}
                    className="text-[#A89589]"
                  />
                </div>

                <h3 className="mt-6 font-display text-2xl text-[#342A26]">
                  {routine.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#746B65]">
                  {routine.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#342A26]">
                  Explore category
                  <ArrowRight size={15} />
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* PRODUCT COLLECTION */}
      <section
        id="skincare-collection"
        className="border-y border-[#E8D8CC] bg-[#FDFBF8]"
      >
        <div className="medora-container py-16 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="medora-eyebrow">
                THE MÉDORA EDIT
              </p>

              <h2 className="mt-3 font-display text-4xl text-[#342A26] md:text-5xl">
                Skincare essentials
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#746B65] md:text-base">
                Discover products from our skincare collection and
                explore the details of each essential.
              </p>
            </div>

            <div className="relative w-full md:max-w-xs">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A89589]"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search skincare..."
                aria-label="Search skincare products"
                className="w-full rounded-full border border-[#E8D8CC] bg-white py-3.5 pl-11 pr-5 text-sm text-[#342A26] outline-none transition placeholder:text-[#A89589] focus:border-[#A89589]"
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm transition ${
                  selectedCategory === category
                    ? "border-[#342A26] bg-[#342A26] text-white"
                    : "border-[#E8D8CC] bg-[#F8F4EE] text-[#746B65] hover:border-[#A89589]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between border-b border-[#E8D8CC] pb-4">
            <p className="text-sm text-[#746B65]">
              Showing{" "}
              <span className="font-medium text-[#342A26]">
                {filteredProducts.length}
              </span>{" "}
              {filteredProducts.length === 1 ? "product" : "products"}
            </p>

            {(searchTerm || selectedCategory !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="text-sm text-[#746B65] underline underline-offset-4 hover:text-[#342A26]"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group"
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="block"
                    aria-label={`View ${product.name}`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] bg-[#E8D8CC]">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Sparkles
                            size={44}
                            strokeWidth={1.2}
                            className="text-[#A89589]"
                          />
                        </div>
                      )}

                      <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-[#FDFBF8]/95 px-3 py-2 text-xs text-[#342A26]">
                        {product.category}
                      </span>

                      <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#342A26] shadow-sm transition group-hover:bg-[#342A26] group-hover:text-white">
                        <ArrowUpRight size={19} />
                      </span>
                    </div>

                    <div className="pt-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl text-[#342A26] transition group-hover:text-[#8B6F5C]">
                          {product.name}
                        </h3>

                        <span className="shrink-0 text-sm font-semibold text-[#342A26]">
                          {formatPrice(product.price)}
                        </span>
                      </div>

                      {product.skinType && (
                        <p className="mt-2 text-sm text-[#746B65]">
                          {product.skinType}
                        </p>
                      )}

                      <div className="mt-3 flex items-center gap-2 text-sm text-[#746B65]">
                        <Star
                          size={15}
                          fill="#B99A67"
                          stroke="#B99A67"
                        />

                        <span className="font-medium text-[#342A26]">
                          {product.rating}
                        </span>

                        <span>
                          ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <Sparkles
                size={36}
                strokeWidth={1.2}
                className="mx-auto text-[#A89589]"
              />

              <h3 className="mt-4 font-display text-2xl text-[#342A26]">
                No products found
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#746B65]">
                Try another keyword or choose a different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-5 rounded-full bg-[#342A26] px-6 py-3 text-sm text-white transition hover:bg-[#514039]"
              >
                Show all products
              </button>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-full border border-[#D8C3B5] px-7 py-4 text-sm font-medium text-[#342A26] transition hover:bg-[#F8F4EE]"
            >
              View All Products
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* SKINCARE GUIDANCE */}
      <section className="medora-container py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[24px] bg-[#E8D8CC]">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=85"
              alt="Skincare treatment in a calm personal care setting"
              loading="lazy"
              className="aspect-[5/4] h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="medora-eyebrow">
              PERSONAL CARE, PERSONALISED
            </p>

            <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] md:text-5xl">
              Your skin is unique.
              <br />
              <span className="italic">Your routine can be too.</span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#746B65] md:text-base">
              Skin needs can vary with sensitivity, environment, and
              individual concerns. Review product ingredients and
              instructions, and seek professional guidance when needed.
            </p>

            <div className="mt-7 flex items-start gap-4 rounded-xl border border-[#E8D8CC] bg-[#FDFBF8] p-5">
              <ShieldCheck
                size={24}
                strokeWidth={1.5}
                className="mt-1 shrink-0 text-[#A89589]"
              />

              <div>
                <h3 className="font-medium text-[#342A26]">
                  Choose with confidence
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#746B65]">
                  Check ingredients, usage instructions, and suitability
                  before introducing a product into your routine.
                </p>
              </div>
            </div>

            <Link
              to="/doctors"
              className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-[#342A26] transition hover:text-[#8B6F5C]"
            >
              Explore Dermatology Care
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-16 md:pb-24">
        <div className="medora-container">
          <div className="rounded-[24px] bg-[#342A26] px-6 py-12 text-center md:px-12 md:py-16">
            <p className="text-xs tracking-[0.25em] text-[#D8C3B5]">
              YOUR MÉDORA RITUAL
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-[#F8F4EE] md:text-5xl">
              Thoughtful essentials for everyday care.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#D8C3B5] md:text-base">
              Explore the collection and discover products that fit
              your personal routine.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F8F4EE] px-7 py-4 text-sm font-medium text-[#342A26] transition hover:bg-white"
            >
              Explore All Products
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skincare;