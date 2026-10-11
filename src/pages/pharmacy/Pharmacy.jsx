import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Sparkles,
  HeartPulse,
  ShieldCheck,
  PackageCheck,
  Star,
} from "lucide-react";

import { skincareProducts } from "../../data/skincare";

function Pharmacy() {
  const categories = [
    {
      number: "01",
      title: "Skincare",
      description: "Thoughtful essentials for your daily skin ritual.",
      link: "/skincare",
    },
    {
      number: "02",
      title: "Wellness",
      description: "Explore everyday personal wellness essentials.",
      link: "/products",
    },
    {
      number: "03",
      title: "Healthcare Essentials",
      description: "Discover products for your everyday healthcare needs.",
      link: "/products",
    },
    {
      number: "04",
      title: "Personal Care",
      description: "Build a routine that feels personal to you.",
      link: "/products",
    },
  ];

  const featuredProducts = skincareProducts.slice(0, 4);

  return (
    <main className="overflow-hidden bg-[#F8F4EE]">
      {/* HERO */}
      <section className="medora-container py-8 sm:py-12">
        <div className="grid overflow-hidden rounded-[28px] bg-[#E8D8CC]/50 lg:grid-cols-2 lg:rounded-[36px]">
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <p className="medora-eyebrow">
              The MÉDORA pharmacy
            </p>

            <h1 className="mt-5 font-display text-4xl leading-tight text-[#342A26] sm:text-6xl lg:text-7xl">
              Everyday care,
              <br />
              <span className="italic">beautifully chosen.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#746B65] sm:text-lg">
              Discover a thoughtful collection of skincare and
              everyday wellness essentials designed to complement
              your personal care routine.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/products"
                className="medora-button medora-button-primary"
              >
                Explore Products
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/skincare"
                className="medora-button medora-button-secondary"
              >
                Discover Skincare
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-[#D8C3B5] pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F8F4EE] text-[#342A26]">
                <HeartPulse size={21} strokeWidth={1.5} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#342A26]">
                  Care for your everyday rituals
                </p>

                <p className="mt-1 text-xs text-[#746B65]">
                  Thoughtful choices for personal wellbeing.
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[350px] sm:min-h-[460px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1400&q=85"
              alt="Premium skincare products arranged for a personal care routine"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#342A26]/40 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/50 bg-[#F8F4EE]/90 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
              <p className="medora-eyebrow">
                Your daily ritual
              </p>

              <p className="mt-2 font-display text-2xl text-[#342A26] sm:text-3xl">
                Make time for yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOPPING BENEFITS */}
      <section className="medora-container py-8 sm:py-12">
        <div className="grid gap-4 sm:grid-cols-3">
          <BenefitCard
            icon={<ShieldCheck size={21} />}
            title="Thoughtful Selection"
            description="Explore a curated collection of personal care products."
          />

          <BenefitCard
            icon={<PackageCheck size={21} />}
            title="Simple Shopping"
            description="Discover products and keep track of your selections."
          />

          <BenefitCard
            icon={<HeartPulse size={21} />}
            title="Care That Fits You"
            description="Find products to complement your personal routine."
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="border-y border-[#E8D8CC]/70 bg-[#FDFBF8]">
        <div className="medora-container medora-section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="medora-eyebrow">
                Explore the collection
              </p>

              <h2 className="mt-3 font-display text-4xl text-[#342A26] sm:text-5xl">
                Find your essentials.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#746B65]">
                Explore different collections and discover products
                suited to your everyday care rituals.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#342A26] transition hover:text-[#A89589]"
            >
              View all products
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.number}
                to={category.link}
                className="medora-card group flex min-h-52 flex-col p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8D8CC]/60 text-[#342A26] transition group-hover:bg-[#342A26] group-hover:text-[#F8F4EE]">
                    <Sparkles size={20} strokeWidth={1.5} />
                  </div>

                  <span className="font-display text-sm text-[#A89589]">
                    {category.number}
                  </span>
                </div>

                <h3 className="mt-7 font-display text-2xl text-[#342A26]">
                  {category.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-[#746B65]">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#342A26]">
                  Explore collection
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="medora-container medora-section">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="medora-eyebrow">
              Selected for your routine
            </p>

            <h2 className="mt-3 font-display text-4xl text-[#342A26] sm:text-5xl">
              Featured essentials.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-[#746B65]">
              Explore selected products from our existing skincare collection.
            </p>
          </div>

          <Link
            to="/skincare"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#342A26] transition hover:text-[#A89589]"
          >
            View skincare collection
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="medora-card group flex flex-col"
            >
              <Link
                to={`/products/${product.id}`}
                className="relative block overflow-hidden bg-[#E8D8CC]/30"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/4.5] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <span className="absolute left-3 top-3 rounded-full bg-[#F8F4EE]/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#342A26]">
                  {product.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <p className="text-xs text-[#A89589]">
                  {product.skinType}
                </p>

                <Link to={`/products/${product.id}`}>
                  <h3 className="mt-2 font-display text-xl text-[#342A26] transition hover:text-[#A89589]">
                    {product.name}
                  </h3>
                </Link>

                <div className="mt-3 flex items-center gap-1.5">
                  <Star
                    size={15}
                    fill="#B99A67"
                    stroke="#B99A67"
                  />

                  <span className="text-sm font-medium text-[#342A26]">
                    {product.rating}
                  </span>

                  <span className="text-xs text-[#A89589]">
                    ({product.reviews} reviews)
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                  <p className="font-display text-xl text-[#342A26]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                  <Link
                    to={`/products/${product.id}`}
                    aria-label={`View ${product.name}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#342A26] text-[#F8F4EE] transition hover:bg-[#B99A67] hover:text-[#342A26]"
                  >
                    <ShoppingBag size={17} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link
            to="/products"
            className="medora-button medora-button-secondary"
          >
            Explore All Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      {/* SKINCARE FEATURE */}
      <section className="border-y border-[#E8D8CC]/70 bg-[#E8D8CC]/30">
        <div className="medora-container medora-section">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="relative overflow-hidden rounded-[28px] bg-[#E8D8CC]">
              <img
                src="https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=1200&q=85"
                alt="Skincare products for a daily skincare ritual"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute bottom-4 left-4 rounded-full bg-[#F8F4EE]/90 px-4 py-2 text-xs font-medium text-[#342A26] backdrop-blur-md">
                The skincare edit
              </div>
            </div>

            <div>
              <p className="medora-eyebrow">
                The skincare collection
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight text-[#342A26] sm:text-5xl">
                A little ritual.
                <br />
                <span className="italic">A moment for you.</span>
              </h2>

              <p className="mt-5 leading-8 text-[#746B65]">
                Discover cleansers, serums, moisturisers and sun
                protection from the MÉDORA skincare collection.
                Explore the available products and find options
                for your personal routine.
              </p>

              <Link
                to="/skincare"
                className="medora-button medora-button-primary mt-8"
              >
                Discover Skincare
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="medora-container py-16 sm:py-24">
        <div className="rounded-[28px] bg-[#342A26] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#D8C3B5]">
            <ShoppingBag size={25} strokeWidth={1.5} />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#D8C3B5]">
            Your everyday essentials
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-tight text-[#F8F4EE] sm:text-5xl">
            Make everyday care feel extraordinary.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#E8D8CC]">
            Explore the MÉDORA collection and discover products
            that complement your everyday routine.
          </p>

          <Link
            to="/products"
            className="medora-button mt-8 bg-[#F8F4EE] text-[#342A26] hover:bg-[#E8D8CC]"
          >
            Browse Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function BenefitCard({ icon, title, description }) {
  return (
    <article className="flex items-start gap-4 rounded-2xl border border-[#E8D8CC] bg-[#FDFBF8] p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8D8CC]/60 text-[#342A26]">
        {icon}
      </div>

      <div>
        <h3 className="font-display text-xl text-[#342A26]">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[#746B65]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default Pharmacy;