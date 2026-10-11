import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  ShieldCheck,
} from "lucide-react";

function Cart() {
  const [cartItems, setCartItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("medoraCart") || "[]");
    } catch {
      return [];
    }
  });

  // Save cart changes to localStorage
  useEffect(() => {
    localStorage.setItem("medoraCart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Increase or decrease product quantity
  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items
        .map((item) => {
          if (String(item.id) === String(id)) {
            return {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            };
          }

          return item;
        })
    );
  };

  // Remove a product
  const removeItem = (id) => {
    setCartItems((items) =>
      items.filter((item) => String(item.id) !== String(id))
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  // Empty cart screen
  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#F8F4EE]">
        <section className="medora-container flex min-h-[70vh] items-center justify-center py-20">
          <div className="max-w-lg text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#E8D8CC]">
              <ShoppingBag
                size={38}
                strokeWidth={1.2}
                className="text-[#342A26]"
              />
            </div>

            <p className="medora-eyebrow mt-8">
              YOUR MÉDORA COLLECTION
            </p>

            <h1 className="mt-4 font-display text-4xl text-[#342A26] md:text-5xl">
              Your cart is waiting
            </h1>

            <p className="mt-5 leading-8 text-[#746B65]">
              Your shopping bag is currently empty. Discover thoughtful
              skincare essentials and find something special for your
              daily routine.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#342A26] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#514039]"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>

            <div>
              <Link
                to="/"
                className="mt-6 inline-flex items-center gap-2 text-sm text-[#746B65] transition hover:text-[#342A26]"
              >
                <ArrowLeft size={16} />
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F4EE]">
      {/* Page heading */}
      <section className="border-b border-[#E8D8CC]">
        <div className="medora-container py-14 md:py-20">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-[#746B65] transition hover:text-[#342A26]"
          >
            <ArrowLeft size={17} />
            Continue Shopping
          </Link>

          <div className="mt-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="medora-eyebrow">YOUR MÉDORA COLLECTION</p>

              <h1 className="mt-3 font-display text-4xl text-[#342A26] md:text-6xl">
                Your Shopping Bag
              </h1>
            </div>

            <p className="text-sm text-[#746B65]">
              {totalItems} {totalItems === 1 ? "item" : "items"} in your bag
            </p>
          </div>
        </div>
      </section>

      {/* Cart content */}
      <section className="medora-container py-12 md:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]">
          {/* Cart products */}
          <div>
            <div className="mb-5 hidden grid-cols-[1fr_110px_100px] gap-4 border-b border-[#E8D8CC] pb-4 text-xs uppercase tracking-[0.15em] text-[#A89589] sm:grid">
              <span>Product</span>
              <span className="text-center">Quantity</span>
              <span className="text-right">Total</span>
            </div>

            <div className="divide-y divide-[#E8D8CC]">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="grid gap-5 py-7 sm:grid-cols-[1fr_110px_100px] sm:items-center sm:gap-4"
                >
                  {/* Product information */}
                  <div className="flex min-w-0 gap-4">
                    <Link
                      to={`/products/${item.id}`}
                      className="h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-[#E8D8CC] sm:h-32 sm:w-28"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition duration-300 hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <ShoppingBag
                            size={28}
                            className="text-[#A89589]"
                          />
                        </div>
                      )}
                    </Link>

                    <div className="flex min-w-0 flex-col items-start justify-center">
                      <p className="text-xs uppercase tracking-[0.15em] text-[#A89589]">
                        {item.category}
                      </p>

                      <Link
                        to={`/products/${item.id}`}
                        className="mt-2 font-display text-lg text-[#342A26] hover:text-[#8B6F5C] sm:text-xl"
                      >
                        {item.name}
                      </Link>

                      {item.size && (
                        <p className="mt-1 text-xs text-[#746B65]">
                          {item.size}
                        </p>
                      )}

                      <p className="mt-2 text-sm font-medium text-[#342A26]">
                        {formatPrice(item.price)}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#8B6F5C] transition hover:text-[#342A26]"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center justify-between sm:justify-center">
                    <span className="text-xs text-[#746B65] sm:hidden">
                      Quantity
                    </span>

                    <div className="inline-flex items-center rounded-full border border-[#D8C3B5] bg-white">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        disabled={item.quantity <= 1}
                        aria-label={`Decrease ${item.name} quantity`}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-[#342A26] transition hover:bg-[#F8F4EE] disabled:opacity-40"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-7 text-center text-sm text-[#342A26]">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label={`Increase ${item.name} quantity`}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-[#342A26] transition hover:bg-[#F8F4EE]"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Product total */}
                  <div className="flex items-center justify-between sm:justify-end">
                    <span className="text-xs text-[#746B65] sm:hidden">
                      Item total
                    </span>

                    <p className="text-sm font-semibold text-[#342A26]">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm text-[#746B65] transition hover:text-[#342A26]"
              >
                <ArrowLeft size={16} />
                Continue Shopping
              </Link>

              <button
                type="button"
                onClick={clearCart}
                className="text-sm text-[#8B6F5C] underline underline-offset-4 transition hover:text-[#342A26]"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order summary */}
          <aside className="rounded-[22px] border border-[#E8D8CC] bg-[#FDFBF8] p-6 md:p-8">
            <p className="medora-eyebrow">YOUR ORDER</p>

            <h2 className="mt-3 font-display text-3xl text-[#342A26]">
              Order Summary
            </h2>

            <div className="mt-8 space-y-5 border-b border-[#E8D8CC] pb-6">
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-[#746B65]">
                  Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
                </span>

                <span className="font-medium text-[#342A26]">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="text-[#746B65]">Delivery</span>

                <span className="text-[#746B65]">
                  Calculated at checkout
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 py-6">
              <span className="font-medium text-[#342A26]">
                Subtotal
              </span>

              <span className="font-display text-2xl text-[#342A26]">
                {formatPrice(subtotal)}
              </span>
            </div>

            <p className="mb-6 text-xs leading-6 text-[#746B65]">
              Delivery charges, if applicable, will be confirmed at checkout.
            </p>

            <Link
              to="/checkout"
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#342A26] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#514039]"
            >
              Proceed to Checkout
              <ArrowRight size={17} />
            </Link>

            <div className="mt-6 flex items-start gap-3 border-t border-[#E8D8CC] pt-5">
              <ShieldCheck
                size={20}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#A89589]"
              />

              <p className="text-xs leading-6 text-[#746B65]">
                Your cart is saved in this browser. Checkout and payment
                processing will be handled separately.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Cart;