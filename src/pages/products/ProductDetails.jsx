import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Minus,
  Plus,
  ShoppingBag,
  Star,
  ShieldCheck,
  Truck,
} from "lucide-react";

import { skincareProducts } from "../../data/skincare";

function ProductDetails() {
  const { id } = useParams();

  const product = skincareProducts.find(
    (item) => String(item.id) === String(id)
  );

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Handle an invalid product ID
  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-[#F8F4EE] px-6">
        <div className="max-w-md text-center">
          <ShoppingBag
            size={42}
            strokeWidth={1.2}
            className="mx-auto text-[#A89589]"
          />

          <h1 className="mt-6 font-display text-4xl text-[#342A26]">
            Product not found
          </h1>

          <p className="mt-4 leading-7 text-[#746B65]">
            We couldn't find this product in the MÉDORA collection.
            Explore our collection to discover something you love.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#342A26] px-6 py-3 text-sm text-white transition hover:bg-[#514039]"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    // Read the existing cart from localStorage
    const existingCart = JSON.parse(
      localStorage.getItem("medoraCart") || "[]"
    );

    // Check whether the product is already in the cart
    const existingItem = existingCart.find(
      (item) => String(item.id) === String(product.id)
    );

    let updatedCart;

    if (existingItem) {
      updatedCart = existingCart.map((item) =>
        String(item.id) === String(product.id)
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [
        ...existingCart,
        {
          ...product,
          quantity,
        },
      ];
    }

    localStorage.setItem("medoraCart", JSON.stringify(updatedCart));

    setAddedToCart(true);

    // Hide the confirmation after a short delay
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      {/* Breadcrumb */}
      <section className="medora-container pt-8">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-[#746B65] transition hover:text-[#342A26]"
        >
          <ArrowLeft size={17} />
          Back to Products
        </Link>
      </section>

      {/* Product information */}
      <section className="medora-container py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[24px] bg-[#E8D8CC]">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <ShoppingBag
                    size={64}
                    strokeWidth={1}
                    className="text-[#A89589]"
                  />
                </div>
              )}
            </div>

            <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-[#FDFBF8]/95 px-4 py-2 text-xs tracking-wide text-[#342A26]">
              MÉDORA COLLECTION
            </div>
          </div>

          {/* Product details */}
          <div className="flex flex-col justify-center">
            <p className="medora-eyebrow">{product.category}</p>

            <h1 className="mt-4 font-display text-4xl leading-tight text-[#342A26] md:text-6xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((number) => (
                  <Star
                    key={number}
                    size={16}
                    fill={number <= Math.round(product.rating) ? "#B99A67" : "none"}
                    stroke="#B99A67"
                  />
                ))}
              </div>

              <span className="text-sm font-medium text-[#342A26]">
                {product.rating}
              </span>

              <span className="text-sm text-[#746B65]">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-7 flex items-baseline gap-3">
              <span className="text-2xl font-semibold text-[#342A26]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.size && (
                <span className="text-sm text-[#746B65]">
                  · {product.size}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-8 text-[#746B65]">
              {product.description ||
                `${product.name} is part of the MÉDORA collection, thoughtfully selected to complement your personal care routine.`}
            </p>

            {/* Skin type */}
            {product.skinType && (
              <div className="mt-6 rounded-xl border border-[#E8D8CC] bg-white/60 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#A89589]">
                  Suitable for
                </p>

                <p className="mt-2 text-sm font-medium text-[#342A26]">
                  {product.skinType}
                </p>
              </div>
            )}

            {/* Quantity selector */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-[#342A26]">
                Quantity
              </p>

              <div className="inline-flex items-center rounded-full border border-[#D8C3B5] bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="flex h-12 w-12 items-center justify-center rounded-full text-[#342A26] transition hover:bg-[#F8F4EE] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Minus size={16} />
                </button>

                <span className="w-10 text-center text-sm font-medium text-[#342A26]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  aria-label="Increase quantity"
                  className="flex h-12 w-12 items-center justify-center rounded-full text-[#342A26] transition hover:bg-[#F8F4EE]"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#342A26] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#514039]"
            >
              {addedToCart ? (
                <>
                  <Check size={19} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={19} />
                  Add to Cart · ₹
                  {(product.price * quantity).toLocaleString("en-IN")}
                </>
              )}
            </button>

            {addedToCart && (
              <div
                role="status"
                className="mt-4 rounded-xl border border-[#D8C3B5] bg-white p-4 text-sm text-[#342A26]"
              >
                <p className="font-medium">
                  Successfully added to your cart.
                </p>

                <Link
                  to="/cart"
                  className="mt-2 inline-flex items-center gap-2 text-[#746B65] underline underline-offset-4 hover:text-[#342A26]"
                >
                  View Cart
                  <ArrowRight size={15} />
                </Link>
              </div>
            )}

            {/* Delivery information */}
            <div className="mt-8 grid gap-4 border-t border-[#E8D8CC] pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Truck
                  size={21}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#A89589]"
                />

                <div>
                  <p className="text-sm font-medium text-[#342A26]">
                    Delivery information
                  </p>

                  <p className="mt-1 text-xs leading-6 text-[#746B65]">
                    Delivery options can be confirmed at checkout.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={21}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-[#A89589]"
                />

                <div>
                  <p className="text-sm font-medium text-[#342A26]">
                    Thoughtful care
                  </p>

                  <p className="mt-1 text-xs leading-6 text-[#746B65]">
                    Explore product information before making your choice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional information */}
      <section className="border-t border-[#E8D8CC] bg-[#FDFBF8]">
        <div className="medora-container py-14 md:py-20">
          <p className="medora-eyebrow">THE MÉDORA APPROACH</p>

          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-[#342A26] md:text-5xl">
            Make space for a more thoughtful daily ritual.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#746B65] md:text-base">
            Personal care is personal. Explore our collection, review each
            product's details, and choose the essentials that best suit your
            routine.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#342A26] transition hover:text-[#8B6F5C]"
          >
            Continue exploring
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;