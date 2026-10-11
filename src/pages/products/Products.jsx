import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  ArrowRight,
  Star,
  SlidersHorizontal,
} from "lucide-react";

import { skincareProducts } from "../../data/skincare";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    "All",
    ...new Set(skincareProducts.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let products = [...skincareProducts];

    // Filter by category
    if (selectedCategory !== "All") {
      products = products.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Search by product name or category
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase();

      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search) ||
          product.skinType?.toLowerCase().includes(search)
      );
    }

    // Sort products
    if (sortBy === "price-low") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      products.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      products.sort((a, b) => b.rating - a.rating);
    }

    return products;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      {/* HERO */}
      <section className="border-b border-[#E8D8CC]">
        <div className="medora-container py-16 md:py-24">
          <p className="medora-eyebrow">THE MÉDORA COLLECTION</p>

          <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h1 className="font-display text-5xl leading-tight text-[#342A26] md:text-7xl">
                Thoughtful care.
                <br />
                <span className="italic">Beautifully chosen.</span>
              </h1>
            </div>

            <div className="md:pl-10">
              <p className="max-w-lg text-base leading-8 text-[#746B65] md:text-lg">
                Discover a considered collection of skincare essentials
                designed to make your everyday care feel a little more
                intentional.
              </p>

              <div className="mt-6 flex items-center gap-3 text-sm text-[#746B65]">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span>
                  {skincareProducts.length} products in our collection
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOGUE */}
      <section className="medora-container py-12 md:py-16">
        {/* Search and sorting */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="medora-eyebrow">EXPLORE OUR EDIT</p>

            <h2 className="mt-2 font-display text-3xl text-[#342A26] md:text-4xl">
              Find your essentials
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Search */}
            <div className="flex min-w-0 items-center gap-3 rounded-full border border-[#E8D8CC] bg-white px-5 py-3 sm:w-72">
              <Search size={18} className="shrink-0 text-[#A89589]" />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-[#342A26] outline-none placeholder:text-[#A89589]"
              />
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-3 rounded-full border border-[#E8D8CC] bg-white px-5 py-3">
              <SlidersHorizontal
                size={17}
                className="shrink-0 text-[#A89589]"
              />

              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="w-full cursor-pointer bg-transparent text-sm text-[#342A26] outline-none sm:w-auto"
                aria-label="Sort products"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-8 flex gap-3 overflow-x-auto pb-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm transition-colors duration-200 ${
                  isActive
                    ? "border-[#342A26] bg-[#342A26] text-white"
                    : "border-[#E8D8CC] bg-white text-[#746B65] hover:border-[#A89589]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="mt-8 flex items-center justify-between border-b border-[#E8D8CC] pb-4">
          <p className="text-sm text-[#746B65]">
            Showing{" "}
            <span className="font-semibold text-[#342A26]">
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

        {/* Product grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <article key={product.id} className="group">
                <Link
                  to={`/products/${product.id}`}
                  className="block"
                  aria-label={`View ${product.name}`}
                >
                  {/* Product image */}
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
                        <ShoppingBag
                          size={48}
                          strokeWidth={1}
                          className="text-[#A89589]"
                        />
                      </div>
                    )}

                    <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-[#FDFBF8]/95 px-3 py-2 text-xs text-[#342A26]">
                      {product.category}
                    </span>

                    <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#342A26] shadow-sm transition-colors group-hover:bg-[#342A26] group-hover:text-white">
                      <ArrowRight size={19} />
                    </span>
                  </div>

                  {/* Product details */}
                  <div className="pt-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-[#342A26] transition-colors group-hover:text-[#8B6F5C]">
                        {product.name}
                      </h3>

                      <p className="shrink-0 text-sm font-semibold text-[#342A26]">
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>
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
          /* No results */
          <div className="py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E8D8CC]">
              <Search size={25} className="text-[#746B65]" />
            </div>

            <h3 className="mt-5 font-display text-2xl text-[#342A26]">
              No products found
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#746B65]">
              We couldn't find products matching your search. Try another
              keyword or choose a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-full bg-[#342A26] px-6 py-3 text-sm text-white transition-colors hover:bg-[#514039]"
            >
              Show all products
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM BANNER */}
      <section className="pb-16 md:pb-24">
        <div className="medora-container">
          <div className="rounded-[24px] bg-[#342A26] px-6 py-12 text-center md:px-12 md:py-16">
            <p className="text-xs tracking-[0.25em] text-[#D8C3B5]">
              YOUR DAILY RITUAL
            </p>

            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl leading-tight text-[#F8F4EE] md:text-5xl">
              Small rituals. A more thoughtful routine.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#D8C3B5] md:text-base">
              Explore skincare essentials selected to help you build a
              routine that feels personal to you.
            </p>

            <Link
              to="/skincare"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F8F4EE] px-7 py-4 text-sm font-medium text-[#342A26] transition-colors hover:bg-white"
            >
              Explore Skincare
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;